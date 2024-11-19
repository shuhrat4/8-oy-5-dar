import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="flex justify-around">
        <a href="/" className="text-xl hover:underline">Home</a>
        <a href="/about" className="text-xl hover:underline">About</a>
        <a href="/contact" className="text-xl hover:underline">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
