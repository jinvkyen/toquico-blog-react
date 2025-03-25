import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className='min-h-screen pt-16 bg-gradient-to-r from-yellow-50 to-pink-600/80 scroll-smooth'>
      <div className='container mx-auto font-satoshi py-32 px-0 flex flex-col items-center'>
        <h1 className='text-6xl font-bold text-bgMain text-center'>404</h1>
        {/* add 404 image */}
        <h2 className='text-3xl font-bold text-bgMain text-center'>Page Not Found</h2>
        <Link to='/home' className='mt-9'>
          <button className='cursor-pointer rounded-md bg-toquiPrimary px-6 py-2.5 text-tiny font-medium text-white transition-colors hover:bg-toquiPrimary/80 focus:outline-none'>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
