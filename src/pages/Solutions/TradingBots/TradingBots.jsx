/* eslint-disable react/no-unescaped-entities */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Services from "../../../components/CommonComponent/Services";
import { TradingBotsService } from "../../../components/data/ServicesData";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import accessImg from "../../../assets/payment.png";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";

const botTypesLeft = [
  "Margin Trading Bots",
  "Leverage Trading Bots",
  "Flash Loan Trading Bots",
  "AI-Powered Trading BOT",
  "Automated futures trading bot",
  "AI-Powered Portfolio Management Bot",
];

const botTypesRight = [
  "Grid Trading Bot",
  "Copy Trading Bots",
  "Combo Trading Bot",
  "Option Bots",
  "MEV Bots",
  "Signal Bots",
];

const steps = [
  { id: "01", title: "Understanding Requirements" },
  { id: "02", title: "Conceptualization & Design" },
  { id: "03", title: "Development & QA" },
  { id: "04", title: "Security & Compliance" },
  { id: "05", title: "Implementation Maintenance" },
];

const TradingBots = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Crypto Trading Bot "
        title2="Development Company"
        desc="Effortlessly reach your trading goals and maximize ROI with our advanced crypto trading bot development solutions, designed to automate and optimize your trading experience."
      />

      {/* Blockchain Development Services */}
      <Services
        data={TradingBotsService}
        heading1="Automated Crypto Trading Bot:"
        heading2="Key Features"
        desc="Enhance your trading experience with a seamless, AI-powered crypto trading bot equipped with the following cutting-edge features:"
      />

      {/* web3 crypto  wallet offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our Trading Bots experts TODAY!
          </p>
          <div className="flex flex-row items-center space-x-6">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Types of crypto trading bots */}
      <div className="flex flex-col items-center text-center p-8">
        <h2 className="text-2xl font-bold text-white">
        Types of Crypto Trading Bot Solutions We Develop
        </h2>
        <p className="text-white text-opacity-70 mt-2 max-w-2xl">
        Our team of expert crypto bot developers specializes in building high-frequency trading bots tailored to various trading strategies.
        </p>
        <div className="flex flex-col md:flex-row items-center space-x-24 mt-6 w-full max-w-7xl">
          <div className="w-1/3 flex justify-center">
            <img src={bgimg} alt="" className="w-full" />
          </div>
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6">
            <ul className="list-disc space-y-6">
              {botTypesLeft.map((bot, index) => (
                <li key={index} className="text-white flex items-center">
                  <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                  {bot}
                </li>
              ))}
            </ul>
            <ul className="list-none space-y-6">
              {botTypesRight.map((bot, index) => (
                <li key={index} className="text-white flex items-center">
                  <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                  {bot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
        Crypto Trading Bot Development 
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Services We Offer
          </span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[50%] leading-7 text-center">
          Whether you're an entrepreneur looking to integrate a trading bot into an existing platform or building an AI-powered trading platform for personal use, we have the expertise to bring your vision to life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={accessImg}
              alt="report-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Bot-as-a-Service(BaaS)
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                           bottom-12 md:bottom-8 p-4 md:p-2 lg:md:p-4 left-0 right-0 text-center "
            >
            Leverage our cloud-based trading bot solutions, accessible from anywhere in the world. Our highly customizable automated crypto trading bots can be tailored to meet your specific trading strategies and compliance requirements.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={accessImg}
              alt="manage-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Trading Bot Consultation Services
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                            bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
            Gain a deeper understanding of automated crypto trading with our expert consultation services. Whether you're new to the industry or looking to refine your trading approach, we help you navigate the right path to profitable AI-driven trading.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={accessImg}
              alt="wallet-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Custom AI Auto Trading Bot Development
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                            bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
            Stay ahead in the crypto market with our AI-powered auto trading bots. Designed with advanced algorithms, our bots analyze market trends to identify the best trading opportunities for maximum returns.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={accessImg}
              alt="know-your-customer-image"
              className="w-16 group-hover:hidden"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              AI Auto Trading Bot Integration Services
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                            bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
            We provide top-tier AI trading bot integration services, seamlessly integrating third-party or custom-developed bots into your preferred crypto exchange or platform—all at competitive pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Crypto Trading Bot Development Process "
        desc="To guarantee flawless deliveries, our team follows a structured and efficient process for developing trading bots, which includes the following phases:"
      />
    </div>
  );
};

export default TradingBots;
