import star6Img from "../assets/star6.png";
import crowd1Logo from "../assets/crowd1Logo.png";
import polluxLogo from "../assets/polluxLogo (3).png";
import Spot30Logo from "../assets/spot30Logo.png";
import colourTradeLogo from "../assets/colorTradeLogo.png";
const Mission = () => {
  return (
    <div className="px-0 lg:px-32 pt-12">
        {/* Heading 1 */}
      <p className="text-white text-xl md:text-4xl lg:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
      Generating lasting performance <br/>
      for {" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
        Mission Critical Priorities
        </span>
      </p>

       {/* Heading 2 */}
       <div className="flex flex-row justify-between items-center px-0 lg:px-20">
         <img src={star6Img} alt="" className="hidden md:block" />
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-50 text-center pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star6Img} alt="" className="hidden md:block" />
      </div>
      
      {/* Heading 3 */}
      <div className="flex flex-row justify-center items-center px-0 md:px-28 mt-6">
      <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Partners-
        </p>
        </div>

        {/* Blocks : Our Partners*/}
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-0 w-full mt-8">
            <div className="w-full md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6">
              <img src={crowd1Logo} alt="" className=""/>
              <p className="text-white pt-4">Crowd1</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>

            <div className="w-full  md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6 mt-4 md:mt-0">
              <img src={crowd1Logo} alt="" className=""/>
              <p className="text-white pt-4">Crowd1</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>

             <div className="w-full  md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6 mt-4 md:mt-0">
              <img src={polluxLogo} alt="" className=""/>
              <p className="text-white pt-4">Pollux</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>
        </div>

        {/* Heading 4 */}
        <div className="flex flex-row justify-center items-center px-0 md:px-28 mt-12">
      <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Clients-
        </p>
        </div>

            {/* Blocks : Our Clients*/}
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-0  w-full mt-8">
            <div className="w-full md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6">
              <img src={Spot30Logo} alt="" className=""/>
              <p className="text-white pt-4">Spot30</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>

            <div className="w-full md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6 mt-4 md:mt-0">
              <img src={colourTradeLogo} alt="" className=""/>
              <p className="text-white pt-4">Color Trade</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>

             <div className="w-full md:w-[33%] lg:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 md:p-6 mt-4 md:mt-0">
              <img src={Spot30Logo} alt="" className=""/>
              <p className="text-white pt-4">Spot30</p>
              <p className="text-white text-opacity-50 pt-2">Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership 
              program designed to turn your vision intoprogram designed to turn your vision into reality.</p>
            </div>
        </div>
    </div>
  )
}

export default Mission
