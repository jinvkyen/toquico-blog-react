"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

export function Threecard() {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
        <CardItem
          translateZ='50'
          className='text-lg md:text-xl font-bold text-neutral-600 dark:text-white leading-tight'>
          We make friends along the way.
        </CardItem>
        <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Hover over this card!
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-6'>
          <img
            src='/assets/images/hero-toqs.jpg'
            className='max-h-52 md:max-h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='flex justify-between items-center mt-8 text-tiny md:text-lg'>
          <Link to='/home' className='logo flex items-center space-x-2 z-50'>
            Get to know her →
          </Link>
          <Link to='/login' className='logo flex items-center space-x-2 z-50'>
            <button className='text-tiny md:text-lg rounded-md bg-gray-800 px-6 py-2.5 text-white transition-colors hover:bg-gray-600 focus:outline-none'>
              Sign In
            </button>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
