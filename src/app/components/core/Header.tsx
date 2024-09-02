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
        <button
          onClick={toggleMenu}
          type="button"
          className={`md:hidden text-white focus:outline-none ${isOpen ? 'absolute right-6 top-6' : ''}`}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-full right-0 w-auto md:bg-transparent z-10`}
        >
          <ul className="md:flex md:items-center md:space-x-4 p-4 md:p-0">
            <li>
              <a
                href="/"
                className="block md:inline-block text-white py-2 px-3 hover:text-blue-500 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block md:inline-block text-white py-2 px-3 hover:text-blue-500 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="block md:inline-block text-white py-2 px-3 hover:text-blue-500 rounded-md"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block md:inline-block text-white py-2 px-3 hover:text-blue-500 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
