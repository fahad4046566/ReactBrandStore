import ProductList from "./components/ProductList";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import { useFilterContext } from "./components/context/FilterContext";
import { useProductContext } from "./components/context/ProductContext";
import Loader from "./components/Loader";


const Product = () => {
  const { filter_products } = useFilterContext();
  const {isLoading} = useProductContext()

  if(isLoading){
  return <Loader/>
  }
 
 
 return (
  <div className="bg-gray-50 min-h-screen">
    <div className="max-w-350 mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Filter Section (Width 1/4) */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-8 h-fit">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <FilterSection />
          </div>
        </aside>

        {/* Right Column: Product Area (Width 3/4) */}
        <main className="w-full lg:w-3/4">
          {/* Header Row: Count and Sort */}
          <div className="flex items-center justify-between mb-8 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                {filter_products.length}
              </span>
              <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                Products Found
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-1 rounded-xl border border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Sort By:</span>
              <Sort />
            </div>
          </div>

          {/* Product List */}
          <section className="min-h-[60vh]">
            {filter_products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">Product Not Found</p>
              </div>
            ) : (
              <ProductList />
            )}
          </section>
        </main>
        
      </div>
    </div>
  </div>
);
};

export default Product;
