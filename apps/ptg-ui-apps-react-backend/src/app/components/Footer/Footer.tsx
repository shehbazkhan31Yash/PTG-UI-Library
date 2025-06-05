import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-light mt-5 poition-sticky bottom-0">
      © {new Date().getFullYear()} PTG UI Apps. All rights reserved.
    </footer>
  );
};

export default Footer;
