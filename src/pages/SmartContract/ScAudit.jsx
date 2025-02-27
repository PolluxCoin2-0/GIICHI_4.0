/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { BsClipboardDataFill } from "react-icons/bs";
import Framework from "../../components/Framework";
import { ScAuditFramework } from "../../components/data/frameworkData";

const ScAudit = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
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
            Smart Contract  Audit Services
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
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[50%]">{/* img */}</div>

        <div className="w-full md:w-[50%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4  ">
          Why You Need a Smart Contract Security Audit?
          </p>
          <p  className="text-white">Major Blockchain Hacks in 2024:</p>
          <ul className="">
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70 "> 
                <span className="text-green font-bold text-2xl">&#10003; </span>
                $200M Lost – Euler Finance (March 2024)
            </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            $14M Exploit – Rain Exchange (April 2024)
           </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            $14.4M Hack – Holograph NFT Protocol (June 2024)
            </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            $3.5M Breach – Sportsbet.io (June 2024)
            </li>
            <p className="text-white">These real-world breaches highlight the urgent need for smart contract security audits to prevent vulnerabilities, exploits, and financial loss.</p>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Services */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
        Smart Contract Auditing:<br/>
          <span className="text-transparent bg-clip-text bg-green-gradient">
          Key Highlights
          </span>
        </p>
        <p className="text-white text-opacity-40 pt-6 text-center">
        At Giichi IT Solutions, we take pride in delivering top-tier smart contract audits that fortify your blockchain-based projects against exploits and vulnerabilities.
        </p>
        
        <div>
         <Framework data={ScAuditFramework}/>
        </div>
      </div>
    

      {/* why your business need smart contract development */}
      <div className="pt-12 pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
        Projects That Require Smart Contract Audits</p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        Ensure your blockchain project is secure, reliable, and compliant with our comprehensive <br/>smart contract audit services designed for high-risk, high-value projects.
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">DeFi Platforms</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              We safeguard Decentralized Finance (DeFi) applications by<br/>
               securing the entire transaction flow, preventing exploits,<br/> and protecting user assets.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
              <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">
              Token Issuance & ICOs
              </p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              Smart contract audits ensure that newly issued tokens and<br/>
               ICO projects meet industry security standards and <br/>compliance regulations.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">NFT Marketplaces</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              Our audits fortify NFT trading platforms against vulnerabilities <br/>
              that may lead to ownership disputes, unsafe transactions, or exploits.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">Blockchain-Based Voting Systems</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              We verify the integrity of on-chain voting mechanisms, <br/>
              ensuring tamper-proof, accurate, and transparent <br/>election processes.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font"> Decentralized Exchanges (DEXs)</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              DEXs facilitate trustless crypto trading via smart contracts,<br/>
               making them prime targets for security breaches. A thorough <br/>audit is critical to protect user funds.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 6*/}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">Blockchain-Powered Supply Chains</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
              Smart contracts in supply chain management require audits <br/>
              to validate data integrity, security, and accuracy in <br/>tracking and handling processes.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Smart Contract Dev Process */}
      <div className="mt-12 md:mt-20 relative">
  <div className="hidden md:block spotlight spotlight-left"></div>
  <div className="hidden md:block spotlight2 spotlight-right"></div>
  <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
  Our Smart Contract Security  <br />
    <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
    Audit Process 
    </span>
  </p>
  <p className="text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
  We follow a comprehensive audit methodology to ensure that your smart contract is secure, credible, and resilient against threats.
  </p>
  <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative">
    {/* Dotted Line */}
    {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

    {/* Step 1 */}
    <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font"> Client Consultation & <br/>Requirement Analysis</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Initial consultation to understand business <br/>
            logic & functional requirements</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Reviewing the White Paper & Yellow Paper for <br/>technical insights</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Analyzing code design patterns to verify intended<br/> smart contract behavior</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        01
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[1000px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Static & Dynamic Code Analysis</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Running automated code scans with 150+ vulnerability detectors</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Identifying errors, malicious code, compilation issues</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Deploying contracts in a sandbox environment to test execution & gas limits</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        02
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font"> Manual Code Verification</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
         
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Timestamp dependence risks</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">External call vulnerabilities</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Denial-of-service (DoS) threats</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font"> Business Logic Verification</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Utilizing audit tools (e.g., Surya) to ensure system architecture aligns with business logic</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Executing functional tests and verifying end-to-end scenarios</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font "> Identifying centralization risks and suggesting security enhancements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        04
      </div>
    </div>

     {/* Step 5 */}
     <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Initial Audit Report & Bug Fixing</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font "> Delivering a preliminary audit report highlighting risks & vulnerabilities</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Providing fix recommendations to mitigate threats</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Offering three free follow-up audits post client fixes</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        05
      </div>
    </div>

     {/* Step 6 */}
     <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Final Audit Report & Delivery</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font "> All identified risks & vulnerability statuses</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font ">Security recommendations for ongoing verification</li>
            <li className="text-white text-[12px] md:text-[14px] text-opacity-80 exo-font "> Delivering a complete audit report ensuring compliance & best practices</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        06
      </div>
    </div>

     
  </div>
</div>


      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScAudit;
