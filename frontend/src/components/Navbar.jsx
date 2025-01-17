import React, { useEffect, useState } from 'react';
import {SignedIn, SignedOut, UserButton} from '@clerk/clerk-react';
import {dark} from  '@clerk/themes';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true); 
    } else {
      setScrolling(false); 
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`flex justify-between items-center px-5 sm:px-10 lg:px-20 py-3 fixed w-full top-0 z-40 transition-all duration-300 ${
      scrolling ? 'bg-[#010407a8]' : 'bg-[#010407a8] sm:bg-transparent'
    }`}>
  
     
      <div className="text-2xl font-zen-dots text-slate-100">
        <a href="/"><h1 className='text-[#d23af0]'>StarX</h1></a>
      </div>

     
      <div
        className={`navbar-links ${
          menu ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:gap-8 text-[18px] text-slate-300 font-roboto bg-[#010407a8] md:bg-transparent absolute md:relative top-14 left-0 md:top-0 md:left-auto w-full md:w-auto z-50 md:justify-between md:items-center p-5 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 items-center w-full md:w-auto text-center">
          <li>
            <a href="/#hero" onClick={closeMenu} className="hover:text-[#8733b1]">
              Home
            </a>
          </li>
          <li>
            <a href="/#blogs" onClick={closeMenu} className="hover:text-[#8733b1]">
              Articles
            </a>
          </li>
          <li>
            <a href="/#news" onClick={closeMenu} className="hover:text-[#8733b1]">
              News
            </a>
          </li>
          <li>
            <a href="/#quiz" onClick={closeMenu} className="hover:text-[#8733b1]">
              Quizzes
            </a>
          </li>
          <li>
            <a href="/#gallery" onClick={closeMenu} className="hover:text-[#8733b1]">
              Gallery
            </a>
          </li>
          <li>
            <a href="/#footer" onClick={closeMenu} className="hover:text-[#8733b1]">
              Contact
            </a>
          </li>
        </ul>
        </div>

      {/*   <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
            <a href="/sign-in">
        <button
          className="hidden md:flex group items-center justify-start w-7 h-7 bg-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <svg className="w-4 h-4" viewBox="0 0 512 512" fill="black">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="absolute right-7 transform translate-x-full opacity-0 text-black text-sm font-roboto transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Sign In
          </div>
        </button>
        </a>
        </SignedOut>
      */}

     
      <div className="md:hidden">
        <img
          src="/menu.png"
          alt="menu"
          className="w-5 h-5 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;