/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Framework from "../../../components/CommonComponent/Framework";
import { MemecoinFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MemecoinFaq } from "../../../components/data/faqsData";
import Offerings from "../../../components/CommonComponent/Offerings";

const Memecoin = () => {
  return (
    <div className="pt-6 md:pt-0 mb-20">
      {/* Crypto Token Development */}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[50px] font-semibold pt-4 tracking-wide">
          Meme Coin{" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[50px] font-semibold pt-6 tracking-wide">
            Development Company
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
          Launch a market-ready meme coin with our blockchain expertise! We design secure, high-performance meme coins with structured tokenomics, automated smart contracts, and seamless liquidity integration for a smooth and successful launch.
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-5">
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

        <div className="w-[50%]"></div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Leverage the Growing Popularity of Meme Coin Development
          </p>
          <p className="text-white text-xl font-semibold pt-4 tracking-tight">
          Can a Meme Coin Be More Than Just Hype?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-4 leading-6 text-justify hyphens-auto mt-6"  style={{ lineHeight: "1.7" }}>
          In today's evolving financial landscape, meme coins have transcended internet humor, merging blockchain innovation, community-driven momentum, and high-frequency trading to create valuable digital assets. Once seen as speculative trends, meme coins now command significant liquidity and institutional attention, proving that viral culture—when strategically engineered—can achieve long-term market relevance. <br/> <br/>
          As a leading meme coin development company, we craft enterprise-grade blockchain solutions with robust smart contract architecture and efficient token economies. Whether you're launching the next viral sensation or a community-driven digital asset, our expertise ensures a secure, optimized, and impactful market entry.
          </p>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Memecoin Development experts TODAY!"/>
    
     {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-10 3xl:mt-32">
        <Framework
          data={MemecoinFramework}
          heading1=""
          heading2="Our Meme Coin Development Services"
          desc="As a top-tier meme coin development company, we provide end-to-end solutions to ensure your successful entry into the meme coin market."
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={MemecoinFaq} />
      </div>
    </div>
  );
};

export default Memecoin;
