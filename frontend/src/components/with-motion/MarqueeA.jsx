"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Link } from "react-router-dom";

export function MarqueeA() {
  const images = [
    "/assets/images/gallery/about-toqs.jpg",
    "/assets/images/gallery/antoq.jpg",
    "/assets/images/gallery/antoqi.jpg",
    "/assets/images/gallery/boo.jpg",
    "/assets/images/gallery/beb.jpg",
    "/assets/images/gallery/butt.jpg",
    "/assets/images/gallery/derp.jpg",
    "/assets/images/gallery/ear-no.jpg",
    "/assets/images/gallery/noot.jpg",
    "/assets/images/gallery/antoqi.jpg",
    "/assets/images/gallery/poopi.jpg",
    "/assets/images/gallery/goof.JPEG",
    "/assets/images/gallery/ribbon.JPEG",
    "/assets/images/gallery/poopi.jpg",
    "/assets/images/gallery/noot.jpg",
    "/assets/images/gallery/ear-no.jpg",
    "/assets/images/gallery/noOt.JPEG",
    "/assets/images/gallery/antoqi.jpg",
    "/assets/images/gallery/antoq.jpg",
    "/assets/images/gallery/about-toqs.jpg",
    "/assets/images/gallery/bebs.JPEG",
    "/assets/images/gallery/goof.JPEG",
    "/assets/images/gallery/noOt.JPEG",
    "/assets/images/gallery/ribbon.JPEG",
    "/assets/images/gallery/noOt.JPEG",
    "/assets/images/gallery/goof.JPEG",
    "/assets/images/gallery/bebs.JPEG",
    "/assets/images/gallery/goof.JPEG",
    "/assets/images/gallery/noOt.JPEG",
    "/assets/images/gallery/ribbon.JPEG",
    "/assets/images/gallery/noOt.JPEG",
    "/assets/images/gallery/goof.JPEG",
    "/assets/images/gallery/about-toqs.jpg",
    "/assets/images/gallery/antoq.jpg",
    "/assets/images/gallery/antoqi.jpg",
    "/assets/images/gallery/boo.jpg",
    "/assets/images/gallery/beb.jpg",
    "/assets/images/gallery/butt.jpg",
    "/assets/images/gallery/ear-no.jpg",
    "/assets/images/gallery/noot.jpg",
    "/assets/images/gallery/poopi.jpg",
  ];
  return (
    <div className='relative -top-16 mx-auto flex h-screen w-full max-w-8xl flex-col items-center justify-center overflow-hidden'>
      <h2 className='relative z-20 mx-auto max-w-4xl text-center text-3xl font-bold text-balance leading-none text-white md:text-4xl lg:text-6xl'>
        Welcome, <br /> and meet{" "}
        <span className='relative z-20 inline-block rounded-xl bg-pink-700/35 px-6 py-1 text-white underline decoration-pink-700 decoration-[6px] underline-offset-[16px] backdrop-blur-sm'>
          Toqui!
        </span>
      </h2>
      <p className='relative z-20 px-4 md:mx-auto max-w-2xl py-8 text-center text-neutral-200 text-base'>
        A charming New Zealand rabbit with a soft, snowy-white coat and a gentle personality. Playful yet calm, she
        loves hopping around, munching on fresh veggies, and snuggling in cozy spots.
      </p>
      <div className='cursor-pointer relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4'>
        <Link to='login'>
          <button className='cursor-pointer rounded-md bg-pink-700 px-6 py-2.5 text-tiny font-medium text-white transition-colors hover:bg-pink-700/80 focus:outline-none'>
            Join the club
          </button>
        </Link>
        <a href='#about-her'>
          <button className='cursor-pointer rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-tiny font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none'>
            Read more
          </button>
        </a>
      </div>
      {/* overlay */}
      <div className='absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40' />
      <ThreeDMarquee className='pointer-events-none absolute inset-0 h-full w-full' images={images} />
    </div>
  );
}
