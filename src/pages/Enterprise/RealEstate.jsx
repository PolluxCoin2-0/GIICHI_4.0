/* eslint-disable react/prop-types */
import RealEstateBannerImg from "../../assets/RealEstateBanner.png";
import RealEstateFeatureImg from "../../assets/RealEstateFeature.png";
import CalendlyButton from "../../components/resuableComp/Calendly";
import Faq from "../../components/Faq";
import { RealEstateFaq } from "../../components/data/faqsData";
import Services from "../../components/Blockchain/Services";
import  { RealEstateServicesData } from "../../components/data/ServicesData";

const RealEstate = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={RealEstateBannerImg}
          alt="real-estate-banner-img"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-16 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            Blockchain Solutions for {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            Real Estate{" "}
            </span>
          </p>
          <p className="pt-6 text-[17px] md:text-[15px] 2xl:text-[17px] font-semibold leading-snug">
          Revolutionizing real estate by addressing key challenges like <br/>
          mortgage securitization, inefficient asset management, and illegal <br/>
          property transfers. 
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain Solutions for Real Estate{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Revolutionizing real estate by addressing key challenges like 
          mortgage securitization, inefficient asset management, and illegal 
          property transfers. 
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain REAL ESTATE forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-2 lg:space-x-12 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-0 md:mb-12">
        <div className="w-full md:w-[40%]">
          <img src={RealEstateFeatureImg} alt="real-estate-feature-image" className="w-[80%]"/>
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4">
          Capitalize on Giichi for Blockchain Solutions in Real Estate – We’re the Architects of Change
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 text-justify hyphens-auto ">
          With deep blockchain expertise and a global presence, Giichi IT Solutions empowers clients to redefine the future of real estate. 
          We transform challenges into opportunities, unlocking limitless possibilities and ensuring success with cutting-edge blockchain innovations.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 text-justify hyphens-auto">
          At Giichi IT Solutions, we lead the way in blockchain-powered real estate solutions, ensuring transparency, efficiency, and security in every transaction. 
          Our expert team designs cutting-edge blockchain systems to eliminate industry bottlenecks such as:
          </p>
          <ul className="list-disc ml-5 flex flex-col lg:flex-row ">
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 ">Multiple Intermediaries </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 md:pt-1 lg:pt-4 ml-0 lg:ml-12">Identity Theft</li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 md:pt-1 lg:pt-4 ml-0 lg:ml-12 ">Delayed Transactions </li>
           
          </ul>
          <ul className="list-disc ml-5 flex flex-col lg:flex-row mt-0 lg:mt-2">
          <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 md:pt-1 lg:pt-4 ">Title Disputes </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 md:pt-1 lg:pt-4 ml-0 lg:ml-[120px]">Data Breaches </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-4 md:pt-1 lg:pt-4  ml-0 lg:ml-9">High Transaction Costs </li>
          </ul>
         </div>
      </div>
      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Development Services */}
      <div className="relative mt-4 md:mt-12 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide">
        Our Blockchain Real Estate Software 
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-[15px] lg:text-[15px] 2xl:text-lg font-normal pt-2">
        At Giichi IT Solutions, we provide a comprehensive suite of blockchain solutions for real estate, empowering market players with cutting-edge technology and expert talent to revolutionize their existing systems.
        </p>
        {/* services */}
        <Services data={RealEstateServicesData}/>
      </div>
   {/* Faq */}
   <div>
    <Faq data={RealEstateFaq}/>
   </div>
    </div>
  );
};

export default RealEstate;
