/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import Services from "../../components/Blockchain/Services";
import {  AiMlSolutionService } from "../../components/data/ServicesData";
import securityImg from "../../assets/security.png";
import Industries from "../../components/Blockchain/Industries";
import { BkDevIndustriesData } from "../../components/data/industriesData";

const AiSolutions = () => {
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
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-72 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
            AI/ML Solutions
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
            {" "}
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

          {/* Real Estate Tokenization Services */}
          <div className="relative mt-24 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl  font-bold pt-4 tracking-wide leading-relaxed text-center ">
        Revolutionize the Crypto World 
          <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
          with AI Development
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg lg:text-[15px] xl:text-lg font-normal pt-2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum <br/>animi voluptas voluptates, nam quae aliquid velit quisquam fuga!
        </p>
        {/* services */}
        <Services data={AiMlSolutionService}/>
      </div> 
       
        {/* Features offered by Supply Chain Management */}
             <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
               <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
               Key Features
                 <br />
                 <span className="text-transparent bg-clip-text bg-green-gradient">
               
                 </span>
               </p>
               <p className="hidden md:block text-sm md:text-xs lg:text-[15px] text-white text-center text-opacity-70 pt-6 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
               Blockchain is revolutionizing the FinTech industry by offering unparalleled security, transparency, and efficiency. <br/>
               Three core features make blockchain a game-changer for businesses integrating <br/>
               it into financial operations:
               </p>
                <div className="flex flex-row justify-center items-center space-x-32 mt-12">
                    <p className="text-white text-xl">Machine Learning</p>
                    <p className="text-white text-xl">Deep Learning</p>
                    <p className="text-white text-xl">Data Science</p>
                    <p className="text-white text-xl">Data Science</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-32 mt-12">
                    <p className="text-white text-xl">Machine Learning</p>
                    <p className="text-white text-xl">Deep Learning</p>
                    <p className="text-white text-xl">Data Science</p>
                </div>
             </div>

              {/* Industries  */}
      <div className="relative text-center mt-8 md:mt-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Industries{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            We Serve
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          As a leading custom blockchain development company, we leverage
          different blockchain networks <br /> to provide you with the best
          solutions aligned with your needs.
        </p>
        <p className="block md:hidden text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs.
        </p>
        {/* various industries  */}
        <div>
          <Industries data={BkDevIndustriesData} />
        </div>
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

   

    {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default AiSolutions;
