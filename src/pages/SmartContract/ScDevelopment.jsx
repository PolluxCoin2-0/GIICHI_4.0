/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { BsClipboardDataFill } from "react-icons/bs";
import { GrDocumentPerformance } from "react-icons/gr";
import Framework from "../../components/Framework";
import { ScDevelopmentFramework } from "../../components/data/frameworkData";


const ScDevelopment = () => {
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
              Smart Contract{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Development{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-lg font-semibold leading-snug">
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
              Blockchain Development Company{" "}
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
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
          Smart Contracts: The Future of Business Automation
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
          Smart contracts are self-executing, self-enforcing protocols that redefine how agreements are made across industries like real estate, supply chain, telecom, manufacturing, healthcare, and more. These immutable, transparent, and efficient contracts eliminate intermediaries, reduce costs, and enhance security.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
          At Giichi IT Solutions, we specialize in custom smart contract development, tailored to your unique business needs. With a team of expert blockchain developers, we build secure, scalable, and optimized smart contracts that streamline business processes and drive automation.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Smart Contract Dev Process */}
      <div className="mt-20 relative">
  <div className="hidden md:block spotlight spotlight-left"></div>
  <div className="hidden md:block spotlight2 spotlight-right"></div>
  <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
    Our Smart Contract <br />
    <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
      Development Process
    </span>
  </p>
  <p className="text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
  At Giichi IT Solutions, we follow a structured and efficient approach to developing secure and scalable smart contracts.
 
  </p>
  <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative mr-28">
    {/* Dotted Line */}
    {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

    {/* Step 1 */}
    <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Analyzing the Requirements</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Understand business objectives</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font "> Identify and define smart contract logic</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Develop a strategic roadmap</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        01
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-row space-x-12 items-center ml-[1000px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Creating the Technical Design</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font "> Draft a detailed smart contract document</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font "> Design a data flow diagram</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Establish a robust technical architecture</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        02
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Smart Contract Development</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Implement the proposed smart contract solution</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Conduct rigorous testing and security checks</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font "> Gather client feedback and iterate for perfection</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Deployment and Testing</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        04
      </div>
    </div>
  </div>
</div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          Our Smart Contract Development Services
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions.
        </p>

        <div>
        <Framework data={ScDevelopmentFramework}/>
        </div>
      </div>

      {/* why your business need smart contract development */}
      <div className="pt-12 pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
        Why Does Your Business Need 
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
          Smart Contract Development?
          </span>{" "}
        </p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        Smart contracts introduce a new level of automation, bringing unprecedented efficiency and cost reductions <br/>
        to business operations. With self-executing agreements, businesses can eliminate delays,<br/>
         minimize errors, and enhance security.
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Disintermediation</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              Remove third-party involvement, enabling direct, <br/>trustless agreements between parties.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Real-Time Execution
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              Smart contracts execute instantly when predefined conditions <br/>are met, ensuring efficiency.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Transparency</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              All contract details are stored on the blockchain, <br/>visible to all participants, fostering trust.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Security</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              Immutable and tamper-proof records enhance security <br/>and reduce fraud risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Accuracy</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              Automate record-keeping, storage, and retrieval, <br/> eliminating human error.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 6*/}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Cost Savings </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
              Reduce operational costs by automating manual processes <br/>and minimizing risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>
        </div>
      </div>

      {/* Smart contract dev on various blokchain platforms */}
      {/* <div>
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Smart Contract Development on <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl text-center">
            Various Blockchain Platforms
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64">
          {ScData.map((data, index) => (
            <ScCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div> */}

     


      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScDevelopment;
