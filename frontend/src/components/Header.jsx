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
    <header className='fixed top-0 left-0 right-0 z-50 font-satoshi bg-gray-600/20 border-b border-gray-100/20'>
      <div className='py-4 px-4 flex justify-between items-center relative'>
        <Link to='/' className='logo flex items-center space-x-4 z-50 mr-8 drop-shadow-lg'>
          <img src='/assets/rabbit.png' alt='Toqui Logo' className='w-auto h-12 p-2 rounded-full bg-pink-700' />{" "}
          <p className='text-white hover:text-gray-50/70 drop-shadow-lg text-2xl font-black'>toqui co.</p>
        </Link>
        <div className='md:flex justify-center items-center space-x-4 hidden'>
          <Link to='home' className='logo flex items-center space-x-2 z-50'>
            <span className='sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white'>Home</span>
          </Link>
          {/* <Link to='/about' className='logo flex items-center space-x-2 z-50'>
            <span className='sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white'>About</span>
          </Link>
          <Link to='/blog' className='logo flex items-center space-x-2 z-50'>
            <span className='sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white mr-8'>Blog</span>
          </Link> */}
          <Link to='timeline' className='logo flex items-center space-x-2 z-50'>
            <span className='sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white'>Timeline</span>
          </Link>
          <Link to='highlights' className='logo flex items-center space-x-2 z-50'>
            <span className='text-base sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white'>
              Highlights
            </span>
          </Link>
          <Link to='fun-facts' className='logo flex items-center space-x-2 z-50'>
            <span className='sm:text-tiny md:text-tiny lg:text-base hover:text-gray-50/70 text-white mr-8'>
              Fun Facts
            </span>
          </Link>
          <Link to='/login' className='logo flex items-center space-x-2 z-50'>
            {/* Link to */}
            <button className='cursor-pointer rounded-md border border-gray-100/50 bg-white/10 px-6 py-2.5 text-tiny font-medium text-gray-50/80 backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
              Sign In
            </button>
          </Link>
          <Link to='/register' className='logo flex items-center space-x-2 z-50'>
            <button className='cursor-pointer rounded-md bg-gray-900 px-3.5 py-3 text-tiny font-medium text-gray-50/80 transition-colors hover:bg-gray-900/70 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
              Sign Up 🐰
            </button>
          </Link>
        </div>

        {/* Desktop navigation */}
        {/* <div className='md:flex space-x-4 hidden'></div> */}

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-50  outline-none hover:text-gray-50/70 text-white drop-shadow-lg border-none hover:outline-none transition-colors'
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
                  to='home'
                  end
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-lg hover:text-toquiPrimary transition-colors"
                  }>
                  Home
                </NavLink>
                <NavLink
                  to='timeline'
                  href='#timeline'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-lg hover:text-toquiPrimary transition-colors"
                  }>
                  Timeline
                </NavLink>
                <NavLink
                  to='highlights'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-md hover:text-toquiPrimary transition-colors"
                  }>
                  Highlights
                </NavLink>
                <NavLink
                  to='fun-facts'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-white drop-shadow-lg hover:text-toquiPrimary transition-colors"
                  }>
                  Fun Facts
                </NavLink>
                <NavLink
                  to='/login'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "font-satoshi text-xl text-white font-bold"
                      : "font-satoshi text-lg font-normal text-pink-900 drop-shadow-lg hover:text-pink-900/60 transition-colors bg-white py-2 px-4 rounded-full"
                  }>
                  Login
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
