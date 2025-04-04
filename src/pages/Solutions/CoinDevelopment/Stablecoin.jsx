/* eslint-disable react/no-unescaped-entities */
import Framework from "../../../components/CommonComponent/Framework";
import { StablecoinFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { StableCoinDevFaq } from "../../../components/data/faqsData";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import stablecoinBannerImg from "../../../assets/stablecoinBanner.png";
import stablecoinFeatureImg from "../../../assets/stablecoinFeature.png";
import { GiTwoCoins } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";
import { SiAlgolia } from "react-icons/si";
import { BsClipboard2DataFill } from "react-icons/bs";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const steps = [
  {
    icon: <GiTwoCoins className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Fiat currency-backed stablecoins",
  },
  {
    icon: (
      <SiHiveBlockchain className="w-12 h-12 text-blue-500" color="#ffffff" />
    ),
    title: "Cryptocurrency-backed stablecoins",
  },
  {
    icon: (
      <MdOutlineProductionQuantityLimits
        className="w-12 h-12 text-blue-500"
        color="#ffffff"
      />
    ),
    title: "Commodity-backed stablecoins",
  },
  {
    icon: (
      <BsClipboard2DataFill
        className="w-12 h-12 text-blue-500"
        color="#ffffff"
      />
    ),
    title: "Non-collateralized stablecoins",
  },
  {
    icon: <FaCoins className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Asset-backed stablecoins",
  },
  {
    icon: <SiAlgolia className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Algorithmic stablecoins",
  },
];

const Stablecoin = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Crypto Token Development */}
      <BannerContent
        img={stablecoinBannerImg}
        title1="Stable Coin"
        title2="Development Company"
        desc="Create your own stablecoin with our cutting-edge stablecoin development services, ensuring a seamless and hassle-free experience from start to finish."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={stablecoinFeatureImg}
            alt="stable coin feature image"
            className=""
          />
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Customized Stablecoin Development Services
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto"
            style={{ lineHeight: "1.7" }}
          >
            As a leading stablecoin development company, we offer end-to-end
            solutions tailored to your unique needs. Whether you're an
            individual, startup, or enterprise, our expert team ensures
            high-quality development that meets all your requirements. <br />{" "}
            <br />
            We understand the transformative potential of stablecoins in the
            financial sector. Our services cover the entire development
            lifecycle—from concept and development to testing, deployment, and
            continuous support, ensuring a seamless experience.
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mt-6">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-sm md:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
          <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/* TYPES OF STABLECOIN*/}
      <div className="mt-12 md:mt-24 mb-12">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Types of Stablecoin Development Services
          </span>
        </p>
        <div className="p-8 rounded-lg shadow-lg max-w-[1400px] mx-auto mt-0 md:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center relative mt-8 md:mt-0"
              >
                <div className="w-20 h-20 bg-[#073106] rounded-full flex items-center justify-center mb-4 transition-transform duration-500 ease-in-out hover:scale-110">
                  {step.icon}
                </div>
                <p className="text-sm text-white text-center">{step.title}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-20 w-60 border-t-[2px] border-dashed border-gray-300 -z-[1]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-0 md:mt-32">
        <Framework
          data={StablecoinFramework}
          heading1=""
          heading2="Our Stable Coin Development Services"
          desc="We provide a comprehensive range of stablecoin development solutions, ensuring businesses get everything they need under one roof. Here's what we offer:"
        />
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={StableCoinDevFaq} />
      </div>
    </div>
  );
};

export default Stablecoin;
