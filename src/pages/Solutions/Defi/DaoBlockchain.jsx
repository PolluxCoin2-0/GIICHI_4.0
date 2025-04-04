/* eslint-disable react/prop-types */
import { DaoBlockchainFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/resuableComponent/Faq";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Forecast from "../../../components/CommonComponent/Forecast";
import { DaoBlockchainForecast } from "../../../components/data/forecastData";
import Offerings from "../../../components/CommonComponent/Offerings";
import daoBlockchainBannerImg from "../../../assets/daoBlockchainBanner.png";

const comparisons = [
  {
    feature: "Governance",
    cefi: "Governance: Managed hierarchically, with decision-making bottlenecks at higher levels.",
    defi: "Governance: Governed by smart contracts, with rules embedded in code.",
  },
  {
    feature: "Trust",
    cefi: "Trust: Relies on established relationships and past experiences.",
    defi: "Trust: Built on cryptography and blockchain technology for security and transparency.",
  },
  {
    feature: "Decision-Making",
    cefi: "Decision-Making: Driven by expertise and seniority within the organization.",
    defi: "Decision-Making: Automated through AI, independent agents, and smart contracts.",
  },
  {
    feature: "Cost",
    cefi: "Operational Costs: Typically high due to administrative overhead and layers of management.",
    defi: "Operational Costs: Lower, thanks to decentralized governance and reduced administrative overhead.",
  },
];

const DaoBlockchain = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={daoBlockchainBannerImg}
        title1="DAO Blockchain "
        title2="Development"
        desc="Automated, Decentralized, and High-Performance Business Structures."
      />

      {/* Bloackchain forecast */}
      <div className="mt-0 md:mt-32">
        <Forecast data={DaoBlockchainForecast} />
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our DAO Development experts TODAY!"/>
      
      {/* DIFFERNCE BETWEEN CEFI VS DEFI */}
      <div className="mt-20 ">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          DAO vs Traditional Organizations
        </p>
        <p className="text-white text-sm md:text-[16px] text-opacity-75 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-4">
          When comparing governance models for organizations, there are two
          primary options: COs (Traditional or Continuous Organizations) and
          DAOs. Both are powered by advanced crypto-economic principles and
          smart contracts.
        </p>
        <div className="flex gap-4 p-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-6">
          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-2 md:space-x-4 p-2 md:p-6">
                <div className="w-6 md:w-14 h-6 md:h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-2 md:w-6 h-2 md:h-6 text-blue-500"
                  >
                    <path d="M3 21V8.5l9-6.5 9 6.5V21h-5v-5h-8v5H3z" />
                  </svg>
                </div>
                <p className="text-xs md:text-2xl font-semibold text-center">
                  Traditional Organizations
                </p>
              </div>

              <div className="bg-green bg-opacity-10 p-1 md:p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-2 md:space-x-4"
                  >
                    <p className="text-white text-xs md:text-[16px]">{index + 1}. </p>
                    <span className="text-white font-normal text-[10px] md:text-[16px]">{comp.cefi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-2 md:space-x-4 p-2 md:p-6">
                <div className="w-6 md:w-14 h-6 md:h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-2 md:w-6 h-2 md:h-6 text-blue"
                  >
                    <path d="M9 2H15V4H9V2ZM4.22 5.64L5.64 4.22L7.05 5.64L5.64 7.05L4.22 5.64ZM2 9H4V15H2V9ZM4.22 18.36L5.64 19.78L7.05 18.36L5.64 16.95L4.22 18.36ZM9 20H15V22H9V20ZM16.95 18.36L18.36 19.78L19.78 18.36L18.36 16.95L16.95 18.36ZM20 9H22V15H20V9ZM16.95 5.64L18.36 7.05L19.78 5.64L18.36 4.22L16.95 5.64ZM12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z" />
                  </svg>
                </div>
                <p className="text-xs md:text-2xl font-semibold">AI DAOs</p>
              </div>

              <div className="bg-green bg-opacity-10 text-white p-1 md:p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-2 md:space-x-4"
                  >
                    <p className="text-white text-xs md:text-[16px]">{index + 1}. </p>
                    <span className="font-normal text-white text-[10px] md:text-[16px]">{comp.defi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <Faq data={DaoBlockchainFaq} />
      </div>
    </div>
  );
};

export default DaoBlockchain;
