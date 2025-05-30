export const ToolButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, disabled = false, title, children, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`pdf-renderer-tool-button ${className}`}
  >
    {children}
  </button>
);
