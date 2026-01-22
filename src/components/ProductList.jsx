import { useFilterContext } from "./context/FilterContext";
import { useProductContext } from "./context/ProductContext";
import Loader from "./Loader";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const { filter_products } = useFilterContext();
   const { isLoading } = useProductContext();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="bg-[#fcfcfc] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">
            All <span className="font-bold">Products</span>
          </h2>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filter_products.map((curElem) => {
            const {
              id,
              brand,
              title,
              price,
              thumbnail,
              category,
              discountPercentage,
            } = curElem;
            
            const originalPrice = price / (1 - discountPercentage / 100);

            return (
  <div key={id} className="group flex flex-col bg-white rounded-3xl p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-transparent hover:border-blue-50">
    {/* Image Container */}
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 transition-all duration-500">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-contain p-6 transition-transform duration-700 ease-in-out group-hover:scale-105"
      />

      {/* Category Badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm border border-gray-100">
          {category}
        </span>
      </div>

      {/* Hover Overlay Lighten */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Content Details */}
    <div className="mt-5 flex flex-col flex-1">
      <div className="mb-2">
        <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">
          {brand || "Premium Selection"}
        </p>
        <h3 className="text-gray-800 font-bold text-base leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 min-h-10">
          {title}
        </h3>
      </div>

      <div className="mt-auto pt-4 flex items-end justify-between border-t border-gray-50">
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 line-through mb-0.5 font-medium">
            <FormatPrice price={originalPrice.toFixed(0)} />
          </span>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            <FormatPrice price={price} />
          </span>
        </div>

        {/* View Details Button */}
        <NavLink to={`/singleProduct/${id}`}>
          <button className=" h-10 w-15 hover:cursor-pointer rounded-xl bg-gray-900 text-white flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 group/btn">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  </div>
);
          })}
        </div>
      </div>
    </section>
  );
};


export default ProductList;
