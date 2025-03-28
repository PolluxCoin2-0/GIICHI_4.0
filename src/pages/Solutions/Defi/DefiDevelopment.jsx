import { Link } from "react-router-dom";
import Forecast from "../../../components/CommonComponent/Forecast";
import { DefiDevForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/CommonComponent/Framework";
import { DefiDevFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { DefiDevelopmentFaq } from "../../../components/data/faqsData";

const statsData = [
  { label: "Years of blockchain experience", value: "7+" },
  { label: "End-Users Supported", value: "500+" },
  { label: "Billion Trades Enabled", value: "300+" },
  { label: "Blockchain Engineers", value: "300+" },
];

const comparisons = [
  {
    feature: "Structure",
    cefi: "Centralized",
    defi: "Completely Decentralized",
  },
  {
    feature: "Transparency",
    cefi: "Not Transparent",
    defi: "Highly Transparent",
  },
  { feature: "Access", cefi: "Permissioned", defi: "Permissionless" },
  {
    feature: "Censorship",
    cefi: "Can be Censored",
    defi: "Censorship Resistant",
  },
  { feature: "Cost", cefi: "Expensive", defi: "Economical" },
  { feature: "Security", cefi: "Less Secure", defi: "Highly Secure" },
];

const stages = [
  {
    number: "01",
    title: "Comprehend the business vision and goals",
    socialIcon: "telegram",
  },
  {
    number: "02",
    title: "Devise a coherent roadmap to navigate the development journey",
    socialIcon: null,
  },
  {
    number: "03",
    title:
      "Evaluate, implement, and deploy core technology infrastructure for the hybrid exchange",
    socialIcon: null,
  },
  {
    number: "04",
    title: "Deploy the system and implement updates and changes",
    socialIcon: null,
  },
  {
    number: "05",
    title: "Steer your CBDC development journey with",
    socialIcon: "message",
  },
];

const DefiDevelopment = () => {
  return (
    <div className="mb-20">
      {/* DeFi Development*/}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-4 tracking-wide">
            Decentralized Finance{" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-6 tracking-wide">
            DeFi Development
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ducimus numquam, labore ratione perferendis reiciendis aliquid
            aspernatur culpa molestias porro perspiciatis iure consequuntur
            autem, iusto distinctio, odio blanditiis quia quibusdam?
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-5">
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

        <div className="w-[50%]"></div>
      </div>

      {/* Bloackchain forecast */}
      <div className="mt-6">
        <Forecast data={DefiDevForecast} />
      </div>

      {/*Stats Data */}
      <div className="relative mt-24 mb-12">
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
      <div className="mt-20">
        <Framework
          data={DefiDevFramework}
          heading1="Real-Life Benefits of DeFi "
          heading2="Software Development"
          desc=""
        />
      </div>

      {/* DEFI DEVELOPMENT JOURNEY */}
      <div className="mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          Our DeFi Development Journey
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
                <div className="text-center mt-24 w-48 text-sm text-white font-medium">
                  {stage.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIFFERNCE BETWEEN CEFI VS DEFI */}
      <div className="mt-20 ">
        <p className="text-white text-4xl font-semibold text-center">
          DeFi Vs CeFi
        </p>
        <p className="text-white text-opacity-75 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-4">
          DeFi and CeFi are two distinct models of financial systems that
          operate on blockchain technology. CeFi is controlled by a central
          authority such as a bank and CeFi platforms typically require users to
          go through a rigorous KYC. Decentralized Finance Development is ideal
          for those who prioritize decentralization, transparency, and low fees.
        </p>
        <div className="flex gap-4 p-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-6">
          <div className="w-1/2">
            <div>
              <div className="bg-green  text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-center">CEFI</p>
              </div>
              <div className="bg-green bg-opacity-10 p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="text-white font-normal">{comp.cefi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold">DEFI</p>
              </div>
              <div className="bg-green bg-opacity-10 text-white p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="font-normal text-white">{comp.defi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <Faq data={DefiDevelopmentFaq} />
      </div>
    </div>
  );
};

export default DefiDevelopment;
