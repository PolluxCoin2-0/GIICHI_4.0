/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import { Web3DevelopmentFaq } from "../../../components/data/faqsData";
import { Web3DevelopmentFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import TechStack from "../../../components/CommonComponent/TechStack";
import { Web3DevtechCategories } from "../../../components/data/techStackData";
const statsData = [
  { label: "Years of blockchain experience", value: "7+" },
  { label: "End-Users Supported", value: "2M+" },
  { label: "Billion Trades Enabled", value: "3+" },
  { label: "Blockchain Engineers", value: "500+" },
];

const stages = [
  {
    number: "01",
    title: "CONTEXTUALIZE",
    desc: "We work hands-on with you to comprehend your needs and contextualize Web3 for your business. We do so while exploring the benefits and challenges and co-innovating around the use case.",
  },
  {
    number: "02",
    title: "ORCHESTRATE",
    desc: "We help you prepare for the market disruption as a result of the successful Web 3.0 launch. Our strategy and advisory services help you gauge organizational readiness, anticipate the business impact, and devise a go-to-market plan.",
  },
  {
    number: "03",
    title: "BUILD",
    desc: "We design and architect a Web 3.0 platform leveraging our rich domain knowledge and breadth of expertise. We work across the organization to engage stakeholders in legal and compliance businesses to build solutions ready for deployment.",
  },
  {
    number: "04",
    title: "IMPLEMENT",
    desc: "We implement a Web 3.0 solution and authorize updates and changes. We constantly deliver our Web3 development services and support even after product deployment to ensure that our solutions have a tangible impact on your businesses.",
  },
];

const DeFiStaking = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainDepinImg}
        title1="Web 3.0 Development "
        title2="Services"
        desc="Building a decentralized infrastructure network is no longer a
            challenge. Giichi enables businesses to transform their physical
            infrastructure into decentralized networks that enhance efficiency,
            security, and transparency."
      />

      {/* WHY OUR WEB3 DEVELOPMENT SERVICES*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Partner with Our Premium Web 3.0 Development Company to Widen Your
            Market
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            beatae hic rerum dolorum explicabo doloremque, quis numquam! Fuga
            iure obcaecati porro nemo assumenda quisquam, magni sit! Aperiam
            aliquid architecto fuga tenetur aliquam possimus rerum. Molestias
            ullam, voluptas suscipit voluptatum cupiditate itaque nostrum,
            reiciendis vel culpa facere minus, dolores expedita dolore.
          </p>
        </div>
      </div>

      {/*Stats Data */}
      <div className="relative mt-20 mb-20">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex justify-between items-center bg-[#283430] bg-opacity-10 py-6  rounded-lg shadow-md px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">
                <span className="text-transparent bg-clip-text bg-green-gradient">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Depin Framework */}
      <div className="">
      <Framework
        data={Web3DevelopmentFramework}
        heading1="Complete Package of Web3.0 "
        heading2="Development Services Under One Roof"
        desc="Check out web 3.0 development offerings and choose the one that best fits your business requirements."
      />
      </div>

      {/* WEB3 DEVELOPMENT JOURNEY */}
      <div className="mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          Our Web3 Development Journey
        </p>
        <p className="text-white text-opacity-70 text-center pt-4">
          We follow a coherent roadmap to seamlessly drive your Web3 development
          process.
        </p>
        <div className="p-4 mt-6">
          <div className="relative flex items-center justify-between max-w-7xl 3xl:max-w-[1380px] mx-auto">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative flex flex-col items-center"
              >
                {/* Connecting vertical line */}
                {index < stages.length && (
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 h-full">
                    <div className="w-0 h-28 border-r-2 border-dashed border-gray-300"></div>
                  </div>
                )}
                {/* Outer light green circle with blinking effect */}
                <div className="w-36 h-36 bg-green bg-opacity-20 rounded-full flex items-center justify-center relative z-10 animate-blink">
                  {/* Inner dark green circle */}
                  <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center font-bold z-20">
                    {stage.number}
                  </div>
                </div>
                {/* Stage title */}
                <div className="text-center mt-24 w-48 text-lg text-white font-semibold">
                  {stage.title}
                </div>
                {/* Stage description*/}
                <div className="text-center mt-4 w-72 text-sm text-white text-opacity-75">
                  {stage.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WEB3 TECHSTACK */}
      <div>
        <TechStack data={Web3DevtechCategories} />
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our Multicurrency
            Wallet experts TODAY!
          </p>
          <div className="flex flex-row items-center space-x-6">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <Faq data={Web3DevelopmentFaq} />
      </div>
    </div>
  );
};

export default DeFiStaking;
