import BannerContent from "../../../components/CommonComponent/BannerContent";
import derivativeExchangeBannerImg from "../../../assets/derivativeExchangeBanner.png";
import derivativeExchangeFeatureImg from "../../../assets/derivativeExchangeFeature.png";
import { DerivativesExchangeFramework } from "../../../components/data/frameworkData";
import Services from "../../../components/CommonComponent/Services";
import { DerivativeDevelopmentService } from "../../../components/data/ServicesData";
import { FaChartLine, FaFileContract, FaClipboardList, FaInfinity } from "react-icons/fa";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { derivativesLifeCycleData } from "../../../components/data/lifecycleData";
import Framework from "../../../components/CommonComponent/Framework";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const platforms = [
  {
    name: "Futures Trading",
    icon: <FaChartLine color="#8AF969"/>,
    description:
      "In futures trading, the buyer and seller agree on a fixed price for the crypto asset to be settled at a specific future date. These contracts are standardized and come with an expiration date.",
    color: "bg-black",
  },
  {
    name: "Forwards Trading",
    icon: <FaFileContract color="#8AF969"/>,
    description:
      "Similar to futures trading, forwards contracts are more customizable, allowing both parties to adjust terms, including the underlying asset, based on their needs.",
    color: "bg-black",
  },
  {
    name: "Options Trading",
    icon: <FaClipboardList color="#8AF969"/>,
    description:
      "Options trading gives the buyer the right, but not the obligation, to purchase a crypto asset at an agreed price by a specific date. The buyer can also specify a particular time for the purchase.",
    color: "bg-black",
  },
  {
    name: "Perpetual Trading",
    icon: <FaInfinity color="#8AF969"/>,
    description:
      "Perpetual trading involves exchanging one form of cash flow for another at a future date. These swaps are typically influenced by interest rates, currencies, and commodities.",
    color: "bg-black",
  },
];

const Derivatives = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={derivativeExchangeBannerImg}
        title1="Crypto Derivatives"
        title2="Exchange Development"
        desc="Explore the future of crypto trading with our expert crypto derivatives exchange development services."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={derivativeExchangeFeatureImg} alt="crypto derivative exchange " className=""/>
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-3xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Crypto Derivatives Exchange - Unlock New Investment Opportunities
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
          A crypto derivative is a tradable financial contract based on the future price of an underlying asset. Derivatives trading expands the financial market, offering new investment opportunities. <br/> <br/>
         As a leading crypto derivatives exchange development company, we create advanced trading software and platforms for crypto derivatives, enabling seamless crypto trading and providing investors with a cutting-edge trading experience.
          </p>
          <div className="mt-8">
            <p className="text-white text-[17px]">
            <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
            Explore the world of Decentralized Finance (DeFi)
            </p>
            <p className="text-white text-[17px] mt-4">
            <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
            Access an untapped pool of crypto holders
            </p>
            <p className="text-white text-[17px] mt-4">
            <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
            Speed up transactions with automated smart contracts
            </p>
            <p className="text-white text-[17px] mt-4">
            <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
            Effectively execute complex strategies like shorting
            </p>
          </div>
          {/* button to connect on whatsapp */}
          <div className="mt-6">
            <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={DerivativesExchangeFramework}
          heading1="Crypto Derivatives Exchange"
          heading2="Development Services"
          desc="Explore the range of crypto derivative exchange development services we offer."
        />
      </div>

      {/* Blockchain Development Services */}
      <Services
        data={DerivativeDevelopmentService}
        heading1="Features of Crypto Derivative "
        heading2="Exchange Development"
        desc="Explore the impressive features of our crypto derivatives exchanges."
      />

      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20 ">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          <span className="text-transparent bg-clip-text bg-green-gradient">
          Types of Crypto Derivatives Trading{" "}
          </span>
        </p>
        <p className="text-white text-[16px] text-opacity-70 text-center mt-4">
        Explore the various types of crypto derivatives trading supported by our platform.
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-4 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-start gap-4 bg-[#062406] bg-opacity-30 p-6 h-[270px]">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-semibold">{platform.name}</h2>
                  <p className="text-sm opacity-80">{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 mb-6 md:mb-12">
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Derivatives Trading Strategies Supported by Our Exchange
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
          As a trusted crypto derivatives exchange development company, we leverage extensive industry expertise to create top-tier crypto exchange products and platforms. Our goal is to empower investors by simplifying the trading process while maximizing their potential benefits. <br/> <br/>
          With a strong emphasis on backend risk management and an intuitive user experience, our ready-to-deploy derivatives trading platforms ensure quick time-to-market. Below are some of the key derivatives trading strategies supported by our exchange:
          </p>

          <div className="mt-8">
              <p className="text-white text-sm ">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              Advanced order types and long-short contracts</p>
              <p className="text-white text-sm mt-4">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              High transaction throughput with minimal latency
              </p>
              <p className="text-white text-sm mt-4">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              Multi-layered security and a robust trading engine
              </p>
              <p className="text-white text-sm  mt-4">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              An extremely user-friendly admin panel
              </p>
            </div>
           
          {/* button to connect on whatsapp */}
          <div className="mt-12">
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

        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
      </div>

      {/* Lifecycle data */}
      <div>
        <LifeCycle
          heading1="Our Crypto Derivative Exchange"
          heading2="Development Process"
          desc="We follow a structured, step-by-step approach to deliver exceptional crypto derivatives exchange development services, ensuring top-tier results for every client."
          steps={derivativesLifeCycleData}
        />
      </div>
</div>
  );
};

export default Derivatives;
