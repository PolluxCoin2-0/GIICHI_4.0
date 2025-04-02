/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import { DeFiStakingFaq } from "../../../components/data/faqsData";
import { DefiStakingFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";

const DeFiStaking = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainDepinImg}
        title1="DeFi Staking "
        title2="Platform Development"
        desc="With our expert DeFi staking platform development services, you can quickly launch a fully-functional platform in just 7 days."
      />

      {/* WHY OUR WEB3 DEVELOPMENT SERVICES*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          DeFi Staking Development - Unlock Passive Income Potential
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-[90%]"  style={{ lineHeight: "1.7" }}>
          Participating in DeFi staking presents a great opportunity to generate passive income. Users contribute their tokens to a shared pool, and those who stake a larger number of tokens have a higher chance of being selected by the algorithm, even though the node selection is ultimately random. <br/> <br/>
          The Proof-of-Stake (PoS) consensus mechanism, widely used in DeFi, is best exemplified by platforms like Ethereum. With DeFi staking, individuals can earn additional profits by participating in the staking process. <br/> <br/>
          If you're looking to tap into this growing opportunity, our DeFi staking platform development services provide the perfect solution. Our expert team can help you design and build a fully customized, feature-rich platform tailored to your needs. Contact us today to get started!
          </p>
        </div>
      </div>


      {/* Blockchain Depin Framework */}
      <div className="">
      <Framework
        data={DefiStakingFramework}
        heading1="Our DeFi Staking Platform "
        heading2="Development Services"
        desc="As a leading DeFi staking platform development company, we provide a comprehensive range of services to meet the diverse needs of our clients and users."
      />
      </div>

  {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our DeFi experts TODAY!
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

      {/* FAQ Section */}
      <div>
        <Faq data={DeFiStakingFaq} />
      </div>
    </div>
  );
};

export default DeFiStaking;
