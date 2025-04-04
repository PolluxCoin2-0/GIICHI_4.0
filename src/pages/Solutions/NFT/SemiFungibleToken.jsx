/* eslint-disable react/no-unescaped-entities */
import Faq from "../../../components/resuableComponent/Faq";
import { SemiFungibleFaq } from "../../../components/data/faqsData";
import nft1Img from "../../../assets/nft1.png";
import ManagementImg from "../../../assets/management.png";
import processImg from "../../../assets/process.png";
import stockChartImg from "../../../assets/stock-chart.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import semiFungibleBannerImg from "../../../assets/semiFungibleBanner.png";
import semiFungibleFeatureImg from "../../../assets/semiFungibleFeature.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const SemiFungibleToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* NFT Development */}
      <BannerContent
        img={semiFungibleBannerImg}
        title1="Semi Fungible Token"
        title2="Development Services"
        desc="Semi-fungible tokens (SFTs) are a type of token that blend the characteristics of both fungible and non-fungible tokens."
      />

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={semiFungibleFeatureImg} alt="" className="" />
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.7" }}
          >
            Why Choose SFT Development Services?
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider"
            style={{ lineHeight: "1.7" }}
          >
            NFTs revolutionized the digital world by providing a secure,
            transparent, and immutable way to represent ownership. However,
            transferring a collection of NFTs can be slow and inefficient. This
            is where SFTs come in. By using a next-generation multi-token
            standard, SFTs allow for batch token transfers, making the process
            much faster and more efficient. <br /> <br />
            Creating semi-fungible tokens allows you to combine both fungible
            (like tokens) and non-fungible (NFTs) assets under one contract,
            significantly reducing gas fees. Whether you're an artist, gamer, or
            brand, Giichi provide SFT development solutions help streamline
            token management, save costs, and unlock new possibilities for your
            business.
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-4">
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
           <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-20 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12 3xl:mt-40">
        <div className="w-full lg:w-[50%]">
          <p className="text-3xl font-semibold text-transparent bg-clip-text bg-green-gradient">
            Semi Fungible Token Development Benefits
          </p>
          <p className="text-white text-[15px] font-medium pt-4 pb-2">
          <span className="w-3 h-3 bg-green mr-3 inline-block"></span>
            Benefits for Token Holders
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center ">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] flex flex-col justify-center items-center">
              <img src={ManagementImg} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px] text-center">
                Easy management of fungible and non-fungible tokens
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] mt-4 md:mt-0 flex flex-col justify-center items-center">
              <img src={processImg} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
                The minting process is simple, accessible, and cost-effective.
              </p>
            </div>
          </div>

          <p className="text-white text-[15px] font-medium pt-8 pb-2">
          <span className="w-3 h-3 bg-green mr-3 inline-block"></span>
            Benefits for Token Creators
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] flex flex-col justify-center items-center">
              <img src={stockChartImg} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
                Even when bundled under one smart contract, the owner can
                unbundle and trade each token individually.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16  w-full md:w-[70%] mt-4 md:mt-0 flex flex-col justify-center items-center">
              <img src={nft1Img} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
                Only one smart contract is required to control both fungible and
                non-fungible tokens
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] ">{/* img */}</div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24 mb-20">
        <Faq data={SemiFungibleFaq} />
      </div>
    </div>
  );
};
export default SemiFungibleToken;
