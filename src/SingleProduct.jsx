import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "./components/context/ProductContext";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import Star from "./components/Star";
import CartAmountToggle from "./components/CartAmountToggle";
import { useCartContext } from "./components/context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isLoading, singleProduct } = useProductContext();
  const {addToCart} = useCartContext()

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    // Page load hote hi scroll ko sab se upar par le jaye
    window.scrollTo(0, 0);
    getSingleProduct(id);
  }, [id]);

  const {
    brand,
    title,
    description,
    price,
    category,
    rating,
    stock,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    images,
    comment,
    thumbnail
  } = singleProduct;
  const itemData = { title, price, stock, thumbnail: thumbnail };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  if (isLoading) {
    return <Loader />;
  }
 return (
  
  <div className="bg-gray-50 min-h-screen pb-2">
    {/* Navigation Breadcrumb */}
    <div className="bg-white border-b border-gray-200 mb-8">
      <div className=" mx-auto top-0 sticky">
        <PageNavigation title={title} />
      </div>
    </div>

    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden lg:flex gap-12 p-6 md:p-10">
        
        {/* LEFT: Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="sticky top-10">
            <MyImage imgs={images} />
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="lg:w-1/2 flex flex-col">
          {/* Brand & Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {brand || "Premium"}
            </span>
            <span className="text-gray-400 text-xs uppercase tracking-widest">
              {category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>

          {/* Rating Section */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center bg-yellow-400/10 px-2 py-1 rounded">
               <Star stars={rating} />
            </div>
            <span className="text-sm text-gray-500 font-medium">
              ({comment || "24"} Verified Reviews)
            </span>
          </div>

          {/* Price & Description */}
          <div className="mb-6">
            <p className="text-3xl font-black text-indigo-600 mb-4">
              <FormatPrice price={price} />
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Info Grid (Warranty, Shipping etc) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-400 font-bold">Shipping</span>
              <span className="text-sm text-gray-700 font-medium">{shippingInformation}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-400 font-bold">Warranty</span>
              <span className="text-sm text-gray-700 font-medium">{warrantyInformation}</span>
            </div>
            <div className="flex flex-col col-span-full">
              <span className="text-[10px] uppercase text-gray-400 font-bold">Return Policy</span>
              <span className="text-sm text-gray-700 font-medium">{returnPolicy}</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-auto space-y-6">
            <div className="flex items-center gap-8 bg-white border border-gray-200 w-fit px-6 py-2 rounded-full shadow-sm">
              <span className="text-sm font-bold text-gray-400 uppercase">Quantity</span>
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>

            <NavLink to="/cart" className="block w-full">
              <button 
              onClick={()=>{addToCart(id, amount, itemData)}}
              className="hover:cursor-pointer w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-indigo-600 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-gray-200">
                Add To Shopping Bag
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  </div>
);
};

export default SingleProduct;
