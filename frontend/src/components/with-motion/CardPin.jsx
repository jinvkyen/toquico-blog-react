"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function CardPin() {
  const items = [
    {
      id: 1,
      title: "Timothy Hay",
      href: "",
    },
    {
      id: 2,
      title: "Lettuce (Romaine)",
      href: "",
    },
    {
      id: 3,
      title: "Banana (Lantundan)",
      href: "",
    },
    {
      id: 4,
      title: "Pellets",
      href: "",
    },
  ];
  return items.map((index) => (
    <div key={index.id} className='h-[14rem] w-[14rem] flex items-center justify-center'>
      <PinContainer href={index.href}>
        <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[12rem] h-[12rem] '>
          <h3 className='max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100'>{index.title}</h3>
          <div className='!m-0 !p-0 font-normal leading-none'>
            <span className='text-slate-500 text-tiny'>Customizable Tailwind CSS and Framer Motion Components.</span>
          </div>
          <img src='/assets/images/hero-toqs.jpg' alt='' className='w-30 h-auto object-cover' />
        </div>
      </PinContainer>
    </div>
  ));
}
