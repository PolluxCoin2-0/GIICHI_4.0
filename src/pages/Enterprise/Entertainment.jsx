/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";


const Entertainment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain In Media And{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Entertainment{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-lg font-semibold leading-snug">
            With expertise in 40+ blockchain protocols, Giichi IT Solutions{" "}
            <br />
            is driving the web3 revolution with cutting-edge <br />
            blockchain development services.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Development Company{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            With expertise in 40+ blockchain protocols, Giichi IT Solutions is
            driving the web3 revolution with cutting-edge blockchain development
            services.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
            Media and Entertainment Industry: Ripe for Blockchain Adoption
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          What Impact can Blockchain in Media Make?
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          The implementation of blockchain in media and entertainment can bring
          a significant change in the industry by enabling the following:
        </p>

        <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 xl:space-x-6 mt-12">
          <div
            className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl  px-8 py-8 flex flex-col justify-between w-full lg:w-[33%] lg:hover:w-[60%]  
          transition-all duration-300 ease-in-out"
          >
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16 ">
              Better Visibility and Transparency
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-48 2xl:h-32  ">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div
            className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl px-8 py-8  flex flex-col justify-between
            w-full lg:w-[33%] lg:hover:w-[60%]  transition-all duration-300 ease-in-out"
          >
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16">Streamlined Onboarding</p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div
            className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl px-8 py-8  flex flex-col justify-between
           w-full lg:w-[33%] lg:hover:w-[60%]  transition-all duration-300 ease-in-out"
          >
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4  lg:h-16">
              Reduced Product Counterfeiting
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Entertainment;
