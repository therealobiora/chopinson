"use client";

import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const CollectionPage = () => {
  const [sortOption, setSortOption] = useState("best-selling");
  const [accordionOpen, setAccordionOpen] = useState({});
  const [gridColumns, setGridColumns] = useState(4);

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const accordionData = [
    {
      title: "Availability",
      options: ["In stock ( 10 )", "Out of stock ( 1 )"],
    },
    {
      title: "Price",
      options: (
        <div className="flex space-x-2 items-center">
          <input
            type="number"
            placeholder="$0"
            className="border p-1 w-24 text-center rounded-md"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="$765"
            className="border p-1 w-24 text-center rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Color",
      options: [
        { label: "Beige ( 3 )", color: "#f5f5dc" },
        { label: "Black ( 3 )", color: "#000000" },
        { label: "Blue ( 4 )", color: "#0000ff" },
        { label: "Brown ( 4 )", color: "#8b4513" },
        { label: "Gray ( 1 )", color: "#808080" },
        {
          label: "Multicolor ( 4 )",
          color:
            "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
        },
        { label: "Pink ( 3 )", color: "#ffc0cb" },
        { label: "Rosegold ( 2 )", color: "#b76e79" },
      ],
    },
    {
      title: "Size",
      options: [
        "Small (5)",
        "Medium (5)",
        "Large (5)",
        "Extra large (3)",
        "One size (1)",
      ],
    },
  ];

  const products = [
    {
      id: 1,
      name: "Brown hat craft",
      category: "fashion",
      price: 547.0,
      image: "/images/Fashion-hat.webp",
      hoverImage: "/images/Fashion-hat.webp",
    },
    {
      id: 2,
      name: "Slim-Fit Formal Suit Blazer",
      category: "fashion",
      price: 534.0,
      image: "/images/Fashion1.webp",
      hoverImage: "/images/Fashion2.webp",
    },
    {
      id: 3,
      name: "Retro Tie-Dye Color Splash T-Shirt",
      category: "fashion",
      price: 543.0,
      image: "/images/Fashion2.webp",
      hoverImage: "/images/Fashion1.webp",
    },
    {
      id: 4,
      name: "Half sleeve T-shirt",
      category: "fashion",
      price: 643.0,
      image: "/images/Fashion3.webp",
      hoverImage: "/images/Fashion2.webp",
    },
    {
      id: 5,
      name: "Retro Tie-Dye Color Splash T-Shirt",
      category: "fashion",
      price: 543.0,
      image: "/images/Fashion2.webp",
      hoverImage: "/images/Fashion1.webp",
    },
    {
      id: 6,
      name: "Half sleeve T-shirt",
      category: "fashion",
      price: 643.0,
      image: "/images/Fashion3.webp",
      hoverImage: "/images/Fashion2.webp",
    },
    {
      id: 7,
      name: "Brown hat craft",
      category: "fashion",
      price: 547.0,
      image: "/images/Fashion1.webp",
      hoverImage: "/images/Fashion3.webp",
    },
    {
      id: 8,
      name: "Slim-Fit Formal Suit Blazer",
      category: "fashion",
      price: 534.0,
      image: "/images/Fashion2.webp",
      hoverImage: "/images/Fashion3.webp",
    },
    {
      id: 9,
      name: "Retro Tie-Dye Color Splash T-Shirt",
      category: "fashion",
      price: 543.0,
      image: "/images/Fashion1.webp",
      hoverImage: "/images/Fashion3.webp",
    },
    {
      id: 10,
      name: "Half sleeve T-shirt",
      category: "fashion",
      price: 643.0,
      image: "/images/Fashion2.webp",
      hoverImage: "/images/Fashion1.webp",
    },
    {
      id: 11,
      name: "Retro Tie-Dye Color Splash T-Shirt",
      category: "fashion",
      price: 543.0,
      image: "/images/Fashion1.webp",
      hoverImage: "/images/Fashion2.webp",
    },
  ];

  const handleToggleView = (columns) => {
    setGridColumns(columns);
  };

  const getGridColsClass = (columns) => {
    switch (columns) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      default:
        return "grid-cols-4";
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="bg-[#f6f6f6] mb-6 p-12 flex justify-between items-start flex-col">
        <h1 className="text-3xl font-bold mb-2">Winter Wonders</h1>
        <div className="breadcrumb mb-4 mt-2 text-sm">
          <span className="text-gray-500">Home</span> &gt;{" "}
          <span>Winter Wonders</span>
        </div>
      </div>

      {/* Buttons and Sort Options */}
      <div className="flex justify-between items-center mb-8 p-8 border-b-[0.5px] border-grey-100">
        {/* View Toggle Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => handleToggleView(2)}
            className="border-none rounded px-2"
          >
            II
          </button>
          <button
            onClick={() => handleToggleView(3)}
            className="border-none rounded px-2"
          >
            III
          </button>
          <button
            onClick={() => handleToggleView(4)}
            className="border-none rounded px-2"
          >
            IIII
          </button>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <label htmlFor="sort" className="text-sm font-bold">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded-[5px] p-1 h-[41px] w-[160px] text-xs text-gray-500 bg-transparent outline-none hover:border-gray-400"
          >
            <option value="best-selling">Best selling</option>
            <option value="featured">Featured</option>
            <option value="alphabet-a">Alphabetically, A-Z</option>
            <option value="alphabet-z">Alphabetically, Z-A</option>
            <option value="price-low-to-high">Price, low to high</option>
            <option value="price-high-to-low">Price, high to low</option>
            <option value="date-old-to-new">Date, old to new</option>
            <option value="date-new-to-old">Date, new to old</option>
          </select>
          <p className="text-sm font-bold">11 products</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {/* Sidebar Filters */}
        <div className="col-span-1 p-4 bg-white rounded-lg">
          {accordionData.map((section, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between w-full text-left font-semibold p-2 bg-white rounded-md focus:outline-none"
              >
                {section.title}
                <span>
                  {accordionOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </button>
              {accordionOpen[index] && (
                <div className="p-2">
                  {Array.isArray(section.options)
                    ? section.options.map((option, idx) => (
                        <label key={idx} className="block cursor-pointer mb-2">
                          <div className="flex justify-between items-center space-x-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                className="rounded-full h-4 w-4"
                                name={
                                  typeof option === "string"
                                    ? option
                                    : option.label
                                }
                                value={
                                  typeof option === "string"
                                    ? option
                                    : option.label
                                }
                                style={{
                                  backgroundColor:
                                    typeof option === "object"
                                      ? option.color
                                      : "transparent",
                                  borderColor:
                                    typeof option === "object"
                                      ? option.color
                                      : "#ccc",
                                  borderWidth: 2,
                                  appearance: "none",
                                  WebkitAppearance: "none",
                                }}
                              />
                              <span>
                                {typeof option === "string"
                                  ? option.split(" (")[0]
                                  : option.label.split(" (")[0]}
                              </span>
                            </div>
                            <span>
                              (
                              {typeof option === "string"
                                ? option.match(/\d+/)[0]
                                : option.label.match(/\d+/)[0]}
                              )
                            </span>
                          </div>
                        </label>
                      ))
                    : section.options}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="col-span-3">
          <div className={`grid ${getGridColsClass(gridColumns)} gap-6`}>
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-center justify-evenly text-center group"
              >
                {/* Product Image with Hover Icons */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col pr-3 items-end justify-start pt-3 space-x-4">
                    <button
                      className="p-2 bg-white w-[40px] h-[40px] border border-gray-400 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 mb-2 transition duration-300"
                      title="Add to Cart"
                    >
                      <IoMdAdd className="text-[20px]" />
                    </button>
                    <button
                      className="p-2 bg-white w-[40px] h-[40px] border border-gray-400 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 mb-2 transition duration-300"
                      title="View Details"
                    >
                      <IoEyeOutline className="text-[20px]" />
                    </button>
                    <button
                      className="p-2 bg-white w-[40px] h-[40px] border border-gray-400 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                      title="View Details"
                    >
                      <FaRegHeart className="text-[17px]" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <p className="text-gray-500 mb-2">{product.category}</p>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
