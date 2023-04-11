import { Paginate } from "@/enums/enum"
import React from "react"

interface Props {
  handlePageClick: (page: number) => void
  currentPage: number
}

const Pagination = ({ handlePageClick, currentPage }: Props) => {
  return (
    <div className="flex items-center justify-between w-3/5 m-auto p-12">
      <p
        className="transition ease-in-out hover:text-slate-300 text-2xl text-center cursor-pointer"
        onClick={() => handlePageClick(currentPage - 1)}
      >
        {Paginate.Previous}
      </p>
      <p
        className="transition ease-in-out hover:text-slate-300 text-2xl text-center cursor-pointer"
        onClick={() => handlePageClick(currentPage + 1)}
      >
        {Paginate.Next}
      </p>
    </div>
  )
}

export default Pagination
