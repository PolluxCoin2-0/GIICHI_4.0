import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import star3Img from "../assets/star3.png";
import star4Img from "../assets/star4.png";
import blockImg1 from "../assets/blockImg1.png";
import blockImg2 from "../assets/blockImg2.png";
import blockImg3 from "../assets/blockImg3.png";
import blockImg4 from "../assets/blockImg4.png";
import blockImg5 from "../assets/blockImg5.png";
import blockImg6 from "../assets/blockImg6.png";
import Features from "./Features";
import Mission from "./Mission";
import Objectives from "./Objectives";
import Review from "./Review";
import LetsTalk from "./LetsTalk";
const Dashboard = () => {
  return (
    <div className="px-4 md:px-32 pt-12">
      {/* Heading 1 */}
      <div className="flex flex-row justify-center md:justify-between items-center px-0 md:px-28">
        <img src={star1Img} alt="" className="hidden md:block" />
        <p className="bg-darkGray text-white px-8 py-3 rounded-full text-sm md:text-[17px] font-medium text-nowrap">
          -Unlock Your Creative Potential-
        </p>
        <img src={star2Img} alt="" className="hidden md:block" />
      </div>

      {/* Heading 2 */}
      <p className="text-white text-2xl md:text-7xl font-bold text-center pt-4 leading-tight tracking-wide">
        Unlock Web3 Success <br />
        by Partnering with{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
          GiiCHi
        </span>
      </p>

      {/* Heading 3 */}
      <div className="flex flex-row justify-between items-center px-0 md:px-20">
        <img src={star3Img} alt="" className="hidden md:block" />
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-50 text-center pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star4Img} alt="" className="hidden md:block" />
      </div>

      {/* Buttons */}
      <div className="flex flex-row items-center justify-center space-x-4 md:space-x-12 pt-8">
        <button
          type="button"
          className="bg-green-gradient px-6 md:px-12 py-3 text-white rounded-full text-lg md:text-xl text-nowrap"
        >
          Contact Us
        </button>
        <button
          type="button"
          className="bg-black shadow-inner shadow-lightGray text-white text-lg md:text-xl px-6 md:px-12 py-3 rounded-full text-nowrap"
        >
          About GiiCHi
        </button>
      </div>

      {/* Blocks Section */}
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full px-0 md:px-72 pt-10 md:pt-20">
        <div className="w-full md:w-[35%] border-[1px] border-white border-opacity-30 px-2 md:px-4 rounded-2xl p-2 md:p-4 bg-gray-gradient">
          <img src={blockImg1} alt="" className="" />
          <p className="text-white text-opacity-50 mt-4 mb-5">
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into
            reality.Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into
            reality.reality.Accelerate your Web3 journey with GiiCHi CoPilot, a
            tailored partnership
          </p>
        </div>

        <div className="w-full md:w-[65%] mt-4 md:mt-0">
          <div className="flex flex-row space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-2xl p-2 md:p-4 bg-gray-gradient">
            <div>
              <img src={blockImg2} alt="" className="" />
            </div>
            <div>
              <img src={blockImg3} alt="" className="" />
              <img src={blockImg4} alt="" className="mt-2 md:mt-4" />
            </div>
          </div>
          <div className="flex flex-row space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-2xl mt-4 p-2 md:p-4 bg-gray-gradient">
            <img src={blockImg5} alt="" className="w-[50%] md:w-[62%]" />
            <img src={blockImg6} alt="" className="w-[50%] md:w-[230px] pr-2" />
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* BLOCKCHAIN FEATURE PAGE */}
      <div>
        <Features />
      </div>

      {/* MISSION PAGE */}
      <div>
        <Mission />
      </div>

      {/* OBJECTIVES PAGE */}
      <div>
        <Objectives />
      </div>

      {/* CLIENTS REVIEW PAGE */}
      <div>
        <Review />
      </div>

      {/* CLIENTS REVIEW PAGE */}
      <div>
        <LetsTalk />
      </div>
    </div>
  );
};

export default Dashboard;
