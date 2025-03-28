import { Link } from "react-router-dom";
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
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          Crypto Digital Wallet <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              A white paper is an authoritative, persuasive, and comprehensive
              document that outlines a business project’s challenges and
              solutions. It plays a crucial role in establishing industry
              authority, enhancing credibility, and demonstrating thought
              leadership. In the crypto market, a well-researched white paper
              serves as a powerful tool to attract investors and showcase your
              project’s potential.
              <br /> <br />
              At Giichi IT Solution, we specialize in crafting impactful white
              papers that combine in-depth research, solution architecture, and
              token economics. Our expert writers collaborate with industry
              professionals to develop detailed, data-driven white papers that
              add credibility and authenticity to your project.
            </p>

            {/* button to connect on whatsapp */}
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
      </div>

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Crypto Wallet Development: Explore the Prospects Offered by Billion
            Dollar Market
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
          Inside Custom Cryptocurrency Wallet Development : <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            A Step-By-Step Workflow
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
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* Industries  */}
      <div className="mt-20">
        <Industries
          data={digitalWalletIndustriesData}
          heading1="Industries Harnessing the Potential of Our Crypto"
          heading2=" Digital Wallet Development Solutions"
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
