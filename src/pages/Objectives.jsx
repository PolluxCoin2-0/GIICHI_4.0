import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import b1Img from "../assets/B1.png";
import b2Img from "../assets/B1.png";
import b3Img from "../assets/B1.png";
import b4Img from "../assets/B1.png";

const Objectives = () => {
  return (
    <div className="px-32 pt-12">
      {/* heading 1 */}
      <div className="flex flex-row justify-between items-center">
        <p className="bg-darkGray text-white px-8 py-3 rounded-full text-[17px] font-medium">
          -Unlock Your Creative Potential-
        </p>
        <img src={star1Img} alt="" className="" />
      </div>

      {/* Heading 2 */}
      <p className="text-white text-6xl font-bold pt-4 leading-tight tracking-wide">
        Delivering Web3 Strategic
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Objectives
        </span>
      </p>

      {/* Heading 3*/}
      <div className="flex flex-row justify-between">
        <p className="text-lg font-semibold text-white text-opacity-50 pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star2Img} alt="" className="object-contain pb-10" />
      </div>

      {/* blocks  */}
      <div>
        {/* block1 row {top row} */}
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        {/* block2 row  */}
        <div></div>
      </div>
    </div>
  );
};

export default Objectives;
