import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useFilterContext } from "./context/FilterContext";

const Sort = () => {
  const { sorting } = useFilterContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Price (Lowest)");

  const options = ["Price (Lowest)", "Price (Highest)", "A-Z", "Z-A"];

  return (
    <div className="relative inline-block text-left w-56">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {selectedOption}
        <FiChevronDown
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute  right-0 z-10 w-full mt-2 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  // i make this func for sorting
                  sorting(option);
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className="border-b border-gray-200 block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;
