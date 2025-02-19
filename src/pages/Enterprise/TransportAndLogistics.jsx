/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";
import Forecast from "../../components/Blockchain/Forecast";
import bkDev1Img from "../../assets/bkDev1.png";
import bkDev2Img from '../../assets/bkDev2.png';
import { LuArrowUpRight } from "react-icons/lu";

const FrameworksData = [
  {
    logo: insurance,
    title: "Better Visibility and Transparency",
    description:
      " Our experts utilize smart contracts to provide permissioned participants with real-time visibility across all supply chain operations, enabling proactive responses in case of any exceptions or disruptions.",
  },
  {
    logo: insurance,
    title: " Streamlined Onboarding",
    description:
      "Onboarding new suppliers can be a time-consuming and complex task. Our blockchain solutions accelerate this process by creating an immutable, trustworthy record of vendor details, allowing faster and more efficient integration into the network.",
  },
  {
    logo: insurance,
    title: " Reduced Product Counterfeiting ",
    description:
      "Blockchain’s role in supply chain systems helps combat counterfeiting and builds consumer trust. We design solutions that enable businesses to authenticate products, reducing the risks of fraud and ensuring the authenticity of goods.",
  },
  {
    logo: insurance,
    title: " Secured Supply Chain Operations ",
    description:
      "Our blockchain solutions secure your entire supply chain network by using encrypted records on permissioned blockchains, safeguarding your data from unauthorized access.",
  },
  {
    logo: insurance,
    title: "Seamless Team Collaboration",
    description:
      "With multiple participants and entities involved, effective communication is crucial. Our blockchain solutions enable seamless peer-to-peer interactions through digital signatures, ensuring secure and trusted communication across the network.",
  },

  
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="flex flex-row justify-between items-center ">
        <img src={logo} alt={title} className="w-12" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const TransportAndLogistics = () => {
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
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-16 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            Blockchain in Transport {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            and Logistics{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[12px] lg:text-lg font-semibold leading-snug">
          Embrace Augmented Security, Trust in Data, and Streamlined Logistics Management
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain in Transport  and Logistics {" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Embrace Augmented Security, Trust in Data, and Streamlined Logistics Management
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain transport & Logistics forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast
          img1={bkDev1Img}
          img2={bkDev2Img}
          title1="Blockchain for Transportation: Paving the Road for the Future"
          title2="Giichi IT Solutions: Integrating Blockchain in Transportation"
          desc1="The transportation and logistics industry has traditionally been slow to adopt modern technologies, relying on outdated processes that result in inefficiencies such as opaque supply chains, security risks, and operational uncertainty. "
          desc2="At Giichi IT Solutions Pvt. Ltd., we help transportation and logistics companies digitally transform their operations, paving the way for new, innovative methods that drive better results for both businesses and their customers."
        />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Blockchain in Transport : How can our Solution Help?
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Our blockchain-based solution for the transportation industry provides a more transparent and secure approach to business operations, <br/>
        ensuring immutable transaction records, improved provenance tracking, and enhanced coordination across the supply chain. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64 ">
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

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default TransportAndLogistics;
