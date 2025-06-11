import React, { useState, useRef, useEffect } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import {
  Share2,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Mail,
  X,
  Check,
  Copy,
  FileText,
  Image,
  Download,
  Upload,
} from 'lucide-react';
import './SocialMediaShare.css';
import { ToolButton } from './ToolButton';

/**
 * Interface representing content to be shared on social media platforms
 */
type ContentType = 'text' | 'image' | 'document' | 'url';

interface ShareContent {
  type: ContentType;
  title: string;
  description?: string;
  url?: string;
  file?: File;
  text?: string;
  hashtags?: string[];
}

interface ISocialSharingProps {
  content: ShareContent;
  className?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  position?: 'bottom' | 'top' | 'left' | 'right';
  showLabels?: boolean;
  enableCopyLink?: boolean;
  enableEmail?: boolean;
  enableDownload?: boolean;
  customPlatforms?: SocialPlatform[];
  onShare?: (platform: string, success: boolean, content: ShareContent) => void;
}

interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
  color: string;
  shareUrl: (content: ShareContent) => string;
  label: string;
  supportedTypes: ContentType[];
}

const defaultPlatforms: SocialPlatform[] = [
  {
    name: 'whatsapp',
    icon: <MessageCircle className="w-5 h-5" />,
    color: '#25D366',
    label: 'WhatsApp',
    supportedTypes: ['text', 'url', 'document'],
    shareUrl: (content) => {
      const title = content.title;
      const description = content.description || '';
      const url = content.url ? '\n' + content.url : '';
      const text = content.text || (title + '\n' + description + url);
      return 'https://wa.me/?text=' + encodeURIComponent(text);
    },
  },
  {
    name: 'twitter',
    icon: <Twitter className="w-5 h-5" />,
    color: '#1DA1F2',
    label: 'Twitter',
    supportedTypes: ['text', 'url', 'document'],
    shareUrl: (content) => {
      const text = content.text ?? content.title;
      const hashtags = content.hashtags?.join(',') ?? '';
      const url = content.url ?? '';
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
    },
  },
  {
    name: 'linkedin',
    icon: <Linkedin className="w-5 h-5" />,
    color: '#0077B5',
    label: 'LinkedIn',
    supportedTypes: ['text', 'url', 'document'],
    shareUrl: (content) => {
      const url = content.url || '';
      const title = content.title;
      const summary = content.description || content.text || '';
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    },
  },
  {
    name: 'facebook',
    icon: <Facebook className="w-5 h-5" />,
    color: '#1877F2',
    label: 'Facebook',
    supportedTypes: ['text', 'url', 'image', 'document'],
    shareUrl: (content) => {
      const url = content.url || '';
      const quote = content.text || content.title;
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`;
    },
  },
];

const SocialSharingComponent: React.FC<ISocialSharingProps> = ({
  content,
  className = '',
  buttonText = 'Share',
  buttonVariant = 'primary',
  position = 'bottom',
  showLabels = true,
  enableCopyLink = true,
  enableEmail = true,
  enableDownload = true,
  customPlatforms,
  onShare,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const platforms = customPlatforms ?? defaultPlatforms;
  const supportedPlatforms = platforms.filter((platform) =>
    platform.supportedTypes.includes(content.type)
  );

  const emailPlatform: SocialPlatform = {
    name: 'email',
    icon: <Mail className="w-5 h-5" />,
    color: '#6B7280',
    label: 'Email',
    supportedTypes: ['text', 'url', 'document'],
    shareUrl: (content: ShareContent) => {
      const subject = content.title;
      const body = content.text || `${content.description || ''}\n\n${content.url || ''}`;
      return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
  };

  const allPlatforms = [
    ...supportedPlatforms,
    ...(enableEmail ? [emailPlatform] : []),
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []); // Fixed dependency array

  const handleShare = async (platform: SocialPlatform) => {
    try {
      // Try using the Web Share API if available and content is shareable
      if (navigator.share && (content.type === 'text' || content.type === 'url')) {
        const shareData: ShareData = {
          title: content.title,
          text: content.text || content.description,
          url: content.url,
        };
        await navigator.share(shareData);
        onShare?.(platform.name, true, content);
        setIsOpen(false);
        return;
      }
    } catch (error) {
      console.log('Web Share API failed, falling back to URL sharing', error);
      // Gracefully fall back to URL sharing - this is expected behavior
    }

    try {
      const shareUrl = platform.shareUrl(content);
      window.open(shareUrl, '_blank', 'width=600,height=400');
      onShare?.(platform.name, true, content);
      setIsOpen(false);
    } catch (error) {
      console.error(`Error sharing to ${platform.name}:`, error);
      onShare?.(platform.name, false, content);
    }
  };

  const handleCopy = async () => {
    try {
      let textToCopy = content.title;
      if (content.description) {
        textToCopy += '\n' + content.description;
      }
      if (content.url) {
        textToCopy += '\n' + content.url;
      }
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      onShare?.('copy', true, content);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying content:', error);
      onShare?.('copy', false, content);
    }
  };

  const handleDownload = () => {
    if (content.file) {
      const url = URL.createObjectURL(content.file);
      const link = document.createElement('a');
      link.href = url;
      link.download = content.file.name;
      document.body.appendChild(link); // Add to DOM
      link.click();
      document.body.removeChild(link); // Remove from DOM
      URL.revokeObjectURL(url);
      onShare?.('download', true, content);
    } else if (content.url) {
      const link = document.createElement('a');
      link.href = content.url;
      link.download = content.title;
      document.body.appendChild(link); // Add to DOM
      link.click();
      document.body.removeChild(link); // Remove from DOM
      onShare?.('download', true, content);
    }
  };

  const getContentIcon = () => {
    switch (content.type) {
      case 'text':
        return <FileText className="w-4 h-4" />;
      case 'image':
        return <Image className="w-4 h-4" />;
      case 'document':
        return <FileText className="w-4 h-4" />;
      case 'url':
        return <Link2 className="w-4 h-4" />;
      default:
        return <Share2 className="w-4 h-4" />;
    }
  };

  const positionClasses = {
    bottom: 'social-share-dropdown-bottom',
    top: 'social-share-dropdown-top',
    left: 'social-share-dropdown-left',
    right: 'social-share-dropdown-right',
  };

  return (
    <div className={`social-share-container ${className}`} ref={dropdownRef}>
      <ToolButton
        onClick={() => setIsOpen(!isOpen)}
        variant={buttonVariant}
        title={`Share ${content.type}: ${content.title}`}
        className="social-share-btn-gap"
      >
        {getContentIcon()}
        {buttonText}
      </ToolButton>
      {isOpen && (
        <div className={`social-share-dropdown ${positionClasses[position]}`}>
          <div className="social-share-dropdown-header">
            <div className="social-share-dropdown-header-content">
              <div>
                <h6 className="social-share-dropdown-title">Share Content</h6>
                <p className="social-share-dropdown-subtitle">
                  {content.type}: {content.title}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="social-share-close-btn"
                type="button"
                aria-label="Close share dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="social-share-platforms">
            {allPlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform)}
                className="social-share-platform-btn"
                type="button"
                aria-label={`Share to ${platform.label}`}
              >
                <div
                  className="social-share-platform-icon"
                  style={{
                    backgroundColor: `${platform.color}20`,
                    color: platform.color,
                  }}
                >
                  {platform.icon}
                </div>
                {showLabels && (
                  <span className="social-share-platform-label">
                    {platform.label}
                  </span>
                )}
              </button>
            ))}
            <div className="social-share-divider" />
            {enableCopyLink && (
              <button
                onClick={handleCopy}
                className="social-share-action-btn"
                type="button"
                aria-label={copied ? 'Content copied' : 'Copy content'}
              >
                <div className="social-share-copy-icon">
                  {copied ? (
                    <Check className="w-5 h-5 social-share-copy-icon-success" />
                  ) : (
                    <Copy className="w-5 h-5 social-share-copy-icon-default" />
                  )}
                </div>
                {showLabels && (
                  <span className="social-share-platform-label">
                    {copied ? 'Copied!' : 'Copy Content'}
                  </span>
                )}
              </button>
            )}
            {enableDownload && (content.file || content.url) && (
              <button
                onClick={handleDownload}
                className="social-share-action-btn"
                type="button"
                aria-label="Download content"
              >
                <div className="social-share-download-icon">
                  <Download className="w-5 h-5" />
                </div>
                {showLabels && (
                  <span className="social-share-platform-label">Download</span>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const SocialSharingDemo: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ShareContent>({
    type: 'text',
    title: 'Sample Text Content',
    text: 'This is some sample text content that can be shared across social media platforms.',
    hashtags: ['react', 'sharing', 'demo'],
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const componentCode = `import { PtgUISocialMediaSharing } from '@ptg-ui/react';
import "@ptg-ui/react/lib/styles/index.css";

interface ISocialMediaSharingProps {
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

  const htmlCode = `<SocialSharingComponent
  content={{
    type: 'text',
    title: 'Sample Text',
    text: 'Content to share',
    hashtags: ['react', 'sharing']
  }}
  onShare={(platform, success, content) => 
    console.log(\`Shared \${content.type} to \${platform}\`)
  }
/>

// Image Content
<SocialSharingComponent
  content={{
    type: 'image',
    title: 'Beautiful Photo',
    description: 'Amazing landscape photo',
    url: 'https://example.com/image.jpg'
  }}
/>

// Document/File Content
<SocialSharingComponent
  content={{
    type: 'document',
    title: 'Important Document',
    file: selectedFile,
    description: 'PDF document to share'
  }}
  enableDownload={true}
/>`;

  const sampleContents: ShareContent[] = [
    {
      type: 'text',
      title: 'Inspirational Quote',
      text: 'The only way to do great work is to love what you do. - Steve Jobs',
      hashtags: ['inspiration', 'quote', 'motivation'],
    },
    {
      type: 'url',
      title: 'Amazing Article',
      description: 'Check out this comprehensive guide to React development',
      url: 'https://react.dev/learn',
      hashtags: ['react', 'development', 'tutorial'],
    },
    {
      type: 'image',
      title: 'Beautiful Landscape',
      description: 'Stunning mountain view from my recent trip',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      hashtags: ['photography', 'nature', 'mountains'],
    },
  ];

  const handleShare = (platform: string, success: boolean, content: ShareContent) => {
    console.log(`Shared ${content.type} to ${platform}: ${success ? 'Success' : 'Failed'}`);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    const isImage = file.type.startsWith('image/');
    const isDocument = file.type === 'application/pdf' || 
                      file.type.includes('document') || 
                      file.type.includes('text');

    let contentType: ContentType = 'text';
    if (isImage) {
      contentType = 'image';
    } else if (isDocument) {
      contentType = 'document';
    }

    setSelectedContent({
      type: contentType,
      title: file.name,
      description: `File size: ${(file.size / 1024 / 1024).toFixed(2)} MB`,
      file: file,
    });
  };

  const handleContentSelection = (content: ShareContent) => {
    setSelectedContent(content);
  };

  const handleToggleCode = () => {
    setShowCode(!showCode);
  };

  const renderContentIcon = (type: ContentType) => {
    switch (type) {
      case 'text':
        return <FileText className="w-5 h-5 social-share-icon-text" />;
      case 'url':
        return <Link2 className="w-5 h-5 social-share-icon-url" />;
      case 'image':
        return <Image className="w-5 h-5 social-share-icon-image" />;
      case 'document':
        return <FileText className="w-5 h-5 social-share-icon-document" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="social-share-demo-container bg-white rounded">
      <section className="card-section-two rounded pt-0">
        <div className="pdf-renderer-demo-container">
          <div className="row">
            <div className="col-10 mb-2">
              <h5 className="font-weight-bold">Social Media Share</h5>
            </div>
            <div className="col-2 mb-2">
              <CodeIcon
                onClick={handleToggleCode}
                fontSize="large"
                className="show-code-icon"
                style={{ cursor: 'pointer' }}
              />
            </div>
            {showCode && (
              <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
            )}
            <div style={{ marginBottom: '2rem', borderTop: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h6 className="social-share-section-title my-3">Share Selected Content</h6>
                  <div className="social-share-current-content d-flex justify-content-between p-2">
                    <div className="social-share-current-preview">
                      <div className="social-share-current-icon">
                        {renderContentIcon(selectedContent.type)}
                      </div>
                      <div className="social-share-current-content-body">
                        <h6 className="social-share-current-title font-size-12">
                          {selectedContent.title}
                        </h6>
                        {selectedContent.description && (
                          <p className="social-share-current-description">
                            {selectedContent.description}
                          </p>
                        )}
                        {selectedContent.text && (
                          <div className="social-share-current-text">
                            "{selectedContent.text}"
                          </div>
                        )}
                        <p className="social-share-current-type">
                          Content Type: {selectedContent.type}
                        </p>
                      </div>
                    </div>
                    <div className="social-share-buttons-container">
                      <SocialSharingComponent
                        content={selectedContent}
                        buttonText="Share"
                        buttonVariant="primary"
                        position="left"
                        showLabels={true}
                        onShare={handleShare}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="horizontal-line" />
              <h2 className="social-share-section-title my-3">Select Content to Share</h2>
              <div className="social-share-content-grid">
                <div className="social-share-content-section">
                  <h6 className="social-share-section-subtitle mb-0">Sample Content</h6>
                  {sampleContents.map((content, index) => (
                    <button
                      key={`${content.type}-${content.title}-${index}`}
                      onClick={() => handleContentSelection(content)}
                      className={`social-share-content-option ${
                        selectedContent === content ? 'social-share-content-option-active' : ''
                      }`}
                      type="button"
                    >
                      <div className="social-share-content-preview">
                        <div className="social-share-content-icon">
                          {renderContentIcon(content.type)}
                        </div>
                        <div>
                          <div className="social-share-content-title">{content.title}</div>
                          <div className="social-share-content-type">{content.type} content</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="social-share-content-section">
                  <h6 className="social-share-section-subtitle mb-0">Upload File</h6>
                  <div className="social-share-upload">
                    <Upload className="social-share-upload-icon" />
                    <label htmlFor="file-upload" className="social-share-upload-label">
                      <span className="social-share-upload-link">Click to upload</span>
                      <span className="social-share-upload-text"> or drag and drop</span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="social-share-upload-hidden"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                    />
                    <p className="social-share-upload-note">
                      PDF, DOC, TXT, JPG, PNG up to 10MB
                    </p>
                  </div>
                  {uploadedFile && (
                    <div className="social-share-upload-success">
                      <p className="social-share-upload-success-title">
                        File uploaded: {uploadedFile.name}
                      </p>
                      <p className="social-share-upload-success-size">
                        Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialSharingDemo;