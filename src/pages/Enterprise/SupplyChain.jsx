/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import Faq from "../../components/Faq";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";

const SupplyChain = () => {
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
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Blockchain for Supply{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Chain Solution{" "}
            </span>
          </p>
          <p className="pt-6 text-lg font-semibold leading-snug">
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

      {/* Bloackchain supply chain forecast */}
      <div className="flex flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-24 mb-12">
        <div className="w-[40%]">{/* img */}</div>

        <div className="w-[60%] ">
          <p className="text-white text-4xl font-semibold pt-4 px-0 xl:px-28 ">
            Blockchain Supply Chain Development: Build a Transparent, Trusted,
            and Resilient Supply Chain Network
          </p>
          <p className="text-sm md:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
          <p className="text-sm md:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain challenges  */}
      <div className="bg-[#283430] bg-opacity-10 text-center mt-6 md:mt-12 p-1 pt-12 pb-20">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Challenges in Conventional <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-4xl lg:text-5xl">
            Supply Chain Management
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          The traditional supply chain management process is beset with a
          plethora of inefficiencies that lead to information silos <br />
          and makes asset tracking a cumbersome and time-consuming task.
        </p>

        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
          <div className="flex flex-row w-full space-x-8">
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%] 
            hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%]">
                Lack of Security and Transparency
              </p>
            </div>
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%]   hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%]">
                Costly Data Reconciliation Processes
              </p>
            </div>
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%]   hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%]">
                Disconnected Supply Chain Participants
              </p>
            </div>
          </div>

          <div className="flex flex-row w-full space-x-8 mt-8">
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%]   hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%]">
                Complicated and Manual Record Keeping Methods
              </p>
            </div>
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%]   hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%] ">
                Inefficient Asset Traceability
              </p>
            </div>
            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[33%]   hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
              <img src={insurance} alt="" className="w-20" />
              <p className="text-white pt-4 w-[60%]">
                Error-prone and Delayed Business Operations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-2xl md:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          Why Do Supply Chain Networks Run Better on Antier’s Blockchain-powered
          Supply Chain Solutions?
        </p>
        <p className="hidden md:block text-sm md:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          Being a trusted Blockchain supply chain development company, Antier
          offers Blockchain supply chain development <br />
          services to help supply chain leaders optimize their business
          operations and reduce inefficiency in data <br /> management with
          intuitive workflows.
        </p>

        <div className="flex flex-row justify-between space-x-6 mt-12">
          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] hover:w-[30%] p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 text-center h-16 ">
              Better Visibility and Transparency
            </p>
            <p className="text-[12px] text-center text-white text-opacity-80 pt-2 h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] hover:w-[30%] p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 text-center h-16">
              Streamlined Onboarding
            </p>
            <p className="text-[12px] text-center text-white text-opacity-80 pt-2 h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] hover:w-[30%] p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 text-center h-16">
              Reduced Product Counterfeiting
            </p>
            <p className="text-[12px] text-center text-white text-opacity-80 pt-2 h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] hover:w-[30%] p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 text-center h-16">
              Secured Supply Chain Operations
            </p>
            <p className="text-[12px] text-center text-white text-opacity-80 pt-2 h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>

          <div className="border-[1px] border-white hover:bg-greish-gradient border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] hover:w-[30%] p-4 transition-all duration-300 ease-in-out">
            <img src={insurance} alt="" className="w-20" />
            <p className="text-white pt-4 text-center h-16">
              Seamless Team Collaboration
            </p>
            <p className="text-[12px] text-center text-white text-opacity-80 pt-2 h-32">
              Our experts use smart contracts to develop Blockchain supply chain
              solutions that give permissioned participants real-time visibility
              across all supply chain operations and the ability to act earlier
              in case of any exception.
            </p>
          </div>
        </div>
      </div>

      {/* Faetures offered by Supply Chain Management */}
      <div className="mb-24 mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
          Features Offered by our Blockchain <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Supply Chain Solutions
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[15px] text-white text-center text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Our Blockchain Supply Chain Solutions are brimmed with user-friendly
          and advanced features to help businesses
          <br />
          manage their supply chain operations without any hassle.
        </p>
        <div className="flex flex-row justify-between space-x-6 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] group relative  hover:scale-105 transition-transform duration-500 ease-in-out">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Reporting Dashboard
            </p>
            <p
              className="text-white text-opacity-70 pt-4 text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-8 left-0 right-0 text-center p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>

          <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] group relative  hover:scale-105 transition-transform duration-500 ease-in-out">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Reporting Dashboard
            </p>
            <p
              className="text-white text-opacity-70 pt-4 text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-8 left-0 right-0 text-center p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>

           <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] group relative  hover:scale-105 transition-transform duration-500 ease-in-out">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Reporting Dashboard
            </p>
            <p
              className="text-white text-opacity-70 pt-4 text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-8 left-0 right-0 text-center p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>

            <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] group relative  hover:scale-105 transition-transform duration-500 ease-in-out">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Reporting Dashboard
            </p>
            <p
              className="text-white text-opacity-70 pt-4 text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-8 left-0 right-0 text-center p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>

           <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center w-[20%] group relative  hover:scale-105 transition-transform duration-500 ease-in-out">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Reporting Dashboard
            </p>
            <p
              className="text-white text-opacity-70 pt-4 text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-8 left-0 right-0 text-center p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* FAQ SECTION */}
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default SupplyChain;
