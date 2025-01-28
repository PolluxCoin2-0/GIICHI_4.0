/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import Forecast from "../../../components/Blockchain/Forecast";
import depinImg from "../../../assets/depinImage.png";
import depinSolImg from "../../../assets/depinSol.png";
import depinArchImg from "../../../assets/depinArch.png";
import depinApiImg from "../../../assets/depinApi.png";
import depinAssetImg from "../../../assets/depinAsset.png";
import depinAuditImg from "../../../assets/depinAudit.png";
import depinDevImg from "../../../assets/depinDev.png";
import depinGoverImg from "../../../assets/depinGover.png";
import depinScImg from "../../../assets/depinSc.png";
import depinServiceImg from "../../../assets/depinService.png";
import depinTokenImg from "../../../assets/depinToken.png";
import logictisImg from "../../../assets/logictics.png";
import realStateImg from "../../../assets/real-estate.png";
import energyImg from "../../../assets/energy.png";
import satelliteImg from "../../../assets/satellite.png";
import manufactureImg from "../../../assets/manufacture.png";
import healthImg from "../../../assets/health.png";
import LetsTalk from "../../../components/LetsTalk";
import Services from "../../../components/Blockchain/Services";
import Faq from "../../../components/Faq";
import Insights from "../../../components/Blockchain/Insights";
const FrameworksData = [
  {
    logo: depinArchImg,
    title: "DePIN Architecture Design",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinServiceImg,
    title: "DePIN Consulting Services",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },

  {
    logo: depinTokenImg,
    title: "DePIN Tokenization Service",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinDevImg,
    title: "DePIN Marketplace Development",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinApiImg,
    title: "DePIN API Development",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinAuditImg,
    title: "DePIN Audit and Security",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },

  {
    logo: depinAssetImg,
    title: "DePIN Smart Contract Development",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinGoverImg,
    title: "DePIN Asset Management",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: depinScImg,
    title: "DePIN Governance",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
];

const DepinUseCaseData = [
  {
    logo: logictisImg,
    title: "Logistics & Supply Chain",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: realStateImg,
    title: "Real Estate",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },

  {
    logo: energyImg,
    title: "Energy & Utilities",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: satelliteImg,
    title: "Telecommunications",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: healthImg,
    title: "Healthcare",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: manufactureImg,
    title: "Manufacturing",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const DepinUseCaseCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};
const BlockchainDepin = () => {
  return (
    <div className="pt-6 md:pt-12">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
        <img
          src={BlockchainDepinImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 left-80 w-full h-full hidden md:flex flex-col items-start justify-center">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              DePIN Development{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Company{" "}
            </span>
          </p>
          <p className="pt-6 text-lg font-semibold leading-snug">
            Enable more secure storage and management of digital identities in{" "}
            <br />
            blockchain with a single, tamper-proof ecosystem.
          </p>
          {/* Button */}
          <button
            type="button"
            className="bg-darkGreen px-6 py-1 rounded-md text-white mt-4 "
          >
            Schedule A Free Demo
          </button>
        </div>
       
       {/* for mobile */}
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              DePIN Development  Company{" "}
            </span>
            <br />
            </p>
          <p  className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Enable more secure storage and management of digital identities in{" "}
            <br />
            blockchain with a single, tamper-proof ecosystem.
          </p>
          {/* Button */}
          <button
            type="button"
            className="bg-darkGreen px-6 py-1 rounded-md text-white mt-4 "
          >
            Schedule A Free Demo
          </button>
        </div>
      </div>

      {/* Forecast */}
      <div>
        <Forecast
          img1={depinImg}
          img2={depinSolImg}
          title1="What is DePIN?"
          title2="DePin Solutions: Addressing Modern Infrastructure Demands for Business Efficiency"
          desc1="DePIN(Decentralized Physical Infrastructure Networks) represents a transformative 
          approach to managing physical infrastructure by integrating decentralized technologies 
          like blockchain. DePIN supports direct peer-to-peer communication and data sharing, bypassing 
          intermediaries to deliver scalable, secure, and transparent infrastructure for various industries. "
          desc2="Traditional infrastructure systems struggle with inefficiencies, centralization risks, and
           high operational costs. The rise of DePIN solutions stems from the growing demand for more secure, 
           transparent, and scalable management of physical assets across industries."
        />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Services */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
          Antier’s Advanced DePIN <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center">
          Being a leading DePIN development company, Antier offers a wide range
          of services to help businesses leverage the <br />
          power of decentralized infrastructure.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-6 md:gap-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          {FrameworksData.map((data, index) => (
            <FrameworksCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Talk to Our Experts" />
      </div>

      {/* Blockchain frameworks */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          DePIN Use Cases: How Antier Serves
          <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Diverse Industries
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          From healthcare to finance, Antier offers a wide range of DePIN
          development services to empower businesses across <br />
          various industries.{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-6 md:gap-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          {DepinUseCaseData.map((data, index) => (
            <DepinUseCaseCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Prominent Components That
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            DePIN’s Functionality
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg font-normal pt-2">
          Understanding the components that drive DePIN’s functionality is
          essential for organizations looking to <br /> leverage its true
          potential.
        </p>
        <Services />
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Hire Us" />
      </div>

      {/* FAQ Section */}
      <div>
        <Faq />
      </div>

      {/* Spotlight-Insights Section */}
      <div>
        <Insights />
      </div>
    </div>
  );
};

export default BlockchainDepin;
