import FormatPrice from "../Helpers/FormatPrice";
import { useFilterContext } from "./context/FilterContext";
import { useState } from "react";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    updateFilterValue,
    clearFilter,
    filters: { text, category, brand, minPrice, maxPrice, price },
    all_products,
  } = useFilterContext();

  const cateogoryOnlyFilter = (data, property) => {
    const newVal = data.map((currElem) => {
      return currElem[property];
    });
    return ["All", ...new Set(newVal)];
  };
  const categoryData = cateogoryOnlyFilter(all_products, "category");
  const brandData = cateogoryOnlyFilter(all_products, "brand");
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-black text-gray-900 tracking-tight border-b pb-4">
        Filters
      </h2>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          name="text"
          placeholder="Search..."
          value={text}
          onChange={updateFilterValue}
          className="w-full pl-4 pr-10 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {categoryData.map((currElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={currElem}
              onClick={updateFilterValue}
              className={`text-left capitalize py-2 px-4 rounded-xl transition-all text-sm font-medium ${
                currElem === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {currElem}
            </button>
          ))}
        </div>
      </div>

      {/* Company Dropdown */}
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
          Brand
        </h3>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl text-sm font-semibold capitalize border border-transparent hover:border-gray-200 transition-all"
          >
            {brand} <span className="text-[10px]">▼</span>
          </button>
          {isOpen && (
            <div className="absolute z-30 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              {brandData.map((curElem, index) => (
                <button
                  key={index}
                  name="brand"
                  value={curElem}
                  onClick={(e) => {
                    updateFilterValue(e);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-sm hover:bg-indigo-50 transition-colors capitalize border-b border-gray-50 last:border-none"
                >
                  {curElem}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Price Slider */}
      <div className="pt-4">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
          Price Range
        </h3>
        <div className="px-2">
          <p className="text-indigo-600 font-black text-xl mb-4">
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Min</span>
            <span>Max</span>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={clearFilter}
          className="cursor-pointer bg-red-600 hover:bg-red-700 mt-4 px-6 py-2 rounded-xl text-white font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-red-100"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
