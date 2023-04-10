import Link from "next/link";
import groq from "groq";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const Index = ({ products }: any) => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center max-w-lg'>
          <div className='mb-5'>
            <h1 className='text-7xl TEXT text-center font-extrabold text-blue-600'>
              UNDER CONSTRUCTION
            </h1>
          </div>
          <h3 className='mb-3 text-2xl font-bold text-center text-gray-700'>
            Temporarily down for maintenance We’ll be back soon!
          </h3>
          <p className='text-sm text-center text-gray-600'>
            Sorry for the inconvenience but this page is a work in progress{" "}
            <br />
            <a className='text-blue-600 hover:underline'>Contact us </a>,
            otherwise we’ll be back online shortly! — The Team
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
