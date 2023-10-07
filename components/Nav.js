"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>

      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl x:text-x xl:rounded-full ">


        {navData.map((link, index) => {
          return (
            <Link className={` ${pathname === link.path && 'text-accent'}`}
              href={link.path}
              key={index} >

              {/* tooltips */}
              {/* <div className='group relative flex  p-[3px] '>

                <div className='absolute hidden group-hover:block bg-white p-2 rounded shadow-lg right-3 rounded-[3px] '>
                  <div className=' text-[12px] leading-none font-semibold capitalize  text-primary items-center'>

                    {link.name}

                  </div>
                </div>

              </div> */}


              <div className='group relative flex text-primary items-center p-[1px] rounded-[3px] text-[12px] leading-none font-semibold capitalize'>

                <div className='my-10 absolute hidden group-hover:block bg-white p-2 rounded shadow-lg right-0  '>
                  {/* arrow */}
                {/* <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div> */}
                  {link.name}
                  
                </div>

              </div> 

              {/* 
<div className=' group relative flex text-primary items-center p-[1px]>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>

                  <div className=' absolute hidden group-hover:block text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>

                </div>
              </div> */}






              {/* check */}






              {/* icons */}
              <div> {link.icon} </div>

            </Link>
          );
        })}


      </div>
    </nav >
  );
};

export default Nav;
