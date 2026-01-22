import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-20 py-10 md:py-20 gap-10">
  
  {/* Left Side: Description */}
  <div className="description flex flex-col items-start space-y-6 md:w-1/2">
    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
      Upgrade Your <span className="text-blue-600">Lifestyle</span> Today
    </h1>
    <p className="text-gray-600 text-lg max-w-lg">
      Explore our latest collection of premium products designed to make
      your life easier and more stylish.
    </p>
   <NavLink to="./product">
     <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:cursor-pointer">
      Shop Now
    </button>
    </NavLink>
  </div>

  {/* Right Side: Hero Image */}
  <div className="hero-image md:w-1/2 flex justify-center">
    <img
      className="rounded-3xl shadow-2xl w-full max-w-125 object-cover"
      src="src/assets/HeroImage.png"
      alt="Hero"
    />
  </div>
</div>
    </>
  );
};

export default HeroSection;
