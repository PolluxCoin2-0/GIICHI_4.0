/* eslint-disable react/no-unescaped-entities */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import customExchangeBannerImg from "../../../assets/customExchangeBanner.png";
import customExchangeFeatureImg1 from "../../../assets/customExchangeFeature1.png";
import customExchangeFeatureImg2 from "../../../assets/customExchangeFeature2.png";
import Framework from "../../../components/CommonComponent/Framework";
import { CustomExchangeFramework } from "../../../components/data/frameworkData";
import {
  FaBuilding,
  FaEthereum,
  FaUsers,
  FaChartLine,
  FaBalanceScale,
  FaStore,
  FaCoins,
  FaClipboardList,
} from "react-icons/fa"; // Import relevant icons
import Process from "../../../components/CommonComponent/Process";
import { CryptoExchangeProcessSteps } from "../../../components/data/processData";
import Faq from "../../../components/resuableComponent/Faq";
import { CustomExchangeFaq } from "../../../components/data/faqsData";

const platforms = [
  {
    name: "Centralized Exchanges",
    icon: <FaBuilding color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Decentralized Exchanges",
    icon: <FaEthereum color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Peer-to-Peer Exchanges",
    icon: <FaUsers color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Crypto Derivatives Exchanges",
    icon: <FaChartLine color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Margin Trading Exchanges",
    icon: <FaBalanceScale color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Non-Fungible Token Exchanges",
    icon: <FaStore color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Security Token Exchanges",
    icon: <FaCoins color="#8AF969" />,
    color: "bg-black",
  },
  {
    name: "Futures Trading Platforms",
    icon: <FaClipboardList color="#8AF969" />,
    color: "bg-black",
  },
];

export const Custom = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={customExchangeBannerImg}
        title1="Cryptocurrency Exchange"
        title2="Development Company"
        desc="Stay ahead in the future of trading with cutting-edge cryptocurrency exchange development solutions."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={customExchangeFeatureImg1}
            alt="Investing in Custom Exchange Feature Image"
            className=""
          />
        </div>

        <div className="w-full lg:w-[50%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight "
            style={{ lineHeight: "1.5" }}
          >
            Why Invest in Crypto Exchange Development?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            The adoption of cryptocurrencies is skyrocketing, with trading
            volumes surging by 89% in the past three years. This rapid growth
            fuels the need for secure, scalable, and user-friendly crypto
            exchange solutions. Meeting this demand presents a lucrative
            opportunity. <br /> <br />
            As a top cryptocurrency exchange development company, we transform
            visionary ideas into reality, helping businesses stay ahead in the
            evolving digital economy. Bring your vision, and we’ll bring the
            expertise.
          </p>
          {/* button to connect on whatsapp */}
          <div className="mt-16">
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
          </div>
        </div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Pioneering the Future with Advanced Crypto Exchange Development
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            If you're not embracing cryptocurrency, you're missing out on the
            future. The digital economy is evolving rapidly, and staying ahead
            requires adaptation. For those ready to explore a transparent and
            decentralized financial world, Giichi is the crypto exchange
            development partner you can trust. <br /> <br />
            With 27% of developers worldwide engaging in blockchain projects, we
            house the top 1% of talent to ensure your exchange software thrives
            in a competitive market. Our expertise includes:
          </p>

          <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8 mt-8">
            <div>
              <p className="text-white text-xs md:text-sm ">
                {" "}
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>4+
                Years in Blockchain Development
              </p>
              <p className="text-white text-xs md:text-sm mt-4">
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Rigorous Testing & Error Management
              </p>
              <p className="text-white text-xs md:text-sm mt-4">
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Complete Transparency Throughout Development
              </p>
              <p className="text-white text-xs md:text-sm  mt-4">
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Modern Coding & Agile Methodologies
              </p>
            </div>
            <div>
              <p className="text-white text-xs md:text-sm mt-4 md:mt-0">
                {" "}
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                In-House Design & Development Expertise
              </p>
              <p className="text-white text-xs md:text-sm mt-4">
                {" "}
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Unmatched Post-Development Support
              </p>
              <p className="text-white text-xs md:text-sm mt-4">
                {" "}
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Mission-Driven, Quality-Focused Services
              </p>
              <p className="text-white text-xs md:text-sm mt-4">
                {" "}
                <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
                Technology-Agnostic, First-Time Right Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={customExchangeFeatureImg2}
            alt="Future of Crypto Custom Exchange Feature Image"
            className=""
          />
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={CustomExchangeFramework}
          heading1="Our Top Cryptocurrency Exchange"
          heading2="Development Services"
          desc="Whether you're a leading fintech firm, an emerging digital currency startup, or a visionary tech investor, our cryptocurrency exchange development services are tailored to meet the needs of businesses of all scales."
        />
      </div>
      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20 ">
        <p className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Types of Crypto Exchange Platform{" "}
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-8">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-semibold">{platform.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CRYPTO EXCHANGE DEVELOPMENT PROCESS */}
      <div>
        <Process
          heading1="Our Crypto Exchange"
          heading2="Development Process"
          desc="At Giichi IT Solutions, we follow a structured and efficient approach to developing secure and scalable smart contracts."
          processSteps={CryptoExchangeProcessSteps}
        />
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={CustomExchangeFaq} />
      </div>
    </div>
  );
};

export default Custom;
