/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import CalendlyButton from "../../components/resuableComponent/Calendly";
const Maas = () => {
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
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
            <p className="font-bold">Marketing As A Service</p>
          <p className=" pt-4">
            <span className="text-transparent bg-clip-text bg-black-gradient text-4xl font-extrabold">
            Web3 & Digital Marketing {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-4xl font-extrabold">
            Company{" "}
            </span>
          </p>
          <p className="pt-6 font-semibold leading-snug">
          Forging Brands With Ultimate Web3 and Digital Marketing,<br/> and Consultancy Services
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Development Company{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Forging Brands With Ultimate Web3 and Digital Marketing, and Consultancy Services
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>
      
    
    </div>
  );
};

export default Maas;
