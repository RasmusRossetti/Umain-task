import Link from "next/link";
import groq from "groq";
import { client, urlFor } from "../client";
import Header from "@/components/header/Header";
import Section from "@/components/section/Section";
import React, { useState } from "react";

interface Props {
  products: {
    _id: string;
    productName: string;
    price: number;
    gender: string;
    sort: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        _ref: string;
      };
    };
  }[];
}

enum Sort {
  New = "new",
  Recycled = "recycled polyamide",
  Sorting = "sort:"
}
const Index = ({ products }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<Sort | null>(null);

  const filteredProducts = selectedFilter
    ? products.filter(
        (product) => product.sort.toLowerCase() === selectedFilter
      )
    : products;

  const handleFilterClick = (filter: Sort) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  return (
    <>
      <Header />
      <Section />
      <div className='flex w-10/12 m-auto justify-between'>
        <h1 className='font-semibold  text-4xl text-mayablack'>
          FEATURED PRODUCTS
        </h1>
        <div className='flex justify-between items-center w-[300px] hidden md:flex'>
          <h1 className='text-mayablack font-semibold  text-4xl'>
            {Sort.Sorting}
          </h1>
          <button
            className={`text-lg p-2 font-semibold border-[2px] ${
              selectedFilter === Sort.Recycled
                ? "text-white bg-green-500 border-green-500"
                : "text-mayablack bg-white border-mayablack"
            }`}
            onClick={() => handleFilterClick(Sort.Recycled)}
          >
            {Sort.Recycled}
          </button>
          <button
            className={`text-lg p-2 font-semibold border-[2px] ${
              selectedFilter === Sort.New
                ? "text-white bg-purple-500 border-purple-500"
                : "text-mayablack bg-white border-mayablack"
            }`}
            onClick={() => handleFilterClick(Sort.New)}
          >
            {Sort.New}
          </button>
        </div>
      </div>
      <div className='bg-white'>
        <div className='w-10/12 m-auto py-8 '>
          <div className=' grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8'>
            {filteredProducts.map((product) => (
              <Link key={product._id} href={`/product/${product.slug.current}`}>
                <div className='group relative'>
                  <div className='h-[400px] md:min-h-[800px] aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 transition ease-in-out'>
                    <p
                      className={`text-lg uppercase text-center p-4 absolute top-3 left-5 bg-white ext-lg font-semibold  ${
                        product.sort.toLowerCase() === "new"
                          ? "text-purple-500"
                          : product.sort.toLowerCase() === "recycled polyamide"
                          ? "text-green-500"
                          : "text-gray-800"
                      }`}
                    >
                      {product.sort}
                    </p>
                    <img
                      src={urlFor(product.image).width(1000).url()}
                      alt=''
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <p className='text-mayablack font-semibold text-3xl md:text-4xl uppercase max-w-lg'>
                          {product.productName}
                        </p>
                      </h3>
                      <p className='mt-1 text-gray-500 font-semibold text-2xl uppercase'>
                        {product.gender}
                      </p>
                    </div>
                    <p className=' text-gray-800  font-semibold text-3xl md:text-4xl'>
                      €{product.price}.00
                    </p>
                  </div>

                  <p className='font-medium text-gray-700  font-semibold text-lg '>
                    Show more
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const products = await client.fetch(groq`*[_type == "products"]`);

  return {
    props: {
      products
    }
  };
}

export default Index;
