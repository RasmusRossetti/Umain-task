import Link from "next/link"
import React from "react"

enum Tab {
  MENS = "/menstab/Mens",
  WOMENS = "/womenstab/Womens",
  PRODUCTS = "/productstab/Products",
  ABOUT = "/abouttab/About",
  BLOG = "/blogtab/Blog"
}

const Footer = () => {
  return (
    <div className="bottom-0 pb-0 mb-0 relative h-80 bg-gray-200 max-w-full flex items-center ">
      <div className="w-10/12 m-auto">
        <Link href="/">
          <h1 className=" font-bold text-4xl md:text-5xl">MAYA</h1>
        </Link>
        <div className=" md:flex md:gap-12 md:text-3xl md:justify-between font-bold text-2xl md:text-4xl mt-14 w-3/4">
          <Link href={Tab.MENS}>
            <p className="hover:text-slate-400">MAN</p>
          </Link>
          <Link href={Tab.WOMENS}>
            <p className="pl-2 hover:text-slate-400">WOMEN</p>
          </Link>
          <Link href={Tab.PRODUCTS}>
            <p className="pl-2 hover:text-slate-400">PRODUCTS</p>
          </Link>
          <Link href={Tab.ABOUT}>
            <p className="pl-2 hover:text-slate-400">ABOUT US</p>
          </Link>
          <Link href={Tab.BLOG}>
            <p className="pl-2 hover:text-slate-400">BLOG</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
