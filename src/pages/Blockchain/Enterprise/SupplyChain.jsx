/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import SupplyChainBannerImg from "../../../assets/supplyChainBanner.png";
import SupplyFeatureImg from "../../../assets/SupplyFeature.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import securityImg from "../../../assets/security.png";
import processImg from "../../../assets/process.png";
import SupplyImg from "../../../assets/supply-chain.png";
import recordImg from "../../../assets/record.png";
import assetImg from "../../../assets/token.png";
import delayImg from "../../../assets/wait-time.png";
import { SuppyChainFaq } from "../../../components/data/faqsData";
import { SupplyChainFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import reportImg from "../../../assets/report.png";
import manageImg from "../../../assets/management.png";
import walletImg from "../../../assets/wallet (2).png";
import kycImg from "../../../assets/search-user.png";
import fundImg from "../../../assets/fund.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const challengesData = [
  [
    { image: securityImg, title: "Lack of Security and Transparency" },
    { image: processImg, title: "Costly Data Reconciliation Processes" },
    { image: SupplyImg, title: "Disconnected Supply Chain Participants" },
  ],
  [
    { image: recordImg, title: "Complicated and Manual Record Keeping Methods" },
    { image: assetImg, title: "Inefficient Asset Traceability" },
    { image: delayImg, title: "Error-prone and Delayed Business Operations" },
  ],
];

const SupplyChain = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      
      {/* Banner Image */}
      <BannerContent
        img={SupplyChainBannerImg}
        title1="Blockchain for Supply"
        title2="Chain Solution"
        desc=" Unlock the power of blockchain to revolutionize your supply chain. Gain end-to-end visibility, transparency, and full asset control across your network, ensuring seamless operations and eliminating  inefficiencies."
      />

      {/* Bloackchain supply chain forecast */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={SupplyFeatureImg}
            alt="supply-chain-feature-image"
            className=""
          />
        </div>

        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: "1.2" }} >
            Blockchain Supply Chain Development: Build a Transparent, Trusted,
            and Resilient Network
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            The supply chain industry is rapidly evolving, with innovative
            technologies reshaping operations and processes. Traditional supply
            chains, reliant on disjointed data systems and paper-based
            practices, struggle to leverage vast amounts of data effectively.
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-2 xl:pt-4 2xl:pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Blockchain technology is revolutionizing supply chain management,
            offering unparalleled transparency, traceability, and significant
            reductions in administrative costs. At Giichi IT Solutions, we
            specialize in creating blockchain-powered supply chain solutions
            that digitize operations, reduce costs, and unlock new
            opportunities—all while maintaining the integrity of your ongoing
            processes. Our expertise ensures that supply chain leaders can not
            only overcome disruptions but also build resilient networks that are
            future-ready.
          </p>
          <ButtonFreeDemo/>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain challenges  */}
      <div className="bg-[#283430] bg-opacity-10 text-center mt-6 md:mt-12 p-1 pt-6 md:pt-12 pb-20 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <p className="text-white text-xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        Challenges in Conventional
        <br />
        <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl">
          Supply Chain Management
        </span>
      </p>
      <div className="flex flex-col justify-center items-center">
      <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[50%] leading-7">
      Traditional supply chain management processes are riddled with inefficiencies that create information silos and make asset tracking cumbersome and time-consuming.
      </p>
      </div>
     <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-10">
        {challengesData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row w-full space-x-0 md:space-x-6 lg:space-x-8 mt-4 md:mt-6 lg:mt-8 space-y-4 md:space-y-0"
          >
            {row.map((challenge, index) => (
              <div
                key={index}
                className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                  md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient"
              >
                <img src={challenge.image} alt={challenge.title} className="w-16" />
                <p className="text-white pt-4 w-[80%] md:w-[60%]">{challenge.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

      {/* Blockchain Supply Chain Network */}
      <Framework
        data={SupplyChainFramework}
        heading1="Why Giichi's Blockchain Makes Supply Chains"
        heading2="Smarter and More Efficient?"
        desc="As a trusted blockchain development partner, Giichi IT Solutions offers blockchain-powered supply chain solutions to help businesses optimize operations and eliminate inefficiencies in data management through intuitive workflows."
      />

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
          Features Offered by our Blockchain <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Supply Chain Solutions
          </span>
        </p>
        <div className="flex flex-col justify-center items-center">
        <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[50%] leading-7 text-center">
          Our blockchain supply chain solutions are packed with user-friendly, advanced features that empower businesses to efficiently manage their supply chain operations without hassle.
        </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] group relative ">
            <img src={reportImg} alt="report-image" className="w-16 group-hover:hidden" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Reporting Dashboard
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
               bottom-12 md:bottom-8 p-4 md:p-2 lg:md:p-4 left-0 right-0 text-center "
            >
              A comprehensive dashboard that provides real-time insights and
              detailed analytics for better decision-making and enhanced
              visibility across supply chain processes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] group relative ">
            <img src={manageImg} alt="manage-image" className="w-16 group-hover:hidden" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              User Management
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              Streamline user access and roles within the supply chain network
              with robust management tools, ensuring secure and controlled
              interactions.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] group relative ">
            <img src={walletImg} alt="wallet-image" className="w-16 group-hover:hidden" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Multi-Currency Wallet
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              A versatile wallet that supports multiple currencies, enabling
              businesses to manage and process transactions seamlessly in
              various currencies within the supply chain ecosystem.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] group relative ">
            <img src={kycImg} alt="know-your-customer-image" className="w-16 group-hover:hidden" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Instant KYC and AML
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              Integrated Know Your Customer (KYC) and Anti-Money Laundering
              (AML) features ensure compliance and secure onboarding of supply
              chain participants, while simplifying verification processes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] group relative ">
            <img src={fundImg} alt="funding-icon" className="w-16 group-hover:hidden" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Funds Management System
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs 2xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-100 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              A powerful system for managing funds with real-time tracking of
              total supply, funds in circulation, and more, offering businesses
              complete control over financial operations.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* FAQ SECTION */}
      <div>
        <Faq data={SuppyChainFaq} />
      </div>
    </div>
  );
};

export default SupplyChain;
