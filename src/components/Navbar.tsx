import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">Recipe Tracker</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
