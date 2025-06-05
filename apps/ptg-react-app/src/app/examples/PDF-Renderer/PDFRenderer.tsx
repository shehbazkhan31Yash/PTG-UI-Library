import './PDFRenderer.css';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import CodeIcon from '@mui/icons-material/Code';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  FileX,
  Maximize,
  Minimize,
  FileText,
  RefreshCw,
  Upload,
} from 'lucide-react';
import { ToolButton } from './ToolButton';

// Interface for PDF renderer props
interface IPDFRendererProps {
  file: string | File | null;
  className?: string;
  showControls?: boolean;
  showToolbar?: boolean;
  showPagination?: boolean;
  initialScale?: number;
  maxScale?: number;
  minScale?: number;
  height?: string;
  enableDownload?: boolean;
  enableFullscreen?: boolean;
  enableRotation?: boolean;
  onLoadSuccess?: (numPages: number) => void;
  onLoadError?: (error: any) => void;
  onPageChange?: (page: number) => void;
  onZoomChange?: (scale: number) => void;
  customToolbarActions?: React.ReactNode;
}

// Interface for PDF renderer state
interface IPDFRendererState {
  numPages: number | null;
  pageNumber: number;
  scale: number;
  rotation: number;
  loading: boolean;
  error: string | null;
  pdfDoc: any;
  pdfjsLoaded: boolean;
  isFullscreen: boolean;
  fileName: string;
  fileSize: string;
}

// Spinner component
const Spinner = () => <div className="pdf-renderer-spinner" />;

