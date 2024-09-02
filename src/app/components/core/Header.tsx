'use client';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="container content-centre w-auto">
          <a href='/'>
              <h1 className="text-white text-xl font-bold">Gabriel Pinchuck</h1>
              <h2 className="text-white">Front-End Developer</h2>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
