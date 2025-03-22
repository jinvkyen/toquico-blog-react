"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleGallery() {
  const cards = bebi.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className='w-full h-full py-20'>
      <h2 className='mb-4 text-3xl text-dark dark:text-white sm:text-[40px]/[48px] font-medium'>
        <span className='text-toquiPrimary font-black'>Gallery</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({ title, src }) => {
  return (
    <div className='dark:bg-neutral-800 p-8 md:p-14 mb-4 overflow-clip'>
      <p className='text-white dark:text-neutral-400 text-base md:text-2xl font-satoshi max-w-3xl mx-auto'>
      </p>
      <img
        src={src}
        alt={title}
        height='200'
        width='200'
        className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl'
      />
    </div>
  );
};

const defaultItems = [
  { id: 1, image: `assets/images/gallery/about-toqs.jpg`, text: "with a fren" },
  { id: 2, image: `assets/images/gallery/antoq.jpg`, text: "aaA" },
  { id: 3, image: `assets/images/gallery/antoqi.jpg`, text: "daydreamer" },
  { id: 4, image: `assets/images/gallery/angy.jfif`, text: "angy" },
  { id: 5, image: `assets/images/gallery/bebe.jpg`, text: "bebi" },
  { id: 6, image: `assets/images/gallery/baby.jfif`, text: "baby" },
  { id: 7, image: `assets/images/gallery/beep.jfif`, text: "one foot up" },
  { id: 8, image: `assets/images/gallery/boop.jfif`, text: "cutie" },
  { id: 9, image: `assets/images/gallery/side-eye.jfif`, text: "bombastic side eye" },
  { id: 10, image: `assets/images/gallery/babyp.jfif`, text: "wawa" },
  { id: 11, image: `assets/images/gallery/uhm.jfif`, text: "uhm..." },
  { id: 12, image: `assets/images/gallery/sideeye2.jfif`, text: '"what now...?"' },
  { id: 13, image: `assets/images/gallery/us.jfif`, text: "with us" },
  { id: 14, image: `assets/images/gallery/beb.jpg`, text: "noot" },
  { id: 15, image: `assets/images/gallery/what.jpg`, text: "deadass look" },
  { id: 16, image: `assets/images/gallery/derp.jpg`, text: "derp face" },
  { id: 17, image: `assets/images/gallery/boo.jpg`, text: "boop" },
  { id: 18, image: `assets/images/gallery/butt.jpg`, text: "buttocks" },
  { id: 19, image: `assets/images/gallery/poopi.jpg`, text: "poopi" },
  { id: 20, image: `assets/images/gallery/noOt.JPEG`, text: "nose" },
  { id: 21, image: `assets/images/gallery/ascend.JPEG`, text: "ascended" },
  { id: 22, image: `assets/images/gallery/bday.JPEG`, text: "5th birthday" },
  { id: 23, image: `assets/images/gallery/chismis.JPEG`, text: "gossip girl" },
  { id: 24, image: `assets/images/gallery/look.JPEG`, text: "look-y" },
  { id: 25, image: `assets/images/gallery/moth.JPEG`, text: "moth" },
  { id: 26, image: `assets/images/gallery/one-ear.JPEG`, text: "one ear" },
  { id: 27, image: `assets/images/gallery/run.JPEG`, text: "running beb" },
  { id: 28, image: `assets/images/gallery/wine.JPEG`, text: "wine enthusiast" },
];

const bebi = defaultItems.map((item) => ({
  category: "Bebi Photos",
  title: item.text,
  src: item.image,
  content: <Content title={item.text} src={item.image} />,
}));

