/* eslint-disable react/prop-types */
import ScAuditBannerImg from "../../../assets/ScAuditBanner.png";
import ScAuditFeatureImg from "../../../assets/ScAuditFeature.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { ScAuditFramework } from "../../../components/data/frameworkData";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { ScAuditLifeCycleData } from "../../../components/data/lifecycleData";
import Process from "../../../components/CommonComponent/Process";
import { ScAuditProcessSteps } from "../../../components/data/processData";

const ScAudit = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={ScAuditBannerImg}
        title1="Smart Contract"
        title2="Audit Services"
        desc="Ensuring Security, Transparency & Efficiency"
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 lg:mt-32 mb-6 lg:mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[50%]">
          <img src={ScAuditFeatureImg} alt="" className="w-[80%]" />
        </div>
        <div className="w-full md:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-4xl font-semibold pt-4  ">
            Why You Need a Smart Contract Security Audit?
          </p>
          <p className="text-white pt-4 font-bold">
            Major Blockchain Hacks in 2024:
          </p>
          <ul className="list-disc flex flex-col mt-0 lg:mt-2 ml-6">
            <li className="pt-4 text-[14px] lg:text-[17px] leading-snug text-white text-opacity-70 ">
              $200M Lost – Euler Finance (March 2024)
            </li>
            <li className="pt-3 text-[14px] lg:text-[17px] leading-snug text-white text-opacity-70">
              $14M Exploit – Rain Exchange (April 2024)
            </li>
            <li className="pt-3 text-[14px] lg:text-[17px] leading-snug text-white text-opacity-70">
              $14.4M Hack – Holograph NFT Protocol (June 2024)
            </li>
            <li className="pt-3 text-[14px] lg:text-[17px] leading-snug text-white text-opacity-70">
              $3.5M Breach – Sportsbet.io (June 2024)
            </li>
          </ul>
          <p className="text-white pt-8 text-[12px] lg:text-[16px]">
            These real-world breaches highlight the urgent need for smart
            contract security audits to prevent vulnerabilities, exploits, and
            financial loss.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Services */}
      <Framework
        data={ScAuditFramework}
        heading1="Smart Contract Auditing:"
        heading2="Key Highlights"
        desc="At Giichi IT Solutions, we take pride in delivering top-tier smart contract audits that fortify your blockchain-based projects against exploits and vulnerabilities."
      />

      {/* why your business need smart contract development */}
      <div>
        <LifeCycle
          heading1="Projects That Require"
          heading2="Smart Contract Audits"
          desc=" Ensure your blockchain project is secure, reliable, and compliant with our comprehensive smart contract audit services designed for high-risk, high-value projects."
          steps={ScAuditLifeCycleData}
        />
      </div>

      {/* Smart Contract Dev Process */}
      <div>
        <Process
          heading1="Our Smart Contract"
          heading2="Security Audit Process"
          desc=" We follow a comprehensive audit methodology to ensure that your smart contract is secure, credible, and resilient against threats."
          processSteps={ScAuditProcessSteps}
        />
      </div>

      {/* Schedule a free demo */}
      <div className="mt-8">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScAudit;
