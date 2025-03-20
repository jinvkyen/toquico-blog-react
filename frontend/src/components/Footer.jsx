const Footer = () => {
  return (
    <footer className='pt-10 border-t border-gray-200 px-12'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex items-center gap-2 mb-4'>
            <div className='h-8 w-8 bg-pink-400 rounded-full flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>@</span>
            </div>
            <h3 className='text-lg font-bold bg-gradient-to-r from-toquiPrimary to-toquiDark bg-clip-text text-transparent'>
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
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Community
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-gray-800 mb-4'>Community</h4>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Forum
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Vet Directory
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Care Guides
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-pink-500'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='my-4 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm'>
        <p>&copy; 2025 Toqui's Journey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
