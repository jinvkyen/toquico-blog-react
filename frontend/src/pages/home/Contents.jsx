import { Personalities } from "@/components/with-motion/Personalities";
import AccordionItem from "@/components/ui/AccordionItem";
import BlogCard from "@/components/ui/BlogCard";
import { AppleGallery } from "@/components/with-motion/AppleGallery";
import React, { useState, useRef } from "react";
import { X, Heart, PawPrint, Star } from "@phosphor-icons/react";
import MarqueeB from "@/components/with-motion/MarqueeB";

function Contents() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("story");
  const tooltipRef = useRef(null);

  // Age
  const ageInMonths = 5;

  // Nicknames organized by family member
  const nicknames = {
    Lolo: ["Toki"],
    Lola: ["Toquilicious"],
    "Tita Yaya": ["Beb", "Bebi", "Bebeep", "Ebeb", "Baby", "Bbitt", "Anak", "Babycorn"],
    Mama: ["Anak", "Bebi", "Ebebs", "Babycorndog", "Bibbi"],
  };
  return (
    <div id='about-her' className='container mx-auto font-satoshi my-10 px-0 w-full'>
      <div className='container mx-auto px-0'>
        <h2 className='text-center text-4xl md:text-5xl font-bold mb-10'>
          About <span className='text-pink-600'>Her</span>{" "}
          <Heart className='inline-block text-pink-500 ml-2' size={50} />
        </h2>

        {/* Profile Card & Image Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'>
          {/* Image with decorative elements */}
          <div className='relative flex justify-center'>
            <div className='absolute inset-0 bg-yellow-300 rounded-full blur-3xl opacity-20'></div>
            <div className='absolute -top-6 -right-4 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-60'></div>
            <div className='absolute -bottom-8 -left-4 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-70'></div>

            <img
              src='/assets/images/desk-toqs.png'
              className='relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl bg-gradient-to-r from-yellow-50 to-pink-700/60 shadow-xl transform hover:scale-105 transition-transform duration-300'
              alt='Toqui'
            />

            {/* Floating paw prints */}
            <PawPrint className='absolute top-12 right-12 text-pink-400 animate-bounce' size={30} />
            <PawPrint className='absolute bottom-16 left-10 text-yellow-500 animate-bounce delay-100' size={37} />
            <PawPrint className='absolute top-28 left-14 text-pink-300 animate-bounce delay-200' size={42} />
          </div>

          {/* Profile Card */}
          <div className='bg-white rounded-2xl shadow-xl p-6 border-2 border-pink-200 transform hover:translate-y-[-5px] transition-all'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-2xl font-bold text-pink-600'>Profile Card</h3>
              <Star className='text-yellow-400' fill='#FBBF24' size={47} />
            </div>

            <div className='space-y-4'>
              <div className='border-b border-pink-100 pb-3'>
                <p className='text-gray-500 text-sm font-medium'>Name</p>
                <p className='font-semibold text-gray-800'>Toqui Leticia "Cloud" Marie Batumbakal Tipon</p>
              </div>

              <div className='border-b border-pink-100 pb-3'>
                <p className='text-gray-500 text-sm font-medium'>Breed</p>
                <div className='flex items-center'>
                  <p className='font-semibold text-gray-800'>New Zealand Rabbit</p>
                  <div className='ml-2 bg-pink-100 p-1 rounded-md'>
                    <img
                      src='/api/placeholder/120/80'
                      alt='New Zealand Map'
                      className='h-6 w-10 object-cover rounded'
                    />
                  </div>
                </div>
              </div>

              <div className='border-b border-pink-100 pb-3'>
                <p className='text-gray-500 text-sm font-medium'>Age</p>
                <p className='font-semibold text-gray-800'>
                  <span
                    className='text-pink-500 underline cursor-pointer'
                    onClick={() => setIsTooltipVisible(true)}
                    ref={tooltipRef}>
                    {ageInMonths} months
                  </span>
                  {isTooltipVisible && (
                    <div
                      className='absolute left-28 md:left-32 -mt-16 z-10 bg-gray-50 shadow-lg rounded-lg p-4 text-white
            w-56 flex flex-col items-center'>
                      <button
                        className='absolute right-0 left top-0 bg-transparent rounded-md p-4
              text-black transition-all duration-300 ease-in-out'
                        onClick={() => setIsTooltipVisible(false)}>
                        <X size={16} />
                      </button>
                      <p className='text-center text-gray-500 text-base mt-4'>
                        Please do not mention "years" 'cause it's very rude. thnx 🐰
                      </p>
                    </div>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Story and Nicknames */}
        <div className='bg-white rounded-2xl shadow-xl p-6 mb-10 border-2 border-pink-200'>
          <div className='flex mb-6 border-b border-pink-100'>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "story" ? "text-pink-600 border-b-2 border-pink-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("story")}>
              Her Story
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "nicknames" ? "text-pink-600 border-b-2 border-pink-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("nicknames")}>
              Nicknames
            </button>
          </div>

          {activeTab === "story" && (
            <div className='prose max-w-none text-balance leading-relaxed'>
              <div className='bg-pink-50 p-6 rounded-xl border-l-4 border-pink-300 italic text-gray-700'>
                <p className='text-pink-800 mb-4'>Dearest Toqui,</p>
                <p className='mb-3'>
                  You came into our lives from another home, where you once lived with your mother and sister. It was
                  our first time caring for a rabbit, so everything was new to us. We never knew how much joy a little
                  bundle of fur could bring.
                </p>
                <p className='mb-3'>
                  At just 5 months old (and let's keep it that way!), you've already filled our days with laughter,
                  occasional furniture destruction, and endless love.
                </p>
                <p className='mb-3'>
                  Every morning, when I see your twitching nose and curious eyes, I'm reminded of how fortunate we are
                  to have you as part of our family.
                </p>
                <p className='text-right font-medium'>
                  With all our love,
                  <br />
                  Your Humans
                </p>
              </div>
            </div>
          )}

          {activeTab === "nicknames" && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {Object.entries(nicknames)
                .sort()
                .map(([familyMember, names]) => (
                  <div
                    key={familyMember}
                    className='bg-gradient-to-r from-pink-50 to-yellow-50 p-4 rounded-xl border border-pink-200'>
                    <h4 className='font-bold text-gray-700 mb-2'>{familyMember} calls her:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {names.sort().map((nickname) => (
                        <span
                          key={nickname}
                          className='bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600 border border-pink-100'>
                          {nickname}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {/* Marquee of non-edible things */}

      <MarqueeB />

      {/* Add some floating decorative elements */}
      <div className='fixed -z-10 top-1/4 left-10 w-16 h-16 bg-pink-300 rounded-full blur-xl opacity-20 animate-float'></div>
      <div className='fixed -z-10 bottom-1/3 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-30 animate-float delay-700'></div>

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
        <div className='container mx-auto px-0'>
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
