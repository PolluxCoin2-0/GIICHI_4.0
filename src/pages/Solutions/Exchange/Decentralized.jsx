import { FaExchangeAlt, FaFileContract } from "react-icons/fa";
import Faq from "../../../components/resuableComponent/Faq";
import { DecentralizedExchangeFaq } from "../../../components/data/faqsData";
import { RiGovernmentFill, RiP2pFill } from "react-icons/ri";
import { MdOutlineSecurity, MdPrivacyTip } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import decentralizedExchangeBannerImg from "../../../assets/decenExchangeBanner.png";
import decentralizedExchangeFeatureImg from "../../../assets/decenExchangeFeature.png";

const platforms = [
  {
    name: "Peer-to-Peer Trading",
    icon: <RiP2pFill color="#8AF969"/>,
    color: "bg-black",
  },
  {
    name: "Liquidity Pools",
    icon: <FaExchangeAlt color="#8AF969"/>,
    color: "bg-black",
  },
  
  {
    name: "Enhanced Security",
    icon: <MdOutlineSecurity color="#8AF969"/>,
    color: "bg-black",
  },
  {
    name: "Fast Transactions",
    icon: <IoMdSpeedometer color="#8AF969"/>,
    color: "bg-black",
  },
  {
    name: "User Privacy & Anonymity",
    icon: <MdPrivacyTip color="#8AF969"/>,
    color: "bg-black",
  },
  {
    name: "No Centralized Authority",
    icon: <BsGlobeCentralSouthAsia color="#8AF969"/>,
    color: "bg-black",
  },
  {
    name: "Smart Contract Integration",
    icon: <FaFileContract color="#8AF969"/>,
    color: "bg-black",
  },
 
  {
    name: "Decentralized Governance",
    icon: <RiGovernmentFill color="#8AF969"/>,
    color: "bg-black",
  },
];
const features = [
  "In-house Blockchain Team",
  "Delivered More Than 1000 Projects",
  "15+ Years of Technical Expertise",
  "Quality to Security",
  "Enhanced Reliability",
  "Top-Level Performance",
  "Proficient Team of Experts",
  "Best-Tech Approaches",
  "Post-Launch Support",
  "Rapid Development",
  "Performance-focused Solutions",
  "Comprehensive Solutions at Affordable Price",
];

const Decentralized = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">

       {/* DECENTRALIZED EXCHANGED DDEVELOPMENT COMPANY */}
      <BannerContent
        img={decentralizedExchangeBannerImg}
        title1="Decentralized Exchange "
        title2="Development Company "
        desc="  Bringing Innovative DLT Ecosystems to Life, Turning Your DEX Development Vision Into Reality"
      />
  
     {/* DECENTRALIZED EXCHANGED DDEVELOPMENT SOFTWARE*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={decentralizedExchangeFeatureImg} alt="Decentralized Exchange Software development Image" className=""/>
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Decentralized Exchange (DEX) Software Development
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-4 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
           In recent years, decentralized exchange software solutions have evolved significantly, positioning them as strong competitors to traditional centralized exchanges (CEXs). The next generation of DEXs in the Web3 era offers numerous advantages for businesses and individuals, including enhanced data security, reduced risks, improved efficiency, better liquidity, and a superior user experience. <br/> <br/>
           At Giichi, our expertise in developing state-of-the-art solutions ensures that your decentralized cryptocurrency exchange app development is in line with the Web3 vision, ready to thrive in the ever-evolving crypto landscape.
           Start your journey towards building a future-proof decentralized crypto exchange with Giichi. 
          </p>
           <div className="mt-6">
            <div>
              <p className="text-white text-[15px]">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              No Third-Party Interference
              </p>
              <p className="text-white text-[15px] mt-2">
              <span className="w-2 h-2 bg-green mr-4 inline-block text-sm"></span>
              Complete User Privacy and Anonymity
              </p>
              <p className="text-white text-[15px] mt-2">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              Effortless Wallet Integration
              </p>
              <p className="text-white text-[15px] mt-2">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              Fast and Seamless Transactions
              </p>
              <p className="text-white text-[15px] mt-2">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              Superior Security and Scalability
              </p>
            </div>
            </div>
        </div>
      </div>

      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20 ">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Key Features of our
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Decentralized Exchange
          </span>
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 ">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-lg font-medium w-[70%]">{platform.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT MAKES US STAND*/}
      <div className="bg-blue-500 py-16 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 ">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Decentralized Exchange{" "}
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </h2>
        <p className="text-white text-opacity-70 text-lg mt-2 opacity-90">
          What Makes Us Stand Apart?
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-[#062406] bg-opacity-20 text-white shadow-lg rounded-lg px-6 py-4 text-[17px] font-normal transition-transform transform hover:scale-105"
            >
              {/* <CheckCircle className="w-5 h-5 mr-2" /> */}
              {feature}
            </div>
          ))}
        </div>
      </div>

       {/* FAQ */}
       <div className="mt-24">
        <Faq data={DecentralizedExchangeFaq} />
      </div>
    </div>
  );
};

export default Decentralized;
