/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Faq from "../../../components/resuableComponent/Faq";
import { SemiFungibleFaq } from "../../../components/data/faqsData";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import nft1Img from "../../../assets/nft1.png";

const SemiFungibleToken = () => {
  return (
    <div>
      {/* NFT Development */}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-4 tracking-wide">
            Semi Fungible Token{" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-6 tracking-wide">
            Development Services
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
          Add fungibility to your non-fungible tokens and unlock new possibilities for your digital assets with our specialized semi-fungible token development solutions. Semi-fungible tokens (SFTs) are a type of token that blend the characteristics of both fungible and non-fungible tokens.
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

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Why Choose SFT Development Services?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider">
          NFTs revolutionized the digital world by providing a secure, transparent, and immutable way to represent ownership. However, transferring a collection of NFTs can be slow and inefficient. This is where SFTs come in. By using a next-generation multi-token standard, SFTs allow for batch token transfers, making the process much faster and more efficient. <br/> <br/>
          Creating semi-fungible tokens allows you to combine both fungible (like tokens) and non-fungible (NFTs) assets under one contract, significantly reducing gas fees. Whether you're an artist, gamer, or brand, Giichi provide SFT development solutions help streamline token management, save costs, and unlock new possibilities for your business.
          </p>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our experts TODAY!
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

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-20 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%]">
          <p className="text-white text-2xl font-semibold">
            Semi Fungible Token Development Benefits
          </p>
          <p className="text-white text-[15px] font-medium pt-4">
            Benefits for Token Holders
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center ">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] flex flex-col justify-center items-center">
              <img src={nft1Img} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px] text-center">
                Easy management of fungible and non-fungible tokens
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] mt-4 md:mt-0 flex flex-col justify-center items-center">
              <img src={nft1Img} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
              The minting process is simple, accessible, and cost-effective.
              </p>
            </div>
          </div>

          <p className="text-white text-[15px] font-medium pt-8">
            Benefits for Token Creators
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16 w-full md:w-[70%] flex flex-col justify-center items-center">
              <img src={nft1Img} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
              Even when bundled under one smart contract, the owner can unbundle and trade each token individually.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-16  w-full md:w-[70%] mt-4 md:mt-0 flex flex-col justify-center items-center">
              <img src={nft1Img} alt="" className="" />
              <p className="text-white pt-2 text-[17px] md:text-[14px]  text-center">
              Only one smart contract is required to control both fungible and non-fungible tokens
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
