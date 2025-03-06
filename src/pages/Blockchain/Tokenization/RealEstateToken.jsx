/* eslint-disable react/prop-types */
import scDevBannerImg from "../../../assets/ScDevBanner.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { Link } from "react-router-dom";
import { RealEstateTokenizationService } from "../../../components/data/ServicesData";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const RealEstatetToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={scDevBannerImg}
        title1="Real Estate Tokenization "
        title2="Service"
        desc=" At Giichi IT Solutions, we specialize in writing secure, efficient, 
          and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms."
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            Introduction to Real Estate Tokenization
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur, architecto soluta hic nisi aliquid dolore deleniti,
            explicabo cumque odit itaque dolor voluptatum dicta nemo
            perspiciatis magnam voluptas, vero laborum.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga ad
            laboriosam aspernatur velit nam aliquid blanditiis aut unde nemo.
          </p>
          {/* button for a free demo */}
          <Link to="/contact-us">
            <button
              type="button"
              className="mt-8 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Request a Free Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24 pt-8 pb-8 bg-[#283430] bg-opacity-10">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 text-center">
          The Process of Real
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Estate Tokenization
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 text-center">
          At Giichi IT Solutions, we help enterprises achieve business
          automation with advanced, secure, and efficient smart contract
          solutions.
        </p>

        <div className=" mt-8 relative mr-28">
          {/* Dotted Line */}
          {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

          {/* Step 1 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[250px] 2xl:ml-[500px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Asset Valuation</p>
              <p className="pt-2 text-white w-[60%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, consectetur?
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              01
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Tokenization</p>
              <p className="pt-2 text-white w-[60%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, consectetur?
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              02
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[250px] 2xl:ml-[500px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Token Offering</p>
              <p className="pt-2 text-white w-[60%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, consectetur?
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              03
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Secondary Market</p>
              <p className="pt-2 text-white w-[60%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, consectetur?
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              04
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[250px] 2xl:ml-[500px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Income Generation</p>
              <p className="pt-2 text-white w-[60%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, consectetur?
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              03
            </div>
          </div>
        </div>
      </div>

      {/* Real Estate Tokenization Services */}
      <Services
        data={RealEstateTokenizationService}
        heading1="Real Estate "
        heading2=" Tokenization Services"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum 
          animi voluptas voluptates, nam quae aliquid velit quisquam fuga!"
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default RealEstatetToken;
