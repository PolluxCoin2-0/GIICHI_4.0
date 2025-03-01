/* eslint-disable react/prop-types */
import scDevBannerImg from "../../../assets/ScDevBanner.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { AssetTokenFramework } from "../../../components/data/frameworkData";
import agreementImg from "../../../assets/agreement.png";
import realTimeImg from "../../../assets/realTime.png";
import transparencyImg from "../../../assets/transparency.png";
import securityImg from "../../../assets/security.png";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const clientData = [
  {
    description:
      "Expertise in Web3, DeFi, and NFT solutions to help businesses scale effortlessly.",
    title: "Blockchain Pioneers",
  },
  {
    description:
      " Bespoke blockchain solutions tailored to your specific industry needs.",
    title: "Customization Excellence",
  },
  {
    description:
      "From development to deployment and compliance, we manage everything.",
    title: "End-to-End Services",
  },
  {
    description:
      "Advanced security protocols to protect digital assets from vulnerabilities..",
    title: "Security-Centric Approach",
  },
  {
    description:
      "A dedicated team providing continuous assistance and optimization.",
    title: "24/7 Support",
  },
];

const AssetToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={scDevBannerImg}
        title1="Real World Asset"
        title2="Tokenization  Development"
        desc="Transform Physical Assets into Digital Value with Blockchain"
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4  ">
            Maximize Value with Asset Tokenization
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            Unlock new opportunities by converting real-world assets into
            digital tokens, enabling fractional ownership, enhanced liquidity,
            and transparent transactions.
          </p>
          <ul className="list-disc flex flex-col mt-0 lg:mt-2 ml-6">
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              Eliminate intermediaries for seamless transactions
            </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              Enhance liquidity with global accessibility
            </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              Increase security & transparency using blockchain
            </li>
          </ul>
          {/* button for a free demo */}
          <Link to="/contact-us">
            <button
              type="button"
              className="mt-8 ml-2 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Schedule a Free Demo
            </button>
          </Link>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>
      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            World-Class Asset Tokenization Development
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            As a leading blockchain development company, Giichi IT Solutions
            helps enterprises integrate asset tokenization into their financial
            ecosystems. Our solutions ensure compliance, liquidity, and
            automation through smart contracts, driving efficiency across
            industries.
          </p>
          <ul className="list-disc flex flex-col mt-0 lg:mt-2 ml-6">
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              {" "}
              Proven expertise in blockchain-powered asset tokenization
            </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              {" "}
              Tailored solutions for diverse industries
            </li>
            <li className="text-sm lg:text-[15px] font-normal text-white text-opacity-80 pt-4 md:pt-1 lg:pt-4 ">
              Regulatory-compliant and secure smart contracts
            </li>
          </ul>
          {/* button for a free demo */}
          <Link to="/contact-us">
            <button
              type="button"
              className="mt-8  bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Talk to our Expert
            </button>
          </Link>
        </div>

        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>
      </div>

      {/* Asset Tokenization Framework */}
      <Framework
        data={AssetTokenFramework}
        heading1="Our Real World Asset"
        heading2="Tokenization Services"
        desc=""
      />

      {/*Lifecycle of a Tokenized Security */}
      <div className="pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
          Lifecycle of a<br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Tokenized Security
          </span>{" "}
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[200px] 2xl:ml-[400px] mt-12">
            <div className="">
              <p className="text-white xl:text-xl 2xl:text-3xl exo-font">
                Structuring & Issuance
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Enable trustless agreements without third-party involvement.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-3 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={agreementImg} alt="" className="" />
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[800px] 2xl:ml-[980px] mt-12">
            <div className="">
              <p className="text-white xl:text-xl 2xl:text-3xl exo-font">
                Trading & Transfers
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Execute smart contracts instantly when conditions are met.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-3 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={realTimeImg} alt="" className="" />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[200px] 2xl:ml-[400px] mt-12">
            <div className="">
              <p className="text-white xl:text-xl 2xl:text-3xl exo-font">
                Corporate Actions & Governance
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Store all contract details on blockchain for transparency.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-3 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={transparencyImg} alt="" className="" />
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[800px] 2xl:ml-[980px] mt-12">
            <div className="">
              <p className="text-white xl:text-xl 2xl:text-3xl exo-font">
                Maturity & Exit
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Ensure immutable and tamper-proof financial records.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-3 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={securityImg} alt="" className="" />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center xl:ml-[200px] 2xl:ml-[400px] mt-12">
            <div className="">
              <p className="text-white xl:text-xl 2xl:text-3xl exo-font">
                Digitization
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Enhance security and reduce fraud risks with blockchain
                validation.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-3 absolute xl:left-[650px] 2xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={transparencyImg} alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      {/* why choose asset token for business */}
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide ">
          Digital Asset <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Tokenization Services
          </span>
        </p>
        {/* Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-2xl font-bold text-white">
              Why choose Giichi for Asset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Tokenization?
              </span>
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
              Giichi offers secure, scalable, and regulatory-compliant asset
              tokenization, enabling seamless digital asset management and
              liquidity.
            </p>
          </div>

          {/* Mapping Client Data */}
          {clientData.map((client, index) => (
            <div
              key={index}
              className="p-4 md:p-6 text-gray-900 rounded-2xl flex flex-col space-y-6 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(100,255,100,0.5),_0_0_15px_rgba(100,255,100,0.3)]"
            >
              <div className="flex flex-row space-x-4 items-center">
                <p>
                  <IoMdCheckmarkCircleOutline
                    size={32}
                    className="text-3xl text-[#64A03C] rounded-full"
                  />
                </p>
                <p className="font-semibold text-white poppins-thin text-lg 2xl:text-xl">
                  {client.title}
                </p>
              </div>

              <p className="text-sm font-normal poppins-thin text-white opacity-80 w-[80%] ml-2">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default AssetToken;
