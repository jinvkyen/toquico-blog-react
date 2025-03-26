import { VideoCameraSlash, ArrowRight, Lightbulb } from "@phosphor-icons/react";
import AnimatedContent from "@/components/with-motion/AnimatedContent";
import ColourfulText from "@/components/ui/colourful-text";
import { Link } from "react-router-dom";
export const HighlightsTab = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-4 font-satoshi'>
      <div className='flex flex-col'>
        <div className='bg-white rounded-3xl md:shadow-lg max-w-7xl w-full p-8 mx-auto'>
          {/* Main Hero Content */}
          <AnimatedContent
            distance={100}
            direction='vertical'
            reverse={false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.1}
            threshold={0.1}>
            <div className='flex flex-col items-center mb-12'>
              <div className='relative mb-8'>
                <h1 className='text-2xl sm:text-5xl font-bold text-center leading-tight text-balance'>
                  Welcome to <ColourfulText text="Toqui's" /> <br />
                  <span className='relative z-20 inline-block rounded-xl'>Highlights ✨</span>
                </h1>
              </div>

              {/* buttons */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link to='login'>
                  <button className='cursor-pointer rounded-md bg-toquiPrimary px-6 py-2.5 text-tiny md:text-base font-medium text-white transition-colors hover:bg-toquiPrimary/80 focus:outline-none'>
                    Join toqui co.
                  </button>
                </Link>
                {/* Link to */}
                <button className='cursor-pointer rounded-md border border-gray/20 bg-white/10 px-6 py-2.5 text-tiny md:text-base font-medium text-gray-700 backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
                  Read more
                </button>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex items-center'>
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
                      It is a journey of love, care, and adventure that we have shared with Toqui, and we hope you enjoy
                      it.
                    </p>

                    <div className='flex justify-between items-center'>
                      <Link to='timeline'>
                        <p className='inline-flex items-center text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors'>
                          Explore Toqui's timeline <ArrowRight size={14} />
                        </p>
                      </Link>

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

              {/* Right Card - Fun Facts */}
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
                      <a
                        href='/dashboard'
                        className='inline-flex items-center text-yellow-600 font-medium text-sm hover:text-yellow-700 transition-colors'>
                        View Fascinating Facts <ArrowRight size={14} />
                      </a>

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
            </div>
          </AnimatedContent>
        </div>
        <div className='flex flex-col justify-center items-center mt-20 max-w-7xl w-full p-8 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            <div className='md:col-span-8'>
              {/* Content Section */}
              <AnimatedContent
                distance={100}
                direction='vertical'
                reverse={false}
                config={{ tension: 50, friction: 25 }}
                initialOpacity={0.0}
                animateOpacity
                scale={1.1}
                threshold={0.1}>
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
              </AnimatedContent>
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
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum
          reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt
          enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
          reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit
          laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat
          veniam commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
    badge: "Highlight #1",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Highlight #2",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor
          et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do
          do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum
          occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Highlight #3",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
