import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Framework from "../../../components/CommonComponent/Framework";
import { ArbitrageBotFramework } from "../../../components/data/frameworkData";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { derivativesLifeCycleData } from "../../../components/data/lifecycleData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { clientData } from "../../../components/data/clientData";

const botTypesLeft = [
  "Triangular Arbitrage Bots",
  "Spatial Arbitrage Bots",
  "Inter-Exchange Arbitrage Bots",
  "Intra-Exchange Arbitrage Bots",
];

const botTypesRight = [
  "Decentralized Arbitrage Bots",
  "MEV Flash Loan Arbitrage Bots",
  "Sandwich Arbitrage Bots",
  "Crypto Arbitrage AI Bots",
];

const ArbitrageBots = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Crypto Arbitrage"
        title2="Bot Development"
        desc="With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Crypto Arbitrage Bot Development to Maximize Your Crypto Trading
            Profit
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>

          {/* button to connect on whatsapp */}
          <div className="mt-12">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Talk to our Experts
            </a>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={ArbitrageBotFramework}
          heading1="Our Crypto Arbitrage Trading"
          heading2="Bot Development Services"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* Types of cryptocurrency exchange platform */}

      {/* Types of crypto trading bots */}
      <div className="flex flex-col items-center text-center p-8 mt-12">
        <h2 className="text-2xl font-bold text-white">
          Types of Crypto Arbitrage Bots We Build:
        </h2>
        <p className="text-white text-opacity-70 mt-2 max-w-2xl">
          Our team of crypto bot developers is capable of building
          high-frequency trading bots for a wide range of trading strategies.
        </p>
        <div className="flex flex-col md:flex-row items-center space-x-24 mt-6 w-full max-w-7xl">
          <div className="w-1/3 flex justify-center">
            {/* <img src={bgimg} alt="" className="w-full" /> */}
          </div>
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6">
            <ul className="list-disc space-y-6">
              {botTypesLeft.map((bot, index) => (
                <li key={index} className="text-white flex items-center">
                  <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                  {bot}
                </li>
              ))}
            </ul>
            <ul className="list-none space-y-6">
              {botTypesRight.map((bot, index) => (
                <li key={index} className="text-white flex items-center">
                  <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                  {bot}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lifecycle data */}
      <div>
        <LifeCycle
          heading1="Our Crypto Derivative Exchange"
          heading2="Development Process"
          desc="We follow a step-by-step process for crypto derivatives exchange development to provide the best services to every client."
          steps={derivativesLifeCycleData}
        />
      </div>

      {/* why choose asset token for business */}
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12">
        <p className="text-white text-center text-xl md:text-4xl xl:text-5xl font-bold pt-4 tracking-wide ">
          Arbitrage Bot <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Development Services
          </span>
        </p>
        {/* Reviews Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl 3xl:text-2xl font-bold text-white">
              Why choose Giichi for Asset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Tokenization Services?
              </span>
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
              Giichi offers secure, scalable, and regulatory-compliant asset
              tokenization, enabling seamless digital asset management and
              liquidity.
            </p>
          </div>
          {/* Mapping Client Data */}
          {clientData.map((client, index) => (
            <div
              key={index}
              className="p-4 md:p-6 text-gray-900 rounded-2xl flex flex-col space-y-6 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(100,255,100,0.5),_0_0_15px_rgba(100,255,100,0.3)]"
            >
              <div className="flex flex-row space-x-4 items-center">
                <p>
                  <IoMdCheckmarkCircleOutline
                    size={32}
                    className="text-3xl text-[#64A03C] rounded-full"
                  />
                </p>
                <p className="font-semibold text-white poppins-thin text-lg 2xl:text-xl">
                  {client.title}
                </p>
              </div>

              <p className="text-sm font-normal poppins-thin text-white opacity-80 w-[80%] ml-2">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArbitrageBots;
