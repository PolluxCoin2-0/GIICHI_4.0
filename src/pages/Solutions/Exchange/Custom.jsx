import BannerContent from "../../../components/CommonComponent/BannerContent"
import BlockchainImg from "../../../assets/blockchainImg.png";
import Framework from "../../../components/CommonComponent/Framework";
import { CustomExchangeFramework } from "../../../components/data/frameworkData";
import { FaExchangeAlt, FaShoppingCart } from "react-icons/fa";
import { FaEthereum, FaWallet } from "react-icons/fa6";
import Process from "../../../components/CommonComponent/Process";
import { CryptoExchangeProcessSteps } from "../../../components/data/processData";

const platforms = [
  { name: "Crypto Exchanges", icon: <FaExchangeAlt />, description: "Trade cryptocurrencies easily.", color: "bg-black" },
  { name: "DeFi Platforms", icon: <FaEthereum />, description: "Decentralized finance solutions.", color: "bg-black" },
  { name: "Crypto Wallets", icon: <FaWallet />, description: "Securely store and manage assets.", color: "bg-black" },
  { name: "NFT Marketplaces", icon: <FaShoppingCart />, description: "Buy and sell digital collectibles.", color: "bg-black" },
  { name: "Crypto Exchanges", icon: <FaExchangeAlt />, description: "Trade cryptocurrencies easily.", color: "bg-black" },
  { name: "DeFi Platforms", icon: <FaEthereum />, description: "Decentralized finance solutions.", color: "bg-black" },
  { name: "Crypto Wallets", icon: <FaWallet />, description: "Securely store and manage assets.", color: "bg-black" },
  { name: "NFT Marketplaces", icon: <FaShoppingCart />, description: "Buy and sell digital collectibles.", color: "bg-black" }
];

export

const Custom = () => {
  return (
    <div>
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Cryptocurrency Exchange"
        title2="Development Company"
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
          Why Invest in Crypto Exchange Development?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
          {/* button to connect on whatsapp */}
          <div className="mt-8">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
          </div>
        </div>
      </div>
      
          {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
           Delivering the New Generation With Futuristic Crypto Exchange Development Services
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br/> <br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit deleniti dolorem aut voluptas quam libero eaque magni quia saepe.
          </p>

          <div className="flex flex-row items-center space-x-12 mt-8">
            <div>
              <p className="text-white text-sm ">7+ Years of Expertise in the Blockchain Domain</p>
              <p className="text-white text-sm mt-4">Rigorous Testing and Responsible Handling of Errors</p>
              <p className="text-white text-sm mt-4">Technology-Agnostic, First-Time Right Deliverables</p>
              <p className="text-white text-sm  mt-4">Complete Transparency During Development</p>
            </div>
            <div>
            <p className="text-white text-sm">Modern Coding Techniques & Agile Methodologies</p>
              <p className="text-white text-sm  mt-4">In-House Design and Development Expertise</p>
              <p className="text-white text-sm  mt-4">Unparalleled Post-Development Support Services</p>
              <p className="text-white text-sm  mt-4">Mission-driven, Quality, and Bespoke Services</p>
            </div>
          </div>
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
              Connect on Whatsapp
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <Framework
        data={CustomExchangeFramework}
        heading1="Our Top Cryptocurrency Exchange"
        heading2="Development Company"
        desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
      />

      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20 ">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">Types of Crypto Exchange Platform </p>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="cursor-pointer"
        >
          <div className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-4xl">{platform.icon}</div>
              <h2 className="text-xl font-bold">{platform.name}</h2>
              <p className="text-sm opacity-80">{platform.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

    {/* CRYPTO EXCHANGE DEVELOPMENT PROCESS */}
    <div>
        <Process
          heading1="Our Crypto Exchange"
          heading2="Development Process"
          desc="At Giichi IT Solutions, we follow a structured and efficient approach to developing secure and scalable smart contracts."
          processSteps={CryptoExchangeProcessSteps}
        />
      </div>
    </div>
  )
}

export default Custom
