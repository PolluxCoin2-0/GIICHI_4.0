import aboutBannerImg from "../../assets/aboutBanner.png";
import bkImg from "../../assets/blockchain.png";
import mtImg from "../../assets/mt.png";
import crImg from "../../assets/crypto.png";
import clImg from "../../assets/cloud.png";
import defiImg from "../../assets/defi.png";
import aiImg from "../../assets/ai2.png";
import missionImg from "../../assets/mission.png";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import indiaImg from "../../assets/indiaflag.png";
import dubaiImg from "../../assets/dubaiflag.png";

const AboutUs = () => {
  return (
    <div className="relative z-10">
      {/* header banner image */}
      <div className="relative z-10 -mt-4">
        <img
          src={aboutBannerImg}
          alt="About-banner-image"
          className="w-full h-[700px] object-cover"
        />
      </div>

      {/* about giichi */}
      <div className="absolute z-20 top-0 mt-24 md:mt-40 px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60 ">
        <p className="text-center text-4xl md:text-8xl font-bold">
          <span className="text-transparent bg-clip-text bg-white-gradient">
            About GiiCHi
          </span>
        </p>
        <p className="text-white text-opacity-80 text-xl font-semibold text-center pt-6">
          Transforming the Digital Landscape with Blockchain, Web3, and AI
          Solutions
        </p>
        <div className="flex justify-center pt-6">
          <p className="text-white text-opacity-70 text-[15px]  font-medium lg:w-[60%] 2xl:w-[55%]  text-center">
            At Giichi IT Solutions Pvt. Ltd., we are committed to driving the
            future of technology by delivering cutting-edge blockchain
            development, Web3 solutions, and AI-powered applications that
            empower businesses to thrive in the digital era. With expertise in
            decentralized technologies and the rapidly evolving Web3 ecosystem,
            we help businesses embrace the new digital revolution and stay ahead
            of the curve.
          </p>
        </div>
        <div
          className="flex justify-center mt-8 cursor-pointer"
          onClick={() => window.open("https://wa.me/9266416198", "_blank")}
        >
          <button className="bg-green-gradient px-5 lg:px-4 xl:px-10 py-2 xl:py-3 focus:outline-none rounded-full text-lg lg:text-sm xl:text-lg text-nowrap font-semibold transform hover:scale-105 transition-transform duration-300"
          aria-label="Go to contact form" type="button" title="Click to Contact form">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Technologyu excellence */}
      <div className="relative bg-[#D9D9D9] bg-opacity-10 pt-20 pb-20 mt-20 px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-64 3xl:px-60">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <p className="text-2xl md:text-5xl font-bold text-center text-white">
          Technology{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Excellence{" "}
          </span>
        </p>
        <p className="block md:hidden text-white text-opacity-70 text-center pt-6 text-sm md:text-lg leading-snug">
          We assist our clients in accelerating their progress by crafting
          flexible and scalable software development solutions.
        </p>
        <p className="hidden md:block text-white text-opacity-70 text-center pt-6 text-sm md:text-lg leading-snug">
          We assist our clients in accelerating their progress by crafting
          flexible and scalable software development solutions.
        </p>
        <div className="flex flex-row justify-center items-center space-x-4 md:space-x-12 lg:space-x-20 xl:space-x-72 mt-8">
          <div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 pl-4">
              <img src={bkImg} alt="blockchain" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                BLOCKCHAIN
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 mt-8 pl-4">
              <img src={mtImg} alt="metaverse" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                METAVERSE
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 mt-8 pl-4">
              <img src={crImg} alt="crypto-solution" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                CRYPTO SOLUTIONS
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 ">
              <img src={clImg} alt="cloud-solution" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                CLOUD SOLUTIONS
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 mt-8">
              <img src={defiImg} alt="defi" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                DEFI
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8 mt-8">
              <img src={aiImg} alt="artificial-intelligence" className="w-10 md:w-16 rounded-xl" />
              <p className="text-xs md:text-lg lg:text-xl font-bold text-white">
                ARTIFICIAL INTELLIGENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="relative flex flex-col md:flex-row items-center space-x-0 md:space-x-10 lg:space-x-32 px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-64 3xl:px-60 w-full mt-20 mb-20">
        <div className="hidden md:block spotlight spotlight-left"></div>

        <div className="w-full md:w-[40%]">
          <img src={missionImg} alt="mission" className="w-full xl:w-[70%]" />
        </div>
        <div className="flex flex-col justify-start items-start w-full  md:w-[60%]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            Mission &{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              Vision
            </span>
          </p>
          <p className="text-sm lg:text-[17px] text-white text-opacity-70 2xl:w-[100%] 3xl:w-[90%] pt-4 lg:pt-8">
          At Giichi IT Solutions Pvt. Ltd., our mission is to accelerate enterprise adoption of emerging technologies, ensuring seamless integration and innovation-driven growth. We strive to simplify complex digital transformation challenges, empowering businesses to stay ahead in an ever-evolving landscape.
        
          </p>
         <p className="text-sm lg:text-[17px] text-white text-opacity-70 2xl:w-[100%] 3xl:w-[90%] pt-4"> Our vision is to be the driving force behind next-gen technology solutions, guiding businesses from concept to execution. Whether it’s 
          a customer-centric application or a disruptive enterprise solution, we ensure a smooth journey—from ideation and design to implementation 
          and continuous support—fueling long-term success in the digital era.
       </p>
        </div>
      </div>

      {/* lets talk */}
      <div>
        <LetsTalk buttonText="Talk To Us" />
      </div>

      {/* Location */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-64 mt-12 lg:mt-20 mb-12">
        {/* first */}
        <div className="w-full md:w-[30%] pr-0  md:pr-6 xl:pr-24 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <div className="flex flex-row items-center space-x-6 ">
            <img src={indiaImg} alt="india-map-image" className="w-12" />
            <p className="text-white text-xl font-bold">INDIA</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">
            Giichi It Solutions Pvt Ltd <br /> IT Spaze Park, Sector 49
            Gurugram, <br />
            Haryana 122018
          </p>
          <p className="text-white pt-2 md:pt-5">+91 92664 16198</p>
        </div>
        {/* second */}
        <div className="w-full md:w-[30%] pr-0  md:pr-6 xl:pr-24 mt-6 md:mt-0 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <div className="flex flex-row items-center space-x-6">
            <img src={indiaImg} alt="india-map-image" className="w-12" />
            <p className="text-white text-xl font-bold">INDIA</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">
            Giichi It Solutions Pvt Ltd <br /> Sushma Infinium, Zirakpur, Punjab{" "}
            <br />
            140603
          </p>
          <p className="text-white  pt-2 md:pt-5">+91 92664 16198</p>
        </div>
        {/* third */}
        <div className="w-full md:w-[30%] pr-0 md:-mt-9 mt-6 ">
          <div className="flex flex-row items-center space-x-6">
            <img src={dubaiImg} alt="dubai-flag-image" className="w-12" />
            <p className="text-white text-xl font-bold">DUBAI</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">
            Al Abraj Street 12 Business Bay, <br /> Dubai, United Arab Emirates{" "}
            <br />
            30833
          </p>
          <p className="text-white pt-2 md:pt-5">+91 92664 16198</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
