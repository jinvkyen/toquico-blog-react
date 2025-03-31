import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, MagnifyingGlass, Pen } from "@phosphor-icons/react";
import { UserContext } from "@/App";
import UserNavigationPanel from "@/components/UserNavigationPanel";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  const [navPanel, setNavPanel] = useState(false);

  const {
    // eslint-disable-next-line no-unused-vars
    userAuth,
    userAuth: { access_token, profile_img },
  } = useContext(UserContext);

  const toggleSearchBox = () => {
    setSearchBoxVisibility(!searchBoxVisibility);
  };

  const handleNavPanel = () => {
    setNavPanel((currenVal) => !currenVal);
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setNavPanel(false);
    }, 300);
  };

  return (
    <>
      <nav className='fixed w-full navbar font-satoshi z-50 bg-white overflow-visible'>
        <div className='flex justify-between items-center px-4 py-4 border-b border-gray-100'>
          <div className='flex items-center space-x-4'>
            <Link to='/' className='logo flex items-center space-x-4 z-50 mr-8 drop-shadow-lg'>
              <img src='/assets/rabbit.png' alt='Toqui Logo' className='w-auto h-12 p-2 rounded-full bg-pink-700' />{" "}
              <p className='text-gray-800 hover:text-gray-800/70 text-2xl font-black'>toqui co.</p>
            </Link>

            <div className='hidden md:block relative w-64'>
              <input
                type='text'
                placeholder='Search'
                className='
                w-full
                bg-gray-100
                p-3 pl-6 pr-12
                rounded-full
                placeholder:text-gray-800
              '
              />
              <MagnifyingGlass size={20} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-800' />
            </div>

            <button
              className='md:hidden z-50 bg-gray-100 w-10 h-10 hover:bg-black/10 rounded-full flex items-center justify-center'
              onClick={toggleSearchBox}>
              <MagnifyingGlass size={20} />
            </button>
          </div>

          <div
            className={`
          md:hidden
          absolute left-0 right-0 top-full
          px-6 py-4
          transition-all duration-300 ease-in-out
          ${searchBoxVisibility ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-10"}
        `}>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='
                w-full
                bg-gray-100
                p-4 pl-6 pr-12
                rounded-full
                placeholder:text-gray-800
              '
              />
              <MagnifyingGlass size={20} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-800' />
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <Link to='/editor' className='hidden md:flex items-center gap-2'>
              Write <Pen size={20} />
            </Link>

            {/* auth content */}

            {access_token ? (
              <>
                <Link to='dashboard/notification'>
                  <button className='w-10 h-10 rounded-full bg-gray-100 relative hover:bg-black/10 '>
                    <Bell size={25} className='absolute right-2 top-1/2 -translate-y-1/2' />
                  </button>
                </Link>

                <div className='relative' onClick={handleNavPanel} onBlur={handleOnBlur}>
                  <button className='w-10 h-10 rounded-full bg-gray-100 relative hover:bg-black/10 '>
                    <img src={profile_img} className='w-full h-full rounded-full object-cover' />
                  </button>
                  {navPanel ? <UserNavigationPanel /> : ""}
                </div>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <button
                    className='
              rounded-md
              bg-pink-800
              px-6 py-2.5
              text-white
              transition-colors text-tiny
              hover:bg-pink-800/80
            '>
                    Sign In
                  </button>
                </Link>

                <Link to='/register' className='hidden md:block'>
                  <button
                    className='
              rounded-md
              bg-gray-200
              px-6 py-2.5
              text-gray-900
              transition-colors
              hover:bg-gray-200/80 text-tiny
            '>
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
