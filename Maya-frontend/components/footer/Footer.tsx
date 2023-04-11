import React from "react";

enum Tab {
  MENS = "/menstab/Mens",
  WOMENS = "/womenstab/Womens",
  PRODUCTS = "/productstab/Products",
  ABOUT = "/abouttab/About",
  BLOG = "/blogtab/Blog"
}

const Footer = () => {
  return (
    <div className='bottom-0 pb-0 mb-0 relative h-80 bg-gray-200 max-w-full flex items-center '>
      <div className='w-10/12 m-auto'>
        <h1 className=' font-bold text-4xl md:text-5xl'>MAYA</h1>
        <div className=' md:flex md:gap-12 md:text-3xl md:justify-between font-bold text-2xl md:text-4xl mt-14 w-3/4'>
          <a className='hover:text-slate-400' href={Tab.MENS}>
            MAN
          </a>
          <a className='pl-2 hover:text-slate-400' href={Tab.WOMENS}>
            WOMEN
          </a>
          <a className='pl-2 hover:text-slate-400' href={Tab.PRODUCTS}>
            PRODUCTS
          </a>
          <a className='pl-2 hover:text-slate-400' href={Tab.ABOUT}>
            ABOUT US
          </a>
          <a className='pl-2 hover:text-slate-400' href={Tab.BLOG}>
            BLOG
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
