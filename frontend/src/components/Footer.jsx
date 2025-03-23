import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='pt-10 border-gray-200 px-12'>
      <hr className='mb-4 border-gray-500/20' />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='h-12 w-12 bg-gradient-to-l from-toquiPrimary to-toquiMute rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>@T</span>
            </div>
            <h3 className='text-lg font-bold bg-gradient-to-r from-toquiPrimary to-toquiMute bg-clip-text text-transparent'>
              toqui co.
            </h3>
          </div>
          <p className='text-gray-600 mb-4'>
            A community and blog dedicated to rabbit care, sharing experiences, and connecting rabbit owners around the
            world.
          </p>
        </div>

        <div>
          <h4 className='font-semibold text-gray-800 mb-4'>Quick Links</h4>
          <ul className='space-y-2 mb-2'>
            <Link to='/home' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Home
              </a>
            </Link>
            <Link to='/blog' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Blog
              </a>
            </Link>
            <Link to='/register' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Community
              </a>
            </Link>
            <Link to='/about' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                About
              </a>
            </Link>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-gray-800 mb-4'>Community</h4>
          <ul className='space-y-2'>
            <Link to='/' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Forum
              </a>
            </Link>
            <Link to='/' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Vet Directory
              </a>
            </Link>
            <Link to='/' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Care Guides
              </a>
            </Link>
            <Link to='/' className='flex flex-col'>
              <a href='#' target='_blank' className='text-gray-600 hover:text-toquiPrimary'>
                Contact
              </a>
            </Link>
          </ul>
        </div>
      </div>

      <hr className='mt-2 border-gray-500/20' />
      <div className='pt-8 pb-2 border-gray-200 text-center text-gray-500 text-sm'>
        <p>&copy; 2025 Toqui's Journey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
