import star5Img from "../assets/star5.png";
import star6Img from "../assets/star6.png";
import b1Img from "../assets/B1.png";
import b2Img from "../assets/B2.png";
import b3Img from "../assets/B3.png";
const BlockchainFeatures = () => {
  return (
    <div className="px-32 pt-12">
      {/* Heading 1 */}
      <div className="flex flex-row justify-between items-center px-28">
        <img src={star5Img} alt="" className="" />
        <p className="bg-darkGray text-white px-8 py-3 rounded-full text-[17px] font-medium">
          -Unlock Your Creative Potential-
        </p>
        <img src={star6Img} alt="" className="pt-12" />
      </div>

      {/* Heading 2 */}
      <p className="text-white text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
        Crafting Non Fungible
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Excellence
        </span>
      </p>
      {/* Heading 3 */}
      <div className="flex flex-row justify-center items-center px-20">
        <p className="text-lg font-semibold text-white text-opacity-50  text-center pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
      </div>

      {/* Blocks */}
      <div className="flex flex-row justify-between space-x-6 w-full pt-8 px-20">
        <div className="border-2 border-white w-[31%] rounded-3xl">
            <img src={b1Img} alt="" className=""/>
            <div className="flex flex-col p-6 bg-darkBlue rounded-b-3xl">
            <p className="text-white text-2xl font-bold">Blockchain</p>
            <p className="pt-2 text-white text-opacity-50 font-medium">
          Accelerate your Web3 journey with GiiCHi  <br/>CoPilot, a tailored partnership program designed to turn your vision into reality.
        </p>
        </div>
        </div>

        <div className="border-2 border-white w-[31%] rounded-3xl">
        <img src={b2Img} alt="" className=""/>
        <div className="flex flex-col p-6 bg-navyBlue rounded-b-3xl">
            <p className="text-white text-2xl font-bold">Blockchain</p>
            <p className="pt-2 text-white text-opacity-50 font-medium">
          Accelerate your Web3 journey with GiiCHi  <br/>CoPilot, a tailored partnership program designed to turn your vision into reality.
        </p>
        </div>
        </div>

        <div className="border-2 border-white w-[31%] rounded-3xl">
        <img src={b3Img} alt="" className=""/>
        <div className="flex flex-col p-6 bg-blue rounded-b-3xl">
            <p className="text-white text-2xl font-bold">Blockchain</p>
            <p className="pt-2 text-white text-opacity-50 font-medium">
          Accelerate your Web3 journey with GiiCHi  <br/>CoPilot, a tailored partnership program designed to turn your vision into reality.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainFeatures;
