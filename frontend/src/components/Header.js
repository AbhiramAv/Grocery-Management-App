import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // Initialize showMenu state

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev); // Corrected state updater function
  };

  return (
    <header className="fixed shadow-md w-full h-22 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-20">
            <img src={logo} className="h-full" alt="Logo" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7 pt-2">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"home"}>Home</Link>
            <Link to={"northindian"}>North Indian</Link>
            <Link to={"southindian"}>South Indian</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-2 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center ">
                0
              </div>
            </Link>
          </div>
          <div className="text-2xl text-slate-600" onClick={handleShowMenu}>
            <div className="cursor-pointer" relative>
              <FaUserAlt />
            </div>
            {showMenu && (
              <div className=" right-2 bg-white py-2 px-2 shadow drop-shadow-md mr-0 absolute flex flex-col mt-6">
                <Link
                  to={"login"}
                  className="whitespace-nowrap cursor-pointer text-xl mb-2"
                >
                  Login
                </Link>
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer text-xl mb-2"
                >
                  New Product
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
