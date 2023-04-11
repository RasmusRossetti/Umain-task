import { Sort } from "@/types/enum";
import React from "react";

interface Props {
  selectedFilter: Sort | null;
  handleFilterClick: (filter: Sort) => void;
}

const FilterButtons = ({ selectedFilter, handleFilterClick }: Props) => {
  return (
    <div className='flex justify-between items-center w-[300px] hidden md:flex'>
      <h1 className='text-mayablack font-semibold  text-4xl'>{Sort.Sorting}</h1>
      <button
        data-testid='recycled'
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
        data-testid='new'
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
  );
};

export default FilterButtons;
