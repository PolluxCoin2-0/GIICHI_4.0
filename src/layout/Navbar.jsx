import { useState } from "react";
import Giichi_Logo_Img from "../assets/Giichi_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-20 3xl:px-60 py-4 bg-black">
      {/* Logo */}
      <a href="/dashboard">
        <div>
          <img src={Giichi_Logo_Img} alt="Giichi Logo" className="cursor-pointer w-24 md:w-28" />
        </div>
      </a>

      {/* Hamburger Menu (visible on mobile) */}
      {/* added -mr-52 to justify the hamburger for mobile, dont know why this is happening */}
      <div className="lg:hidden -mr-52">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black lg:static lg:flex lg:w-auto z-20`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-10 text-center lg:text-left">
          <a href="/blockchain-development">
            <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
              Blockchain
            </li>
             </a>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            AI
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            Gaming
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            Consulting
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            Solutions
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            Industries
          </li>
          <li className="text-white text-lg font-semibold cursor-pointer py-2 lg:py-0">
            About Us
          </li>
        </ul>

        <Link to="/contact-us">
        <div className="lg:hidden flex justify-center mt-4 mb-12">
        <button
          type="button"
          className="bg-green-gradient px-5 py-3 rounded-full text-md font-semibold"
        >
          Get In Touch
        </button>
      </div>
      </Link>
      </div>

      {/* Get in Touch Button */}
      <Link to="/contact-us">
      <div className="hidden lg:block">
        <button
          type="button"
          className="bg-green-gradient px-5 py-3 rounded-full text-md font-semibold"
        >
          Get In Touch
        </button>
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
