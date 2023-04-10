import React from "react";

const Header = () => {
  return (
    <div className='h-[50rem] md:h-[40rem] bg-[url("../assets/image1.jpg")] bg-center bg-contain bg-no-repeat bg-cover bg-bottom flex items-center'>
      <div className=' w-3/4 md:w-10/12 m-auto '>
        <p className='font-semibold  text-gray-100 text-[30px] md:text-[40px]'>
          OVERLINE
        </p>
        <h1 className='font-semibold  text-mayawhite text-[60px] md:text-[100px]'>
          WELCOME TO MAYA
        </h1>
        <h3 className='font-semibold  text-white text-[20px] md:text-[25px]'>
          Lorem Ipsum sans sin con ipsum. Lorem Ipsum sans sin con <br /> ipsum.
          Lorem Ipsum sans sin con ipsum.
        </h3>
      </div>
    </div>
  );
};

export default Header;
