"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowCircleDown } from "@phosphor-icons/react";

export default function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className='bg-gradient-to-br from-pink-50 to-pink-500 py-4 bg-clip-text text-center text-3xl md:text-5xl font-black tracking-tight text-transparent lg:text-7xl'>
        Bebi's Timeline <br />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className='flex flex-col items-center justify-center bg-gradient-to-br leading-tight -mt-8 md:-mt-12 from-pink-100 to-pink-500 py-4 bg-clip-text text-center text-base md:text-xl font-medium tracking-tight text-transparent'>
        Follow the mini adventures of our beloved pet. <br />
        <ArrowCircleDown
          size={32}
          className='relative top-0 mt-20 text-pink-400/90 animate-bounce transition ease-in-out duration-900'
        />
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-pink-950 w-full z-0",
        className
      )}>
      <div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-pink-50 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
          <div className='absolute  w-[100%] left-0 bg-pink-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  w-40 h-[100%] left-0 bg-pink-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-pink-50 text-white [--conic-position:from_290deg_at_center_top]'>
          <div className='absolute  w-40 h-[100%] right-0 bg-pink-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute  w-[100%] right-0 bg-pink-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-pink-950 blur-2xl'></div>
        <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-pink-500 opacity-50 blur-3xl'></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-pink-400 blur-2xl'></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute inset-auto z-50 h-0.5 !w-[20rem] -translate-y-[7rem] bg-pink-300 '></motion.div>

        <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-pink-950 '></div>
      </div>
      <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>{children}</div>
    </div>
  );
};
