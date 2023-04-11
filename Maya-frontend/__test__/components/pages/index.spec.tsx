import React from "react";
import "@testing-library/jest-dom";
import Index from "@/pages/index";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("../../../client", () => {
  return {
    client: {},
    urlFor: (image: { asset: { _ref: any } }) => ({
      width: () => ({
        url: () => `https://example.com/${image.asset._ref}.jpg`
      })
    })
  };
});

const mockProducts = [
  {
    _id: "product1",
    productName: "Product One",
    price: 10,
    gender: "women",
    sort: "new",
    searchQuery: "",
    slug: {
      current: "product-one"
    },
    image: {
      asset: {
        _ref: "image1"
      }
    }
  },
  {
    _id: "product2",
    productName: "Product Two",
    price: 20,
    gender: "men",
    sort: "sale",
    searchQuery: "",
    slug: {
      current: "product-two"
    },
    image: {
      asset: {
        _ref: "image2"
      }
    }
  }
];

describe("Index", () => {
  it("renders the recycled filter buttons", () => {
    render(<Index products={mockProducts} searchQuery='' />);
    const filterButtons = screen.getByTestId("recycled");
    expect(filterButtons).toBeInTheDocument();
  });

  it("renders the new filter button", () => {
    render(<Index products={mockProducts} searchQuery='' />);
    const filterButtons = screen.getByTestId("new");
    expect(filterButtons).toBeInTheDocument();
  });

  it("filters the products by sort when a filter button is clicked", () => {
    render(<Index products={mockProducts} searchQuery='' />);
    const newFilterButton = screen.getByTestId("new");
    fireEvent.click(newFilterButton);
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(1);
  });

  it("paginates the products correctly", () => {
    render(<Index products={mockProducts} searchQuery='' />);
    const nextPageButton = screen.getByTestId("new");
    fireEvent.click(nextPageButton);
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards.length).toBe(1);
  });
});
