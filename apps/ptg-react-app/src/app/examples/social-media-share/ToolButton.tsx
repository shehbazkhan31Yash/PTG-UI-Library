// export const ToolButton: React.FC<{
//   onClick: () => void;
//   disabled?: boolean;
//   title?: string;
//   children: React.ReactNode;
//   className?: string;
// }> = ({ onClick, disabled = false, title, children, className = '' }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     title={title}
//     className={`pdf-renderer-tool-button ${className}`}
//   >
//     {children}
//   </button>
// );


// Tool Button Component
export const ToolButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
  title?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}> = ({
  onClick,
  disabled = false,
  title,
  className = '',
  children,
  variant = 'secondary',
}) => {
  const baseClasses = 'social-share-btn-base';
  const variantClasses = {
    primary: 'social-share-btn-primary',
    secondary: 'social-share-btn-secondary',
    outline: 'social-share-btn-outline',
  };

   return (
      <button
        onClick={onClick}
        disabled={disabled}
        title={title}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    );
}