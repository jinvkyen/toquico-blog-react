import React from "react";
import { BellIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import { Heart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Threecard } from "@/components/with-motion/Threecard";

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-transparent p-4 md:p-8 font-satoshi'>
      {/* Hero Section */}
      <div className='flex flex-wrap mb-6 justify-around xl:-mt-16'>
        <div className='w-full xl:w-6/12'>
          <div className='container mx-auto h-full md:p-10 px-0'>
            <header className='container px-4 lg:flex items-center h-full text-gray-900'>
              <div className='w-auto xl:-ml-14 mt-12 md:mt-0'>
                <h1 className='text-3xl sm:text-4xl md:5xl lg:text-6xl font-bold leading-tight mb-4'>
                  A cozy hub for <span className='text-pink-700/90 border-pink-700/90 border-b-8'>fluff butt</span> care and
                  cuteness! 🐇
                </h1>
                <p className='text-base md:text-lg -mb-10'>
                  Welcome to your go-to space for all things pet! Whether you're a new rabbit parent or a seasoned bunny
                  lover, this cozy hub is a safe space with care guides, and heart-melting fluff butt moments.
                </p>
              </div>
            </header>
          </div>
        </div>
        <div className='w-auto items-center justify-center flex flex-col'>
          <Threecard />
        </div>
      </div>

      {/* Features Section as Bento Grid */}
      <section className='container mx-auto mb-12 px-0'>
        <h2 className='text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800 leading-tight'>
          Discover <br /> What We Offer
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6'>
          {/* Blog Feature */}
          <div className='md:col-span-4 bg-pink-50 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow'>
            <div className='h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-pink-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Engaging Blog</h3>
            <p className='text-gray-600'>
              Follow Toqui's adventures and learn about rabbit care through our regularly updated blog posts.
            </p>
          </div>

          {/* Community Feature - Taller */}
          <div className='md:col-span-4 md:row-span-2 bg-gradient-to-b from-pink-50 to-pink-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between'>
            <div>
              <div className='h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-pink-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Rabbit Community</h3>
              <p className='text-gray-600 mb-6'>
                Connect with fellow rabbit owners to share advice on vet clinics, pet care routines, and more.
              </p>
            </div>
            <div className='mt-auto'>
              <div className='flex justify-between text-center gap-2'>
                <div className='bg-white/50 backdrop-blur-sm p-2 rounded-xl flex-1'>
                  <h3 className='font-semibold'>500+</h3>
                  <p className='text-xs text-gray-600'>Members</p>
                </div>
                <div className='bg-white/50 backdrop-blur-sm p-2 rounded-xl flex-1'>
                  <h3 className='font-semibold'>200+</h3>
                  <p className='text-xs text-gray-600'>Guides</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Responsive Feature */}
          <div className='md:col-span-4 bg-yellow-50 rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow'>
            <div className='h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-yellow-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Mobile Friendly</h3>
            <p className='text-gray-600'>
              Enjoy a seamless experience across all devices, whether you're on desktop, tablet, or smartphone.
            </p>
          </div>

          {/* Quick Join Card */}
          <div className='md:col-span-12 bg-gradient-to-r from-toquiPrimary to-toquiDark rounded-3xl p-8 shadow-md text-white flex flex-col md:flex-row items-center justify-between'>
            <div>
              <h3 className='text-xl font-semibold mb-2'>Join Our Pet-Loving Community</h3>
              <p className='opacity-90 mb-4 md:mb-0'>Connect with fellow rabbit or pet owners and share experiences!</p>
            </div>
            <Link to='/login'>
              <button className='px-6 py-3 bg-white text-pink-500 font-medium rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-shadow'>
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Home - 3 Links with Nav */}
      <section className='container mx-auto mb-12 px-0'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl md:text-3xl leading-tight font-bold text-gray-800'>Latest About Toqui</h2>
          <Link
            to='/home'
            className='text-pink-100 font-medium hover:text-pink-100/70 mt-8 md:mt-0 text-nowrap md:text-base'>
            View All Posts →
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6'>
          {/* Timeline */}
          <div className='md:col-span-8 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='h-48 md:h-full bg-gray-200'>
                <img
                  src='https://www.theeducatedrabbit.com/images/IMG_6227.jpg'
                  alt='Blog post'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='p-6 flex flex-col'>
                <span className='px-3 py-1 text-tiny font-medium bg-pink-100 text-pink-500 rounded-full w-fit'>
                  Care Tips
                </span>
                <h3 className='mt-3 text-lg md:text-xl font-semibold text-gray-800'>Toqui's Favorite Veggie Mix</h3>
                <p className='mt-2 text-gray-600 flex-grow text-tiny md:text-base'>
                  Discover the perfect blend of vegetables that keeps Toqui healthy and happy. These nutrient-rich
                  options are great for any rabbit!
                </p>
                <div className='mt-4 flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>March 15, 2025</span>
                  {/* This works! */}
                  <Link to={"home"} className='text-pink-500 font-medium hover:text-pink-600'>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Higlights */}
          <div className='md:col-span-4 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
            <div className='h-40 bg-gray-200'>
              <img
                src='https://rabbit.org/wp-content/uploads/2023/12/vet-exam-4x6-Dr.-Gleeson-examining-Pippin-2-cc-Susan-Stienstra.jpg'
                alt='Blog post'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='p-6'>
              <span className='px-3 py-1 text-tiny font-medium bg-yellow-100 text-yellow-500 rounded-full'>
                Vet Visits
              </span>
              <h3 className='mt-3 text-lg md:text-xl font-semibold text-gray-800'>Finding Rabbit-Savvy Vets</h3>
              <p className='mt-2 text-gray-600 line-clamp-3 text-tiny md:text-base'>
                Our guide to locating veterinarians who specialize in rabbit care.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <span className='text-sm text-gray-500'>March 10, 2025</span>
                <Link to='home'>
                  <p className='text-pink-500 font-medium hover:text-pink-600'>Read More</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className='md:col-span-5 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
            <div className='h-40 bg-gray-200'>
              <img
                src='https://bunniesathome.weebly.com/uploads/3/0/1/7/30178425/2170044_orig.png'
                alt='Blog post'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='p-6'>
              <span className='px-3 py-1 text-tiny font-medium bg-red-100 text-red-500 rounded-full'>Lifestyle</span>
              <h3 className='mt-3 text-lg md:text-xl font-semibold text-gray-800'>Creating a Bunny-Proof Home</h3>
              <p className='mt-2 text-gray-600 line-clamp-3 text-tiny md:text-base'>
                Learn how to make your living space safe and comfortable for your rabbit companion.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <span className='text-sm text-gray-500'>March 5, 2025</span>
                <Link to='home' className='text-pink-500 font-medium hover:text-pink-600'>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className='md:col-span-7 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-md flex flex-col justify-center'>
            <div className='flex items-center mb-4'>
              <div className='h-14 w-14 rounded-full overflow-hidden mr-4'>
                <img
                  src='https://i.pinimg.com/736x/53/4b/f5/534bf5ef30c7651d980af91510ae9627.jpg'
                  alt='Suji'
                  className='h-full w-full object-cover'
                />
              </div>
              <div>
                <h4 className='font-medium text-gray-800'>Suzy Bae</h4>
                <p className='text-tiny text-gray-500'>Rabbit owner for 5 years</p>
                <span className='text-sm text-gray-500'>November 21, 2019</span>
              </div>
            </div>
            <p className='text-gray-600 italic'>
              "The community here has been incredible! I've learned so much about proper rabbit nutrition and found an
              amazing exotic vet through recommendations. Toqui's blog posts are both informative and adorable!"
            </p>
            <div className='flex mt-4'>
              <div className='flex text-yellow-400'>
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Call-to-action as Bento Grid */}
      <section className='container mx-auto mb-10 px-0'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6'>
          {/* Newsletter */}
          <div className='md:col-span-7 bg-white rounded-3xl p-8 shadow-md'>
            <h2 className='text-3xl leading-tight font-bold text-gray-800 mb-4'>Stay Updated with Toqui</h2>
            <p className='text-gray-600 mb-6 text-base'>
              Subscribe to our newsletter for the latest blog posts, community updates, and bunny care tips.
            </p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input
                type='email'
                placeholder='Your email address'
                className='flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300'
              />
              <button className='px-6 py-3 bg-gradient-to-r from-toquiPrimary to-toquiDark text-white font-medium rounded-full shadow-md hover:shadow-lg transition-shadow'>
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className='md:col-span-5 grid grid-cols-2 gap-4'>
            <div className='bg-pink-50 rounded-3xl p-6 shadow-md flex flex-col items-center justify-center'>
              <div className='text-2xl md:text-3xl font-bold text-pink-500 mb-2'>500+</div>
              <div className='text-gray-600 text-center text-tiny md:text-base'>Active Community Members</div>
            </div>
            <div className='bg-purple-50 rounded-3xl p-6 shadow-md flex flex-col items-center justify-center'>
              <div className='text-2xl md:text-3xl font-bold text-purple-500 mb-2'>50+</div>
              <div className='text-gray-600 text-center text-tiny md:text-base'>Vet Recommendations</div>
            </div>
            <div className='bg-blue-50 rounded-3xl p-6 shadow-md flex flex-col items-center justify-center col-span-2'>
              <div className='text-2xl md:text-3xl font-bold text-blue-500 mb-2'>200+</div>
              <div className='text-gray-600 text-center text-tiny md:text-base'>Rabbit Care Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Creator Section as Bento Grid */}
      <section className='container mx-auto mb-12 px-0'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6'>
          {/* Creator Layout in Small Screens */}
          <div className='flex md:hidden md:col-span-4'>
            {/* Creator Info */}
            <div className='md:col-span-8 bg-white rounded-3xl p-8 shadow-md'>
              {/* Creator Image */}
              <div className='md:col-span-4 rounded-3xl flex items-center justify-center'>
                <div className='relative'>
                  <div className='h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-xl'>
                    <img src='/assets/images/todd.jpg' alt='Website creator' className='h-full w-full object-cover' />
                  </div>
                </div>
              </div>
              <h2 className='mt-4 text-2xl md:text-4xl md:mt-0 leading-tight font-bold text-gray-800 mb-4 text-center'>
                About the Creator
              </h2>
              <p className='text-gray-600 mb-4 text-tiny text-center'>
                Hi there! I'm an animal lover / rabbit owner and web developer who created this platform to share my
                journey with Toqui and connect with other rabbit enthusiasts.
              </p>
              <p className='text-gray-600 mb-6 text-tiny text-center'>
                My goal is to share these precious moments of Toqui with you and build a supportive community where we
                can exchange knowledge, share experiences, and help each other provide the best care for our furry
                friends.
              </p>
              <div className='flex gap-6 items-center justify-end'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/ayen-t-3a2950312/'
                  target='_blank'
                  className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
                {/* Github */}
                <a href='https://github.com/jinvkyen' target='_blank' className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
                {/* Behance */}
                <a href='https://www.behance.net/ayenjtt' target='_blank' className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='currentColor' viewBox='0 0 256 256'>
                    <path d='M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Creator Layout in Large screens */}
          <div className='hidden md:flex md:col-span-12 gap-6'>
            {/* Creator Image */}
            <div className='md:col-span-6 rounded-3xl flex items-center justify-center'>
              <div className='relative'>
                <div className='h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-xl'>
                  <img src='/assets/images/todd.jpg' alt='Website creator' className='h-full w-full object-cover' />
                </div>
              </div>
            </div>

            {/* Creator Info */}
            <div className='md:col-span-6 bg-white rounded-3xl p-8 shadow-md'>
              <h2 className='text-3xl md:text-4xl leading-tight font-bold text-gray-800 mb-4'>About the Creator</h2>
              <p className='text-gray-600 mb-2'>
                Hi there! I'm an animal lover / rabbit owner and web developer who created this platform to share my
                journey with Toqui and connect with other rabbit enthusiasts.
              </p>
              <p className='text-gray-600 mb-6'>
                My goal is to share these precious moments of Toqui with you and build a supportive community where we
                can exchange knowledge, share experiences, and help each other provide the best care for our furry
                friends.
              </p>
              <div className='flex gap-6 items-center'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/ayen-t-3a2950312/'
                  target='_blank'
                  className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                  </svg>
                </a>
                {/* Github */}
                <a href='https://github.com/jinvkyen' target='_blank' className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
                {/* Behance */}
                <a href='https://www.behance.net/ayenjtt' target='_blank' className='text-pink-500 hover:text-pink-600'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='currentColor' viewBox='0 0 256 256'>
                    <path d='M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
