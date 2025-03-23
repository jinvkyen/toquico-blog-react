import { Link } from 'react-router-dom';

const BlogListPage = () => {
  return (
      <div className='container mx-auto font-satoshi py-32 px-0 flex flex-col items-center'>
        <h1 className='text-6xl font-bold text-bgMain text-center'>Not Found</h1>
        {/* add 404 image */}
        <h2 className='text-3xl font-bold text-bgMain text-center'>The Page is Under Maintenance</h2>
        <Link to='/home' className='mt-9'>
          <button className='cursor-pointer rounded-md bg-toquiPrimary px-6 py-2.5 text-tiny font-medium text-white transition-colors hover:bg-toquiPrimary/80 focus:outline-none'>
            Back to Home
          </button>
        </Link>
      </div>
    );
};

export default BlogListPage;
