import { X } from "@phosphor-icons/react";
import React, { useState, useRef } from "react";
import { Personalities } from "@/components/with-motion/Personalities";
import AccordionItem from "@/components/ui/AccordionItem";
import BlogCard from "@/components/ui/BlogCard";
import { AppleGallery } from "@/components/with-motion/AppleGallery";

function Contents() {
  const [isVisible, setIsVisible] = useState(true);
  const anchorRef = useRef(null);
  return (
    <div id='about-her' className='container mx-auto font-satoshi my-10 px-0 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center'>
        {/* Column 1 */}
        <div className='col-span-1'>
          <img
            src='/assets/images/desk-toqs.png'
            className='md:ml-16 h-auto w-80 flex-grow object-cover rounded-full bg-gradient-to-r from-yellow-50 to-pink-800'
            alt='Toquipush'
          />
        </div>

        {/* Column 2 */}
        <div className='rounded-lg col-span-2 justify-center items-center mt-0 md:ml-24 md:mr-20 mx-auto ml-0'>
          <h2 className='mb-6 text-3xl md:text-4xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
            About <span className='text-pink-800 font-black'>Her</span>
          </h2>
          <div className='text-gray-900 text-left'>
            <p className='text-base'>
              She was born in a different home, where she lived with her mother and sister. As she grew older, she and
              her sibling were given away by their previous owners. Her new owner bought her just before his
              granddaughter’s birthday. In her new household, her birthday is celebrated on December 18, 2019.
            </p>
            <br />
            <p className='text-base'>
              She is 5{" "}
              <span
                ref={anchorRef}
                className='relative inline-block hover:text-toquiAccent underline cursor-pointer'
                onClick={() => setIsVisible(!isVisible)}>
                months
              </span>{" "}
              old. I know she will not get older than that (I doubt it). We are deeply grateful to have her by my side,
              and it’s a joy to share her story with you.
            </p>
            {isVisible && (
              <div
                className='absolute -mt-16 z-10 bg-gray-50 shadow-lg rounded-lg p-4 text-white
            w-56 flex flex-col items-center'>
                <button
                  className='absolute right-0 top-0 bg-transparent rounded-md p-4
              text-black transition-all duration-300 ease-in-out'
                  onClick={() => setIsVisible(false)}>
                  <X size={16} />
                </button>
                <p className='text-center text-gray-500 text-base mt-4'>
                  Please do not mention "years" 'cause it's very rude. thnx 🐰
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Personality Traits */}
      <div className='mt-32 md:p-12 rounded-lg col-span-2 flex flex-col justify-center items-center'>
        <h2 className='mb-2 md:mb-24 text-3xl md:text-4xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium leading-tight'>
          <span className='text-pink-800 font-black'>Personality</span> Traits
        </h2>
        <div className='p-4 mb-24'>
          <Personalities />
        </div>
      </div>
      {/* Favorite Foods - FAQ */}
      <section className='relative z-20 overflow-hidden dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full'>
              <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-yellow-800'>FAQ</span>
                <h2 className='leading-tight mb-4 text-3xl md:text-4xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
                  Favorite <span className='text-pink-800 font-black'>Foods</span>
                </h2>
                <p className='dark:text-dark-6 text-gray-900 text-base text-pretty md:text-balance'>
                  Toqui loves to eat! (a lot...) Below are some interesting facts about her favorite foods:
                </p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-between'>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 place-items-center'>
                <div className='col-span-1'>
                  <div className='col-span-1'>
                    <div className='mx-auto flex flex-wrap'>
                      <div className='w-full flex flex-col justify-center'>
                        <AccordionItem
                          header='What are Toqui’s favorite foods?'
                          text='Timothy hay is Toqui’s absolute favorite—it keeps her teeth healthy and stomach in right shape. She also enjoys fresh and properly washed lettuce, and bananas for treats!'
                        />
                        <AccordionItem
                          header='How often does Toqui eat?'
                          text='Toqui enjoys a well-balanced diet with meals and snacks throughout the day, keeping energy levels high! 🐰'
                        />
                        <AccordionItem
                          header='Can Toqui eat human food?'
                          text={
                            <>
                              {" "}
                              Yes, but others can be harmful. Toqui enjoys pet-safe fruits like <b>apples</b> and{" "}
                              <b>cucumbers</b>, but avoids{" "}
                              <span className='border-b-2 border-red-600'>
                                chocolate, onions, and grapes with large seeds.
                              </span>
                            </>
                          }
                        />
                        <AccordionItem
                          header='Are there any foods Toqui doesn’t like?'
                          text='Nothing. I think she likes everything! (and by everything, I mean everything literally anything she can get her teeth on lol). 🐇'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
                    <BlogCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className='pt-14'>
        <AppleGallery />
      </section>

      {/* Video Section */}
      <section className='mx-auto flex flex-col items-center justify-center py-16 md:py-24 px-0 max-w-5xl'>
        <h2 className='mb-3 text-3xl md:text-4xl font-medium text-center text-dark dark:text-white'>
          <span className='text-pink-800 font-black'>Fyrst sceawung</span>
        </h2>

        <p className='text-base text-gray-900/70 dark:text-gray-300 max-w-2xl font-normal leading-tight text-center mb-8'>
          This is the first video we took of Toqui when she first arrived in our home, and it's a special moment that
          we'll always treasure.
        </p>

        <div className='w-full max-w-4xl mx-auto rounded-t-lg shadow-lg overflow-hidden'>
          <div className='w-full h-11 bg-gray-400 flex justify-start items-center space-x-1.5 px-3'>
            <span className='w-3 h-3 rounded-full bg-red-400'></span>
            <span className='w-3 h-3 rounded-full bg-yellow-400'></span>
            <span className='w-3 h-3 rounded-full bg-green-400'></span>
          </div>

          {/* Video container */}
          <div className='bg-gray-300 w-full p-3 md:p-5'>
            <div className='w-full rounded overflow-hidden'>
              <video
                className='w-full aspect-video object-cover bg-black'
                controls
                poster='/assets/images/gallery/bebi-toqui.jpg'
                preload='metadata'>
                <source src='/assets/video/bebi-toqs.MP4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Optional Caption */}
        <p className='text-tiny text-pretty text-gray-600 dark:text-gray-400 mt-4 italic max-w-2xl text-center'>
          First days of Toqui enjoying her new home, December 2019.
        </p>
      </section>
    </div>
  );
}

export default Contents;
