/* eslint-disable react/prop-types */
import { Web3DevelopmentFaq } from "../../../components/data/faqsData";
import { Web3DevelopmentFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Offerings from "../../../components/CommonComponent/Offerings";
import web3DevelopmentBannerImg from "../../../assets/web3.0Banner.png";
import web3DevelopmentFeatureImg from "../../../assets/web3.0Feature.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const statsData = [
  { label: "Years of blockchain experience", value: "5+" },
  { label: "End-Users Supported", value: "100k+" },
  { label: "Billion Trades Enabled", value: "300+" },
  { label: "Blockchain Engineers", value: "50+" },
];

const stages = [
  {
    number: "01",
    title: "CONTEXTUALIZE",
    desc: "We work closely with you to understand your business needs and contextualize Web3 within your industry. Through collaboration, we explore potential benefits, challenges, and innovative use cases.",
  },
  {
    number: "02",
    title: "ORCHESTRATE",
    desc: "Our strategy and advisory services help you prepare for the market shift brought by Web 3.0 adoption. We assess organizational readiness, anticipate business impact, and craft a go-to-market strategy.",
  },
  {
    number: "03",
    title: "BUILD",
    desc: "Leveraging our deep industry expertise, we design and build a robust Web 3.0 platform. We engage key stakeholders across legal, compliance, and business sectors to ensure a seamless and compliant deployment.",
  },
  {
    number: "04",
    title: "IMPLEMENT",
    desc: "We develop and deploy your Web 3.0 solution while authorizing updates and improvements. Our team continues to provide post-launch support, ensuring long-term success and measurable business impact.",
  },
];

const Web3Development = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={web3DevelopmentBannerImg}
        title1="Web 3.0 Development "
        title2="Services"
        desc="Creating dynamic and immersive Web 3.0 solutions by seamlessly integrating blockchain, AI, and IoT technologies."
      />

      {/* WHY OUR WEB3 DEVELOPMENT SERVICES*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={web3DevelopmentFeatureImg}
            alt="web3 development feature image"
            className=""
          />
        </div>
        <div className="w-full lg:w-[60%] mt-6 md:mt-0">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Partner with Our Leading Web 3.0 Development Company to Expand Your
            Market
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-full md:w-[90%]"
            style={{ lineHeight: "1.7" }}
          >
            Web 3.0 represents the next evolution of the internet, enabling
            users to engage with websites and dApps in a highly immersive way.
            Embrace the Web 3.0 revolution with our expert development team and
            elevate your business to new heights. <br /> <br />
            We provide a comprehensive range of Web 3.0 development services
            tailored to meet the diverse needs of businesses across various
            industries. Our skilled and experienced Web 3.0 professionals craft
            strategic solutions designed to drive business success.
          </p>
             {/* button to connect on whatsapp */}
             <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mt-0 md:mt-8">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-4 md:px-6 lg:px-8 py-3 text-white text-sm md:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/*Stats Data */}
      <div className="relative mt-12 md:mt-32 mb-12 md:mb-20">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#283430] bg-opacity-10 py-6  rounded-lg shadow-md px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-8 md:mt-0"
            >
              <div className="text-3xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm lg:text-lg text-gray-600">
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
          heading1="All-Inclusive Web3.0"
          heading2="Development Services Under One Roof"
          desc="Explore our comprehensive Web 3.0 development offerings and choose the perfect solution to meet your business needs."
        />
      </div>

      {/* WEB3 DEVELOPMENT JOURNEY */}
      <div className="mt-16 md:mt-24 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          Navigating Our Web3 Development Journey
        </p>
        <p className="text-white text-opacity-70 text-center pt-4 text-sm lg:text-[16px]">
          We follow a coherent roadmap to seamlessly drive your Web3 development
          process.
        </p>
        <div className="p-4 mt-0 md:mt-6">
          <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl 3xl:max-w-[1380px] mx-auto">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative flex flex-col items-center mt-8 md:mt-8"
              >
                {/* Connecting vertical line */}
                {index < stages.length && (
                  <div className="absolute top-10 md:top-28 left-1/2 transform -translate-x-1/2 h-full">
                    <div className="w-0 h-28 border-r-2 border-dashed border-gray-300"></div>
                  </div>
                )}
                {/* Outer light green circle with blinking effect */}
                <div className="w-28 md:w-36 h-28 md:h-36 bg-green bg-opacity-20 rounded-full flex items-center justify-center relative z-10 animate-blink">
                  {/* Inner dark green circle */}
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-green text-white rounded-full flex items-center justify-center font-bold z-20">
                    {stage.number}
                  </div>
                </div>
                {/* Stage title */}
                <div className="text-center mt-12 md:mt-24 w-48 text-lg text-white font-semibold">
                  {stage.title}
                </div>
                {/* Stage description*/}
                <div className="text-center mt-2 md:mt-4 w-72 md:w-full lg:w-72 text-xs md:text-sm text-white text-opacity-75">
                  {stage.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Web3.0 Development experts TODAY!" />

      {/* FAQ Section */}
      <div>
        <Faq data={Web3DevelopmentFaq} />
      </div>
    </div>
  );
};

export default Web3Development;
