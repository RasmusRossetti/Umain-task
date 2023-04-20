import groq from "groq"
import { client } from "@/client"
import Header from "@/components/header/Header"
import Section from "@/components/section/Section"
import React, { useState } from "react"
import { Product } from "@/models/Products"
import { Sort } from "@/enums/enum"
import Pagination from "@/components/pagination/Pagination"
import FilterButtons from "@/components/filterbuttons/FilterButtons"
import ProductCard from "@/components/productCard/ProductCard"

interface IndexProps {
  products: Product[]
  searchQuery: string
}

const PAGE_SIZE = 4

const Index = ({ products, searchQuery }: IndexProps) => {
  const [selectedFilter, setSelectedFilter] = useState<Sort | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProducts = selectedFilter
    ? products.filter(
        (product) => product.sort.toLowerCase() === selectedFilter
      )
    : products.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(searchQuery.toLowerCase() || "")
      )

  const pageCount = Math.ceil(filteredProducts.length / PAGE_SIZE)

  const handleFilterClick = (filter: Sort) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter))
    setCurrentPage(1)
  }

  const handlePageClick = (page: number) => {
    if (page < 1 || page > pageCount) {
      return
    }
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const visibleProducts = filteredProducts.slice(startIndex, endIndex)

  return (
    <>
      <Header />
      <Section />
      <div className="flex w-10/12 m-auto justify-between">
        <h1 className="font-semibold  text-4xl text-mayablack">
          FEATURED PRODUCTS
        </h1>
        <FilterButtons
          selectedFilter={selectedFilter}
          handleFilterClick={handleFilterClick}
        />
      </div>
      <div className="bg-white">
        <div className="w-10/12 m-auto py-8 ">
          <ProductCard visibleProducts={visibleProducts} />
        </div>
        <Pagination
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(groq`*[_type == "products"]`)

  return {
    props: {
      products
    }
  }
}

export default Index
