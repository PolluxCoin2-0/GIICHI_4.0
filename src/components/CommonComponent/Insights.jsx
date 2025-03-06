import b1Img from "../../assets/B1.png";
import b2Img from "../../assets/B2.png";
import b3Img from "../../assets/B3.png";

const Insights = () => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 mt-12 md:mt-16 ">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
          Spotlight On{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Insights
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-6 w-full pt-8 ">
          <div className="border-2 border-white w-full md:e-[33%] lg:w-[31%] rounded-2xl">
            <img src={b1Img} alt="" className="" />
            <div className="flex flex-col p-4 lg:p-6 bg-darkBlue rounded-b-2xl">
              <p className="text-white text-xl md:text-2xl font-bold">
                Blockchain
              </p>
              <p className="pt-2 text-white text-opacity-50 font-medium text-sm md:text-[16px]">
                Accelerate your Web3 journey with GiiCHi <br />
                CoPilot, a tailored partnership program designed to turn your
                vision into reality.
              </p>
            </div>
          </div>

          <div className="border-2 border-white w-full md:e-[33%] lg:w-[31%] rounded-2xl mt-4 md:mt-0">
            <img src={b2Img} alt="" className="" />
            <div className="flex flex-col p-4 lg:p-6 bg-navyBlue rounded-b-2xl">
              <p className="text-white text-2xl font-bold">Blockchain</p>
              <p className="pt-2 text-white text-opacity-50 font-medium text-sm md:text-[16px]">
                Accelerate your Web3 journey with GiiCHi <br />
                CoPilot, a tailored partnership program designed to turn your
                vision into reality.
              </p>
            </div>
          </div>

          <div className="border-2 border-white w-full md:e-[33%] lg:w-[31%] rounded-2xl mt-4 md:mt-0">
            <img src={b3Img} alt="" className="" />
            <div className="flex flex-col p-4 lg:p-6 bg-blue rounded-b-2xl">
              <p className="text-white text-2xl font-bold">Blockchain</p>
              <p className="pt-2 text-white text-opacity-50 font-medium text-sm md:text-[16px]">
                Accelerate your Web3 journey with GiiCHi <br />
                CoPilot, a tailored partnership program designed to turn your
                vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
