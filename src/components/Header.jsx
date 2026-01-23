import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import Nav from "./Nav";
import logo from '../assets/Logo-removebg-preview.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:h-30 shadow-xl border-b-0.5 bg-gray-50 flex justify-between items-center p-5 text-xl sticky top-0 z-50 w-full">
        <div className="logo  w-80">
          <img src={logo} alt="" />
        </div>

        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        <div className="nav">
          <Nav isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default Header;
