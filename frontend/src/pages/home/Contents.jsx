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
    <div className='container mx-auto font-satoshi mt-32 px-0'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center p-6'>
        {/* Column 1 */}
        <div className='col-span-1'>
          <img
            src='/assets/images/desk-toqs.png'
            className='md:ml-16 h-auto w-auto flex-grow object-cover rounded-full bg-gradient-to-b from-toquiPrimary to-yellow-100'
            alt='Toquipush'
          />
        </div>

        {/* Column 2 */}
        <div className='rounded-lg col-span-2 justify-start mt-8 md:mx-24 mx-auto ml-0'>
          <h2 className='mb-4 text-3xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
            About <span className='text-toquiPrimary font-black'>Her</span>
          </h2>
          <div className='text-gray-800 text-left text-wrap'>
            <p className='text-base'>
              She was born in a different home, where she lived with her mother and sister. As she grew older, she and
              her sibling were given away by their previous owners. Her new owner bought her just before his
              granddaughter’s birthday. In her new household, her birthday is celebrated on December 18, 2019.
            </p>
            <br />
            <br />
            <p>
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
                className='relative left-1/3 -translate-x-1/2 -top-24 p-4 bg-gray-50 shadow-lg rounded-lg
                   text-white w-56 z-1 flex flex-col items-center'>
                <button
                  className='absolute right-0 top-0 bg-transparent rounded-md p-4 justify-end
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
      <div className='md:p-12 rounded-lg col-span-2 flex flex-col justify-center items-center mt-32'>
        <h2 className='mb-4 text-3xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
          <span className='text-toquiPrimary font-black'>Personality</span> Traits
        </h2>
        <Personalities />
      </div>
      {/* Favorite Foods - FAQ */}
      <section className='relative z-20 overflow-hidden dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full'>
              <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
                <span className='mb-2 block text-lg font-semibold text-red-500'>FAQ</span>
                <h2 className='mb-4 text-3xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
                  Favorite <span className='text-toquiPrimary font-black'>Foods</span>
                </h2>
                <p className='dark:text-dark-6 text-gray-800'>
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
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 place-items-center'>
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

      {/* Video */}
      <section className='mx-auto flex flex-col items-center justify-center pb-40'>
        <h2 className='mb-4 text-3xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
          <span className='text-toquiPrimary font-black'>Fyrst sceawung</span>
        </h2>
        <div className='w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3'>
          <span className='w-3 h-3 rounded-full bg-red-400'></span>
          <span className='w-3 h-3 rounded-full bg-yellow-400'></span>
          <span className='w-3 h-3 rounded-full bg-green-400'></span>
        </div>
        <div className='bg-gray-700 border-t-0 w-full h-auto flex justify-center'>
          <div className='flex flex-col md:p-16 md:rounded-3xl'>
            <video
              width='900'
              height='220'
              className='aspect-square md:aspect-video object-cover rounded bg-black'
              controls
              autoPlay
              muted>
              <source src='/assets/video/bebi-toqs.MP4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contents;
