import * as React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bottom-0 flex items-center justify-center h-24 p-4">
      <span className="text-sm font-light">
        &copy; {year} Jacob Sullivan. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
