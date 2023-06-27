import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <span className="text-white">© {new Date().getFullYear()} My App. All rights reserved.</span>
        </div>
      </footer>
      <contact-form company="xyz"></contact-form>
    </div>
  );
}

export default Footer;
