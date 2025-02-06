import { useState } from "react";
import Giichi_Logo_Img from "../assets/Giichi_Logo.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlockchainDropdownOpen, setIsBlockchainDropdownOpen] =useState(true); 
  const [isBlockchain1DropdownOpen, setIsBlockchain1DropdownOpen] =useState(true); 
  const [isBlockchainEnterpriseDropdownOpen,setIsBlockchainEnterpriseDropdownOpen] = useState(false);
  const [isBlockchainScDropdownOpen, setIsBlockchainScDropdownOpen] =useState(false);
  const [isBlockchainTokenDropdownOpen, setIsBlockchainTokenDropdownOpen] =useState(false);

  // ai
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(true);
  const [isAi1DropdownMenu, setIsAi1DropdownOpen] = useState(true);
  
  const toggleBlockchainMenu = () => { 
    setIsBlockchainDropdownOpen(!isBlockchainDropdownOpen);
  };

  const toggleAiMenu = () => {
    setIsAiDropdownOpen(!isAiDropdownOpen);
  };

  const toggleBlockchain1Menu = () => {
    setIsBlockchainEnterpriseDropdownOpen(false);
    setIsBlockchainTokenDropdownOpen(false);
    setIsBlockchainScDropdownOpen(false);
    setIsBlockchain1DropdownOpen(!isBlockchain1DropdownOpen);
  };
  const toggleBlockchainEnterpriseMenu = () => {
    setIsBlockchainEnterpriseDropdownOpen(!isBlockchainEnterpriseDropdownOpen);
    setIsBlockchainTokenDropdownOpen(false);
    setIsBlockchainScDropdownOpen(false);
    setIsBlockchain1DropdownOpen(false);
  };

  const toggleBlockchainScMenu = () => {
    setIsBlockchainScDropdownOpen(!isBlockchainScDropdownOpen);
    setIsBlockchainEnterpriseDropdownOpen(false);
    setIsBlockchainTokenDropdownOpen(false);
    setIsBlockchain1DropdownOpen(false);
  };

  const toggleBlockchainTokenMenu = () => {
    setIsBlockchainTokenDropdownOpen(!isBlockchainTokenDropdownOpen);
    setIsBlockchainScDropdownOpen(false);
    setIsBlockchainEnterpriseDropdownOpen(false);
    setIsBlockchain1DropdownOpen(false);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60 py-4 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>

        {/* Logo */}
        <a href="/dashboard">
          <div>
            <img
              src={Giichi_Logo_Img}
              alt="Giichi Logo"
              className="cursor-pointer w-24 md:w-28"
            />
          </div>
        </a>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="lg:hidden -mr-52 md:-mr-96">
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
            <li
              className=" text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300"
              onClick={toggleBlockchainMenu}
              onMouseEnter={toggleBlockchainMenu}
            >
              Blockchain
            </li>
            <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300"
              onClick={toggleAiMenu}
              onMouseEnter={toggleAiMenu}>
              AI{" "}
            </li>
            <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300">
              Gaming
            </li>
            <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300">
              Consulting
            </li>
            <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300">
              Solutions
            </li>
            <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300">
              Industries
            </li>
            <Link to="/about-us">
              <li className="text-white text-lg lg:text-sm xl:text-lg font-semibold cursor-pointer py-2 lg:py-0 text-nowrap hover:text-gray-300">
                About Us
              </li>
            </Link>
          </ul>
          <Link to="/contact-us">
            <div className="lg:hidden flex justify-center mt-4 mb-12">
              <button className="bg-green-gradient px-5 lg:px-4 xl:px-5 py-2 xl:py-3 rounded-full text-lg lg:text-sm xl:text-lg text-nowrap font-semibold transform hover:scale-105 transition-transform duration-300">
                Get In Touch
              </button>
            </div>
          </Link>
        </div>

        {/* Get in Touch Button */}
        <Link to="/contact-us">
          <div className="hidden lg:block">
            <button className="bg-green-gradient px-5 lg:px-4 xl:px-5 py-2 xl:py-3 rounded-full text-lg lg:text-sm xl:text-lg text-nowrap font-semibold transform hover:scale-105 transition-transform duration-300">
              Get In Touch
            </button>
          </div>
        </Link>
      </nav>

      {/* Blockchain navitems */}
      {isBlockchainDropdownOpen && (
        <div className="px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60">
          <div className="flex flex-row items-center w-full bg-white bg-opacity-30 rounded-2xl p-6">
            <div className="w-[30%] bg-white bg-opacity-10 rounded-2xl p-4">
              <div
                className="flex flex-row justify-between hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchain1Menu}
                // onMouseEnter={toggleBlockchain1Menu}
              >
                <p className="text-white text-[17px] font-bold">Blockchain</p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>

              {isBlockchain1DropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Blockchain Development
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        {" "}
                        Blockchain In identity Management
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        DiPin Debelopment
                      </p>
                    </div>
                  </Link>
                </div>
              )}
              <div
                className="flex flex-row justify-between hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainEnterpriseMenu}
                // onMouseEnter={toggleBlockchainEnterpriseMenu}
              >
                <p className="text-white text-[17px] font-bold">
                  Enterprise Blockchain
                </p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainEnterpriseDropdownOpen && (
                <div className="flex flex-row justify-between">
                <div className="absolute left-[700px] mt-2 top-[95px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Supply Chain
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Transport & Logistics
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Entertainment
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Real-Estate
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Education
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="absolute left-[1200px] mt-2 top-[95px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                       Finance
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Healthcare
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                       Real-Estate
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                      Procure-to-Pay
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                      Carbon Credits
                      </p>
                    </div>
                  </Link>
                </div>
                 
                </div>
              )}

              <div
                className="flex flex-row justify-between  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainScMenu}
                // onMouseEnter={toggleBlockchainScMenu}
              >
                <p className="text-white text-[17px] font-bold">
                  Smart Contract
                </p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainScDropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Smart Contract Development
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Smart Contract Audit
                      </p>
                    </div>
                  </Link>
                </div>
              )}

              <div
                className="flex flex-row justify-between  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainTokenMenu}
                // onMouseEnter={toggleBlockchainTokenMenu}
              >
                <p className="text-white text-[17px] font-bold">Tokenization</p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainTokenDropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Asset Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Real -Estate Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                      Fund Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Gold Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Asset Management
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-[70%] "></div>
          </div>
        </div>
      )}

      {/* aI NAITEMS */}
      {isAiDropdownOpen && (
        <div className="px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60">
          <div className="flex flex-row items-center w-full bg-white bg-opacity-30 rounded-2xl p-6">
            <div className="w-[30%] bg-white bg-opacity-10 rounded-2xl p-4">
              <div
                className="flex flex-row justify-between hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchain1Menu}
                // onMouseEnter={toggleBlockchain1Menu}
              >
                <p className="text-white text-[17px] font-bold">Artificial Intelligence</p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>

              {isBlockchain1DropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Blockchain Development
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        {" "}
                        Blockchain In identity Management
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        DiPin Debelopment
                      </p>
                    </div>
                  </Link>
                </div>
              )}
              <div
                className="flex flex-row justify-between hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainEnterpriseMenu}
                // onMouseEnter={toggleBlockchainEnterpriseMenu}
              >
                <p className="text-white text-[17px] font-bold">
                 Generative AI
                </p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainEnterpriseDropdownOpen && (
                <div className="flex flex-row justify-between">
                <div className="absolute left-[700px] mt-2 top-[95px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Supply Chain
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Transport & Logistics
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Entertainment
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Real-Estate
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                        Education
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="absolute left-[1200px] mt-2 top-[95px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                       Finance
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Healthcare
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                       Real-Estate
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                      Procure-to-Pay
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-identity">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className=" text-white text-[17px] font-bold">
                      Carbon Credits
                      </p>
                    </div>
                  </Link>
                </div>
                 
                </div>
              )}

              <div
                className="flex flex-row justify-between  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainScMenu}
                // onMouseEnter={toggleBlockchainScMenu}
              >
                <p className="text-white text-[17px] font-bold">
                  Smart Contract
                </p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainScDropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Smart Contract Development
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Smart Contract Audit
                      </p>
                    </div>
                  </Link>
                </div>
              )}

              <div
                className="flex flex-row justify-between  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4"
                onClick={toggleBlockchainTokenMenu}
                // onMouseEnter={toggleBlockchainTokenMenu}
              >
                <p className="text-white text-[17px] font-bold">Tokenization</p>
                <FaArrowRightLong color="#ffffff" size={24} />
              </div>
              {isBlockchainTokenDropdownOpen && (
                <div className="absolute left-[700px] mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                  <Link to="/blockchain-development">
                    <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 ">
                      <p className="text-white text-[17px] font-bold">
                        Asset Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                        Real -Estate Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                      Fund Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Gold Tokenization
                      </p>
                    </div>
                  </Link>
                  <Link to="/blockchain-defi">
                    <div className="px-4 py-2  hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4">
                      <p className="text-white text-[17px] font-bold">
                       Asset Management
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="w-[70%] "></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
