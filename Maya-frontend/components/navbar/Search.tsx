import Image from "next/image"
import React, { useRef } from "react"
import SearchIcon from "@/assets/search.svg"
interface Props {
  searchQuery: string
  handleSearchQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ searchQuery, handleSearchQueryChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div
      className="hidden md:flex justify-center items-center"
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className="text-2xl p-2 "
        placeholder="SEARCH"
      />
      <Image
        className="fill-slate-400 cursor-pointer"
        priority
        src={SearchIcon}
        alt="Search icon"
      />
    </div>
  )
}

export default Search
