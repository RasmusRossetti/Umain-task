import React, { useState } from "react"
import Link from "next/link"
import Search from "./Search"
import { Tab } from "@/enums/enum"
import MenuIcons from "./MenuIcons"

interface Props {
  setSearchQuery: (searchQuery: string) => void
  searchQuery: string
}

export default function Navbar({ setSearchQuery, searchQuery }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="bg-mayawhite">
      <div className=" flex items-center justify-between h-20 w-10/12 m-auto">
        <Link href="/">
          <h1 className="transition ease-in-out hover:text-slate-300 font-medium text-5xl cursor-pointer">
            MAYA
          </h1>
        </Link>
        <div className="hidden md:flex justify-between items-center font-medium text-4xl gap-12">
          <Link href={Tab.MENS}>
            <p className="transition ease-in-out hover:text-slate-300 cursor-pointer">
              MAN
            </p>
          </Link>
          <Link href={Tab.WOMENS}>
            <p className="transition ease-in-out hover:text-slate-300 cursor-pointer">
              WOMEN
            </p>
          </Link>
          <Link href={Tab.PRODUCTS}>
            <p className="transition ease-in-out hover:text-slate-300 cursor-pointer">
              PRODUCTS
            </p>
          </Link>
          <Link href={Tab.ABOUT}>
            <p className="transition ease-in-out hover:text-slate-300 cursor-pointer">
              ABOUT US
            </p>
          </Link>
          <Link href={Tab.BLOG}>
            <p className="transition ease-in-out hover:text-slate-300 cursor-pointer">
              BLOG
            </p>
          </Link>
        </div>
        <div className="flex justify-center md:hidden ">
          <MenuIcons toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <Search
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
        />
      </div>
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all ease-in-out duration-700 ${
            isMenuOpen ? "opacity-1" : "opacity-0"
          } `}
        >
          <div className="flex flex-col items-center pt-8 pb-6 text-xl ">
            <Link href={Tab.MENS}>
              <p className="hover:animate-pulse cursor-pointer py-2">MAN</p>
            </Link>
            <Link href={Tab.WOMENS}>
              <p className="hover:animate-pulse cursor-pointer py-2">WOMEN</p>
            </Link>
            <Link href={Tab.PRODUCTS}>
              <p className="hover:animate-pulse cursor-pointer py-2">
                PRODUCTS
              </p>
            </Link>
            <Link href={Tab.ABOUT}>
              <p className="hover:animate-pulse cursor-pointer py-2">
                ABOUT US
              </p>
            </Link>
            <Link href={Tab.BLOG}>
              <p className="hover:animate-pulse cursor-pointer py-2">BLOG</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
