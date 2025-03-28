import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Framework from "../../../components/CommonComponent/Framework";
import { MarginTradingExchangeFramework } from "../../../components/data/frameworkData";
import { FaExchangeAlt, FaShoppingCart } from "react-icons/fa";
import { FaEthereum, FaWallet } from "react-icons/fa6";
import fundImg from "../../../assets/fund.png";

const platforms = [
  {
    name: "High Leverage",
    icon: <FaExchangeAlt />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
  {
    name: "Multi-layer Security",
    icon: <FaEthereum />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
  {
    name: "Advanced Order Types",
    icon: <FaWallet />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
  {
    name: "Powerful Trading Engine",
    icon: <FaShoppingCart />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
  {
    name: "Multi-currency Wallet",
    icon: <FaExchangeAlt />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
  {
    name: "Robust Admin Panel",
    icon: <FaEthereum />,
    description:
      "Token-Based HTTP authentication mechanisms like OAuth ensure a secure user authentication.",
    color: "bg-black",
  },
];

const MarginTrading = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Margin Trading Exchange"
        title2="Development "
        desc="With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Amplify your Revenue by Launching a Margin Trading Crypto Exchange
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
          {/* button to connect on whatsapp */}
          <div className="mt-8">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Talk to our Experts
            </a>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={MarginTradingExchangeFramework}
          heading1="Business Benefits of Leverage and "
          heading2="Margin Trading Exchange Software"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
          Features of our Leverage and <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Margin Trading Exchange
          </span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[50%] leading-7 text-center">
            Our blockchain supply chain solutions are packed with user-friendly,
            advanced features that empower businesses to efficiently manage
            their supply chain operations without hassle.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={fundImg}
              alt="report-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Auto Deleveraging (ADL)
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                     bottom-12 md:bottom-8 p-4 md:p-2 lg:md:p-4 left-0 right-0 text-center "
            >
              It automatically liquidates traders’ positions when the mark price
              reaches the bankruptcy price.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={fundImg}
              alt="manage-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Stop Loss/Take Profit
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                      bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              It automatically liquidates traders’ positions when the mark price
              reaches the bankruptcy price.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={fundImg}
              alt="wallet-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Partial Close Orders
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                      bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              It automatically liquidates traders’ positions when the mark price
              reaches the bankruptcy price.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={fundImg}
              alt="know-your-customer-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Insurance Funds
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                      bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              It automatically liquidates traders’ positions when the mark price
              reaches the bankruptcy price.
            </p>
          </div>
        </div>
      </div>

      {/* WHITE LABEL CRYPTO EXCHANGE FEATURES */}
      <div className="mt-20 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Security Features Of White Label
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Crypto Currency Exchange Script
          </span>
        </p>
        <p className="text-white text-lg text-opacity-70 text-center pt-4">
          We build an institutional-grade security mechanism for your trading
          platform with features that comprise:
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-bold">{platform.name}</h2>
                  <p className="text-sm opacity-80">{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarginTrading;
