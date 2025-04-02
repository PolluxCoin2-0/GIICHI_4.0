/* eslint-disable react/no-unescaped-entities */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Framework from "../../../components/CommonComponent/Framework";
import { DigitalWalletFramework } from "../../../components/data/frameworkData";
import Industries from "../../../components/CommonComponent/Industries";
import { digitalWalletIndustriesData } from "../../../components/data/industriesData";
import Faq from "../../../components/resuableComponent/Faq";
import { DigitalWalletExchangeFaq } from "../../../components/data/faqsData";
import graphImg from "../../../assets/tset.jpg.jfif";
import driversImg from "../../../assets/drivers.jpg.jfif";
import regionalImg from "../../../assets/regional.jpg.jfif";
import { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { LuTextSelect } from "react-icons/lu";
import { IoQrCode } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import digitalWalletBannerImg from "../../../assets/digitalWalletBanner.png";

const steps = [
  {
    icon: <FaFingerprint className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Generate a key",
  },
  {
    icon: <LuTextSelect className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Enter the phrase",
  },
  {
    icon: <IoQrCode className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Secure it with QR code",
  },
  {
    icon: <GiWallet className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Fund the wallet",
  },
  {
    icon: (
      <MdOutlineVerifiedUser
        className="w-12 h-12 text-blue-500"
        color="#ffffff"
      />
    ),
    title: "Store it safely",
  },
  {
    icon: <GiTwoCoins className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Access Cryptos",
  },
];

const DigitalWallet = () => {
  const [activeSection, setActiveSection] = useState("marketOverview");

  return (
    <div className="mt-20 mb-20 ">
      
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <BannerContent
        img={digitalWalletBannerImg}
        title1="Crypto Digital Wallet  "
        title2="Development Services"
        desc="Elevate your business by collaborating with a leading cryptocurrency wallet development company."
      />
    
      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Crypto Wallet Development: Unlocking Opportunities in the
            Billion-Dollar Market
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            The global crypto wallet market, valued at around $10.27 billion in
            2023, is set to expand significantly, reaching an estimated $14.39
            billion in 2024 and growing by $47.62 billion by 2030. This rapid
            growth presents significant opportunities for businesses to
            capitalize on, with the guidance of experienced crypto wallet
            development experts. <br /> <br />
            As a leading crypto wallet development company, Giichi specializes
            in crafting tailored solutions that empower businesses and investors
            to fully harness the potential of digital wallets. We design
            all-in-one platforms that integrate financial services, social
            features, and gaming functionalities, giving users access based on
            their preferences. <br /> <br />
            With over a decade of industry experience, technical expertise, and
            a commitment to excellence, we provide highly secure, adaptable, and
            future-ready wallet solutions.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-row items-center space-x-4 justify-end">
            <p
              className={`text-white bg-[#239400] bg-opacity-10 px-10 py-4 text-nowrap cursor-pointer ${
                activeSection === "marketOverview" ? "bg-opacity-30" : ""
              }`}
              onClick={() =>
                setActiveSection(
                  activeSection === "marketOverview" ? null : "marketOverview"
                )
              }
            >
              Market Overview
            </p>
            <p
              className={`text-white bg-[#239400] bg-opacity-10 px-8 py-4 text-nowrap cursor-pointer ${
                activeSection === "marketDrivers" ? "bg-opacity-30" : ""
              }`}
              onClick={() =>
                setActiveSection(
                  activeSection === "marketDrivers" ? null : "marketDrivers"
                )
              }
            >
              Key Market Drivers
            </p>
            <p
              className={`text-white bg-[#239400] bg-opacity-10 px-8 py-4 text-nowrap cursor-pointer ${
                activeSection === "regionalAnalysis" ? "bg-opacity-30" : ""
              }`}
              onClick={() =>
                setActiveSection(
                  activeSection === "regionalAnalysis"
                    ? null
                    : "regionalAnalysis"
                )
              }
            >
              Regional Analysis
            </p>
          </div>

          {activeSection === "marketOverview" && (
            <div className="mt-4">
              <img src={graphImg} alt="Market Overview" />
            </div>
          )}
          {activeSection === "marketDrivers" && (
            <div className="mt-4">
              <img src={driversImg} alt="Key Market Drivers" />
            </div>
          )}
          {activeSection === "regionalAnalysis" && (
            <div className="mt-4">
              <img src={regionalImg} alt="Regional Analysis" />
            </div>
          )}
        </div>
      </div>

      {/* workflow of a wallet */}
      <div className="mt-24 mb-12">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          A Comprehensive Guide to Custom Cryptocurrency <br />
          <span className="text-transparent bg-clip-text bg-green-gradient block mt-3">
            Wallet Development: Step-by-Step Workflow
          </span>
        </p>

        <div className="p-8 rounded-lg shadow-lg max-w-[1400px] mx-auto mt-16">
          <div className="flex justify-between items-center space-x-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center relative"
              >
                <div className="w-20 h-20 bg-[#073106] rounded-full flex items-center justify-center mb-4 transition-transform duration-500 ease-in-out hover:scale-110">
                  {step.icon}
                </div>
                <p className="text-sm text-white text-center">{step.title}</p>
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-20 w-60 border-t-[2px] border-dashed border-gray-300 -z-[1]"></div>
                )}
                <div className="w-8 h-8 bg-[#010F02] text-white rounded-full flex items-center justify-center absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={DigitalWalletFramework}
          heading1="Digital Wallet"
          heading2="Development Services"
          desc="Explore our full-range of crypto wallet development services, from initial ideation to fully realized solutions, customized to meet your unique requirements and objectives."
        />
      </div>

      {/* Industries  */}
      <div className="mt-20">
        <Industries
          data={digitalWalletIndustriesData}
          heading1="Industries"
          heading2="We Serve"
          desc=""
        />
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={DigitalWalletExchangeFaq} />
      </div>
    </div>
  );
};

export default DigitalWallet;
