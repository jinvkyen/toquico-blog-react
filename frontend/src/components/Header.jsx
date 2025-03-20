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
    <header className='fixed top-0 left-0 right-0 z-50 bg-toquiPrimary'>
      <div className='py-3 px-4 md:px-8 flex justify-between items-center relative'>
        <Link to='/' className='logo flex items-center space-x-2 z-50'>
          <img src='/assets/rabbit.png' alt='Toqui Co. Logo' className='h-8 w-auto' />
          <span className='text-xl font-bold text-white'>toqui co.</span>
        </Link>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden z-50 text-white outline-none bg-transparent border-none hover:outline-none transition-colors'
          aria-label='Toggle navigation'>
          {isOpen ? <X size={32} /> : <Hamburger size={32} />}
        </button>

        {/* Mobile navigation menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden' onClick={() => setIsOpen(false)} />

            {/* Menu */}
            <nav className='fixed inset-0 flex items-center justify-center bg-toquiPrimary md:hidden'>
              <div className='flex flex-col items-center text-center justify-center gap-8'>
                <NavLink
                  to='/'
                  end
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-2xl text-white font-bold"
                      : "text-lg text-gray-100 hover:text-white transition-colors"
                  }>
                  Home
                </NavLink>
                <NavLink
                  to='/timeline'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-2xl text-white font-bold"
                      : "text-lg text-gray-100 hover:text-white transition-colors"
                  }>
                  Timeline
                </NavLink>
                <NavLink
                  to='/fun-facts'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-2xl text-white font-bold"
                      : "text-lg text-gray-100 hover:text-white transition-colors"
                  }>
                  Fun Facts
                </NavLink>
                <NavLink
                  to='/highlights'
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-2xl text-white font-bold"
                      : "text-lg text-gray-100 hover:text-white transition-colors"
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
