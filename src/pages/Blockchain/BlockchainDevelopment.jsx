import BlockchainImg from "../../assets/blockchainImg.png";
import element1Img from "../../assets/element1.png";
import element2Img from "../../assets/element2.png";
import star2Img from "../../assets/star2.png";
import circle1Img from "../../assets/circle1.png";
import circle3Img from "../../assets/circle3.png";
import circle5Img from "../../assets/circle5.png";
import healthImg from "../../assets/healthcare 1.png";
import propertyImg from "../../assets/property 1.png";
import museumImg from "../../assets/museum 1.png";
import agriImg from "../../assets/agriculture 1.png";
import logisticImg from "../../assets/Group (14).png";
import crowd1Logo from "../../assets/crowd1Logo.png";
import polluxLogo from "../../assets/polluxLogo (3).png";
import Review from "../Review";
import Faq from "../../components/Faq";
// import Spot30Logo from "../assets/spot30Logo.png";
// import colourTradeLogo from "../assets/colorTradeLogo.png";
const BlockchainDevelopment = () => {
 
  return (
    <div className="px-4 md:px-8 lg:px-12 2xl:px-40 pt-12">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex justify-center">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="w-full h-96 object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 left-20 w-full h-full flex flex-col items-start justify-center">
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
      <div className="flex flex-row justify-between items-center mt-20 w-full">
        {/* images section */}
        <div className="relative inline-block -ml-12 w-[15%]">
          <img
            src={circle3Img}
            alt=""
            className="w-36 relative z-10 hidden md:block"
          />
          <img
            src={circle5Img}
            alt=""
            className=" w-28 absolute -top-20 left-20 z-20 hidden md:block"
          />
        </div>

        {/* block section */}
        <div className="flex flex-row justify-center items-center space-x-12 w-[70%]">
          <div className="flex flex-col items-center justify-center w-[50%]">
            <img src={element1Img} alt="" className="w-60" />
            <p className="text-white text-xl font-semibold pt-10">
              Blockchain Market Forecast: Growth <br />
              Projections and Opportunities Ahead
            </p>
            <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-20">
              As consumer demand for sustainability rises, blockchain technology
              is essential for verifying ethical practices and enhancing
              security, efficiency, transparency, and compliance across various
              business operations. Antier stands out as a premiblockchain
              development company, having completed over 1,000 projects since
              its inception.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-[50%]">
            <img src={element2Img} alt="" className="w-80" />
            <p className="text-white text-xl font-semibold pt-16">
              Blockchain Market Forecast: Growth
              <br />
              Projections and Opportunities Ahead
            </p>
            <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-20">
              As consumer demand for sustainability rises, blockchain technology
              is essential for verifying ethical practices and enhancing
              security, efficiency, transparency, and compliance across various
              business operations. Antier stands out as a premiblockchain
              development company, having completed over 1,000 projects since
              its inception.
            </p>
          </div>
        </div>

        {/* images section */}
        <div className="w-[15%]">
          <img src={circle1Img} alt="" className="-mt-72 ml-12" />
          <img src={star2Img} alt="" className="mt-8 ml-40 object-cover w-16" />
        </div>
      </div>
      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Development Services */}
      <div className="mt-12">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Our Blockchain
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <p className="text-white text-lg font-normal pt-2">
          Antier provides a full suite of blockchain development services to
          help businesses harness the full <br />
          potential of the technology and stay ahead in today’s competitive web3
          era.
        </p>
        {/* services Block */}
        <div className="flex flex-row justify-between w-full space-x-12 mt-12">
          <div className="w-[30%] pr-12 relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
            <p className="text-white text-lg font-bold border-b-2 border-white border-opacity-20 pb-2">
              Blockchain Consultation & <br />
              Integration
            </p>
            <p className="text-sm text-white text-opacity-70 pt-4">
              From strategy development to implementation, our custom Blockchain
              software development experts will guide you through every stage of
              your blockchain application development journey. Antier's deep
              industry knowledge and proven track record ensure successful
              blockchain integration.
            </p>
          </div>

          <div className="w-[30%] pr-12 relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
            <p className="text-white text-lg font-bold border-b-2 border-white border-opacity-20 pb-4">
              Layer 2 Development
            </p>
            <p className="text-sm text-white text-opacity-70 pt-6">
              We specialize in creating innovative Layer 2 solutions that
              address the limitations of base-layer blockchains. Our team
              develops robust Layer 2 protocols, such as rollups and state
              channels, that seamlessly integrate with existing blockchain
              networks.
            </p>
          </div>

          <div className="w-[30%] pr-12 ">
            <p className="text-white text-lg font-bold border-b-2 border-white border-opacity-20 pb-2">
              Blockchain Protocol <br />
              Development
            </p>
            <p className="text-sm text-white text-opacity-70 pt-4">
              Our expertise spans the entire protocol development lifecycle,
              from consensus mechanism selection to governance structures. We
              specialize in designing and implementing scalable and customizable
              blockchain protocols tailored to your specific requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Industries  */}
      <div className="text-center mt-12">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Industries{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            We Serve
          </span>
        </p>
        <p className="text-[17px] text-white text-opacity-70 pt-4">
          As a leading custom blockchain development company, we leverage
          different blockchain networks <br /> to provide you with the best
          solutions aligned with your needs.
        </p>
      </div>

      {/* various industries  */}
      <div className="bg-[#283430] bg-opacity-10 p-12 text-center">
        <div className="flex flex-row justify-center items-center space-x-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={healthImg} alt="" className="w-20" />
            <p className="text-white pt-4">Healthcare</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={propertyImg} alt="" className="w-20" />
            <p className="text-white pt-4">Real Estate</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={museumImg} alt="" className="w-20" />
            <p className="text-white pt-4">BFSI</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={agriImg} alt="" className="w-20" />
            <p className="text-white pt-4">Agriculture</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={logisticImg} alt="" className="w-20" />
            <p className="text-white pt-4">Logistics</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center space-x-12 mt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={healthImg} alt="" className="w-20" />
            <p className="text-white pt-4">Healthcare</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={propertyImg} alt="" className="w-20" />
            <p className="text-white pt-4">Real Estate</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={museumImg} alt="" className="w-20" />
            <p className="text-white pt-4">BFSI</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={agriImg} alt="" className="w-20" />
            <p className="text-white pt-4">Agriculture</p>
          </div>
          <div className="border-[1px] border-white border-opacity-20 rounded-xl px-10 py-5">
            <img src={logisticImg} alt="" className="w-20" />
            <p className="text-white pt-4">Logistics</p>
          </div>
        </div>
      </div>

      {/* Blockchain frameworks */}
      <div className="text-center mt-12">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Blockchain Frameworks We Utilize <br /> for{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            L2/L3 Development
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6">
          Giichi team of experienced blockchain developers has a deep
          understanding of L2 and L3 blockchains and their <br />
          underlying frameworks. Our expertise lies in leveraging the robust
          capabilities of these frameworks that{" "}
        </p>

        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-6 xl:space-x-0 w-full mt-8">
          <div className="w-full md:w-[33%] xl:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
            <img src={crowd1Logo} alt="" className="" />
            <p className="text-white pt-4">Crowd1</p>
            <p className="text-white text-opacity-50 pt-2">
              Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
              partnership program designed to turn your vision intoprogram
              designed to turn your vision into reality.
            </p>
          </div>

          <div className="w-full md:w-[33%] xl:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 mt-4 md:mt-0">
            <img src={crowd1Logo} alt="" className="" />
            <p className="text-white pt-4">Crowd1</p>
            <p className="text-white text-opacity-50 pt-2">
              Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
              partnership program designed to turn your vision intoprogram
              designed to turn your vision into reality.
            </p>
          </div>

          <div className="w-full md:w-[33%] xl:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 mt-4 md:mt-0">
            <img src={polluxLogo} alt="" className="" />
            <p className="text-white pt-4">Pollux</p>
            <p className="text-white text-opacity-50 pt-2">
              Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
              partnership program designed to turn your vision intoprogram
              designed to turn your vision into reality.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain Process */}
      {/* <div>
        <p>Our Blockchain App Development Process</p>
        
      </div> */}

      {/* Technology Stack */}
      <div className="mt-12 text-center">
      <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
         Technology{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Stack
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-2">We leverage cutting-edge technologies and platforms being practiced in the <br/> global market and stay abreast of the latest market trends.</p>
      </div>

      {/* Clients Review */}
      <div>
        <Review/>
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq/>
      </div>
    </div>
  );
};

export default BlockchainDevelopment;
