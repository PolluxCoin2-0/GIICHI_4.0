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
          Embrace Augmented Security, Trust in Data, and Streamlined Logistics Management
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
          title1="Blockchain for Transportation: Paving the Road for the Future"
          title2="Giichi IT Solutions: Integrating Blockchain in Transportation"
          desc1="The transportation and logistics industry has traditionally been slow to adopt modern technologies, relying on outdated processes that result in inefficiencies such as opaque supply chains, security risks, and operational uncertainty. "
          desc2="At Giichi IT Solutions Pvt. Ltd., we help transportation and logistics companies digitally transform their operations, paving the way for new, innovative methods that drive better results for both businesses and their customers."
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
        Our blockchain-based solution for the transportation industry provides a more transparent and secure approach to business operations, ensuring immutable transaction records, improved provenance tracking, and enhanced coordination across the supply chain. Here’s how our solution delivers value:
        </p>

        <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4 xl:space-x-6 mt-12">
          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16 ">
            Better Security
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-48 2xl:h-52">
            Access key transaction data via a private, secure, and transparent shared ledger. This ensures you can spot fraud-prone areas and prevent manipulation of contract terms by enabling the immutable recording of agreed conditions, providing protection against unauthorized changes.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between  w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 lg:h-16">
            Trust in Digitized Data
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
            Eliminate the time-consuming and error-prone paperwork by digitizing critical information and securely posting it to the blockchain. This streamlined process ensures safe access to trusted data, reducing fraudulent activities and increasing transparency across operations.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4  lg:h-16">
            Improved Logistics Management
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
            Gain full visibility across the supply chain, including real-time tracking of goods from acceptance to delivery. With blockchain, you can efficiently monitor chain-of-custody, payment details, and shipment locations, and react promptly to any unforeseen disruptions that could affect operations.
            </p>
          </div>

          <div className="mt-4 lg:mt-0 border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-between w-full lg:w-[25%] lg:hover:w-[60%] p-4 lg:p-2 xl:p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4  lg:h-16">
            Efficient Industry Interactions
            </p>
            <p className="text-[15px]  text-white text-opacity-80 pt-2 lg:h-52 xl:h-40 2xl:h-52">
            Enhance collaboration between suppliers, consumers, freight forwarders, and other stakeholders. Blockchain ensures a single, trusted source of truth for all participants, allowing for better dispute resolution, smoother interactions, and more efficient processes across the supply chain.
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
