import { NavLink } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import Loader from "./Loader";
import FormatPrice from "../Helpers/FormatPrice";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-[#fcfcfc] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section with subtle line */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">
            Featured <span className="font-bold">Collection</span>
          </h2>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featureProducts.map((curElem) => {
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
              <div key={id} className="group relative flex flex-col">
                {/* Image Container with Floating Effect */}
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-[#f3f3f3] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-100">
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Minimalist Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge (Optional but professional) */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-gray-900 shadow-sm">
                    {category}
                    </span>
                  </div>
                </div>

                {/* Text Details with Improved Typography */}
                <div className="mt-6 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                        {brand || "Premium"}
                      </p>
                      <h3 className="text-gray-900 font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                        {title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 line-through">
                         {<FormatPrice price={(originalPrice).toFixed(0)} />}
                      </span>
                      <span className="text-xl font-black text-gray-900">
                        {<FormatPrice price={price}/>}
                      </span>
                    </div>

                    {/* Minimalist Circular Button */}
                    <NavLink to={`./singleProduct/${id}`}>
                      <button className="h-10 w-40 cursor-pointer flex items-center justify-center rounded-2xl bg-gray-900 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110 shadow-lg">
                        View Details
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

export default FeatureProduct;
