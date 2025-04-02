/* eslint-disable react/no-unescaped-entities */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import marginTradingBannerImg from "../../../assets/marginTradingBanner.png";
import Framework from "../../../components/CommonComponent/Framework";
import { MarginTradingExchangeFramework } from "../../../components/data/frameworkData";
import { FaHourglassStart, FaLayerGroup, FaSearchDollar } from "react-icons/fa";
import fundImg from "../../../assets/fund.png";
import Faq from "../../../components/resuableComponent/Faq";
import { MarginTradingExchangeFaq } from "../../../components/data/faqsData";
import ExchangeImg from "../../../assets/Exchange.png";
import stockChartImg from "../../../assets/stock-chart.png";
import buyButtonImg from "../../../assets/buy-button.png";
import { IoMdSpeedometer } from "react-icons/io";
import { HiWallet } from "react-icons/hi2";
import { MdAdminPanelSettings } from "react-icons/md";

const platforms = [
  {
    name: "High Leverage",
    icon: <FaHourglassStart color="#8AF969" />,
    description:
      "Enables users to amplify their buying or selling power by leveraging up to several times their initial investment.",
    color: "bg-black",
  },
  {
    name: "Multi-layer Security",
    icon: <FaLayerGroup color="#8AF969" />,
    description:
      "Top-tier security features, including SSL encryption and two-factor authentication, ensure secure access for legitimate users.",
    color: "bg-black",
  },
  {
    name: "Advanced Order Types",
    icon: <FaSearchDollar color="#8AF969" />,
    description:
      "The exchange supports various trading order types, such as market orders, copy trading, and more.",
    color: "bg-black",
  },
  {
    name: "Powerful Trading Engine",
    icon: <IoMdSpeedometer color="#8AF969" />,
    description:
      "Our high-performance trading engine provides unmatched speed and reliability, enhancing the platform’s overall performance.",
    color: "bg-black",
  },
  {
    name: "Multi-currency Wallet",
    icon: <HiWallet color="#8AF969" />,
    description:
      "Integrated multi-currency wallet ensures fast, secure transactions across a wide range of cryptocurrencies.",
    color: "bg-black",
  },
  {
    name: "Robust Admin Panel",
    icon: <MdAdminPanelSettings color="#8AF969" />,
    description:
      "The comprehensive admin panel allows easy monitoring of user activities and transactions across the platform.",
    color: "bg-black",
  },
];

const MarginTrading = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={marginTradingBannerImg}
        title1="Margin Trading "
        title2="Exchange Development "
        desc="Transform the crypto market with secure, feature-packed margin trading exchange software. Offering the most advanced platform with strong risk management protocols for enhanced trading security."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.3' }}>
            Boost Your Revenue by Launching a Margin Trading Crypto Exchange
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Margin trading is one of the most prominent trends in the crypto
            market, allowing traders to borrow funds to increase potential
            returns when buying or selling cryptocurrencies. By using margin
            trading, traders can leverage more buying/selling power and open
            positions significantly larger than their actual account balance.{" "}
            <br /> <br />
            At Giichi, we specialize in developing margin and leverage trading
            exchanges, enabling your users to go long or short on various
            cryptocurrencies. Every margin trading exchange we build is powered
            by institutional-grade security and a high-performance trading
            engine to ensure secure and fast transactions. Start your margin and
            leverage trading exchange development journey with us to drive
            growth and maximize profits.
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
          heading1="Advantages of Margin Trading"
          heading2="Exchange Software"
          desc="A robust crypto leverage trading exchange can open up new revenue opportunities for your business."
        />
      </div>

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
          Risk Management Features of Our Leverage <br />
          <span className="block mt-4 text-transparent bg-clip-text bg-green-gradient">
            and Margin Trading Exchange
          </span>
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[50%] leading-7 text-center">
            Our margin trading crypto exchange is equipped with the following
            features to ensure top-tier performance.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={ExchangeImg}
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
              Automatically liquidates traders' positions when the mark price
              hits the bankruptcy price.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={stockChartImg}
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
              Allows traders to set floor and ceiling limits for an order,
              enabling automatic market exit when conditions are favorable.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[25%] group relative ">
            <img
              src={buyButtonImg}
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
              Gives users the ability to partially close their orders, allowing
              them to secure profits while continuing to benefit from a bullish
              market.
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
              Protects traders' funds against auto deleveraging, even if their
              positions fall below the maintenance margin level.
            </p>
          </div>
        </div>
      </div>

      {/* WHITE LABEL CRYPTO EXCHANGE FEATURES */}
      <div className="mt-20 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Features of Our Margin Trading
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Exchange Software
          </span>
        </p>
        <p className="text-white text-lg text-opacity-70 text-center pt-4">
          Our margin trading crypto exchange is equipped with the following
          features to deliver exceptional performance:
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

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={MarginTradingExchangeFaq} />
      </div>
    </div>
  );
};

export default MarginTrading;
