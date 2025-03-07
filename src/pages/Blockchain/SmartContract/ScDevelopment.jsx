/* eslint-disable react/prop-types */
import scDevBannerImg from "../../../assets/ScDevBanner.png";
import scDevFeatureImg from "../../../assets/ScDevFeature.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { ScDevelopmentFramework } from "../../../components/data/frameworkData";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { ScDevLifeCycleData } from "../../../components/data/lifecycleData";
import Process from "../../../components/CommonComponent/Process";
import { ScDevProcessSteps } from "../../../components/data/processData";

const ScDevelopment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={scDevBannerImg}
        title1="Smart Contract"
        title2="Development"
        desc=" At Giichi IT Solutions, we specialize in writing secure, efficient, and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms."
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-12 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          <img
            src={scDevFeatureImg}
            alt="smart-contract-feature-image"
            className="w-[90%]"
          />
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            Smart Contracts: The Future of Business Automation
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8 text-justify hyphens-auto">
            Smart contracts are self-executing, self-enforcing protocols that
            redefine how agreements are made across industries like real estate,
            supply chain, telecom, manufacturing, healthcare, and more. These
            immutable, transparent, and efficient contracts eliminate
            intermediaries, reduce costs, and enhance security.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 leading-8 text-justify hyphens-auto">
            At Giichi IT Solutions, we specialize in custom smart contract
            development, tailored to your unique business needs. With a team of
            expert blockchain developers, we build secure, scalable, and
            optimized smart contracts that streamline business processes and
            drive automation.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Smart Contract Dev Process */}
      <div>
        <Process
          heading1="Our Smart Contract"
          heading2="Development Process"
          desc="At Giichi IT Solutions, we follow a structured and efficient approach to developing secure and scalable smart contracts."
          processSteps={ScDevProcessSteps}
        />
      </div>

      {/* Blockchain Supply Chain Network */}
      <Framework
        data={ScDevelopmentFramework}
        heading1="Our Smart Contract"
        heading2="Development Services"
        desc="At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
      />

      {/* why your business need smart contract development */}
      <div>
        <LifeCycle
          heading1="Why Does Your Business Need"
          heading2="Smart Contract Development?"
          desc=" Smart contracts introduce a new level of automation, bringing unprecedented efficiency and cost reductions to business operations. With self-executing agreements, businesses can eliminate delays, minimize errors, and enhance security."
          steps={ScDevLifeCycleData}
        />
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScDevelopment;
