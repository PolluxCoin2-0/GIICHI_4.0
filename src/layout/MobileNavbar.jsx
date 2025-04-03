import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For Hamburger and Close icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md"; // Dropdown arrow
import Giichi_Logo_Img from "../assets/Giichi_Logo.png";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  // State to manage the visibility of the mobile navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to handle dropdown visibility for various menu items
  const [isBlockchainMenuOpen, setIsBlockchainMenuOpen] = useState(false);
  const [isBk1Open, setIsBk1Open] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);
  const [isScOpen, setIsScOpen] = useState(false);
  const [isTokenOpen, setIsTokenOpen] = useState(false);

  const [isAiMenuOpen, setIsAiMenuOpen] = useState(false);
  const [isAi1Open, setIsAi1Open] = useState(false);
  const [isGenOpen, setIsGenOpen] = useState(false);

  const [isGamingMenuOpen, setIsGamingMenuOpen] = useState(false);
  const [isGaming1Open, setIsGaming1Open] = useState(false);
  const [isMetaOpen, setIsMetaOpen] = useState(false);

  const [isConsultingMenuOpen, setIsConsultingMenuOpen] = useState(false);
  const [isConsult1Open, setIsConsult1Open] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(false);

  const [isSolutionMenuOpen, setIsSolutionMenuOpen] = useState(false);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isNftOpen, setIsNftOpen] = useState(false);
  const [isDefiOpen, setIsDefiOpen] = useState(false);
  const [isWeb3Open, setIsWeb3Open] = useState(false);
  const [isDigitalBankingOpen, setIsDigitalBankingOpen] = useState(false);
  const [isCoinDevOpen, setIsCoinDevOpen] = useState(false);
  const [isTradingBotOpen, setIsTradingBotOpen] = useState(false);

  // const [isBfsiOpen, setIsBfsiOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  // const [isIndustryMenuOpen, setIsIndustryMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  return (
    <div className="block lg:hidden w-full ">
      {/* Toggle Button */}
      <div className="flex flex-row justify-between ">
        {/* Logo */}
        <Link to="/dashboard">
        <div className="">
          <img
            src={Giichi_Logo_Img}
            alt="Giichi-Logo"
            className="cursor-pointer w-24 md:w-28"
          />
        </div>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none  "
          aria-label="Contact-form" type="button" title="Click to Contact form"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navbar (this is shown when `isMenuOpen` is true) */}
      {isMenuOpen && (
        <div className="bg-black text-white mt-6">
          <ul className="flex flex-col space-y-4 ">
            {/* Blockchain Section */}
            <li
              onClick={() => setIsBlockchainMenuOpen(!isBlockchainMenuOpen)}
              className="flex justify-between items-center"
            >
              Blockchain
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isBlockchainMenuOpen && (
              <ul className="pl-4">
                <li
                  className="text-white text-sm"
                  onClick={() => setIsBk1Open(!isBk1Open)}
                >
                  Blockchain
                </li>
                {isBk1Open && (
                  <div className="pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/blockchain-development">
                    <p className="text-white text-xs ">
                      Blockchain Development
                    </p>
                    </Link>
                    <Link to="/blockchain-identity">
                    <p className="text-white text-xs pt-2">
                      Blockchain In identity Management
                    </p>
                    </Link>
                    <Link to="/blockchain-depin">
                    <p className=" text-white text-xs pt-2">
                      Depin Development{" "}
                    </p>
                    </Link>
                  </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsEnterpriseOpen(!isEnterpriseOpen)}
                >
                  Enterprise Blockchain
                </li>
                {isEnterpriseOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/blockchain-in-supply-chain"><p className="text-white text-xs "> Supply Chain</p></Link>
                    <Link to="/blockchain-in-transport-and-logistics"><p className="text-white text-xs pt-2">Transport & Logistics</p></Link>
                    <Link to="/blockchain-in-entertainment"><p className=" text-white text-xs pt-2">Entertainment </p></Link>
                    <Link to="/blockchain-in-real-estate"><p className=" text-white text-xs pt-2"> Real-Estate </p></Link>
                    <Link to="/blockchain-in-education"><p className=" text-white text-xs pt-2"> Education </p></Link>
                    <Link to="/blockchain-in-finance"><p className=" text-white text-xs pt-2"> Finance</p></Link>
                    <Link to="/blockchain-in-healthcare"><p className=" text-white text-xs pt-2"> Healthcare </p></Link>
                 </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsScOpen(!isScOpen)}
                >
                  Smart Contract
                </li>
                {isScOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/smart-contract-development"><p className="text-white text-xs "> Smart Contract Development</p></Link>
                    <Link to="/smart-contract-audit"><p className="text-white text-xs pt-2">Smart Contract Audit</p></Link>
                  </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsTokenOpen(!isTokenOpen)}
                >
                  Tokenization
                </li>
                {isTokenOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/asset-tokenization"><p className="text-white text-xs "> Asset Tokenization</p></Link>
                    <Link to="/real-estate-tokenization"><p className="text-white text-xs pt-2">Real -Estate Tokenization </p></Link>
                   <Link to="/asset-management"><p className="text-white text-xs pt-2"> Asset Management</p></Link>
                  </div>
                )}
              </ul>
            )}

            {/* AI Section */}
            <li
              onClick={() => setIsAiMenuOpen(!isAiMenuOpen)}
              className="flex justify-between items-center"
            >
              AI
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isAiMenuOpen && (
              <ul className="pl-4">
                <li
                  className="text-white text-sm "
                  onClick={() => setIsAi1Open(!isAi1Open)}
                >
                  Artificial Intelligence
                </li>
                {isAi1Open && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/ai-ml-solution"><p className="text-white text-xs pt-2"> AI/ML Solutions</p></Link>
                  </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsGenOpen(!isGenOpen)}
                >
                  Generative AI
                </li>
                {isGenOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                   <Link to="/generative-ai"><p className="text-white text-xs pt-2">Generative AI Development</p></Link> 
                  </div>
                )}
              </ul>
            )}

            {/* Gaming Section */}
            <li
              onClick={() => setIsGamingMenuOpen(!isGamingMenuOpen)}
              className="flex justify-between items-center"
            >
              Gaming
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isGamingMenuOpen && (
              <ul className="pl-4">
                <li
                  className="text-white text-sm "
                  onClick={() => setIsGaming1Open(!isGaming1Open)}
                >
                  Gaming{" "}
                </li>
                {isGaming1Open && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <p className="text-white text-xs "> Game Development</p>
                    <p className="text-white text-xs pt-2">
                      {" "}
                      P2E Game Development
                    </p>
                  </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsMetaOpen(!isMetaOpen)}
                >
                  Metaverse
                </li>
                {isMetaOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <p className="text-white text-xs ">
                      {" "}
                      Metaverse Development
                    </p>
                    <p className="text-white text-xs pt-2">
                      {" "}
                      Metaverse App Development
                    </p>
                  </div>
                )}
              </ul>
            )}

            {/* Consulting Section */}
            <li
              onClick={() => setIsConsultingMenuOpen(!isConsultingMenuOpen)}
              className="flex justify-between items-center"
            >
              Consulting
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isConsultingMenuOpen && (
              <ul className="pl-4">
                <li
                  className="text-white text-sm "
                  onClick={() => setIsConsult1Open(!isConsult1Open)}
                >
                  Consulting{" "}
                </li>
                {isConsult1Open && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/blockchain-consulting-company"><p className="text-white text-xs ">Blockchain Consulting Company </p></Link> 
                    <Link to="/web3-consulting-company"><p className="text-white text-xs pt-2">Web3 Consulting Company</p></Link>
                    <Link to="/metaverse-consulting-company"><p className="text-white text-xs pt-2">Metaverse Consulting Company</p></Link>
                    <Link to="/defi-consulting-company"><p className="text-white text-xs pt-2">DeFi Consulting Company</p></Link>
                   </div>
                )}
                <li
                  className="text-whitev text-sm pt-2"
                  onClick={() => setIsMarketOpen(!isMarketOpen)}
                >
                  Marketing As A Service
                </li>
                {isMarketOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/marketing-as-a-service"><p className="text-white text-xs ">Marketing As A Service (MaaS) </p></Link>
                  </div>
                )}
              </ul>
            )}

            {/* Solution Section */}
            <li
              onClick={() => setIsSolutionMenuOpen(!isSolutionMenuOpen)}
              className="flex justify-between items-center"
            >
              Solution
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isSolutionMenuOpen && (
              <ul className="pl-4">

                <li className="text-white text-sm "   onClick={() => setIsExchangeOpen(!isExchangeOpen)}>Exchange </li>
                {isExchangeOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/custom-exchange"><p className="text-white text-xs ">Custom Exchange</p></Link>
                    <Link to="/white-label-exchange"><p className="text-white text-xs pt-2">White Label Exchange</p></Link>
                    <Link to="/margin-trading-exchange"><p className=" text-white text-xs pt-2">Margin Trading Exchange</p></Link>
                    <Link to="/decentralized-exchange"><p className=" text-white text-xs pt-2">Decentralized Exchange</p></Link>
                    <Link to="/derivatives-exchange"><p className=" text-white text-xs pt-2">Derivatives Exchange</p></Link>
                    <Link to="/centralized-exchange"><p className=" text-white text-xs pt-2"> Centralized Exchange</p></Link>
                    <Link to="/p2p-exchange"><p className=" text-white text-xs pt-2">P2P Exchange</p></Link>
                    <Link to="/market-making-exchange"><p className=" text-white text-xs pt-2">Market Making Exchange</p></Link>
                 </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsWalletOpen(!isWalletOpen)}>Wallet</li>
                {isWalletOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/digital-wallet"><p className="text-white text-xs ">Digital Wallet</p></Link>
                    <Link to="/white-label-wallet"><p className="text-white text-xs pt-2">White Label Wallet</p></Link>
                    <Link to="/web3-wallet"><p className=" text-white text-xs pt-2">Web3 Wallet</p></Link>
                    <Link to="/multi-currency-wallet"><p className=" text-white text-xs pt-2">Multicurrency Wallet</p></Link>
                    <Link to="/mpc-crypto-wallet"><p className=" text-white text-xs pt-2">MPC Crypto Wallet</p></Link>
                    <Link to="/defi-wallet"><p className=" text-white text-xs pt-2">Defi Wallet</p></Link>
                    <Link to="/polink-wallet"><p className=" text-white text-xs pt-2">Polink Wallet</p></Link>
                    <Link to="/non-fungible-token-wallet"><p className=" text-white text-xs pt-2">NFT Wallet</p></Link>
                 </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsNftOpen(!isNftOpen)}>NFT</li>
                {isNftOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/nft-development"><p className="text-white text-xs ">NFT Development</p></Link>
                    <Link to="/white-label-nft-development"><p className="text-white text-xs pt-2">White Label NFT Development</p></Link>
                    <Link to="/nft-marketplace"><p className=" text-white text-xs pt-2">NFT Marketplace</p></Link>
                    <Link to="/semi-fungible-token-development"><p className=" text-white text-xs pt-2">Semi Fungible Token</p></Link>
                   </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsDefiOpen(!isDefiOpen)}>DeFi</li>
                {isDefiOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/defi-decentralized-finance-development"><p className="text-white text-xs ">Defi Development</p></Link>
                    <Link to="/dao-blockchain-development"><p className="text-white text-xs pt-2">DAO Blockchain</p></Link>
                    <Link to="/defi-staking-development"><p className=" text-white text-xs pt-2">Defi Staking</p></Link>
                    <Link to="/dapp-development"><p className=" text-white text-xs pt-2">Dapp Development Company</p></Link>
                 </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsWeb3Open(!isWeb3Open)}>Web3</li>
                {isWeb3Open && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/web3-development"><p className="text-white text-xs ">Web3.0 Development</p></Link>
                  </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsDigitalBankingOpen(!isDigitalBankingOpen)}>Digital Banking</li>
                {isDigitalBankingOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/digital-banking-solution"><p className="text-white text-xs ">Digital Banking</p></Link>
                    <Link to="/white-label-banking-solution"><p className="text-white text-xs pt-2">White Label Banking</p></Link>
                    <Link to="/payment-gateway-banking-solution"><p className=" text-white text-xs pt-2">Payment Gateway</p></Link>
                    <Link to="/p2p-lending-solution"><p className=" text-white text-xs pt-2">P2P Lending</p></Link>
                 </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsCoinDevOpen(!isCoinDevOpen)}>Coin Development</li>
                {isCoinDevOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/launchpad-coin-development"><p className="text-white text-xs ">Launchpad Development</p></Link>
                    <Link to="/ico-coin-development"><p className="text-white text-xs pt-2">ICO Development</p></Link>
                    <Link to="/token-coin-development"><p className=" text-white text-xs pt-2">Coin/Token Development</p></Link>
                    <Link to="/ido-coin-development"><p className=" text-white text-xs pt-2">IDO Development</p></Link>
                    <Link to="/stable-coin-development"><p className=" text-white text-xs pt-2">Stablecoin Development</p></Link>
                    <Link to="/meme-coin-development"><p className=" text-white text-xs pt-2">Meme Coin Development</p></Link>
                 </div>
                )}

                <li className="text-white text-sm pt-2"  onClick={() => setIsTradingBotOpen(!isTradingBotOpen)}>Trading Bots</li>
                {isTradingBotOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <Link to="/trading-bot-development"><p className="text-white text-xs ">Trading Bot</p></Link>
                    <Link to="/arbitrage-bot-development"><p className="text-white text-xs pt-2">Arbitrage Bots</p></Link>
                   </div>
                )}

              </ul>
            )}

            {/* Industry Section */}
            {/* <li
              onClick={() => setIsIndustryMenuOpen(!isIndustryMenuOpen)}
              className="flex justify-between items-center"
            >
              Industry
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            {isIndustryMenuOpen && (
              <ul className="pl-4">
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsBfsiOpen(!isBfsiOpen)}
                >
                  BFSI
                </li>
                {isBfsiOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <p className="text-white text-xs pt-2"> Trade Finance</p>
                    <p className="text-white text-xs pt-2"> Insurance</p>
                    <p className="text-white text-xs pt-2"> KYC & AML</p>
                  </div>
                )}
                <li
                  className="text-white text-sm pt-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                </li>
                {isServicesOpen && (
                  <div className=" pl-4 mt-2 top-[110px] text-white text-opacity-80 hover:text-white">
                    <p className="text-white text-xs pt-2"> Cloud Services</p>
                    <p className="text-white text-xs pt-2"> AWS Services</p>
                  </div>
                )}
              </ul>
            )} */}

            {/* About Us Section */}
            <Link to="/about-us">
            <li
              onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
              className="flex justify-between items-center"
            >
              About Us
              <MdOutlineKeyboardArrowDown size={20} />
            </li>
            </Link>
            {isAboutMenuOpen && (
              <ul className="pl-4">
                <Link to="/about-us">
                <li className="text-white text-sm pt-2">About Us</li>
                </Link>
                <li className="text-white text-sm pt-2 ">Blogs</li>
                <li className="text-white text-sm pt-2">Career</li>
              </ul>
            )}
          </ul>
        </div>
      )}

       
    </div>
  );
};

export default MobileNavbar;