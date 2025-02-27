import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";
import Giichi_Logo_Img from "../assets/Giichi_Logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = {
    blockchain: {
      label: "Blockchain",
      submenus: [
        {
          label: "Blockchain",
          items: [
            { label: "Blockchain Development", link: "/blockchain-development" },
            { label: "Blockchain Identity Management", link: "/blockchain-identity" },
            { label: "Depin Development", link: "/blockchain-depin" }
          ]
        },
        {
          label: "Enterprise Blockchain",
          items: [
            { label: "Supply Chain", link: "/blockchain-in-supply-chain" },
            { label: "Transport & Logistics", link: "/blockchain-in-transport-and-logistics" },
            { label: "Entertainment", link: "/blockchain-in-entertainment" },
            { label: "Real-Estate", link: "/blockchain-in-real-estate" },
            { label: "Education", link: "/blockchain-in-education" },
            { label: "Finance", link: "/blockchain-in-finance" },
            { label: "Healthcare", link: "/blockchain-in-healthcare" },
           
          ]
        },
        {
          label: "Smart Contract",
          items: [
            { label: "Smart Contract Development", link: "/smart-contract-development" },
            { label: "Smart Contract Audit", link: "/smart-contract-audit" }
          ]
        },
        {
          label: "Tokenization",
          items: [
            { label: "Asset Tokenization", link: "/" },
            { label: "Real-Estate Tokenization", link: "/" },
            { label: "Fund Tokenization", link: "/" },
            { label: "Gold Tokenization", link: "/" },
            { label: "Asset Management", link: "/" }
          ]
        },
        {
          label: "Whitepaper",
          items: [
            { label: "White Paper Development", link: "/whitepaper-development" },
            
          ]
        }
      ]
    },
    ai: {
      label: "AI",
      submenus: [
        {
          label: "Artificial Intelligence",
          items: [
            { label: "AI / ML Solutions", link: "/" }
          ]
        },
        {
          label: "Generative AI",
          items: [
            { label: "Generative AI Development", link: "/" }
          ]
        }
      ]
    },
    gaming: {
      label: "Gaming",
      submenus: [
        {
          label: "Gaming",
          items: [
            { label: "Game Development", link: "/" },
            { label: "Web3 Game Development", link: "/" }
          ]
        },
        {
          label: "Metaverse",
          items: [
            { label: "Metaverse Development", link: "/" },
            { label: "Metaverse App Development", link: "/" }
          ]
        }
      ]
    },
    consulting: {
      label: "Consulting",
      submenus: [
        {
          label: "Consulting",
          items: [
            { label: "Blockchain Consulting Company", link: "/" },
            { label: "Web3 Consulting Company", link: "/" },
            { label: "Metaverse Consulting Company", link: "/" },
            { label: "DeFi Consulting Company", link: "/" },
            { label: "DAO Consulting Company", link: "/" },
            { label: "AI Consulting Company", link: "/" }
          ]
        },
        {
          label: "Marketing As a Service",
          items: [
            { label: "Marketing As A Service (MaaS)", link: "/" }
          ]
        }
      ]
    },
    solutions: {
      label: "Solutions",
      submenus: [
        { label: "Exchange", items: [] },
        { label: "Wallet", items: [] },
        { label: "NFT", items: [] },
        { label: "DEFI", items: [] },
        { label: "WEB3", items: [] },
        { label: "Digital Banking", items: [] },
        { label: "Coin Development", items: [] },
        { label: "Trading Bots", items: [] }
      ]
    },
    industries: {
      label: "Industries",
      submenus: [
        {
          label: "BFSI",
          items: [
            { label: "Trade Finance", link: "/" },
            { label: "Insurance", link: "/" },
            { label: "KYC & AML", link: "/" }
          ]
        },
        {
          label: "Services",
          items: [
            { label: "Cloud Services", link: "/" },
            { label: "AWS Services", link: "/" }
          ]
        }
      ]
    }
  };

  const [menuTimeout, setMenuTimeout] = useState(null);

const handleMenuEnter = (menu) => {
  if (menuTimeout) {
    clearTimeout(menuTimeout);
    setMenuTimeout(null);
  }
  setActiveMenu(menu);
  setActiveSubmenu(null);
};

const handleSubmenuEnter = (submenu) => {
  if (menuTimeout) {
    clearTimeout(menuTimeout);
    setMenuTimeout(null);
  }
  setActiveSubmenu(submenu);
};

const handleMenuLeave = () => {
  const timeout = setTimeout(() => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  }, 200); // Adjust the delay as needed (200ms works well)
  setMenuTimeout(timeout);
};

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60 py-4">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>

        <a href="/dashboard">
          <div className="hidden lg:block">
            <img src={Giichi_Logo_Img} alt="Giichi-Logo" className="w-24 md:w-28" />
          </div>
        </a>

        <MobileNavbar />

        <div className="hidden lg:flex space-x-10">
          {Object.entries(menuItems).map(([key, value]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMenuEnter(key)}
              onMouseLeave={handleMenuLeave}
            >
              <button className="text-white text-sm xl:text-lg font-semibold hover:text-gray-300"
               aria-label="label-demo" type="button" title="Click ">
                {value.label}
              </button>
            </div>
          ))}
          <Link to="https://blog.giichi.network/" target="_blank" rel="noopener noreferrer">
            <button className="text-white text-sm xl:text-lg font-semibold hover:text-gray-300 cursor-pointer"
             aria-label="Go to blogs" type="button" title="Click to Blogs page">
              Blogs
            </button>
          </Link>
        </div>

        <Link to="/contact-us">
          <div 
            className="hidden lg:block cursor-pointer"
          >
            <button className="bg-green-gradient px-4 xl:px-5 py-2 xl:py-3 rounded-full text-sm xl:text-lg font-semibold hover:scale-105 transition-transform duration-300" 
            aria-label="Contact form" type="button" title="Click to access contact form">
              Get In Touch
            </button>
          </div>
        </Link>
      </div>

      {activeMenu && (
        <div 
          className="absolute left-0 w-full flex justify-center  backdrop-blur-3xl"
          onMouseEnter={() => handleMenuEnter(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="w-full lg:max-w-[calc(100%-7rem)] xl:max-w-[calc(100%-12rem)] 3xl:max-w-[calc(100%-30rem)] bg-[#D9D9D919] px-6 py-4 rounded-xl">
            <div className="flex">
              <div className="w-[30%] bg-[#D9D9D919] rounded-2xl p-4">
                {menuItems[activeMenu].submenus.map((submenu) => (
                  <div
                    key={submenu.label}
                    className="flex justify-between items-center p-4 hover:bg-white hover:bg-opacity-40 rounded-2xl cursor-pointer"
                    onMouseEnter={() => handleSubmenuEnter(submenu.label)}
                  >
                    <p className="text-white text-[17px] font-bold">{submenu.label}</p>
                    <FaArrowRightLong color="#ffffff" size={24} />
                  </div>
                ))}
              </div>

              {activeSubmenu && (
                <div className="w-[70%] relative ml-6">
                  <div className="absolute w-full mt-2 text-white">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {menuItems[activeMenu].submenus
                      .find(submenu => submenu.label === activeSubmenu)
                      ?.items.map((item, index) => (
                        <Link to={item.link} key={index}>
                          <div className="px-4 py-2 hover:bg-white hover:bg-opacity-40 rounded-2xl p-4 mt-4 first:mt-0">
                            <p className="text-white text-[17px] font-bold text-nowrap">{item.label}</p>
                          </div>
                        </Link>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;