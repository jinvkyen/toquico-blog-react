import React from "react";
import { Timeline } from "@/components/ui/timeline";

const TimelineContent = () => {
  const data = [
    {
      title: "Early 2019",
      content: (
        <div>
          <h1 className='text-2xl font-black mb-8'>First arrival</h1>
          <img src='/assets/images/gallery/bebi-toqui.jpg' className='w-full mb-8 aspect-3/2' alt='' />

          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            Before being a free roam rabbit, Toqui was caged because her new owner was a dumbass. (Still is...)
          </p>
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/babyp.jfif'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/baby.jfif'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/baby-wawa.jpg'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/litol.jpg'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>1st Birthday!</h1>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            In her 2nd birthday, she ate a lot of her favorite food: Timothy hay.
          </p>
          <p className='text-gray-200 dark:text-neutral-200 text-tiny md:text-base font-normal mb-8'>
            She is an official free roam rabbit now! She can run around the house and do whatever she wants.
          </p>
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/1stbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/1stbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>2nd Birthday!</h1>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            In her 2nd birthday, she ate a lot of her favorite food: Timothy hay. She also tried her first apple tree
            branch for the first time as a treat.
          </p>
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/2ndbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/2ndbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/2ndbday3.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/2ndbday4.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>3rd Birthday!</h1>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            Her third birthday was special. She ate a lot of her favorite food: Timothy hay, mango and grapes! She also
            got a new cage, but she didn't like it.
          </p>
          <p className='text-gray-200 dark:text-neutral-200 text-tiny md:text-base font-normal mb-8'>
            She only uses her cage for needed vet appointments :){" "}
          </p>{" "}
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/3rdbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/3rdbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/3rdbday3.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/3rdbday4.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>4th Birthday!</h1>
          <div className='w-full rounded overflow-hidden mb-8'>
            <video
              className='w-full aspect-video object-cover bg-black'
              controls
              poster='/assets/images/gallery/4thbday.JPEG'
              preload='metadata'>
              <source src='/assets/video/4thbday.MP4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            She celebrated her 4th birthday with a cake and treats made from her favorite food: Timothy hay!{" "}
          </p>
          <p className='text-gray-200 dark:text-neutral-200 text-tiny md:text-base font-normal mb-8'>
            The cake was too hard for her liking. She got tired of biting the cake, then suddenly felt exhausted and
            eventually fell asleep. lol
          </p>
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/4thbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/4thbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>5th Birthday!</h1>
          <div className='w-full rounded overflow-hidden mb-8'>
            <video
              className='w-full aspect-video object-cover bg-black'
              controls
              poster='/assets/images/gallery/5thbdayt.JPEG'
              preload='metadata'>
              <source src='/assets/video/5thbday.MP4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            On her 5th birthday, she celebrated with her family, enjoying a quiet and cozy day together.
          </p>
          <p className='text-gray-200 dark:text-neutral-200 text-tiny md:text-base font-normal mb-8'>
            Feeling a bit restless, she decided to step outside to hide from them. hehe
          </p>
          {/* images */}
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/5thbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/5thbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-50 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          {/* title */}
          <h1 className='text-2xl font-black'>6th Birthday!</h1>
          {/* description */}
          <p className='text-gray-200 dark:text-neutral-200 text-base md:text-lg font-normal mb-8'>
            to be continued...{" "}
          </p>

          {/* <p className='text-gray-200 dark:text-neutral-200 text-tiny md:text-base font-normal mb-8'>
            She is an official free roam rabbit now! She can run around the house and do whatever she wants.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <img
              src='/assets/images/gallery/2ndbday.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/assets/images/gallery/2ndbday2.JPEG'
              alt='startup template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
};

export default TimelineContent;
