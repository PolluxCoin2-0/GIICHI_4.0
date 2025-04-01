import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import MobileNavbar from "./MobileNavbar";
import Giichi_Logo_Img from "../assets/Giichi_Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
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
            { label: "Asset Tokenization", link: "/asset-tokenization" },
            { label: "Real-Estate Tokenization", link: "/real-estate-tokenization" },
            { label: "Asset Management", link: "/asset-management" }
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
            { label: "AI / ML Solutions", link: "/ai-ml-solution" }
          ]
        },
        {
          label: "Generative AI",
          items: [
            { label: "Generative AI Development", link: "/generative-ai" }
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
            { label: "Blockchain Consulting Company", link: "/blockchain-consulting-company" },
            { label: "Web3 Consulting Company", link: "/web3-consulting-company" },
            { label: "Metaverse Consulting Company", link: "/metaverse-consulting-company" },
            { label: "DeFi Consulting Company", link: "/defi-consulting-company" },
          ]
        },
        {
          label: "Marketing As a Service",
          items: [
            { label: "Marketing As A Service (MaaS)", link: "/marketing-as-a-service" }
          ]
        }
      ]
    },
    solutions: {
      label: "Solutions",
      submenus: [
        { label: "Exchange", 
          items: [
          { label: "Custom Exchange", link: "/custom-exchange" },
            { label: "White Label Exchange", link: "/white-label-exchange" },
            { label: "Margin Trading Exchange", link: "/margin-trading-exchange" },
            { label: "Decentralized Exchange", link: "/decentralized-exchange" },
            { label: "Derivatives Exchange", link: "/derivatives-exchange" },
            { label: "Centralized Exchange", link: "/centralized-exchange" },
            { label: "P2P Exchange", link: "/p2p-exchange" },
            { label: "Market Making Exchange", link: "/market-making-exchange" },
        ] },
        { label: "Wallet", 
          items: [
          { label: "Digital Wallet", link: "/digital-wallet" },
            { label: "White Label Wallet", link: "/white-label-wallet" },
            { label: "Web3 Wallet", link: "/web3-wallet" },
            { label: "Multicurrency Wallet", link: "/multi-currency-wallet" },
            { label: "MPC Crypto Wallet", link: "/mpc-crypto-wallet" },
            { label: "Defi Wallet", link: "/defi-wallet" },
            { label: "Polink Wallet", link: "" },
            { label: "NFT Wallet", link: "/non-fungible-token-wallet" },
        ] },
        { label: "NFT", 
          items: [
            { label: "NFT Development", link: "/nft-development" },
            { label: "White Label NFT Development", link: "/white-label-nft-development" },
            { label: "NFT Marketplace", link: "/nft-marketplace" },
            { label: "Semi Fungible Token", link: "/semi-fungible-token-development" },
          ] },
        { label: "DEFI", 
          items: [
            { label: "Defi Development", link: "/defi-decentralized-finance-development" },
            { label: "DAO Blockchain", link: "/dao-blockchain-development" },
            { label: "Defi Staking", link: "/defi-staking-development" },
            { label: "Dapp Development Company", link: "/dapp-development" },
          ] },
        { label: "WEB3", 
          items: [
            { label: "Web3.0 Development", link: "/web3-development" },
          ] },
        { label: "Digital Banking", 
          items: [
            { label: "Digital Banking", link: "/digital-banking-solution" },
            { label: "White Label Banking", link: "/white-label-banking-solution" },
            { label: "Payment Gateway", link: "/payment-gateway-banking-solution" },
            { label: "P2P Lending", link: "/p2p-lending-solution" },
            
          ] },
        { label: "Coin Development", 
          items: [
            { label: "Launchpad Development", link: "/launchpad-coin-development" },
            { label: "ICO Development", link: "/ico-coin-development" },
            { label: "Coin/Token Development", link: "/token-coin-development" },
            { label: "IDO Development", link: "/ido-coin-development" },
            { label: "Stablecoin Development", link: "/stable-coin-development" },
            { label: "Meme Coin Development", link: "/meme-coin-development" },
          ] },
        { label: "Trading Bots", 
          items: [
            { label: "Trading Bot", link: "/trading-bot-development" },
            { label: "Arbitrage Bots", link: "/arbitrage-bot-development" },
           ]}
      ]
    },
    // industries: {
    //   label: "Industries",
    //   submenus: [
    //     {
    //       label: "BFSI",
    //       items: [
    //         { label: "Trade Finance", link: "/" },
    //         { label: "Insurance", link: "/" },
    //         { label: "KYC & AML", link: "/" }
    //       ]
    //     },
    //     {
    //       label: "Services",
    //       items: [
    //         { label: "Cloud Services", link: "/" },
    //         { label: "AWS Services", link: "/" }
    //       ]
    //     }
    //   ]
    // }
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

const handleNavigation = (path) => {
  navigate(path);
  handleMenuLeave();
};


  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 py-4">
       
        <a href="/dashboard">
          <div className="hidden lg:block">
            <img src={Giichi_Logo_Img} alt="Giichi-Logo" className="w-24 md:w-40" />
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
              <button className="text-white text-sm xl:text-lg font-medium hover:text-gray-300"
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
            <button className="bg-green-gradient px-4 xl:px-5 py-2 2xl:py-3 rounded-full text-sm xl:text-lg font-semibold hover:scale-105 transition-transform duration-300" 
            aria-label="Contact form" type="button" title="Click to access contact form">
              Get In Touch
            </button>
          </div>
        </Link>
      </div>

      {activeMenu && (
        <div 
          className="absolute left-0 w-full flex justify-center"
          onMouseEnter={() => handleMenuEnter(activeMenu)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="w-full backdrop-blur-3xl lg:max-w-[calc(100%-7rem)] xl:max-w-[calc(100%-16rem)] 3xl:max-w-[calc(100%-30rem)] bg-[#D9D9D919] px-6 py-6 rounded-xl">
            <div className="flex">
              <div className="w-[30%] bg-[#D9D9D919] rounded-xl p-4">
                {menuItems[activeMenu].submenus.map((submenu) => (
                  <div
                    key={submenu.label}
                    className="flex justify-between items-center p-4 hover:bg-[#D9D9D9] hover:bg-opacity-15 rounded-xl cursor-pointer"
                    onMouseEnter={() => handleSubmenuEnter(submenu.label)}
                  >
                    <p className="text-white text-opacity-80 font-medium text-[17px] hover:font-semibold hover:text-white">{submenu.label}</p>
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
                        <div key={index} className="cursor-pointer">
                          <div onClick={() => handleNavigation(item.link)}  className="px-4 py-3 hover:bg-[#8AF969] hover:bg-opacity-10 rounded-xl p-4 mt-4 first:mt-0">
                            <p className="text-white text-[17px] font-semibold text-nowrap">{item.label}</p>
                          </div>
                         </div>
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