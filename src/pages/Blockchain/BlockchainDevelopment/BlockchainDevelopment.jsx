/* eslint-disable react/prop-types */
import BlockchainImg from "../../../assets/blockchainImg.png";
import Forecast from "../../../components/Blockchain/Forecast";
import Services from "../../../components/Blockchain/Services";
import BlockchainCycle from "../../../components/Blockchain/BlockchainCycle";
import Industries from "./Industries";
import LetsTalk from "../../../components/resuableComp/LetsTalk";
import Faq from "../../../components/Faq";
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
import wordpressImg from "../../../assets/wordpress.png";
import moveImg from "../../../assets/move.png";
import WhatsAppImg from "../../../assets/whatsapp.png";
import {BlockchainDevelopmentFaq} from "../../../components/data/faqsData";
import { BlockchainDevelopmentService } from "../../../components/data/ServicesData";
import { BlockchainDevelopmentCycle } from "../../../components/data/developmentCycleData";
import { BlockchainDevelopmentForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/Framework";
import { BlockchainDevelopmentFramework } from "../../../components/data/frameworkData";


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
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
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
            With expertise in 40+ blockchain protocols, Giichi IT Solutions{" "}
            <br />
            is driving the web3 revolution with cutting-edge <br />
            blockchain development services.
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
            With expertise in 40+ blockchain protocols, Giichi IT Solutions is
            driving the web3 revolution with cutting-edge blockchain development
            services.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast
        data={BlockchainDevelopmentForecast}
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
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 tracking-wide leading-relaxed">
          Our Blockchain
          <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg lg:text-[15px] xl:text-lg font-normal pt-2">
          Giichi IT Solutions offers a comprehensive suite of blockchain
          development services to help businesses unlock the full potential of
          blockchain technology and gain a competitive edge in the evolving Web3
          landscape.
        </p>
        {/* services */}
        <Services data={BlockchainDevelopmentService}/>
      </div>

      {/* Industries  */}
      <div className="relative text-center mt-8 md:mt-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Industries{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            We Serve
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          As a leading custom blockchain development company, we leverage
          different blockchain networks <br /> to provide you with the best
          solutions aligned with your needs.
        </p>
        <p className="block md:hidden text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs.
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
        <p className="hidden md:block text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Blockchain Frameworks We Utilize <br /> {" "}
          <span className="block pt-4 text-transparent bg-clip-text bg-green-gradient">
          for L2/L3 Development
          </span>
        </p>
        <p className="block md:hidden text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Blockchain Frameworks We Utilize for{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            L2/L3 Development
          </span>
        </p>

        <p className="hidden md:block text-white text-opacity-40 pt-6 text-center text-sm md:text-[17px] lg:text-[15px]  xl:text-[17px] px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 leading-6">
          At Giichi IT Solutions, our team of expert blockchain developers
          specializes in Layer 2 and Layer 3 blockchain solutions, <br />
          leveraging advanced frameworks to enhance scalability, efficiency, and
          interoperability.
        </p>
        <p className="block md:hidden text-white text-opacity-70 pt-6 text-center text-sm md:text-[17px] px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          At Giichi IT Solutions, our team of expert blockchain developers
          specializes in Layer 2 and Layer 3 blockchain solutions, leveraging
          advanced frameworks to enhance scalability, efficiency, and
          interoperability.
        </p>

       <div>
        <Framework data={BlockchainDevelopmentFramework}/>
       </div>
      </div>

      {/* Blockchain Process */}
      <div>
        <BlockchainCycle title=" Our Blockchain App Development Process" data={BlockchainDevelopmentCycle}/>
      </div>

      {/* Technology Stack */}
      <div className="relative mt-12 2xl:mt-20 ">
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
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6 lg:space-x-12 w-full">
            <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
              <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] text-center">
                {" "}
                Mobile
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row justify-between md:justify-start items-center md:space-x-6 lg:space-x-12 mt-4 ">
              <div className="flex flex-col justify-center items-center w-[12%]">
                <img src={FlutterImg} alt="flutter-img" className="w-6 md:w-10 " />
                <p className="text-white text-xs md:text-sm pt-2">Flutter</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[12%]">
                <img src={KotlinImg} alt="kotlin-img" className="w-10 md:w-16" />
                <p className="text-white text-xs md:text-sm pt-2">Kotlin</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[12%]">
                <img src={DartImg} alt="dart-img" className="w-6 md:w-10" />
                <p className="text-white text-xs md:text-sm pt-2">Dart</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[12%]">
                <img src={SwiftImg} alt="swift-img" className="w-6 md:w-10" />
                <p className="text-white text-xs md:text-sm pt-2">Swift</p>
              </div>
            </div>
          </div>

          {/* for frontend tech stack */}
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6 lg:space-x-12 w-full">
            <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
              <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] text-center">
                Frontend
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row justify-between md:justify-start items-center md:space-x-6 lg:space-x-12 mt-4 ">
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={htmlImg} alt="html-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={cssImg} alt="css-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">CSS</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={jsImg} alt="javacript-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">
                  Javascript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={tsImg} alt="typescript-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">
                  Typescript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={reactImg} alt="reactjs-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">
                  ReactJS
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={nextImg} alt="nextjs-img" className="w-10 " />
                <p className="text-white text-[10px] md:text-sm pt-2">NextJS</p>
              </div>
              <div className="hidden md:flex flex-col justify-center items-center w-[5%] md:w-[10%]">
                <img src={tailwindImg} alt="tailwind-img" className="w-10" />
                <p className="text-white text-nowrap text-[10px] md:text-sm pt-2">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          {/* for backend tech stack */}
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6 lg:space-x-12 w-full">
            <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
              <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] text-center">
                Backend
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row justify-between md:justify-start items-center md:space-x-6 lg:space-x-12 mt-4 ">
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={expressImg} alt="express-img" className="w-6 md:w-10 " />
                <p className="text-white text-nowrap text-xs md:text-sm pt-2">
                  Express.js
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={nodeImg} alt="node-img" className="w-6 md:w-10" />
                <p className="text-white text-nowrap text-xs md:text-sm pt-2">
                  NodeJS
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={mongoImg} alt="mongo-img" className="w-6 md:w-10 " />
                <p className="text-white text-nowrap text-xs md:text-sm pt-2">
                  MongoDB
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={rustImg} alt="rust-img" className="w-6 md:w-10" />
                <p className="text-white text-nowrap text-xs md:text-sm pt-2">
                  Rust
                </p>
              </div>
            </div>
          </div>

          {/* for smart contract language tech stack */}
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6  lg:space-x-12 w-full">
            <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
              <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] text-nowrap text-center">
                {" "}
                Smart Contract Language
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row justify-start items-center space-x-16 md:space-x-6 lg:space-x-12 mt-4 ">
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={solidityImg} alt="solidity-img" className="w-12 " />
                <p className="text-white text-sm pt-2">Solidity</p>
              </div>
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={moveImg} alt="move-language-img" className="w-12 " />
                <p className="text-white text-sm pt-2">Move</p>
              </div>
            </div>
          </div>

          {/* for CMS tech stack */}
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6  lg:space-x-12 w-full">
            <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
              <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] text-center">
                CMS
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row justify-center md:justify-start items-center md:space-x-6 mt-4 ">
              <div className="flex flex-col justify-center items-center w-[10%]">
                <img src={wordpressImg} alt="wordpress-img" className="w-10 " />
                <p className="text-white text-sm text-center pt-2">Wordpress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div className="mt-12">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* FAQ SECTION */}
      <div>
        <Faq data={BlockchainDevelopmentFaq} />
      </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={WhatsAppImg} alt="WhatsApp" className="" />
      </a>
    </div>
  );
};

export default BlockchainDevelopment;
