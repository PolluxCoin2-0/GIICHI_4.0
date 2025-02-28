/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { Link } from "react-router-dom";
import Services from "../../components/Blockchain/Services";
import {  RealEstateTokenizationService } from "../../components/data/ServicesData";

const RealEstatetToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={scDevBannerImg}
          alt="smart-contract-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
           Real Estate Tokenization 
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
           Service{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] font-semibold leading-snug">
          At Giichi IT Solutions, we specialize in writing secure, <br/>
          efficient, and automated smart contracts for Ethereum, TRON, <br/>Hyperledger, EOS, and other blockchain platforms.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Real World Asset Tokenization  Development{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          At Giichi IT Solutions, we specialize in writing secure, efficient, and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
          Introduction to Real Estate Tokenization
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, architecto soluta hic nisi aliquid dolore deleniti, explicabo cumque odit itaque dolor voluptatum dicta nemo perspiciatis magnam voluptas, vero laborum.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga ad laboriosam aspernatur velit nam aliquid blanditiis aut unde nemo.
          </p>
          {/* button for a free demo */}
        <Link to="/contact-us">
          <button
            type="button"
            className="mt-8 mx-0 xl:mx-28 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
            aria-label="Contact us "
            title="Click to contact us form"
          >
            Request a Free Demo
          </button>
        </Link>
        </div>
        
      </div>
         
      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>
      
     
      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24 pt-8 pb-8 bg-[#283430] bg-opacity-10">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        The Process of Real Estate Tokenization
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions.
        </p>
         
        <div className=" mt-8 relative mr-28">
    {/* Dotted Line */}
    {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

    {/* Step 1 */}
    <div className="flex flex-row space-x-12 items-center ml-[500px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Asset Valuation</p>
        <p className="pt-2 text-white w-[40%]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        01
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-row space-x-12 items-center ml-[1050px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Tokenization</p>
        <p className="pt-2 text-white w-[40%]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        02
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center ml-[500px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Token Offering</p>
        <p className="pt-2 text-white w-[40%]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-row space-x-12 items-center ml-[1050px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Secondary Market</p>
        <p className="pt-2 text-white w-[40%]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        04
      </div>
    </div>

    
    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center ml-[500px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Income Generation</p>
        <p className="pt-2 text-white w-[40%]">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur?
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>
  </div>
      </div>

      {/* Real Estate Tokenization Services */}
       <div className="relative mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 tracking-wide leading-relaxed">
          Real Estate 
          <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
          Tokenization Services
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg lg:text-[15px] xl:text-lg font-normal pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum animi voluptas voluptates, nam quae aliquid velit quisquam fuga!
        </p>
        {/* services */}
        <Services data={RealEstateTokenizationService}/>
      </div>

    {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default RealEstatetToken;
