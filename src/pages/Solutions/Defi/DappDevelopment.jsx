/* eslint-disable react/prop-types */
import { DappDevelopmentFaq } from "../../../components/data/faqsData";
import { DappDevelopmentFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Offerings from "../../../components/CommonComponent/Offerings";
import dappDevelopmentBannerImg from "../../../assets/dappDevBanner.png";
import dappDevelopmentFeatureImg from "../../../assets/dappDevFeature.png";

const stages = [
  {
    number: "01",
    title: "Gathering dApp Requirements & Analysis",
  },
  {
    number: "02",
    title: "Develop a Roadmap",
  },
  {
    number: "03",
    title: "Proof of Concept",
  },
  {
    number: "04",
    title: "Integrate Visual & Technical Design",
  },
  {
    number: "05",
    title: "dApp Development",
  },
  {
    number: "06",
    title: "dApp Deployment",
  },
  {
    number: "07",
    title: "Post-Deployment Support",
  },
];

const DappDevelopment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={dappDevelopmentBannerImg}
        title1="DApp Development "
        title2="Company"
        desc="Unlock your financial freedom with our innovative DApp development solutions, where barriers fade, and endless possibilities are at your fingertips."
      />

      {/* WHY OUR WEB3 DEVELOPMENT SERVICES*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={dappDevelopmentFeatureImg}
            alt="dapp development feature image"
            className=""
          />
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Unlock the Potential of Decentralization with Blockchain dApp
            Development
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-full lg:w-[90%]"
            style={{ lineHeight: "1.7" }}
          >
            DApps (decentralized applications) are poised to drive significant
            long-term benefits for businesses, with a promising future ahead. In
            2022, the dApp industry saw a 50% increase in unique active wallets,
            with daily active users rising from 1.58 million in 2021 to 2.37
            million on average. As more enterprises embrace blockchain
            technology, they are partnering with dApp development experts to
            enhance their revenue and expand their reach. <br /> <br />
            As a leading dApp development company, we specialize in creating
            innovative, secure, and engaging decentralized applications. Our
            team of experienced Web3-based dApp developers delivers customizable
            solutions that harness the full potential of blockchain technology,
            ensuring long-term value and growth for your business. Let us help
            you build a future-ready application that empowers both your
            enterprise and your users.
          </p>
        </div>
      </div>

      {/* Blockchain Depin Framework */}
      <div className="mt-12 md:mt-32">
        <Framework
          data={DappDevelopmentFramework}
          heading1="How Enterprises Benefit "
          heading2="from dApp Development"
          desc="dApps offer numerous advantages and have become a preferred alternative to traditional applications for businesses in several key areas."
        />
      </div>

      {/* WEB3 DEVELOPMENT JOURNEY */}
      <div className="mt-24">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          Our Step-by-Step dApp Development Process
        </p>
        <div className="p-4 mt-0 md:mt-10">
          <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl 3xl:max-w-[1380px] mx-auto">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative flex flex-col items-center mt-4 md:mt-0"
              >
                {/* Connecting vertical line */}
                {index < stages.length && (
                  <div className="absolute top-12 md:top-20 left-1/2 transform -translate-x-1/2 h-full">
                    <div className="w-0 h-28 border-r-2 border-dashed border-gray-300"></div>
                  </div>
                )}
                {/* Outer light green circle with blinking effect */}
                <div className="w-28 h-28 bg-green bg-opacity-20 rounded-full flex items-center justify-center relative z-10 animate-blink">
                  {/* Inner dark green circle */}
                  <div className="w-10 h-10 bg-green text-white rounded-full flex items-center justify-center font-bold z-20">
                    {stage.number}
                  </div>
                </div>
                {/* Stage title */}
                <div className="text-center mt-12 md:mt-24 w-48 text-sm text-white font-medium">
                  {stage.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our DApp experts TODAY!" />

      {/* FAQ Section */}
      <div>
        <Faq data={DappDevelopmentFaq} />
      </div>
    </div>
  );
};

export default DappDevelopment;
