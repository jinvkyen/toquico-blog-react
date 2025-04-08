import { VideoCameraSlash, ArrowRight, Lightbulb, WarningOctagon } from "@phosphor-icons/react";
import FadeContent from "@/animations/FadeContent/FadeContent";
import ColourfulText from "@/components/ui/colourful-text";
import { Link } from "react-router-dom";
import SplashCursor from "@/animations/SplashCursor/SplashCursor";

export const HighlightsTab = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-4 font-satoshi'>
      <div className='flex flex-col'>
        {/* <SplashCursor /> */}
        <div className='bg-white rounded-3xl md:shadow-lg max-w-7xl w-full p-6 md:p-8 mx-auto'>
          {/* Main Hero Content */}
          <FadeContent>
            <div className='flex flex-col items-center mb-12'>
              <div className='relative mb-8'>
                <h1 className='text-2xl sm:text-6xl font-bold text-center leading-tight text-balance'>
                  Welcome to <ColourfulText text="Toqui's" /> <br />
                  <span className='relative z-20 inline-block rounded-xl'>Highlights ✨</span>
                </h1>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                {/* buttons */}
                <Link to='/login'>
                  <button className='cursor-pointer rounded-md bg-pink-700 px-6 py-2.5 text-tiny md:text-base font-medium text-white transition-colors hover:bg-pink-700/80 focus:outline-none'>
                    Join toqui co.
                  </button>
                </Link>
                {/* Link to */}
                <button className='cursor-pointer rounded-md border border-gray/20 bg-gray-50/10 px-6 py-2.5 text-tiny md:text-base font-medium text-gray-700 backdrop-blur-sm transition-colors hover:bg-gray-200/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
                  Read more
                </button>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex items-center justify-center -mt-4 md:-mt-0 '>
                <div className='flex -space-x-3'>
                  <div className='w-10 h-10 rounded-full bg-red-400 border-2 border-white'>
                    <img
                      src='https://i.pinimg.com/736x/94/c8/b5/94c8b53941b80c2b1e7c753485c0eca3.jpg'
                      alt='Avatars'
                      className='w-10 h-10 object-cover rounded-full mr-3'
                    />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-yellow-400 border-2 border-white'>
                    <img
                      src='https://i.pinimg.com/736x/c0/4f/81/c04f81d2cf2e7d964ee87f3250cb4eb1.jpg'
                      alt='Avatars'
                      className='w-10 h-10 object-cover rounded-full mr-3'
                    />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-orange-400 border-2 border-white'>
                    <img
                      src='https://i.pinimg.com/736x/15/55/0e/15550ee5c7a0d613ffde4f1d1c6385da.jpg'
                      alt='Avatars'
                      className='w-10 h-10 object-cover rounded-full mr-3'
                    />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-blue-400 border-2 border-white'>
                    <img
                      src='https://i.pinimg.com/736x/81/24/e4/8124e43da43e1d06dcdbca15f22a0cd9.jpg'
                      alt='Avatars'
                      className='w-10 h-10 object-cover rounded-full mr-3'
                    />
                  </div>
                  <div className='w-10 h-10 rounded-full bg-red-400 border-2 border-white'>
                    <img
                      src='https://i.pinimg.com/736x/be/c4/7d/bec47dd2c243e8200774c9d5a7dcdb4e.jpg'
                      alt='Avatars'
                      className='w-10 h-10 object-cover rounded-full mr-3'
                    />
                  </div>
                </div>
                <div className='ml-2'>
                  <p className='font-bold text-xl'>5+</p>
                  <p className='text-gray-600 text-sm'>Followers</p>
                </div>
              </div>

              {/* Center Image */}
              <div className='relative rounded-2xl overflow-hidden'>
                <div className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center'>
                  <span className='animate-pulse h-2 w-2 bg-white rounded-full mr-1'></span> Live
                </div>
                {/* toqui gif hehehe */}
                <img src='/assets/images/toquo.gif' alt='Toquipush' className='w-full h-auto object-cover' />
                <div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
                  <button className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                    <VideoCameraSlash size={24} />
                  </button>
                  <button className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                    <div className='w-4 h-4 bg-red-400'></div>
                  </button>
                </div>
              </div>

              {/* Text Block */}
              <div className='flex items-center justify-center'>
                <p className='text-center text-gray-700'>
                  Learn about the highlights of our beloved pet's life journey here on earth! 🌏
                </p>
              </div>
            </div>

            {/* Bottom Sections */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 cursor-pointer'>
              {/* Left Card - Timeline */}
              <Link to='/timeline'>
                <div className='md:bg-pink-50 md:p-6 rounded-3xl'>
                  <div className='bg-white rounded-xl shadow-md overflow-hidden w-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                    <div className='relative'>
                      <img
                        src='/assets/images/timeline.png'
                        alt='Timeline visualization'
                        className='w-full h-48 object-cover'
                      />
                      <div className='absolute top-4 left-4 bg-pink-500 text-white text-tiny px-3 py-1 rounded-full font-medium'>
                        Featured
                      </div>
                    </div>

                    <div className='p-6'>
                      <div className='flex items-center mb-3'>
                        <div className='w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 text-pink-500'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <h2 className='text-base md:text-xl font-bold text-gray-800'>Timeline</h2>
                      </div>

                      <p className='text-gray-600 mb-4 text-base leading-relaxed'>
                        It is a journey of love, care, and adventure that we have shared with Toqui, and we hope you
                        enjoy it.
                      </p>

                      <div className='flex justify-between items-center'>
                        <p className='inline-flex items-center text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors'>
                          Explore Toqui's timeline <ArrowRight size={14} />
                        </p>

                        <div className='flex -space-x-2'>
                          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-red-400 border-2 border-white'>
                            {/* timeline avatars */}
                            <img
                              src='https://i.pinimg.com/736x/94/c8/b5/94c8b53941b80c2b1e7c753485c0eca3.jpg'
                              alt='Avatars'
                              className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full mr-3'
                            />
                          </div>
                          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-yellow-400 border-2 border-white'>
                            <img
                              src='https://i.pinimg.com/736x/c0/4f/81/c04f81d2cf2e7d964ee87f3250cb4eb1.jpg'
                              alt='Avatars'
                              className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full mr-3'
                            />
                          </div>
                          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-orange-400 border-2 border-white'>
                            <img
                              src='https://i.pinimg.com/736x/15/55/0e/15550ee5c7a0d613ffde4f1d1c6385da.jpg'
                              alt='Avatars'
                              className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full mr-3'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Right Card - Fun Facts */}
              <Link to='/fun-facts'>
                <div className='md:bg-yellow-50 md:p-6 rounded-3xl'>
                  <div className='bg-white rounded-xl shadow-md overflow-hidden w-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                    <div className='relative'>
                      <img
                        src='/assets/images/funfacts.png'
                        alt='Learning dashboard'
                        className='w-full h-48 object-cover'
                      />
                      <div className='absolute top-4 left-4 bg-yellow-500 text-white text-tiny px-3 py-1 rounded-full font-medium'>
                        Updated
                      </div>
                    </div>

                    <div className='p-6'>
                      <div className='flex items-center mb-3'>
                        <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3'>
                          <Lightbulb size={20} />
                        </div>
                        <h2 className='text-xl font-bold text-gray-800'>Fun Facts</h2>
                      </div>

                      <p className='text-gray-600 mb-4 text-base leading-relaxed'>
                        Discover quirky and delightful information about our beloved pet that will make your day.
                      </p>

                      <div className='flex items-center justify-between'>
                        <p className='inline-flex items-center text-yellow-600 font-medium text-sm hover:text-yellow-700 transition-colors'>
                          View Fascinating Facts <ArrowRight size={14} />
                        </p>

                        <div className='flex -space-x-2'>
                          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-400 border-2 border-white'>
                            <img
                              src='https://i.pinimg.com/736x/81/24/e4/8124e43da43e1d06dcdbca15f22a0cd9.jpg'
                              alt='Avatars'
                              className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full mr-3'
                            />
                          </div>
                          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-red-400 border-2 border-white'>
                            <img
                              src='https://i.pinimg.com/736x/be/c4/7d/bec47dd2c243e8200774c9d5a7dcdb4e.jpg'
                              alt='Avatars'
                              className='w-6 h-6 md:w-10 md:h-10 object-cover rounded-full mr-3'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </FadeContent>
        </div>
        <div className='flex flex-col justify-center items-center mt-20 max-w-7xl w-full mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            <div className='md:col-span-8'>
              {/* Content Section */}

              <div className='max-w-2xl mx-auto antialiased relative'>
                {dummyContent.map((item, index) => (
                  <div key={`content-${index}`} className='mb-20'>
                    <h2 className='bg-yellow-500/70 text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
                      {item.badge}
                    </h2>

                    <p className='text-xl mb-4 font-bold'>{item.title}</p>

                    <div className='text-tiny prose prose-sm dark:prose-invert'>
                      {item?.image && (
                        <img
                          src={item.image}
                          alt='blog thumbnail'
                          height='1000'
                          width='1000'
                          className='rounded-lg mb-10 object-cover'
                        />
                      )}
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='md:col-span-4'>
              {/* Highlight of the Day */}
              <div className='bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8'>
                <div className='flex flex-col items-start'>
                  <h3 className='font-bold text-lg text-gray-900 dark:text-white mb-3'>✨Highlight of the Day</h3>
                  <img
                    src='/assets/images/derp-face.jpg'
                    alt='Toquipush'
                    className='w-full h-40 mb-4 object-cover border-4 border-yellow-500/70 rounded-3xl'
                  />
                </div>
                <p className='text-gray-700 dark:text-gray-300 text-tiny mb-3 text-left leading-tight'>
                  Toqui's derp face is a guaranteed mood-booster. Her little bunny brain gets so excited when she sees
                  food that her face scrunches up into the most adorable, hilarious expression.And honestly, who can
                  blame her? Food is the best.
                </p>
                <div className='text-sm text-gray-500'>March 24, 2025</div>
              </div>
              {/* About Section */}
              <div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8'>
                <img
                  src='/assets/rabbit.png'
                  alt='Toqui Co Logo'
                  className='w-16 h-16 rounded-full mb-4 border-2 border-pink-700 bg-pink-700 p-2'
                />
                <h3 className='font-bold text-lg mb-2 text-gray-900 dark:text-white'>About Toqui Co.</h3>
                <p className='text-gray-700 dark:text-gray-300 text-tiny mb-4'>
                  We believe bunnies are thinkers as much as they are hoppers. Curated stories on rabbit care, bunny
                  behavior & product recommendations.
                </p>
                <p className='text-sm text-gray-500 mb-4'>1 min read</p>
                <button className='bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-full text-tiny w-full'>
                  Following
                </button>
              </div>

              {/* Newsletter Signup */}
              <div className='border rounded-lg p-6 mb-8 bg-gray-200/40'>
                <h3 className='font-bold text-lg mb-2 text-gray-900 dark:text-white'>
                  Sign up for The Toqui Co. Newsletter
                </h3>
                <p className='text-gray-700 dark:text-gray-300 text-tiny mb-4'>
                  A weekly, ad-free newsletter that helps bunny parents stay in the know on topics that matter
                  critically about rabbit care.
                </p>
                <form className='mb-2'>
                  <input
                    type='email'
                    placeholder='Your email'
                    className='w-full border rounded-lg px-3 py-2 mb-2 text-tiny'
                  />
                  <button className='bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg text-tiny w-full'>
                    Subscribe
                  </button>
                </form>
                <p className='text-tiny text-gray-800/40'>By Toqui Co.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const dummyContent = [
  {
    title: "First Case of GI Stasis",
    description: (
      <>
        <div className='flex items-center mb-3'>
          <div className='w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3'>
            <WarningOctagon size={20} />
          </div>
          <h2 className='text-xl font-bold text-gray-800'>Take Note:</h2>
        </div>
        <p className='bg-yellow-50 rounded-xl p-4'>
          Rabbits are naturally born silent creatures, and they are not prone to showing pain. This is why it is so to
          be fully aware of your pet's behavior, habits and body language. GI stasis is a condition that occurs when the
          digestive system slows down or stops completely. It can be caused by a variety of factors, including stress,
          changes in diet, and underlying health issues. Symptoms of GI stasis include loss of appetite, lethargy, and
          changes in stool production. If you notice any of these symptoms in your rabbit, it is important to seek
          veterinary care immediately.
        </p>
      </>
    ),
    badge: "Highlight 1",
    image: "/assets/images/highlights/h1.JPEG",
  },
  {
    title: "Initial Vet Visit",
    
    badge: "Highlight 2",
    image: "/assets/images/highlights/h2.JPEG",
  },
  {
    title: "Cherry With A Derp Face",
    
    badge: "Highlight 3",
    image: "/assets/images/highlights/h3.JPEG",
  },
  {
    title: "Initial Teeth Check",
    
    badge: "Highlight 4",
    image: "/assets/images/highlights/h4.JPEG",
  },
  {
    title: "Mourning Lost Veggies",
    
    badge: "Highlight 5",
    image: "/assets/images/highlights/h5.JPEG",
  },
  {
    title: "Wawa Moments",
    
    badge: "Highlight 6",
    image: "/assets/images/highlights/h6.JPEG",
  },
  {
    title: "First Taste Of Bok Choy",
    
    badge: "Highlight 7",
    image: "/assets/images/highlights/h7.JPEG",
  },
  {
    title: "Duct Tape",
    
    badge: "Highlight 8",
    image: "/assets/images/highlights/h8.JPEG",
  },
  {
    title: "Highlighted Nose",
    
    badge: "Highlight 9",
    image: "/assets/images/highlights/h9.JPEG",
  },
  {
    title: "First Time With A Puppy",
    
    badge: "Highlight 10",
    image: "/assets/images/highlights/h10.JPEG",
  },
  {
    title: "Swooosh!",
    
    badge: "Highlight 11",
    image: "/assets/images/highlights/h11.JPEG",
  },
  {
    title: "An Underside Of A Stingray",
    
    badge: "Highlight 12",
    image: "/assets/images/highlights/h12.JPEG",
  },
  {
    title: "Referenced A Meme",
    
    badge: "Highlight 13",
    image: "/assets/images/highlights/h13.JPEG",
  },
];
