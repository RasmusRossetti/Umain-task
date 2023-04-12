import Image from "next/image"
import React from "react"
import CloseIcon from "@/assets/close-icon.svg"

interface Props {
  toggleMenu: () => void
  isMenuOpen: boolean
}

const MenuIcons = ({ toggleMenu, isMenuOpen }: Props) => {
  return (
    <button onClick={toggleMenu}>
      {isMenuOpen ? (
        <Image
          className=" fill-current text-gray-700"
          priority
          src={CloseIcon}
          alt="Close icon"
        />
      ) : (
        <div className="space-y-2 rotate-180">
          <div className="w-5 h-0.5  bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
        </div>
      )}
    </button>
  )
}

export default MenuIcons
