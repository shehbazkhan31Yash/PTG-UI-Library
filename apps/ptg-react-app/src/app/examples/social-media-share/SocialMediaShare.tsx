import React, { useState, useRef, useEffect } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import {Share2,MessageCircle, Twitter, Linkedin, Facebook, Link2, Mail, X, Check, Copy, FileText, Image, Download, Upload,} from 'lucide-react';
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

interface ISocialSharingProps { content: ShareContent; className?: string; buttonText?: string; buttonVariant?: 'primary' | 'secondary' | 'outline'; position?: 'bottom' | 'top' | 'left' | 'right'; showLabels?: boolean; enableCopyLink?: boolean; enableEmail?: boolean; enableDownload?: boolean; customPlatforms?: SocialPlatform[]; onShare?: (platform: string, success: boolean, content: ShareContent) => void; }
interface SocialPlatform { name: string; icon: React.ReactNode; color: string; shareUrl: (content: ShareContent) => string; label: string; supportedTypes: ('text' | 'image' | 'document' | 'url')[]; }

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
      return 'https://wa.me/?text=' + encodeURIComponent(text ?? '');
        },
      },
      { name: 'twitter', icon: <Twitter className="w-5 h-5" />, color: '#1DA1F2', label: 'Twitter', supportedTypes: ['text', 'url', 'document'], shareUrl: (content) => { const text = content.text ?? content.title; const hashtags = content.hashtags?.join(',') ?? ''; const url = content.url ?? ''; return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`; }, },
  { name: 'linkedin', icon: <Linkedin className="w-5 h-5" />, color: '#0077B5', label: 'LinkedIn', supportedTypes: ['text', 'url', 'document'], shareUrl: (content) => { const url = content.url || ''; const title = content.title; const summary = content.description || content.text || ''; return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`; }, },
  { name: 'facebook', icon: <Facebook className="w-5 h-5" />, color: '#1877F2', label: 'Facebook', supportedTypes: ['text', 'url', 'image', 'document'], shareUrl: (content) => { const url = content.url || ''; const quote = content.text || content.title; return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}`; }, },
];

const SocialSharingComponent: React.FC<ISocialSharingProps> = ({ content, className = '', buttonText = 'Share', buttonVariant = 'primary', position = 'bottom', showLabels = true, enableCopyLink = true, enableEmail = true, enableDownload = true, customPlatforms, onShare, }) => {
  const [isOpen, setIsOpen] = useState(false); const [copied, setCopied] = useState(false); const dropdownRef = useRef<HTMLDivElement>(null);
  const platforms = customPlatforms || defaultPlatforms; const supportedPlatforms = platforms.filter((platform) => platform.supportedTypes.includes(content.type) );
  const allPlatforms = [ ...supportedPlatforms, ...(enableEmail ? [{ name: 'email', icon: <Mail className="w-5 h-5" />, color: '#6B7280', label: 'Email', supportedTypes: ['text', 'url', 'document'] as ('text' | 'image' | 'document' | 'url')[], shareUrl: (content: ShareContent) => { const subject = content.title; const body = content.text || `${content.description || ''}\n\n${content.url || ''}`; return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, },] : []), ];

  useEffect(() => { const handleClickOutside = (event: MouseEvent) => { if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { setIsOpen(false); } }; document.addEventListener('mousedown', handleClickOutside); return () => document.removeEventListener('mousedown', handleClickOutside); }, []);

  const handleShare = async (platform: SocialPlatform) => { try { let shareContent = { ...content }; if (content.file && !content.url) { shareContent.url = URL.createObjectURL(content.file); } if (navigator.share && content.type !== 'url') { try { const shareData: ShareData = { title: content.title, text: content.description || content.text, url: shareContent.url, }; if (content.file && navigator.canShare && navigator.canShare({ files: [content.file] })) { shareData.files = [content.file]; } await navigator.share(shareData); onShare?.(platform.name, true, content); setIsOpen(false); return; } catch (error) { console.log('Web Share API failed, falling back to URL sharing'); } } const shareUrl = platform.shareUrl(shareContent); window.open(shareUrl, '_blank', 'width=600,height=400'); onShare?.(platform.name, true, content); setIsOpen(false); } catch (error) { console.error(`Error sharing to ${platform.name}:`, error); onShare?.(platform.name, false, content); } };

  const handleCopy = async () => { try { let textToCopy = ''; switch (content.type) { case 'text': textToCopy = content.text || content.title; break; case 'url': textToCopy = content.url || ''; break; case 'document': case 'image': textToCopy = `${content.title}${content.description ? `\n${content.description}` : ''}${content.url ? `\n${content.url}` : ''}`; break; } await navigator.clipboard.writeText(textToCopy); setCopied(true); onShare?.('copy', true, content); setTimeout(() => { setCopied(false); }, 2000); } catch (error) { console.error('Error copying content:', error); onShare?.('copy', false, content); } };

  const handleDownload = () => { if (content.file) { const url = URL.createObjectURL(content.file); const link = document.createElement('a'); link.href = url; link.download = content.file.name; link.click(); URL.revokeObjectURL(url); onShare?.('download', true, content); } else if (content.url) { const link = document.createElement('a'); link.href = content.url; link.download = content.title; link.click(); onShare?.('download', true, content); } };

  const getContentIcon = () => { switch (content.type) { case 'text': return <FileText className="w-4 h-4" />; case 'image': return <Image className="w-4 h-4" />; case 'document': return <FileText className="w-4 h-4" />; case 'url': return <Link2 className="w-4 h-4" />; default: return <Share2 className="w-4 h-4" />; } };

  const positionClasses = { bottom: 'social-share-dropdown-bottom', top: 'social-share-dropdown-top', left: 'social-share-dropdown-left', right: 'social-share-dropdown-right', };

  return (
    <div className={`social-share-container ${className}`} ref={dropdownRef}>
      <ToolButton onClick={() => setIsOpen(!isOpen)} variant={buttonVariant} title={`Share ${content.type}: ${content.title}`} className="social-share-btn-gap"> {getContentIcon()} {buttonText} </ToolButton>
      {isOpen && (
        <div className={`social-share-dropdown ${positionClasses[position]}`}>
          <div className="social-share-dropdown-header"> <div className="social-share-dropdown-header-content"> <div> <h6 className="social-share-dropdown-title">Share Content</h6> <p className="social-share-dropdown-subtitle"> {content.type}: {content.title} </p> </div> <button onClick={() => setIsOpen(false)} className="social-share-close-btn"> <X className="w-4 h-4" /> </button> </div> </div>
          <div className="social-share-platforms">
            {allPlatforms.map((platform) => ( <button key={platform.name} onClick={() => handleShare(platform)} className="social-share-platform-btn"> <div className="social-share-platform-icon" style={{ backgroundColor: `${platform.color}20`, color: platform.color, }}> {platform.icon} </div> {showLabels && ( <span className="social-share-platform-label"> {platform.label} </span> )} </button> ))}
            <div className="social-share-divider" />
            {enableCopyLink && ( <button onClick={handleCopy} className="social-share-action-btn"> <div className="social-share-copy-icon"> {copied ? ( <Check className={`w-5 h-5 social-share-copy-icon-success`} /> ) : ( <Copy className={`w-5 h-5 social-share-copy-icon-default`} /> )} </div> {showLabels && ( <span className="social-share-platform-label"> {copied ? 'Copied!' : 'Copy Content'} </span> )} </button> )}
            {enableDownload && (content.file || content.url) && ( <button onClick={handleDownload} className="social-share-action-btn"> <div className="social-share-download-icon"> <Download className="w-5 h-5" /> </div> {showLabels && ( <span className="social-share-platform-label">Download</span> )} </button> )}
          </div>
        </div>
      )}
    </div>
  );
};

const SocialSharingDemo = () => {
  const [showCode, setShowCode] = useState(false);
  const componentCode = `import { PtgUISocialMediaSharing } from '@ptg-ui/react';\nimport "@ptg-ui/react/lib/styles/index.css";\n\ninterface ISocialMediaSharingProps {\n  file: string | File | null;\n  showControls?: boolean;\n  showToolbar?: boolean;\n  showPagination?: boolean;\n  enableDownload?: boolean;\n  enableFullscreen?: boolean;\n  enableRotation?: boolean;\n  onLoadSuccess?: (numPages: number) => void;\n  onPageChange?: (page: number) => void;\n  onZoomChange?: (scale: number) => void;\n}`;
  const htmlCode = `<SocialSharingComponent\n  content={{\n    type: 'text',\n    title: 'Sample Text',\n    text: 'Content to share',\n    hashtags: ['react', 'sharing']\n  }}\n  onShare={(platform, success, content) => \n    console.log(\`Shared \${content.type} to \${platform}\`)\n  }\n/>\n\n// Image Content\n<SocialSharingComponent\n  content={{\n    type: 'image',\n    title: 'Beautiful Photo',\n    description: 'Amazing landscape photo',\n    url: 'https://example.com/image.jpg'\n  }}\n/>\n\n// Document/File Content\n<SocialSharingComponent\n  content={{\n    type: 'document',\n    title: 'Important Document',\n    file: selectedFile,\n    description: 'PDF document to share'\n  }}\n  enableDownload={true}\n/>`;
  const [selectedContent, setSelectedContent] = useState<ShareContent>({ type: 'text', title: 'Sample Text Content', text: 'This is some sample text content that can be shared across social media platforms.', hashtags: ['react', 'sharing', 'demo'], });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleShare = (platform: string, success: boolean, content: ShareContent) => { console.log(`Shared ${content.type} to ${platform}: ${success ? 'Success' : 'Failed'}`); };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => { const file = event.target.files?.[0]; if (file) { setUploadedFile(file); const isImage = file.type.startsWith('image/'); const isDocument = file.type === 'application/pdf' || file.type.includes('document') || file.type.includes('text'); setSelectedContent({ type: isImage ? 'image' : isDocument ? 'document' : 'document', title: file.name, description: `File size: ${(file.size / 1024 / 1024).toFixed(2)} MB`, file: file, }); } };

  const sampleContents: ShareContent[] = [ { type: 'text', title: 'Inspirational Quote', text: 'The only way to do great work is to love what you do. - Steve Jobs', hashtags: ['inspiration', 'quote', 'motivation'], }, { type: 'url', title: 'Amazing Article', description: 'Check out this comprehensive guide to React development', url: 'https://react.dev/learn', hashtags: ['react', 'development', 'tutorial'], }, { type: 'image', title: 'Beautiful Landscape', description: 'Stunning mountain view from my recent trip', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', hashtags: ['photography', 'nature', 'mountains'], }, ];

  return (
    <div className="social-share-demo-container bg-white rounded">
    <section className="card-section-two rounded pt-0">
      <div className="pdf-renderer-demo-container">
        <div className="row">
            <div className="col-10 mb-2 "> <h5 className="font-weight-bold ">Social Media Share</h5> </div>
                <div className="col-2 mb-2"> <CodeIcon onClick={() => setShowCode(!showCode)} fontSize="large" className="show-code-icon"></CodeIcon> </div>
      {showCode && ( <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} /> )}
      <div style={{ marginBottom: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div> <h6 className="social-share-section-title my-3 text-light"> Share Selected Content </h6>
            <div className="social-share-current-content d-flex justify-content-between p-2"> <div className="social-share-current-preview"> <div className="social-share-current-icon"> {selectedContent.type === 'text' && ( <FileText className="w-5 h-5 social-share-icon-text" /> )} {selectedContent.type === 'url' && ( <Link2 className="w-5 h-5 social-share-icon-url" /> )} {selectedContent.type === 'image' && ( <Image className="w-5 h-5 social-share-icon-image" /> )} {selectedContent.type === 'document' && ( <FileText className="w-5 h-5 social-share-icon-document" /> )} </div> <div className="social-share-current-content-body"> <h6 className="social-share-current-title font-size-12"> {selectedContent.title} </h6> {selectedContent.description && ( <p className="social-share-current-description"> {selectedContent.description} </p> )} {selectedContent.text && ( <div className="social-share-current-text"> "{selectedContent.text}" </div> )} <p className="social-share-current-type"> Content Type: {selectedContent.type} </p> </div> </div>
              <div className="social-share-buttons-container"> <SocialSharingComponent content={selectedContent} buttonText="Share" buttonVariant="primary" position="left" showLabels={true} onShare={handleShare} /> </div>
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />
        <h2 className="social-share-section-title text-light my-3">Select Content to Share</h2>
        <div className="social-share-content-grid">
          <div className="social-share-content-section"> <h6 className="social-share-section-subtitle text-light mb-0"> Sample Content </h6> {sampleContents.map((content, index) => ( <button key={index} onClick={() => setSelectedContent(content)} className={`social-share-content-option ${selectedContent === content ? 'social-share-content-option-active' : ''}`}> <div className="social-share-content-preview"> <div className="social-share-content-icon"> {content.type === 'text' && ( <FileText className="w-5 h-5 social-share-icon-text" /> )} {content.type === 'url' && ( <Link2 className="w-5 h-5 social-share-icon-url" /> )} {content.type === 'image' && ( <Image className="w-5 h-5 social-share-icon-image" /> )} </div> <div> <div className="social-share-content-title"> {content.title} </div> <div className="social-share-content-type"> {content.type} content </div> </div> </div> </button> ))} </div>
          <div className="social-share-content-section"> <h6 className="social-share-section-subtitle mb-0 text-light">Upload File</h6> <div className="social-share-upload"> <Upload className="social-share-upload-icon" /> <label htmlFor="file-upload" className="social-share-upload-label"> <span className="social-share-upload-link"> Click to upload </span> <span className="social-share-upload-text"> {' '} or drag and drop </span> </label> <input id="file-upload" type="file" className="social-share-upload-hidden" onChange={handleFileUpload} accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif" /> <p className="social-share-upload-note"> PDF, DOC, TXT, JPG, PNG up to 10MB </p> </div> {uploadedFile && ( <div className="social-share-upload-success"> <p className="social-share-upload-success-title"> File uploaded: {uploadedFile.name} </p> <p className="social-share-upload-success-size"> Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB </p> </div> )} </div>
        </div>
      </div>
    </div>
    </div>
      </section>
      </div>
  );
};

export default SocialSharingDemo;