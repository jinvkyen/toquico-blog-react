import React from "react";
import { VideoCameraSlash, ArrowRight, Lightbulb } from "@phosphor-icons/react";
import AnimatedContent from "@/components/with-motion/AnimatedContent";
export const FunFactsTab = () => {
  const funfacts = [
    {
      id: 1,
      title: "The Daily Noot Routine",
      content:
        "Toqui starts each morning with a determined series of 'noots,' making it clear that breakfast must be served immediately. If ignored, the noots become louder, more dramatic, and impossible to resist!",
      tag: "Noot",
      src: "/assets/images/gallery/babyp.jfif",
      name: "Suzy Bae",
      avatar: "https://i.pinimg.com/736x/eb/40/6d/eb406d12af40d38bf67a33f963d12b5f.jpg",
    },
    {
      id: 2,
      title: "Why Toqui Thinks 3 AM is Playtime",
      content:
        "While the world sleeps, Toqui is busy zooming through the house at full speed, leaping off furniture like a tiny, furry parkour master. Clearly, nighttime is the best time for adventures!",
      tag: "Chaos",
      src: "/assets/images/gallery/antoq.jpg",
      name: "Sabrina Carpenter",
      avatar: "https://i.pinimg.com/736x/91/de/c6/91dec6f87911f77b36189f7b1c02bf49.jpg",
    },
    {
      id: 3,
      title: "The Art of the Flop",
      content:
        "Toqui takes relaxation very seriously. One moment he’s grooming, and the next—BAM!—he flops over dramatically, looking like he’s completely melted into the floor. It’s his way of saying, ‘I trust you, but also, I need a nap.’",
      tag: "Cozy",
      src: "/assets/images/traits/affectionate.JPEG",
      name: "Suzy Bae",
      avatar: "https://i.pinimg.com/736x/eb/40/6d/eb406d12af40d38bf67a33f963d12b5f.jpg",
    },
    {
      id: 4,
      title: "Toqui vs. Cardboard: A Never-Ending Battle",
      content:
        "If there's a piece of cardboard in sight, Toqui WILL destroy it. Tunnels, boxes, even things he probably shouldn’t chew—nothing is safe from his powerful bunny teeth. It’s both a hobby and a mission.",
      tag: "Destruction",
      src: "/assets/images/gallery/moth.JPEG",
      name: "Sabrina Carpenter",
      avatar: "https://i.pinimg.com/736x/91/de/c6/91dec6f87911f77b36189f7b1c02bf49.jpg",
    },
    {
      id: 5,
      title: "Binkies: The Ultimate Sign of Bunny Joy",
      content:
        "When Toqui is at his happiest, he suddenly launches into the air, twisting mid-jump in what looks like a glitch in the matrix. This is called a binky, and it's the ultimate proof of bunny happiness!",
      tag: "Joy",
      src: "/assets/images/gallery/run.JPEG",
      name: "Suzy Bae",
      avatar: "https://i.pinimg.com/736x/eb/40/6d/eb406d12af40d38bf67a33f963d12b5f.jpg",
    },
  ];
  return (
    <div className='relative -top-16 font-satoshi'>
      {/* Hero Section for Fun Facts */}
      <div className='bg-gradient-to-r from-pink-100 to-pink-400/50 dark:from-purple-900 dark:to-pink-900 p-12 mb-12 min-h-screen'>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}>
          <div className='xl:mx-32 flex flex-col md:flex-row items-center relative top-10 md:top-32'>
            <div className='md:w-3/5 mb-6 md:mb-0 md:pr-8'>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4'>
                Fascinating Facts About <span className='text-toquiPrimary dark:text-pink-400'>Toqui</span>
              </h1>
              <p className='text-lg xl:text-xl text-gray-700 dark:text-gray-300 mb-6'>
                Discover the quirky, adorable, and sometimes surprising world of our beloved bunny companion!
              </p>
              <div className='flex flex-wrap gap-3'>
                <span className='bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm xl:text-tiny font-medium text-gray-700 dark:text-gray-300'>
                  🥕 Eating Habits
                </span>
                <span className='bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm xl:text-tiny font-medium text-gray-700 dark:text-gray-300'>
                  🐇 Bunny Behavior
                </span>
                <span className='bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm xl:text-tiny font-medium text-gray-700 dark:text-gray-300'>
                  💤 Sleeping Patterns
                </span>
              </div>
            </div>
            <div className='md:w-2/5'>
              <div className='bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg transform rotate-2'>
                <img
                  src='/assets/images/gallery/beep.jfif'
                  alt='Toqui the bunny'
                  className='w-full h-64 object-cover rounded-md'
                />
                <div className='absolute -bottom-3 -right-3 bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full transform rotate-12 shadow-md'>
                  Did you know?
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-transparent'>
        {/* Main Blog Title Area */}
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}>
          <div className='border-b pb-6 mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white'>Fun Facts</h2>
            <div className='flex items-center mt-4 text-base text-gray-600 dark:text-gray-300'>
              <span>It's a joy to share these fun facts about Toqui!</span>
              <span className='mx-2'>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </AnimatedContent>

        {/* Main Content Area - Grid Layout */}

        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            {/* Main Content - 8 columns on desktop */}
            <div className='md:col-span-8'>
              {funfacts.map((fact) => (
                <article key={fact.id} className='mb-12'>
                  <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-2/3'>
                      <div className='flex items-center mb-3'>
                        {/* author */}
                        <img src={fact.avatar} alt='Author' className='w-8 h-8 rounded-full mr-3' />
                        {/* author name */}
                        <span className='text-sm font-medium'>{fact.name}</span>
                        <span className='mx-2 text-gray-400'>•</span>
                        <span className='text-sm text-gray-500'>Pinned</span>
                      </div>
                      {/* title */}
                      <h2 className='text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white'>{fact.title}</h2>
                      {/* content */}
                      <p className='text-gray-700 dark:text-gray-300 mb-4'>{fact.content}</p>
                      <div className='flex items-center text-sm'>
                        {/* tag */}
                        <span className='bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300'>
                          {fact.tag}
                        </span>
                        <span className='mx-3 text-gray-500'>4 min read</span>
                        <div className='ml-auto flex space-x-2'>
                          <button className='p-1 text-gray-400 hover:text-gray-600'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                              />
                            </svg>
                          </button>
                          <button className='p-1 text-gray-400 hover:text-gray-600'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='md:w-1/3'>
                      <img src={fact.src} alt='Rabbit Communication' className='w-full h-48 object-cover rounded-lg' />
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Sidebar - 4 columns on desktop */}
            <div className='md:col-span-4'>
              {/* Fun Fact of the Day */}
              <div className='bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8'>
                <div className='flex items-center mb-3'>
                  <span className='text-2xl mr-2'>
                    <Lightbulb size={20} />
                  </span>
                  <h3 className='font-bold text-lg text-gray-900 dark:text-white'>Fun Fact of the Day</h3>
                </div>
                <p className='text-gray-700 dark:text-gray-300 text-tiny mb-3'>
                  Rabbits have nearly 360° panoramic vision but they can't see directly in front of their noses—there's
                  a small blind spot there!
                </p>
                <div className='text-sm text-gray-500'>Updated daily</div>
              </div>

              {/* About Section */}
              <div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8'>
                <img
                  src='/assets/rabbit.png'
                  alt='Toqui Co Logo'
                  className='w-16 h-16 rounded-full mb-4 border-2 border-pink-600 bg-pink-600 p-2'
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
        </AnimatedContent>
      </div>
    </div>
  );
};
