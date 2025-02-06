/* eslint-disable react/prop-types */
import BlockchainImg from "../../../assets/blockchainImg.png";
import bkDev1Img  from "../../../assets/bkDev1.png";
import bkDev2Img from "../../../assets/bkDev2.png";
import Forecast from "../../../components/Blockchain/Forecast";
import Services from "../../../components/Blockchain/Services";
import BlockchainCycle from "../../../components/Blockchain/BlockchainCycle";
import Industries from "./Industries";
import LetsTalk from "../../../components/LetsTalk";
import Faq from "../../../components/Faq";
import { LuArrowUpRight } from "react-icons/lu";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import FlutterImg from "../../../assets/Flutter.png";
import KotlinImg from "../../../assets/kotlin.png";
import DartImg from "../../../assets/dart.png";
import SwiftImg from "../../../assets/swift (3).png";
import htmlImg from "../../../assets/html-5.png";
import cssImg from "../../../assets/css-3.png";
import jsImg from "../../../assets/java-script.png";
import tsImg from "../../../assets/typescript (1).png";
import reactImg from "../../../assets/reactjs.png";
import nextImg from "../../../assets/nextjs (1).png";
import tailwindImg from "../../../assets/tailwind.png";
import expressImg from "../../../assets/express (2).png";
import nodeImg from "../../../assets/node.png";
import mongoImg from "../../../assets/mongo.png";
import rustImg from "../../../assets/rust.png";
import solidityImg from "../../../assets/solidity.png";
import moveImg from "../../../assets/move.png";
import wordpressImg from "../../../assets/wordpress.png";
import polygonImg from "../../../assets/polygon.png";
import zkSyncImg from "../../../assets/zksync.png";
import avlancheImg from "../../../assets/avlanche.png";
import cosmosDkImg from "../../../assets/cosmosDk.png";
import polkadotImg from "../../../assets/polkadot.png";
import arbitrumImg from '../../../assets/arbitrum.png';
import parityImg from "../../../assets/parity.png";
import opStackImg from "../../../assets/opStack.png";

