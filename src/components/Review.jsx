import circle1Img from "../assets/circle1.png";
import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import founderImg from "../assets/founder.png";

const Review = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 pt-0">
      <div className="hidden md:block spotlight1 spotlight-right1"></div>
      {/* Heading 1 */}
      <div className="flex flex-row justify-start md:justify-between items-center pr-0 md:pr-48">
        {/* <p className="bg-darkGray text-white px-8 lg:px-20 py-3 rounded-full text-[17px] font-medium">
          -Clients Review-
        </p> */}
        <img src={circle1Img} alt="" className="w-28 hidden md:hidden" />
      </div>

      {/* Heading 2 */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          What{" "}
          <span className="text-transparent bg-clip-text bg-yellow-gradient">
            Clients{" "}
          </span>
          Say
        </p>
        <img src={star1Img} alt="" className="w-16 hidden md:hidden" />
      </div>

      {/* Heading 3*/}
      <div className="flex flex-row justify-between pr-0 md:pr-40">
        <p className="text-md lg:text-lg font-semibold text-white text-opacity-50 pt-4 md:pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img
          src={star2Img}
          alt=""
          className="object-contain pb-10 hidden md:hidden"
        />
      </div>

      {/* Blocks */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-6 lg:space-x-12 w-full pt-10 xl:pt-20">
        {/* first column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]">
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="" />
            <div>
              <p className="text-white">Kamal Kundal</p>
              <p className="text-white">CEO</p>
            </div>
          </div>
        </div>
        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
        {/* second column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 pt-10 md:pt-0 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]">
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="" />
            <div>
              <p className="text-white">Kamal Kundal</p>
              <p className="text-white">CEO</p>
            </div>
          </div>
        </div>
        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
        {/* Third Column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 pt-10 md:pt-0">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]" >
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
            Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
            partnership program designed to turn your vision into reality.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="" />
            <div>
              <p className="text-white">Kamal Kundal</p>
              <p className="text-white">CEO</p>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center pt-8">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
