import aboutBannerImg from "../../assets/aboutBanner.png";
import bkImg from "../../assets/blockchain.png";
import mtImg from "../../assets/mt.png";
import crImg from "../../assets/crypto.png";
import clImg from "../../assets/cloud.png";
import defiImg from "../../assets/defi.png";
import aiImg from "../../assets/ai2.png";
import missionImg from "../../assets/mission.png";
import LetsTalk from "../../components/LetsTalk";
import indiaImg from "../../assets/india 1.png";
const AboutUs = () => {
  return (
    <div className="">
      {/* header banner image */}
      <div className="relative z-10 -mt-4">
        <img
          src={aboutBannerImg}
          alt=""
          className="w-full  h-[700px] object-cover"
        />
      </div>

      {/* about giichi */}
      <div className="absolute z-20 top-0 mt-64 px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-60 ">
        <p className="text-center text-7xl font-bold">
          <span className="text-transparent bg-clip-text bg-white-gradient">
            About GiiCHi
          </span>
        </p>
        <div className="flex justify-center pt-6">
          <p className="text-white text-opacity-70 text-md font-medium 2xl:w-[50%] 3xl:w-[40%] text-center">
            Giichi, an IT company, specializes in digital transformation
            consulting and engineering services. We are dedicated to providing
            innovative solutions to both global enterprises and emerging
            technology startups. Since 2021, we have been assisting companies
            and well-established brands in redefining their business strategies
            by embracing digitalization.
          </p>
        </div>
      </div>

      {/* Technologyu excellence */}
      <div className="relative bg-[#D9D9D9] bg-opacity-10 pt-20 pb-20 mt-20">
      <div className="hidden md:block spotlight spotlight-left"></div>
<div className="hidden md:block spotlight spotlight-right"></div>
        <p className="text-5xl font-bold text-center text-white">
          Technology{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Excellence{" "}
          </span>
        </p>
        <p className="text-white text-opacity-70 text-center pt-6 text-lg leading-snug">
          We assist our clients in accelerating their progress by crafting
          flexible and scalable software <br />
          development solutions.
        </p>
        <div className="flex flex-row justify-center items-center space-x-72 mt-8">
          <div>
            <div className="flex flex-row items-center space-x-8">
              <img src={bkImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">BLOCKCHAIN</p>
            </div>
            <div className="flex flex-row items-center space-x-8 mt-8 ">
              <img src={mtImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">METAVERSE</p>
            </div>
            <div className="flex flex-row items-center space-x-8 mt-8">
              <img src={crImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">CRYPTO SOLUTIONS</p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center space-x-8">
              <img src={clImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">
                CLOUD POWERED SOLUTIONS
              </p>
            </div>
            <div className="flex flex-row items-center space-x-8 mt-8">
              <img src={defiImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">DEFI</p>
            </div>
            <div className="flex flex-row items-center space-x-8 mt-8">
              <img src={aiImg} alt="" className="w-16 rounded-xl" />
              <p className="text-xl font-bold text-white">
                ARTIFICIAL INTELLIGENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="relative flex flex-row items-center space-x-32 px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-64 3xl:px-60 w-full mt-20 mb-20">
      <div className="hidden md:block spotlight spotlight-left"></div>

        <div className="w-[40%]">

          <img src={missionImg} alt="" className="w-[70%]" />
        </div>
        <div className="flex flex-col justify-start items-start w-[60%]">
          <p className="text-5xl font-bold text-center text-white">
            Mission &{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              Vision
            </span>
          </p>
          <p className="text-md text-white text-opacity-70 2xl:w-[100%] 3xl:w-[80%] pt-8">
            Our goal is to expedite the integration of new technologies within
            enterprises, streamline the resolution of intricate challenges that
            inevitably arise during digital evolution, and oversee continuous
            innovation. Whether it’s a customer-centricapplication or a
            revolutionary enterprise-level solution, we guide the entire journey
            from initial idea and design to successful implementation, while
            offering sustained support along the way.
          </p>
        </div>
      </div>

      {/* lets talk */}
      <div>
        <LetsTalk buttonText="Talk To Us"/>
      </div>

      {/* Location */}
      <div className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32 3xl:px-64 mt-20 mb-12">
        {/* first */}
        <div className="pr-24 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <div className="flex flex-row items-center space-x-6">
            <img src={indiaImg} alt="" className=""/>
            <p className="text-white text-xl font-bold">INDIA</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">F-334, Autviz Solutions, Industrial Area, <br/> Phase 8(B), SAS Nagar, Punjab 160071</p>
          <p className="text-white  pt-5">+91 8360494224</p>
        </div>
 {/* second */}
        <div className="pr-24 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <div className="flex flex-row items-center space-x-6">
            <img src={indiaImg} alt="" className=""/>
            <p className="text-white text-xl font-bold">INDIA</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">F-334, Autviz Solutions, Industrial Area, <br/> Phase 8(B), SAS Nagar, Punjab 160071</p>
          <p className="text-white  pt-5">+91 8360494224</p>
        </div>
{/* third */}
        <div >
          <div className="flex flex-row items-center space-x-6">
            <img src={indiaImg} alt="" className=""/>
            <p className="text-white text-xl font-bold">INDIA</p>
          </div>
          <p className="text-white text-opacity-50 pt-5 ">F-334, Autviz Solutions, Industrial Area, <br/> Phase 8(B), SAS Nagar, Punjab 160071</p>
          <p className="text-white  pt-5">+91 8360494224</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
