import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      {/* Bari 404 Heading */}
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
      
      {/* Error Message */}
      <div className="bg-orange-600 text-white px-2 text-sm rounded rotate-12 absolute mb-20">
        Page Not Found
      </div>
      
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Oops! Looks like you're lost.
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Go Back Home Button */}
        <NavLink to="/">
          <button className="hover:cursor-pointer bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200">
            Go Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
