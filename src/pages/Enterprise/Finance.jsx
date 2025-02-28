/* eslint-disable react/prop-types */
import FinanceBannerImg from "../../assets/FinanceBanner.png";
import FinanceFeatureImg from "../../assets/FinanceFeature.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import Framework from "../../components/Framework";
import { FinanceFramework } from "../../components/data/frameworkData";
import securityImg from "../../assets/security.png";
import ledgerImg from "../../assets/Supp4.png";
import NetworkImg from "../../assets/depinGover.png";

const Finance = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 z-10">
        <img
          src={FinanceBannerImg}
          alt="finance-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain Financial{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Services{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-[18px] font-semibold leading-snug">
          Unlock Security, Transparency, and Efficiency in <br/> Financial Transactions
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain Financial Services{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Unlock Security, Transparency, and Efficiency in Financial Transactions
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain supply chain forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          <img src={FinanceFeatureImg} alt="finance-feature-image" className="w-[80%]"/>
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4">
            Blockchain Applications in Finance: Driving the Change
          </p>
          <p className="text-[14px] lg:text-[15px] 2xl:text-[17px]  font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
          Blockchain is revolutionizing financial operations by shifting control from centralized authorities to a decentralized, trustless ecosystem. This transformation leads to significant savings in administrative, infrastructure, and transaction costs while improving efficiency, transparency, and security.
          </p>
          <p className="text-[14px] lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-50 pt-8 leading-6 text-justify hyphens-auto">
          By eliminating intermediaries, blockchain streamlines digital asset transfers and reduces reliance on central counterparties, ensuring faster and more reliable transactions. Its integration enhances trust, accuracy, and resilience in financial services, making it an essential technology for the future of finance.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain finance use cases challenges  */}
      <div className="mt-0 md:mt-8">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          Use Cases for Blockchain in <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Financial Services
          </span>
        </p>

        <p className="hidden md:block text-white text-opacity-40 text-[14px] 2xl:text-[17px] pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        Blockchain is transforming the financial services industry by offering a secure, efficient, and decentralized approach to operations.<br/>
         From payments to risk management, it presents new opportunities for organizations <br/>
         to streamline processes, reduce costs, and enhance security.
        </p>
        <p className="block md:hidden text-white text-opacity-40 text-[14px] 2xl:text-[17px] pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        Blockchain is transforming the financial services industry by offering a secure, efficient, and decentralized approach to operations.
         From payments to risk management, it presents new opportunities for organizations
         to streamline processes, reduce costs, and enhance security.
        </p>


        <div>
         <Framework data={FinanceFramework}/>
        </div>
      </div>

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-12 md:mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 ">
        Key Elements of Blockchain:
          <br />
          <span className=" block pt-2 text-transparent bg-clip-text bg-green-gradient">
          Why Integrate it into FinTech?
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-xs lg:text-[15px] text-white text-center text-opacity-70 pt-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        Blockchain is revolutionizing the FinTech industry by offering unparalleled security, transparency, and efficiency. <br/>
        Three core features make blockchain a game-changer for businesses integrating <br/>
        it into financial operations:
        </p>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 xl:space-x-6 px-4 md:px-8 lg:px-12 xl:px-36 2x:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={securityImg} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
            Cryptographic Security
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-2 md:bottom-8 p-4 md:p-2 lg:md:p-4 left-0 right-0 text-center "
            >
              Blockchain is reinforced with advanced cryptographic security, ensuring immutability and credibility of transaction records. Once stored, data becomes tamper-proof and verifiable by all network participants, fostering trust. Permissioned access rights further enhance data confidentiality and privacy for financial transactions.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={ledgerImg} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Distributed Ledger Architecture
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
                bottom-2 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              A shared, decentralized ledger enables real-time transaction transparency and traceability. This architecture streamlines financial operations, automates processes via smart contracts, and ensures networks remain resilient to downtime and manipulation risks.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={NetworkImg} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Network Consensus Mechanism
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
                bottom-2 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              Consensus mechanisms create a single source of truth, ensuring fraud prevention, eliminating double spending, and enabling seamless asset transfers. By removing reconciliation complexities between trading and financing parties, blockchain enhances efficiency in digital asset transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div className="mt-16">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    
    </div>
  );
};

export default Finance;
