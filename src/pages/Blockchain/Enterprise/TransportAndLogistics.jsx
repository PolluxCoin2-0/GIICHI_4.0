/* eslint-disable react/prop-types */
import TransportBannerImg from "../../../assets/TransportBanner.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { TransportFramework } from "../../../components/data/frameworkData";
import { TransportForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/CommonComponent/Framework";
import CalendlyButton from "../../../components/resuableComponent/Calendly";
import Forecast from "../../../components/CommonComponent/Forecast";

const TransportAndLogistics = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={TransportBannerImg}
          alt="Transport-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-16 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            Blockchain in Transport {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            and Logistics{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[12px] lg:text-lg xl:text-[17px] 2xl:text-lg font-semibold leading-snug">
          Embrace Augmented Security, Trust in Data, and <br/>Streamlined Logistics Management
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain in Transport  and Logistics {" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Embrace Augmented Security, Trust in Data, and Streamlined Logistics Management
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain transport & Logistics forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast data={TransportForecast} />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain Network */}
       <Framework 
       data={TransportFramework }
       heading1="Blockchain in Transport : "
       heading2="How can our Solution Help?"
       desc=" Our blockchain-based solution for the transportation industry provides a more transparent and secure approach to business operations,
        ensuring immutable transaction records, improved provenance tracking, and enhanced coordination across the supply chain. "/>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default TransportAndLogistics;
