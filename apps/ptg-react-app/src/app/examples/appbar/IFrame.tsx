// IFrame.tsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IFrameProps {
  children: React.ReactNode;
}

const IFrame: React.FC<IFrameProps> = ({ children }) => {
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ref) {
      const doc = ref.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
         <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style>
                body {
                    display: block;
                    --webkit-font-smoothing: antialiased;

                    margin: 0;
                    padding: 0;
                    background-color: white;
                    font-family: Arial, sans-serif; /* Ensure consistent font */
                }

                /* Add any additional styles you need here */
                /* AppBar.css */

                    .app-bar {
                    width: 100%;
                    display: flex;
                    padding: 10px 20px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    .app-bar-fixed {
                    position: fixed;
                    }

                    .app-bar-relative {
                    position: relative;
                    }

                    .app-bar-top {
                    top: 0;
                    }

                    .app-bar-bottom {
                    bottom: 0;
                    }

                    .app-bar-content {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row;
                    margin: 0 20px 0 0;
                    }

                    .logo {
                    height: 40px;
                    cursor: pointer;
                    margin: 0 10px 0 0;
                    }

                    .burger-menu {
                    position: relative;
                    }

                    .burger-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    }

                    .dropdown-menu {
                    position: absolute;

                    padding: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    min-width: 150px;
                    max-height: 300px;
                    overflow-y: auto;
                    z-index: 1000;
                    }

                    .drawer-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 175px;

                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
                    transition: transform 0.3s ease;
                    z-index: 1000;
                    }

                    .close-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    }

                    .menu-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    }

                    .menu-content {
                    padding: 10px;
                    max-height: calc(100% - 50px);
                    overflow-y: auto;
                    }

                    .paragraph {
                    overflow: hidden; /* Prevents scrolling */
                    white-space: normal; /* Allows text to wrap */
                    overflow-wrap: break-word; /* Breaks long words */
                   
                    max-width: 100%; /* Ensures it doesn't exceed the container width */
}

                /* AppBarWithDefaultProps.css */

                .menu-list {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: space-around;
                }

                .menu-item {
                    display: inline;
                }

                .link {
                    color: white;
                    text-decoration: none;
                    padding: 10px 15px;
                    transition: background-color 0.3s;
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .menu-list {
                    flex-direction: row; /* Stack items vertically */
                    display: inline; /* Hide by default */
                    top: 60px; /* Adjust based on your AppBar height */
                    left: 0;
                    right: 0;
                    z-index: 1000; /* Ensure it appears above other content */
                    overflow: auto;
                    }

                    .link {
                    color: white;
                    text-decoration: none;
                    padding: 2px 4px;

                    font-size: 10px;
                    }
                }
                </style>
            </head>
            <body></body>
            </html>
        `);
        doc.close();
        setContainer(doc.body);
      }
    }
  }, [ref]);

  return (
    <iframe
      title="iframe"
      ref={setRef}
      style={{ width: '100%', height: '400px', border: '2px' }}
    >
      {container && createPortal(children, container)}
    </iframe>
  );
};

export default IFrame;
