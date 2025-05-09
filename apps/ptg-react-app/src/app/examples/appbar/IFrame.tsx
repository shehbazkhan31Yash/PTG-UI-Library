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

            /* Chat.css */
            .chatContainer::-webkit-scrollbar {
              width: 0;
              height: 0;
            }

            .chatContainer:hover::-webkit-scrollbar {
              width: 8px;
            }

            .chatContainer:hover::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 10px;
            }

            .chatContainer:hover::-webkit-scrollbar-track {
              background: transparent;
            }
            .chatContainer {
              scrollbar-width: thin; /* Make scrollbar thin */
              scrollbar-color: transparent transparent; /* Set scrollbar color to transparent */
              display: flex;
              flex-direction: column;
              height: 100vh;
              width: 80%;
              margin: 0 auto;
              background-color: #f9f9f9;
              overflow-y: auto;
            }
            .messages {
              flex: 1;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px 8px 0 0;
              overflow-y: auto;
            }

            .message.user {
              width: fit-content;
              max-width: 50%;
              margin-left: auto;
              margin-right: 4%;
              overflow-wrap: break-word;
            }

            .message.user .messageText {
              background-color: #d1e7dd;
              padding: 0.75rem 1.25rem;
              border-radius: 0.5rem;
            }

            .message.ai {
              width: fit-content;
              margin-left: 4%;
              margin-right: 2%;
              overflow-wrap: break-word;
              padding: 0.75rem 1.25rem;
              border-radius: 0.5rem;
            }
            .message.ai .messageText {
              background-color: #cfe2ff;
              padding: 0.75rem 1.25rem;
              border-radius: 0.5rem;
            }

            .imageContainer {
              margin-top: 5px;
            }
            .uploadedImage {
              max-width: 100%;
              border-radius: 8px;
            }
            .loadingIndicator {
              text-align: center;
              font-style: italic;
              color: #888;
            }
            .inputContainer {
              display: flex;
              align-items: center;
              padding: 10px;
              background-color: #fff;
              border: 1px solid #ccc;
              border-radius: 15px;
              position: relative;
              margin-bottom: 15px;
            }
            input[type="text"] {
              flex: 1;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 20px;
              margin-right: 10px;
              font-size: 16px;
            }
            input[type="file"] {
              display: none;
            }
            .uploadIcon {
              cursor: pointer;
              margin-right: 10px;
            }
            .previewContainer {
              display: flex;
              align-items: center;
              margin-right: 10px;
            }
            .previewImage {
              max-width: 50px;
              max-height: 50px;
              border-radius: 4px;
              margin-right: 5px;
            }
            .deleteImageBtn {
              background: none;
              border: none;
              cursor: pointer;
              color: #ff4d4d;
            }
            button {
              padding: 10px 15px;
              border: none;
              border-radius: 20px;
              background-color: #007bff;
              color: white;
              font-size: 16px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            button:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
            button:hover:not(:disabled) {
              background-color: #0056b3;
            }

            @media (max-width: 768px) {
              .chatContainer {
                width: 90%;
              }
            }

            @media (max-width: 480px) {
              .chatContainer {
                width: 99%;
              }
              .messages {
                padding: 10px;
                overflow-x: hidden;
              }
              .message.ai {
                margin-left: 0;
                margin-right: auto;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
              }
            }

            .codeBlock {
              display: grid;
              grid-template-rows: auto 1fr;
              position: relative;
              border: 1px solid #ccc;
              border-radius: 8px;
              padding: 16px;
              background-color: #fff;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .codeBlock pre {
              background-color: #f5f5f5;
              padding: 10px;
              border-radius: 4px;
              overflow-x: auto;
              white-space: pre;
              font-family: monospace;
            }

            .codeBlock button {
              position: absolute;
              top: 30px;
              right: 20px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 4px;
              padding: 8px;
              cursor: pointer;
              transition: background-color 0.3s;
            }

            .copyMessage {
              position: absolute;
              top: 30px;
              right: 20px;
              color: #28a745;
              font-size: 14px;
              transition: opacity 0.5s ease;
              opacity: 1;
            }

            .copyMessage.fade-out {
              opacity: 0;
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
