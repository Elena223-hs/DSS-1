import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Recipe Tracker</div>
        <div className="footer-contact">
          <p>Contact us: info@recipetracker.com</p>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/recipetracker" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/recipetracker" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/recipetracker" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Recipe Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
