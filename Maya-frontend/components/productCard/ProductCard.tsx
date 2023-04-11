import { urlFor } from "@/client";
import { Paginate } from "@/types/enum";
import { Props } from "@/types/props";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  visibleProducts
}: {
  visibleProducts: Props["products"];
}) => {
  return (
    <div
      data-testid='product-card'
      className=' grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8'
    >
      {visibleProducts.map((product) => (
        <Link key={product._id} href={`/slug/${product.slug.current}`}>
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
              {Paginate.ShowMore}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