const PtgUIPDFRenderer: React.FC<IPDFRendererProps> = ({
  file,
  className = '',
  showControls = true,
  showToolbar = true,
  showPagination = true,
  initialScale = 1.0,
  maxScale = 3.0,
  minScale = 0.5,
  height = '900px',
  enableDownload = true,
  enableFullscreen = true,
  enableRotation = true,
  onLoadSuccess,
  onLoadError,
  onPageChange,
  onZoomChange,
  customToolbarActions,
}) => {
  const [state, setState] = useState<IPDFRendererState>({
    numPages: null,
    pageNumber: 1,
    scale: initialScale,
    rotation: 0,
    loading: true,
    error: null,
    pdfDoc: null,
    pdfjsLoaded: false,
    isFullscreen: false,
    fileName: '',
    fileSize: '',
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const renderTaskRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load PDF.js
  useEffect(() => {
    if ((window as any).pdfjsLib) {
      setState((prev) => ({ ...prev, pdfjsLoaded: true }));
      return;
    }
    const handleScriptLoad = () => {
      setTimeout(setWorkerAndFlag, 100);
    };

    const setWorkerAndFlag = () => {
      if ((window as any).pdfjsLib) {
        (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
        setState((prev) => ({ ...prev, pdfjsLoaded: true }));
      }
    };
    const handleScriptError = () => {
      setState((prev) => ({
        ...prev,
        error: 'Failed to load PDF.js library',
        loading: false,
      }));
    };
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
    script.onload = handleScriptLoad;
    script.onerror = handleScriptError;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Get file info
  const getFileInfo = useCallback((file: string | File) => {
    if (file instanceof File) {
      return {
        fileName: file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      };
    } else {
      const fileName = file.split('/').pop() || 'document.pdf';
      return {
        fileName,
        fileSize: 'Unknown size',
      };
    }
  }, []);

  // Load PDF document
  useEffect(() => {
    if (!file || !state.pdfjsLoaded || !(window as any).pdfjsLib) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    const fileInfo = getFileInfo(file);
    setState((prev) => ({ ...prev, ...fileInfo }));

    const fileData = file instanceof File ? URL.createObjectURL(file) : file;
    const loadingTask = (window as any).pdfjsLib.getDocument(fileData);

    loadingTask.promise
      .then((pdf: any) => {
        setState((prev) => ({
          ...prev,
          pdfDoc: pdf,
          numPages: pdf.numPages,
          pageNumber: 1,
          loading: false,
        }));
        onLoadSuccess?.(pdf.numPages);
      })
      .catch((err: any) => {
        setState((prev) => ({
          ...prev,
          error: err.message ?? 'Failed to load PDF',
          loading: false,
        }));
        onLoadError?.(err);
      });

    return () => {
      if (loadingTask) {
        try {
          loadingTask.destroy();
        } catch (e) {
          // Ignore cleanup errors
          console.error('Error destroying loadingTask:', e);
        }
      }
      if (file instanceof File) {
        URL.revokeObjectURL(fileData);
      }
    };
  }, [file, state.pdfjsLoaded, onLoadSuccess, onLoadError, getFileInfo]);

  // Render current page
  const renderPage = useCallback(async () => {
    if (!state.pdfDoc || !canvasRef.current) return;

    if (renderTaskRef.current) {
      try {
        const currentTask = renderTaskRef.current as any;
        if (currentTask && typeof currentTask.cancel === 'function') {
          currentTask.cancel();
        }
      } catch (e) {
        // Ignore cancellation errors
        console.error('Error cancelling renderTask:', e);
      }
    }

    try {
      const page = await state.pdfDoc.getPage(state.pageNumber);
      const canvas = canvasRef.current;
      const context = canvas?.getContext('2d');

      if (!canvas || !context) return;

      let viewport = page.getViewport({ scale: state.scale });

      if (state.rotation !== 0) {
        viewport = page.getViewport({
          scale: state.scale,
          rotation: state.rotation,
        });
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;
      context.clearRect(0, 0, canvas.width, canvas.height);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      renderTaskRef.current = renderTask;
      await renderTask.promise;
    } catch (err: any) {
      if (
        err &&
        typeof err === 'object' &&
        'name' in err &&
        err.name !== 'RenderingCancelledException'
      ) {
        console.error('Error rendering page:', err);
      }
    }
  }, [state.pdfDoc, state.pageNumber, state.scale, state.rotation]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  // Event handlers
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (state.numPages ?? 1)) {
      setState((prev) => ({ ...prev, pageNumber: page }));
      onPageChange?.(page);
    }
  };

  const handleZoomIn = () => {
    const newScale = Math.min(state.scale + 0.25, maxScale);
    setState((prev) => ({ ...prev, scale: newScale }));
    onZoomChange?.(newScale);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(state.scale - 0.25, minScale);
    setState((prev) => ({ ...prev, scale: newScale }));
    onZoomChange?.(newScale);
  };

  const handleRotate = () => {
    setState((prev) => ({ ...prev, rotation: (prev.rotation + 90) % 360 }));
  };

  const handleFullscreen = () => {
    setState((prev) => ({ ...prev, isFullscreen: !prev.isFullscreen }));
  };

  const handleDownload = () => {
    if (typeof file === 'string') {
      const link = document.createElement('a');
      link.href = file;
      link.download = state.fileName;
      link.click();
    } else if (file instanceof File) {
      const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  // Error state
  if (state.error) {
    return (
      <div className={`pdf-renderer-error bg-white border-secondary ${className}`}>
        <div className="pdf-renderer-error-content">
          <div className="pdf-renderer-error-icon text-danger">
            <FileX className="w-full h-full" />
          </div>
          <h3 className="text-light">Failed to load PDF</h3>
          <p className="text-muted">{state.error}</p>
          <button className="btn btn-outline-light" onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`pdf-renderer-container bg-dark border-secondary ${
        state.isFullscreen ? 'fullscreen' : ''
      } ${className}`}
      style={{ height: state.isFullscreen ? '100vh' : height }}
    >
      {/* Main Toolbar */}
      {showToolbar && (
        <div className="pdf-renderer-toolbar bg-dark border-bottom border-secondary">
          {/* Left Section - File Info */}
          <div className="pdf-renderer-toolbar-left">
            <div className="pdf-renderer-file-icon">
              <FileText className="w-4 h-4 text-danger" style={{ color: '#dc3545' }} />
            </div>
            <div className="pdf-renderer-file-info">
              <h3 className="text-light mb-0">{state.fileName}</h3>
              <p className="text-muted mb-0 small">{state.fileSize}</p>
            </div>
          </div>

          {/* Center Section - Page Navigation */}
          {showControls && (
            <div className="pdf-renderer-page-nav">
              <ToolButton
                onClick={() => handlePageChange(state.pageNumber - 1)}
                disabled={state.pageNumber <= 1}
                title="Previous Page"
                className="rounded-left btn-outline-secondary"
              >
                <ChevronLeft className="w-4 h-4 text-light" />
              </ToolButton>

              <div className="pdf-renderer-page-counter bg-secondary text-light px-3 py-2">
                <span className="current-page text-light">{state.pageNumber}</span>
                <span className="separator text-muted mx-1">/</span>
                <span className="total-pages text-light">{state.numPages ?? '?'}</span>
              </div>

              <ToolButton
                onClick={() => handlePageChange(state.pageNumber + 1)}
                disabled={state.pageNumber >= (state.numPages ?? 1)}
                title="Next Page"
                className="rounded-right btn-outline-secondary"
              >
                <ChevronRight className="w-4 h-4 text-light" />
              </ToolButton>
            </div>
          )}

          {/* Right Section - Actions */}
          <div className="pdf-renderer-toolbar-right">
            {/* Zoom Controls */}
            <div className="pdf-renderer-zoom-controls">
              <ToolButton
                onClick={handleZoomOut}
                disabled={state.scale <= minScale}
                title="Zoom Out"
                className="rounded-left btn-outline-secondary"
              >
                <ZoomOut className="w-4 h-4 text-light" />
              </ToolButton>

              <div className="pdf-renderer-zoom-display bg-secondary text-light px-3 py-2">
                {Math.round(state.scale * 100)}%
              </div>

              <ToolButton
                onClick={handleZoomIn}
                disabled={state.scale >= maxScale}
                title="Zoom In"
                className="rounded-right btn-outline-secondary"
              >
                <ZoomIn className="w-4 h-4 text-light" />
              </ToolButton>
            </div>

            {/* Tool Actions */}
            {enableRotation && (
              <ToolButton onClick={handleRotate} title="Rotate" className="btn-outline-secondary">
                <RotateCw className="w-4 h-4 text-light" />
              </ToolButton>
            )}

            {customToolbarActions}

            {enableDownload && (
              <ToolButton onClick={handleDownload} title="Download PDF" className="btn-outline-secondary">
                <Download className="w-4 h-4 text-light" />
              </ToolButton>
            )}

            {enableFullscreen && (
              <ToolButton
                onClick={handleFullscreen}
                title={state.isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                className="btn-outline-secondary"
              >
                {state.isFullscreen ? (
                  <Minimize className="w-4 h-4 text-light" />
                ) : (
                  <Maximize className="w-4 h-4 text-light" />
                )}
              </ToolButton>
            )}
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      <div
        className={`pdf-renderer-viewer bg-dark ${
          state.isFullscreen ? 'fullscreen' : ''
        }`}
      >
        {state.loading && (
          <div className="pdf-renderer-loading bg-dark text-light">
            <Spinner />
            <div>
              <h3 className="text-light">
                {state.pdfjsLoaded
                  ? 'Loading PDF...'
                  : 'Initializing PDF viewer...'}
              </h3>
              <p className="text-muted">Please wait</p>
            </div>
          </div>
        )}

        {!state.loading && !state.error && (
          <div
            className={`pdf-canvas-container bg-dark ${
              state.isFullscreen ? 'fullscreen' : ''
            }`}
          >
            <canvas
              ref={canvasRef}
              className="pdf-canvas border border-secondary"
              style={{
                display: state.loading ? 'none' : 'block',
              }}
            />
          </div>
        )}
      </div>

      {/* Page Thumbnails/Quick Navigation */}
      {showPagination &&
        state.numPages &&
        state.numPages > 1 &&
        !state.loading && (
          <div className="pdf-renderer-pagination bg-dark border-top border-secondary">
            <div className="pdf-renderer-pagination-container">
              <div className="pdf-renderer-pagination-buttons">
                {Array.from(
                  { length: Math.min(state.numPages, 10) },
                  (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`pdf-renderer-page-button btn ${
                          state.pageNumber === pageNum 
                            ? 'btn-primary active' 
                            : 'btn-outline-secondary text-light'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                )}
                {state.numPages > 10 && (
                  <span className="pdf-renderer-ellipsis text-muted">...</span>
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

// Demo Component with Enhanced Dark UI
const PDFRendererDemo = () => {
  const [selectedFile, setSelectedFile] = useState<string | File | null>(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setPdfUrl('');
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleUrlSubmit = async () => {
    if (pdfUrl.trim()) {
      setIsLoading(true);
      try {
        // Basic URL validation
        new URL(pdfUrl);
        setSelectedFile(pdfUrl);
        setPdfUrl('');
      } catch {
        alert('Please enter a valid URL');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const loadSamplePDF = () => {
    const sampleUrl =
      'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
    setSelectedFile(sampleUrl);
    setPdfUrl('');
  };

  const componentCode = `
import { PtgUIPDFRenderer } from '@ptg-ui/react';
import "@ptg-ui/react/lib/styles/index.css";

interface IPDFRendererProps {
  file: string | File | null;
  showControls?: boolean;
  showToolbar?: boolean;
  showPagination?: boolean;
  enableDownload?: boolean;
  enableFullscreen?: boolean;
  enableRotation?: boolean;
  onLoadSuccess?: (numPages: number) => void;
  onPageChange?: (page: number) => void;
  onZoomChange?: (scale: number) => void;
}`;

  const htmlCode = `
<PtgUIPDFRenderer
  file={pdfFile}
  height="900px"
  showToolbar={true}
  enableDownload={true}
  enableFullscreen={true}
  onLoadSuccess={(pages) => 
    console.log(\`Loaded \${pages} pages\`)
  }
  onPageChange={(page) => 
    console.log(\`Page: \${page}\`)
  }
/>`;

  return (
    <section className="card-section-two bg-dark text-light rounded pt-2 pb-2 mt-2 border border-secondary">
      <div className="pdf-renderer-demo-container">
        <div className="row">
          {/* Header Section */}
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading text-light">PDF Renderer</h5>
          </div>

          <div className="col-2 mb-2 mt-1">
            <CodeIcon
              onClick={() => setShowCode(!showCode)}
              fontSize="large"
              className="show-code-icon text-light"
              style={{ cursor: 'pointer', color: '#ffffff' }}
            />
          </div>
          {showCode && (
            <ShowCodeComponent
              componentCode={componentCode}
              htmlCode={htmlCode}
            />
          )}

          <div className="pdf-renderer-load-controls bg-dark p-4 rounded border border-secondary">
            <h2 className="text-light mb-4">Load PDF Document</h2>

            <div className="pdf-renderer-grid">
              {/* File Upload */}
              <div className="pdf-renderer-form-group mb-4">
                <label htmlFor="pdf-file-input" className="form-label text-light">Upload PDF File</label>
                <input
                  id="pdf-file-input"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="form-control bg-secondary text-light border-secondary"
                />
              </div>

              {/* URL Input */}
              <div className="pdf-renderer-form-group mb-4">
                <label htmlFor="pdf-url-input" className="form-label text-light">Or Load from URL</label>
                <div className="input-group">
                  <input
                    id="pdf-url-input"
                    type="url"
                    placeholder="https://example.com/document.pdf"
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    className="form-control bg-secondary text-light border-secondary"
                  />
                  <button
                    onClick={handleUrlSubmit}
                    disabled={isLoading || !(pdfUrl ?? '').trim()}
                     className="btn btn-light text-dark fw-semibold"
                  >
                    {isLoading ? 'Loading...' : 'Load'}
                  </button>
                </div>
              </div>
            </div>

            {/* Sample PDF Button */}
            <div className="pdf-renderer-sample-section text-center">
              <button
                onClick={loadSamplePDF}
                className="btn btn-success mb-2"
              >
                Try Sample PDF
              </button>
              <p className="text-muted">
                Load a sample PDF to test the component features
              </p>
            </div>
          </div>

          {/* PDF Renderer */}
          {selectedFile ? (
            <div className="mt-4">
              <PtgUIPDFRenderer
                file={selectedFile}
                height="900px"
                showControls={true}
                showToolbar={true}
                showPagination={true}
                enableDownload={true}
                enableFullscreen={true}
                enableRotation={true}
                onLoadSuccess={(numPages) =>
                  console.log(`PDF loaded with ${numPages} pages`)
                }
                onLoadError={(error) => console.error('PDF load error:', error)}
                onPageChange={(page) => console.log(`Page changed to ${page}`)}
                onZoomChange={(scale) =>
                  console.log(`Zoom changed to ${Math.round(scale * 100)}%`)
                }
                customToolbarActions={
                  <ToolButton
                    onClick={() => window.location.reload()}
                    title="Refresh"
                    className="btn-outline-secondary"
                  >
                    <RefreshCw className="w-4 h-4 text-light" />
                  </ToolButton>
                }
              />
            </div>
          ) : (
            <div className="pdf-renderer-no-file bg-dark border border-secondary rounded p-5 mt-4 text-center">
              <div className="pdf-renderer-no-file-content">
                <div className="pdf-renderer-no-file-icon text-muted mb-3">
                  <Upload className="w-full h-full" style={{ width: '64px', height: '64px' }} />
                </div>
                <h3 className="text-light">No PDF selected</h3>
                <p className="text-muted">Upload a file or load from URL to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PDFRendererDemo;