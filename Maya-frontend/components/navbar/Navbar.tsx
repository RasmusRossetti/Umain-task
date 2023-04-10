import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  {
    console.log(isMenuOpen);
  }

  return (
    <div className='bg-mayawhite'>
      <div className=' flex items-center justify-between h-20 w-10/12 m-auto'>
        <Link href='/'>
          <h1 className='transition ease-in-out hover:text-slate-300 font-medium text-5xl cursor-pointer'>
            MAYA
          </h1>
        </Link>
        <div className='hidden md:flex justify-between items-center font-medium text-4xl gap-12'>
          <Link href='/menstab/Mens'>
            <p className='transition ease-in-out hover:text-slate-300 cursor-pointer'>
              MAN
            </p>
          </Link>
          <Link href='/womenstab/Womens'>
            <p className='transition ease-in-out hover:text-slate-300 cursor-pointer'>
              WOMEN
            </p>
          </Link>
          <Link href='/productstab/Products'>
            <p className='transition ease-in-out hover:text-slate-300 cursor-pointer'>
              PRODUCTS
            </p>
          </Link>
          <Link href='/abouttab/About'>
            <p className='transition ease-in-out hover:text-slate-300 cursor-pointer'>
              ABOUT US
            </p>
          </Link>
          <Link href='/blog/Blog'>
            <p className='transition ease-in-out hover:text-slate-300 cursor-pointer'>
              BLOG
            </p>
          </Link>
        </div>
        <div className='flex justify-center md:hidden '>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 fill-current text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  d='M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 fill-current text-gray-700'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M1.625 3.125h16.75a.625.625 0 110 1.25H1.625a.625.625 0 110-1.25zm0 5h16.75a.625.625 0 110 1.25H1.625a.625.625 0 110-1.25zm0 5h16.75a.625.625 0 110 1.25H1.625a.625.625 0 110-1.25z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </button>
        </div>
        <div className='hidden md:block'>
          <input className='text-2xl p-2' placeholder='search' type='text' />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all ease-in-out duration-700 ${
            isMenuOpen ? "opacity-1" : "opacity-0"
          } `}
        >
          <div className='flex flex-col items-center pt-8 pb-6 text-xl '>
            <Link href='/menstab/Mens'>
              <p className='hover:animate-pulse cursor-pointer py-2'>MAN</p>
            </Link>
            <Link href='/womenstab/Womens'>
              <p className='hover:animate-pulse cursor-pointer py-2'>WOMEN</p>
            </Link>
            <Link href='/productstab/Products'>
              <p className='hover:animate-pulse cursor-pointer py-2'>
                PRODUCTS
              </p>
            </Link>
            <Link href='/about/About'>
              <p className='hover:animate-pulse cursor-pointer py-2'>
                ABOUT US
              </p>
            </Link>
            <Link href='/blog/Blog'>
              <p className='hover:animate-pulse cursor-pointer py-2'>BLOG</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
