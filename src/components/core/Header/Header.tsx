'use client';
import { useState } from 'react';
import headerStyles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${headerStyles.header} w-full sticky top-0`}>
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
