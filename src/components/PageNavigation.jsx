import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="h-16  bg-gray-100 flex items-center px-8 text-xl font-semibold mb-8">
      <NavLink
        to="/"
        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
      >
        Home
      </NavLink>

      <span className="mx-2 text-gray-400">/</span>

      <span className="text-gray-600 capitalize">{title}</span>
    </div>
  );
};

export default PageNavigation;
