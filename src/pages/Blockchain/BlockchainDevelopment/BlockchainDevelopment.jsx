/* eslint-disable react/prop-types */
import BlockchainImg from "../../../assets/blockchainImg.png";
import element2Img from "../../../assets/element2.png";
import element1Img from "../../../assets/element1.png";
import crowd1Logo from "../../../assets/crowd1Logo.png";
import polluxLogo from "../../../assets/polluxLogo (3).png";
import Forecast from "../../../components/Blockchain/Forecast";
import Services from "../../../components/Blockchain/Services";
import BlockchainCycle from "../../../components/Blockchain/BlockchainCycle";
import Insights from "../../../components/Blockchain/Insights";
import Industries from "./Industries";
import Review from "../../../components/Review";
import LetsTalk from "../../../components/LetsTalk";
import Faq from "../../../components/Faq";
import { LuArrowUpRight } from "react-icons/lu";

const FrameworksData = [
  {
    logo: crowd1Logo,
    title: "Crowd1",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: crowd1Logo,
    title: "Crowd1",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: polluxLogo,
    title: "Pollux",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: crowd1Logo,
    title: "Crowd1",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: crowd1Logo,
    title: "Crowd1",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
  {
    logo: polluxLogo,
    title: "Pollux",
    description:
      "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
  },
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 ">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const BlockchainDevelopment = () => {
  return (
    <div className="pt-12 ">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="w-full h-[400px] object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 left-80 w-full h-full flex flex-col items-start justify-center">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Blockchain Development{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Company{" "}
            </span>
          </p>
          <p className="pt-6 text-lg font-semibold leading-snug">
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored <br />
            partnership program designed to turn your vision into <br />
            reality.Accelerate your Web3 journey with Accelerate your Web3{" "}
            <br />
            journey with GiiCHi CoPilot.
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

      {/* Bloackchain forecast */}
      <div>
        <Forecast
          img1={element1Img}
          img2={element2Img}
          title1="Blockchain Market Forecast: Growth  
        Projections and Opportunities Ahead"
          title2="Blockchain Market Forecast: Growth  Projections and Opportunities Ahead"
          desc1="As consumer demand for sustainability rises, blockchain technology
                    is essential for verifying ethical practices and enhancing
                    security, efficiency, transparency, and compliance across various
                    business operations. Antier stands out as a premiblockchain
                    development company, having completed over 1,000 projects since
                    its inception."
          desc2="As consumer demand for sustainability rises, blockchain technology
                    is essential for verifying ethical practices and enhancing
                    security, efficiency, transparency, and compliance across various
                    business operations. Antier stands out as a premiblockchain
                    development company, having completed over 1,000 projects since
                    its inception."
        />
      </div>
      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Development Services */}
      <div className="mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Our Blockchain
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg font-normal pt-2">
          Antier provides a full suite of blockchain development services to
          help businesses harness the full <br />
          potential of the technology and stay ahead in today’s competitive web3
          era.
        </p>
        {/* services */}
        <Services />
      </div>

      {/* Industries  */}
      <div className="text-center mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Industries{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            We Serve
          </span>
        </p>
        <p className="text-sm md:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          As a leading custom blockchain development company, we leverage
          different blockchain networks <br /> to provide you with the best
          solutions aligned with your needs.
        </p>
        {/* various industries  */}
        <div>
          <Industries />
        </div>
      </div>

      {/* Blockchain frameworks */}
      <div className="mt-12 md:mt-24 ">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Blockchain Frameworks We Utilize <br /> for{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            L2/L3 Development
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center text-sm md:text-[17px] px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Giichi team of experienced blockchain developers has a deep
          understanding of L2 and L3 blockchains and their <br />
          underlying frameworks. Our expertise lies in leveraging the robust
          capabilities of these frameworks that{" "}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64">
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

      {/* Blockchain Process */}
      <div>
        <BlockchainCycle title=" Our Blockchain App Development Process" />
      </div>

      {/* Technology Stack */}
      <div className="mt-12 ">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
          Technology{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Stack
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center">
          We leverage cutting-edge technologies and platforms being practiced in
          the <br /> global market and stay abreast of the latest market trends.
        </p>
        {/* Tech Stack */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 flex flex-col items-start w-full">
          <div className="w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-2">
              Mobile
            </p>
          </div>
          <div className="w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-2">
              Frontend
            </p>
          </div>
          <div className="w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-2">
              Backend
            </p>
          </div>
          <div className="w-[80%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-2 text-nowrap">
              Smart Contract Language
            </p>
          </div>
          <div className="w-[50%] md:w-[35%] lg:w-[25%] xl:w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-2">
              CMS
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* Clients Review */}
      <div>
        <Review />
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq />
      </div>

      {/* Spotlight insights */}
      <Insights />
    </div>
  );
};

export default BlockchainDevelopment;
