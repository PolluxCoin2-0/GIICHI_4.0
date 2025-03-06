/* eslint-disable react/prop-types */
import TransportBannerImg from "../../../assets/TransportBanner.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { TransportFramework } from "../../../components/data/frameworkData";
import { TransportForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/CommonComponent/Framework";
import Forecast from "../../../components/CommonComponent/Forecast";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const TransportAndLogistics = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={TransportBannerImg}
        title1="Blockchain in Transport"
        title2=" and Logistics "
        desc="Embrace Augmented Security, Trust in Data, and Streamlined Logistics Management"
      />

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
        data={TransportFramework}
        heading1="Blockchain in Transport : "
        heading2="How can our Solution Help?"
        desc=" Our blockchain-based solution for the transportation industry provides a more transparent and secure approach to business operations,
        ensuring immutable transaction records, improved provenance tracking, and enhanced coordination across the supply chain. "
      />

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default TransportAndLogistics;
