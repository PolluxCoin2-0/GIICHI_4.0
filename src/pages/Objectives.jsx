import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import b5Img from "../assets/B5.png";
import b4Img from "../assets/B4.png";
import b6Img from "../assets/B6.png";
import b7Img from "../assets/B7.png";
import b8Img from "../assets/B8.png";
import b9Img from "../assets/B9.png";
const Objectives = () => {
  return (
    <div className="px-0 xl:px-20 2xl:px-32 pt-12">
      {/* heading 1 */}
      <div className="flex flex-row justify-between items-center">
        <p className="bg-darkGray text-white px-8 py-3 rounded-full text-[17px] font-medium">
          -Unlock Your Creative Potential-
        </p>
        <img src={star1Img} alt="" className="hidden md:block" />
      </div>

      {/* Heading 2 */}
      <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
        Delivering Web3 Strategic
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Objectives
        </span>
      </p>

      {/* Heading 3*/}
      <div className="flex flex-row justify-between">
        <p className="text-md md:text-lg font-semibold text-white text-opacity-50 pt-4 md:pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star2Img} alt="" className="object-contain pb-10 hidden md:block" />
      </div>

      {/* blocks  */}
      <div>
        {/* block1 row {top row} */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 mt-4 lg:mt-0">
            <div className="w-[27%]">
                <img src={b5Img} alt="" className=""/>
            </div>
            <div className="w-[44%]">
            <img src={b4Img} alt="" className=""/>

            </div>
            <div className="w-[27%]">
            <img src={b6Img} alt="" className=""/>

            </div>
        </div>

        {/* block2 row  */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 pt-2 md:pt-4">
            <div className="w-[33%]">
                <img src={b7Img} alt="" className=" "/>
            </div>
            <div className="w-[33%]">
            <img src={b8Img} alt="" className=""/>

            </div>
            <div className="w-[33%]">
            <img src={b9Img} alt="" className=""/>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
