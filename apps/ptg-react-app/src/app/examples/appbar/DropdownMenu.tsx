import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string; // Label for the menu item
  link?: string; // Optional link for the menu item
  submenu?: MenuItem[]; // Optional submenu for dropdown
}

// DropdownMenu component to handle submenu rendering
export const DropdownMenu: React.FC<{
  item: MenuItem;
  onMenuClose: () => void;
  isDesktop?: boolean;
}> = ({ item, onMenuClose, isDesktop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (event: React.MouseEvent) => {
    setIsOpen(false); // Close the dropdown
    if (onMenuClose) {
      onMenuClose(); // Call the onMenuClose function if provided
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <li style={{ position: 'relative', display: 'inline-block' }}>
        {item.link ? (
          <Link
            to="#"
            onClick={handleItemClick} // Close menu on link click
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 15px', // Ensure consistent padding
              display: 'inline-block',
              fontSize: '16px', // Ensure consistent font size
            }}
          >
            {item.label}
          </Link>
        ) : (
          <button
            onClick={toggleDropdown}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '12px 15px', // Ensure consistent padding
              fontSize: '16px', // Ensure consistent font size
            }}
          >
            {item.label} {item.submenu && (isOpen ? '▲' : '▼')}
          </button>
        )}
        {isOpen && item.submenu && (
          <ul
            style={{
              position: isDesktop ? 'absolute' : 'relative',
              top: '100%',

              left: 0,
              backgroundColor: '#4CAF50',
              padding: '10px',
              listStyle: 'none',
              margin: 0,
              zIndex: 1000,
            }}
          >
            {item.submenu.map((subItem) => (
              <li key={subItem.label}>
                {subItem.link ? (
                  <Link
                    to={subItem.link}
                    onClick={handleItemClick} // Close menu on link click
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '5px 10px',
                    }}
                  >
                    {subItem.label}
                  </Link>
                ) : (
                  <span
                    style={{
                      color: 'white',
                      display: 'block',
                      padding: '5px 10px',
                    }}
                  >
                    {subItem.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    </div>
  );
};
