import React from "react";

const Section = () => {
  return (
    <div className='w-10/12 m-auto md:pb-16 mt-12'>
      <div className='md:flex md:justify-between'>
        <h1 className='md:w-2/5 font-semibold text-[70px] md:text-[130px] text-mayablack '>
          FUELED TO IMPACT.
          <hr className='mt-16 border-b border-[14px] font-bold border-gray-800 hidden md:block'></hr>
        </h1>
        <div className='md:w-2/5 mt-6 p-0 md:m-14'>
          <p className='text-mayared  font-semibold  text-xl md:text-3xl  '>
            MAYA, Inc. is a team comprised of the Nike, Jordan and Converse
            brands driven by a shared purpose to leave an enduring impact.
          </p>
          <p className='pt-4 text-mayablack font-semibold  text-xl md:text-3xl '>
            We’ve spent 50 years shifting big ideas into scaled, sustainable
            platforms that have changed our products and manufacturing process,
            fueled our design ethos, and championed our athlete community.
          </p>
        </div>
        <hr className='w-3/4 my-8 border-b border-[14px] font-bold border-gray-800 md:hidden'></hr>
      </div>
    </div>
  );
};

export default Section;
