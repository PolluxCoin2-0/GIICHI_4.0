/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";
import Forecast from "../../components/Blockchain/Forecast";
import bkDev1Img from "../../assets/bkDev1.png";
import bkDev2Img from '../../assets/bkDev2.png';

const TransportAndLogistics = () => {
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
            Blockchain in Transport {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
            and Logistics{" "}
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

      {/* Bloackchain transport & Logistics forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast
          img1={bkDev1Img}
          img2={bkDev2Img}
          title1="Blockchain Development Solutions: Powering Scalable Growth in the Web3 Economy"
          title2="Blockchain Market Forecast: Growth Projections & Emerging  Opportunities"
          desc1="As businesses embrace decentralization, blockchain technology plays a vital role in ensuring security, efficiency, transparency, and compliance across industries. Giichi IT Solutions specializes in delivering customized blockchain development solutions, leveraging expertise across 40+ blockchain protocols. Our team of experts builds scalable and innovative blockchain applications tailored to businesses worldwide."
          desc2="The blockchain industry is on a remarkable growth trajectory, with the market expected to reach nearly $1,000 trillion by 2032, according to Statista. The cryptocurrency market is also set to expand, with an estimated 861 million users by 2025, and user penetration projected to rise to 11.02%. On a global scale, the United States is forecasted to generate the $9,788 million in revenue in 2024, leading the crypto market. "
        />
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
        Blockchain in Transport : How can our Solution Help?
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          Being a trusted Blockchain supply chain development company, Antier
          offers Blockchain supply chain development <br />
          services to help supply chain leaders optimize their business
          operations and reduce inefficiency in data <br /> management with
          intuitive workflows.
        </p>

        <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 xl:space-x-6 mt-12">
          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16 ">
              Better Visibility and Transparency
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-48 2xl:h-52">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between  w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16">
              Streamlined Onboarding
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4  lg:h-16">
              Reduced Product Counterfeiting
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4  lg:h-16">
              Secured Supply Chain Operations
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
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

export default TransportAndLogistics;
