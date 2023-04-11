import Image from "next/image"
import React from "react"
import HamburgerMenu from "@/assets/burger-menu.svg"
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
        <Image priority src={HamburgerMenu} alt="Hamburger icon" />
      )}
    </button>
  )
}

export default MenuIcons