const FrameworksData = [
  {
    logo: polygonImg,
    title: "Polygon zkEVM",
    description:
      " The first zero-knowledge scaling solution fully compatible with the Ethereum Virtual Machine (EVM), enabling smart contract execution with enhanced privacy and scalability.",
  },
  {
    logo: zkSyncImg,
    title: " zkSync Hyperchains",
    description:
      "A next-gen blockchain architecture utilizing parallel zkEVM instances to achieve consensus on Ethereum’s Layer 1, improving scalability and transaction efficiency.",
  },
  {
    logo: avlancheImg,
    title: " Avalanche Subnets ",
    description:
      " Custom blockchain networks designed for infinite scalability, allowing businesses to define their own sovereign rules while benefiting from Avalanche’s consensus.",
  },
  {
    logo: cosmosDkImg,
    title: " Cosmos SDK ",
    description:
      "An open-source framework for building interoperable multi-asset blockchains, supporting both public Proof-of-Stake (PoS) and permissioned Proof-of-Authority (PoA) networks.",
  },
  {
    logo: polkadotImg,
    title: " Polkadot Parachains",
    description:
      "A permissionless framework for launching custom Layer 2 and Layer 3 chains within the Polkadot ecosystem, enabling cross-chain communication and scalability.",
  },
  {
    logo: arbitrumImg,
    title: " Arbitrum Orbit ",
    description:
      "A flexible platform for deploying custom Layer 2 and Layer 3 chains, offering enhanced scalability with Ethereum compatibility.",
  },
  {
    logo: parityImg,
    title: " Parity Substrate ",
    description:
      "A modular and highly efficient framework by Parity Technologies, designed for building flexible and scalable blockchain architectures.",
  },
  {
    logo: opStackImg,
    title: "  OP Stack ",
    description:
      "A standardized development framework for launching Layer 2 blockchains with production-ready infrastructure, similar to OP Mainnet.",
  },
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 ">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="w-12" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const BlockchainDevelopment = () => {
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
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 left-80 w-full h-full">
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
          With expertise in 40+ blockchain protocols, Giichi IT Solutions <br/>is driving the web3 revolution with cutting-edge <br/>blockchain development services.
          </p>
          {/* Button */}
         <CalendlyButton/>
         {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
         <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Development  Company{" "}
            </span>
      
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services.
          </p>
          {/* Button */}
        <CalendlyButton/>
        </div>
      </div>

      {/* Bloackchain forecast */}
      <div className="mt-20">
        <Forecast
          img1={bkDev1Img}
          img2={bkDev2Img}
          title1="Blockchain Development Solutions: Powering Scalable Growth in the Web3 Economy"
          title2="Blockchain Market Forecast: Growth Projections & Emerging  Opportunities"
          desc1="As businesses embrace decentralization, blockchain technology plays a vital role in ensuring security, efficiency, transparency, and compliance across industries. Giichi IT Solutions specializes in delivering customized blockchain development solutions, leveraging expertise across 40+ blockchain protocols. Our team of experts builds scalable and innovative blockchain applications tailored to businesses worldwide."
          desc2="The blockchain industry is on a remarkable growth trajectory, with the market expected to reach nearly $1,000 trillion by 2032, according to Statista. The cryptocurrency market is also set to expand, with an estimated 861 million users by 2025, and user penetration projected to rise to 11.02%. On a global scale, the United States is forecasted to generate the $9,788 million in revenue in 2024, leading the crypto market. "
        />
      </div>
      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Development Services */}
      <div className="relative mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Our Blockchain
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg font-normal pt-2">
        Giichi IT Solutions offers a comprehensive suite of blockchain development services to help businesses unlock the full potential of blockchain technology and gain a competitive edge in the evolving Web3 landscape.
        </p>
        {/* services */}
        <Services />
      </div>

      {/* Industries  */}
      <div className="relative text-center mt-12 md:mt-24">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
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
      <div className="relative mt-12 md:mt-24 ">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Blockchain Frameworks We Utilize <br /> for{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            L2/L3 Development
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center text-sm md:text-[17px] px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        At Giichi IT Solutions, our team of expert blockchain developers specializes in Layer 2 and Layer 3 blockchain solutions, <br/>
        leveraging advanced frameworks to enhance scalability, efficiency, and interoperability. We focus on implementing cutting-edge<br/>
         rollup technologies, enabling seamless L2/L3 chain deployment while maintaining high transaction throughput and security.
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
      <div className="relative mt-12 ">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
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
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 flex flex-col items-start w-full space-y-12 mt-12">
          {/* for mobile tech stack */}
          <div className="flex flex-row justify-start items-center space-x-4 md:space-x-6 w-full">
         
            <div className="w-[20%]"> <p className="text-white bg-darkGray rounded-md mt-8 px-2 md:px-5 py-2 md:py-3 text-sm md:text-[17px]"> Mobile</p></div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={FlutterImg} alt="" className="w-6 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">Flutter</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={KotlinImg} alt="" className="w-10 md:w-16"/>
            <p className="text-white text-xs md:text-sm pt-2">Kotlin</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={DartImg} alt="" className="w-6 md:w-10"/>
            <p className="text-white text-xs md:text-sm pt-2">Dart</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={SwiftImg} alt="" className="w-6 md:w-10"/>
            <p className="text-white text-xs md:text-sm pt-2">Swift</p>
            </div>
          </div>

          {/* for frontend tech stack */}
          <div className="flex flex-row justify-start items-center space-x-4 md:space-x-6 w-full">
            <div className="w-[20%]"><p className="text-white bg-darkGray rounded-md mt-8 px-2 md:px-5 py-2 md:py-3 text-sm md:text-[17px] ">Frontend</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={htmlImg} alt="" className="w-6 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">HTML</p>
            </div>
            <div className=" flex flex-col justify-center items-center w-[10%]">
            <img src={cssImg} alt="" className="w-6 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={jsImg} alt="" className="w-5 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">Javascript</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={tsImg} alt="" className="w-5 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">Typescript</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={reactImg} alt="" className="w-6 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">ReactJS</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={nextImg} alt="" className="w-6 md:w-10 "/>
            <p className="text-white text-xs md:text-sm pt-2">NextJS</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={tailwindImg} alt="" className="w-6 md:w-10"/>
            <p className="text-white text-nowrap text-xs md:text-sm pt-2" >Tailwind CSS</p>
            </div>
          </div>

          {/* for backend tech stack */}
         <div className="flex flex-row justify-start items-center space-x-6 w-full">
            <div className="w-[20%]"> <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-3"> Backend</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={expressImg} alt="" className="w-10 "/>
            <p className="text-white text-nowrap text-sm pt-2">Express.js</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={nodeImg} alt="" className="w-10 "/>
            <p className="text-white text-nowrap text-sm pt-2">NodeJS</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={mongoImg} alt="" className="w-10 "/>
            <p className="text-white text-nowrap text-sm pt-2">MongoDB</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={rustImg} alt="" className="w-10"/>
            <p className="text-white text-nowrap text-sm pt-2">Rust</p>
            </div>
          </div>

          {/* for smart contract language tech stack */}
          <div className=" flex flex-row justify-start items-center space-x-6 w-full">
            <div className="w-[20%]"><p className="text-white bg-darkGray rounded-md mt-8 px-5 py-3 text-nowrap"> Smart Contract Language</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={solidityImg} alt="" className="w-12 "/>
            <p className="text-white text-sm pt-2">Solidity</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={moveImg} alt="" className="w-12 "/>
            <p className="text-white text-sm pt-2">Move</p>
            </div>
          </div>

          {/* for CMS tech stack */}
         <div className="flex flex-row justify-start items-center space-x-6 w-full">
            <div className="w-[20%]">
            <p className="text-white bg-darkGray rounded-md mt-8 px-5 py-3">
              CMS
            </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[10%]">
            <img src={wordpressImg} alt="" className="w-10 "/>
            <p className="text-white text-sm text-center pt-2">Wordpress</p>
            </div>
          </div>

        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* Clients Review */}
      {/* <div>
        <Review />
      </div> */}

      {/* FAQ SECTION */}
      <div>
        <Faq />
      </div>

      {/* Spotlight insights */}
      {/* <Insights /> */}
    </div>
  );
};

export default BlockchainDevelopment;
