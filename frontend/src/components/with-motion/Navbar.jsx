"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <NavbarContent className='sticky z-0' />
    </div>
  );
}

{
  /* <div className='flex flex-col space-y-4 text-sm'>
  <HoveredLink href='/web-dev'>About Her</HoveredLink>
  <HoveredLink href='/interface-design'>Timeline</HoveredLink>
  <HoveredLink href='/seo'>Fun Facts</HoveredLink>
  <HoveredLink href='/branding'>Branding</HoveredLink>
</div> */
}
function NavbarContent({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link to='/timeline'>
          <MenuItem setActive={setActive} item='Timeline'></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item='Highlights'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <Link to='/'>
              <ProductItem
                title='Algochurn'
                href='https://algochurn.com'
                src='https://assets.aceternity.com/demos/algochurn.webp'
                description='Prepare for tech interviews like never before.'
              />
            </Link>
            <Link to='/'>
              <ProductItem
                title='Algochurn'
                href='https://algochurn.com'
                src='https://assets.aceternity.com/demos/algochurn.webp'
                description='Prepare for tech interviews like never before.'
              />
            </Link>
            <Link to='/'>
              <ProductItem
                title='Algochurn'
                href='https://algochurn.com'
                src='https://assets.aceternity.com/demos/algochurn.webp'
                description='Prepare for tech interviews like never before.'
              />
            </Link>
            <Link to='/'>
              <ProductItem
                title='Algochurn'
                href='https://algochurn.com'
                src='https://assets.aceternity.com/demos/algochurn.webp'
                description='Prepare for tech interviews like never before.'
              />
            </Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Fun Facts'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>Hobby</HoveredLink>
            <HoveredLink href='/individual'>Individual</HoveredLink>
            <HoveredLink href='/team'>Team</HoveredLink>
            <HoveredLink href='/enterprise'>Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
