/* eslint-disable react/prop-types */
import ScAuditBannerImg from "../../assets/ScAuditBanner.png";
import ScAuditFeatureImg from "../../assets/ScAuditFeature.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import Framework from "../../components/Framework";
import { ScAuditFramework } from "../../components/data/frameworkData";
import defiImg from "../../assets/defi (1).png";
import tokenImg from "../../assets/tokens.png";
import nftImg from "../../assets/nft.png";
import votesImg from "../../assets/vote.png";
import supplyImg from "../../assets/Supp10.png";

const ScAudit = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={ScAuditBannerImg}
          alt="smart-contract-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Smart Contract
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Audit Services
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-lg font-semibold leading-snug">
            Ensuring Security, Transparency & Efficiency
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Smart Contract Audit Services
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Ensuring Security, Transparency & Efficiency
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

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
      <div className="mt-0 2xl:mt-12 flex flex-col justify-center items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Smart Contract Auditing:
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Key Highlights
          </span>
        </p>
        <p className="text-white text-[13px] md:text-[17x] text-opacity-70 pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 w-full md:w-[60%]">
          At Giichi IT Solutions, we take pride in delivering top-tier smart
          contract audits that fortify your blockchain-based projects against
          exploits and vulnerabilities.
        </p>
        <div>
          <Framework data={ScAuditFramework} />
        </div>
      </div>

      {/* why your business need smart contract development */}
      <div className="mt-12 md:mt-20 pb-20">
        <p className="text-white text-center text-2xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 ">
          Projects That Require <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Smart Contract Audits
          </span>
        </p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 leading-6">
          Ensure your blockchain project is secure, reliable, and compliant with
          our comprehensive <br />
          smart contract audit services designed for high-risk, high-value
          projects.
        </p>
        <div className="pt-0 md:pt-4 px-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-4 xl:ml-48 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                DeFi Platforms
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full md:w-[40%]">
                We safeguard Decentralized Finance (DeFi) applications by
                securing the entire transaction flow, preventing exploits, and
                protecting user assets.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={defiImg} alt="defi-image" className="" />
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-[400px] lg:ml-[560px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                Token Issuance & ICOs
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full xl:w-[60%]">
                Smart contract audits ensure that newly issued tokens and ICO
                projects meet industry security standards and compliance
                regulations.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={tokenImg} alt="token-image" className="" />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-4 xl:ml-48 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                NFT Marketplaces
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full md:w-[40%]">
                Our audits fortify NFT trading platforms against vulnerabilities
                that may lead to ownership disputes, unsafe transactions, or
                exploits.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={nftImg} alt="nft-image" className="" />
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-[400px] lg:ml-[560px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                Blockchain-Based Voting Systems
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full xl:w-[60%]">
                We verify the integrity of on-chain voting mechanisms, ensuring
                tamper-proof, accurate, and transparent election processes.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={votesImg} alt="vote-image" className="" />
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-4 xl:ml-48 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                {" "}
                Decentralized Exchanges (DEXs)
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full md:w-[40%]">
                DEXs facilitate trustless crypto trading via smart contracts,
                making them prime targets for security breaches. A thorough
                audit is critical to protect user funds.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={tokenImg} alt="token-image" className="" />
            </div>
          </div>

          {/* step 6*/}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-16 md:ml-[400px] lg:ml-[560px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[17px] lg:text-xl 2xl:text-3xl">
                Blockchain-Powered Supply Chains
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] text-opacity-70 pt-0 lg:pt-2 w-full xl:w-[60%]">
                Smart contracts in supply chain management require audits to
                validate data integrity, security, and accuracy in tracking and
                handling processes.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 p-2 absolute left-0 md:left-[300px] lg:left-[450px] xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={supplyImg} alt="supply-image" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* Smart Contract Dev Process */}
      <div className="mt-0 xl:mt-20 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          Our Smart Contract Security <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
            Audit Process
          </span>
        </p>
        <p className="text-sm md:text-[14px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 text-center">
          We follow a comprehensive audit methodology to ensure that your smart
          contract is secure, credible, and resilient against threats.
        </p>
        <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative ">
          {/* Step 1 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[200px] 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                {" "}
                Client Consultation & Requirement <br/>Analysis
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6 w-[90%] md:w-full lg:w-[90%]">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Initial consultation to understand business logic &
                    functional requirements
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Reviewing the White Paper & Yellow Paper for technical
                    insights
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Analyzing code design patterns to verify intended smart
                    contract behavior
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              01
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                Static & Dynamic Code Analysis
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Running automated code scans with 150+ vulnerability
                    detectors
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Identifying errors, malicious code, compilation issues
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Deploying contracts in a sandbox environment to test
                    execution & gas limits
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              02
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center  ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[200px] 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                {" "}
                Manual Code Verification
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Timestamp dependence risks
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    External call vulnerabilities
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Denial-of-service (DoS) threats
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              03
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center  ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                {" "}
                Business Logic Verification
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Utilizing audit tools (e.g., Surya) to ensure system
                    architecture aligns with business logic
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Executing functional tests and verifying end-to-end
                    scenarios
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    {" "}
                    Identifying centralization risks and suggesting security
                    enhancements
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              04
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center  ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[200px] 2xl:ml-[300px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                Initial Audit Report & Bug Fixing
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    {" "}
                    Delivering a preliminary audit report highlighting risks &
                    vulnerabilities
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Providing fix recommendations to mitigate threats
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Offering three free follow-up audits post client fixes
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              05
            </div>
          </div>
          {/* Step 6 */}
          <div className="flex flex-row space-x-8 md:space-x-12 items-center ml-20 md:ml-[150px] lg:ml-[200px] xl:ml-[800px] 2xl:ml-[1050px] mt-12">
            <div className="">
              <p className="text-white text-[15px] lg:text-2xl xl:text-xl 2xl:text-3xl">
                Final Audit Report & Delivery
              </p>
              <p className="pt-2">
                <ul className="list-disc ml-3 md:ml-6">
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    {" "}
                    All identified risks & vulnerability statuses
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    Security recommendations for ongoing verification
                  </li>
                  <li className="text-white text-[11px] 2xl:text-[14px] text-opacity-80">
                    {" "}
                    Delivering a complete audit report ensuring compliance &
                    best practices
                  </li>
                </ul>
              </p>
            </div>
            <div className="text-white text-sm md:text-4xl font-bold border-white border-2 md:border-4 w-8 md:w-20 h-8 md:h-20 p-2 absolute left-0 md:left-8 xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              06
            </div>
          </div>
        </div>
      </div>
      {/* Schedule a free demo */}
      <div className="mt-8">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScAudit;
