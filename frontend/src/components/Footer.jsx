import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center border-gray-200 font-satoshi'>
      <hr className='mb-4 border-gray-50/30' />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-12 md:place-items-center'>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='h-12 w-12 bg-black rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>@T</span>
            </div>
            <h3 className='text-lg font-bold bg-gray-800 bg-clip-text text-transparent'>toqui co.</h3>
          </div>
          <p className='text-gray-800 mb-4 text-balance'>
            This site is a personal project dedicated to my pet rabbit, Toqui, where I share my experiences and
            adventures with her. I hope to connect with you all by sharing her story with you.
          </p>
        </div>

        <div>
          <h4 className='font-semibold text-gray-800 mb-4'>Quick Links</h4>
          <ul className='space-y-2 mb-2'>
            <Link to='/home' className='flex flex-col'>
              <p href='/home' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Home
              </p>
            </Link>
            <Link to='/blog' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Blog
              </p>
            </Link>
            <Link to='/register' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Community
              </p>
            </Link>
            <Link to='/about' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                About
              </p>
            </Link>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-gray-800 mb-4'>Community</h4>
          <ul className='space-y-2'>
            <Link to='/' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Forum
              </p>
            </Link>
            <Link to='/' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Vet Directory
              </p>
            </Link>
            <Link to='/' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Care Guides
              </p>
            </Link>
            <Link to='/' className='flex flex-col'>
              <p href='#' target='_blank' className='text-gray-800 hover:text-toquiPrimary'>
                Contact
              </p>
            </Link>
          </ul>
        </div>
      </div>

      <hr className='mt-2 border-gray-50/30' />
      <div className='pt-8 pb-2 border-gray-200 text-center text-gray-700/60 text-sm'>
        <p>&copy; 2025 Toqui Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
