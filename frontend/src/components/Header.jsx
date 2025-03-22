import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Hamburger, X } from "@phosphor-icons/react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      <div className='py-4 px-14 flex justify-between items-center relative'>
        <Link to='/' className='logo flex items-center space-x-4 z-50 mr-8 drop-shadow-lg'>
          <img src='/assets/rabbit.png' alt='Toqui Co. Logo' className='h-10 w-auto ' />
          <span className='hover:text-gray-600 text-2xl font-bold text-white drop-shadow-md'>toqui co.</span>
        </Link>
        <div className='md:flex justify-center items-center space-x-4 hidden'>
          <Link to='/home' className='logo flex items-center space-x-2 z-50'>
            <span className='text-base text-white drop-shadow-md hover:text-gray-600'>Home</span>
          </Link>
          <Link to='/about' className='logo flex items-center space-x-2 z-50'>
            <span className='text-base text-white drop-shadow-md hover:text-gray-600'>About</span>
          </Link>
          <Link to='/blog' className='logo flex items-center space-x-2 z-50'>
            <span className='text-base text-white drop-shadow-md hover:text-gray-600 mr-8'>Blog</span>
          </Link>
          <Link to='/login' className='logo flex items-center space-x-2 z-50'>
            <button className='cursor-pointer rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-tiny font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
              Login
            </button>
          </Link>
          <Link to='/register' className='logo flex items-center space-x-2 z-50'>
            <button className='cursor-pointer rounded-md bg-toquiPrimary px-6 py-2.5 text-tiny font-medium text-white transition-colors hover:bg-toquiPrimary/80 focus:outline-none'>
              Register 🐰
            </button>
          </Link>
        </div>

        {/* Desktop navigation */}
        {/* <div className='md:flex space-x-4 hidden'></div> */}

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-50  outline-none hover:text-toquiPrimary text-white drop-shadow-md border-none hover:outline-none transition-colors'
          aria-label='Toggle navigation'>
          {isOpen ? <X size={32} /> : <Hamburger size={32} />}
        </button>

        {/* Mobile navigation menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden' onClick={() => setIsOpen(false)} />

            {/* Menu */}
            <nav className='fixed inset-0 flex items-center justify-center bg-toquiPrimary/15 md:hidden'>
              <div className='flex flex-col items-center text-center justify-center gap-8'>
                <NavLink
                  to='/home'
                  end
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-md hover:text-toquiPrimary transition-colors"
                  }>
                  Home
                </NavLink>
                <NavLink
                  to='/timeline'
                  href='#timeline'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-md hover:text-toquiPrimary transition-colors"
                  }>
                  Timeline
                </NavLink>
                <NavLink
                  to='/fun-facts'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-md hover:text-toquiPrimary transition-colors"
                  }>
                  Fun Facts
                </NavLink>
                <NavLink
                  to='/highlights'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-md hover:text-toquiPrimary transition-colors"
                  }>
                  Highlights
                </NavLink>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
console.log("header");
