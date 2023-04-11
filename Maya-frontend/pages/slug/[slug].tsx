import groq from "groq";
import { useRouter } from "next/router";
import { client, urlFor } from "../../client";
import Icons from "@/components/icons/Icons";
import { GetStaticPropsContext } from "next";
import { SlugProps } from "@/types/props";

const Product = ({ product }: SlugProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container px-5 md:py-52 py-20 mx-auto'>
      <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        <img
          src={urlFor(product.image).width(1000).url()}
          alt=''
          className=' lg:w-1/2 w-full h-[500px] object-cover object-center rounded border border-gray-200'
        />
        <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
          <h1 className=' title-font mb-1 text-gray-800 font-semibold text-4xl uppercase max-w-lg'>
            {product.productName}
          </h1>
          <h2 className='text-gray-500 font-semibold text-2xl uppercase'>
            {product.gender}
          </h2>
          <Icons />
          <p className='mt-1 text-gray-500 font-semibold text-xl uppercase'>
            {product.description}
          </p>
          <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
            <div className='flex'>
              <span className='mr-3'>Color</span>
              <button className='border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
              <button className='border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none'></button>
            </div>
            <div className='flex ml-6 items-center'>
              <span className='mr-3'>Size</span>
              <div className='relative'>
                <select className=' border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10'>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                </select>
                <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='flex'>
            <span className='text-gray-800  font-semibold text-4xl '>
              €{product.price}.00
            </span>
            <button className='font-semibold text-xl uppercase flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 '>
              ADD TO CART
            </button>
            <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = await client.fetch(groq`*[_type == "products"]{slug}`);

  const paths = products.map((product: SlugProps) => ({
    params: { slug: product.slug.current }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as { slug: string };

  const product = await client.fetch(
    groq`*[_type == "products" && slug.current == $slug][0]`,
    { slug }
  );

  return {
    props: {
      product
    },
    revalidate: 60
  };
}

export default Product;
