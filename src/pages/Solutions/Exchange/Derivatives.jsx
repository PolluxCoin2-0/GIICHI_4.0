import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Framework from "../../../components/CommonComponent/Framework";
import { DerivativesExchangeFramework } from "../../../components/data/frameworkData";
import Services from "../../../components/CommonComponent/Services";
import { DerivativeDevelopmentService } from "../../../components/data/ServicesData";
import { FaExchangeAlt } from "react-icons/fa";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { derivativesLifeCycleData } from "../../../components/data/lifecycleData";

const platforms = [
  {
    name: "Futures Trading",
    icon: <FaExchangeAlt />,
    description:
      "The buyer or seller decides upon a fixed price for the crypto asset at a particular date in the future. The contracts are standardized and have an expiration date.",
    color: "bg-black",
  },
  {
    name: "Forwards Trading",
    icon: <FaExchangeAlt />,
    description:
      "The buyer or seller decides upon a fixed price for the crypto asset at a particular date in the future. The contracts are standardized and have an expiration date.",
    color: "bg-black",
  },
  {
    name: "Options Trading",
    icon: <FaExchangeAlt />,
    description:
      "The buyer or seller decides upon a fixed price for the crypto asset at a particular date in the future. The contracts are standardized and have an expiration date.",
    color: "bg-black",
  },
  {
    name: "Perpetual Trading",
    icon: <FaExchangeAlt />,
    description:
      "The buyer or seller decides upon a fixed price for the crypto asset at a particular date in the future. The contracts are standardized and have an expiration date.",
    color: "bg-black",
  },
];

const Derivatives = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Crypto Derivatives"
        title2=" Exchange Development"
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
            Crypto Derivatives Exchange - New Opportunities for Investment
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
          <div className="mt-4">
            <p className="text-white text-[17px]">
              7+ Years of Expertise in the Blockchain Domain
            </p>
            <p className="text-white text-[17px] mt-4">
              Rigorous Testing and Responsible Handling of Errors
            </p>
            <p className="text-white text-[17px] mt-4">
              Technology-Agnostic, First-Time Right Deliverables
            </p>
            <p className="text-white text-[17px]  mt-4">
              Complete Transparency During Development
            </p>
          </div>
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
              Talk to our Experts
            </a>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={DerivativesExchangeFramework}
          heading1="Crypto Derivatives Exchange"
          heading2="Development Services"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* Blockchain Development Services */}
      <Services
        data={DerivativeDevelopmentService}
        heading1="Features of Crypto Derivative "
        heading2="Exchange Development"
        desc=""
      />

      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20 ">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Types of Crypto Derivatives Trading{" "}
          </span>
        </p>
        <p className="text-white text-[16px] text-opacity-70 text-center mt-4">
          Take a look at the types of crypto derivatives trading supported by
          our crypto derivatives exchanges.
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-4 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-start gap-4 bg-[#062406] bg-opacity-30 p-6">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-semibold">{platform.name}</h2>
                  <p className="text-sm opacity-80">{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 mb-6 md:mb-12">
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Leverage White Label Crypto Exchange To Cut-Short Process & Save
            Thousands of Dollars
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed odit
            deleniti dolorem aut voluptas quam libero eaque magni quia saepe.
          </p>

          <div className="flex flex-row items-center space-x-12 mt-8">
            <div>
              <p className="text-white text-sm ">
                7+ Years of Expertise in the Blockchain Domain
              </p>
              <p className="text-white text-sm mt-4">
                Rigorous Testing and Responsible Handling of Errors
              </p>
              <p className="text-white text-sm mt-4">
                Technology-Agnostic, First-Time Right Deliverables
              </p>
              <p className="text-white text-sm  mt-4">
                Complete Transparency During Development
              </p>
            </div>
            <div>
              <p className="text-white text-sm">
                Modern Coding Techniques & Agile Methodologies
              </p>
              <p className="text-white text-sm  mt-4">
                In-House Design and Development Expertise
              </p>
              <p className="text-white text-sm  mt-4">
                Unparalleled Post-Development Support Services
              </p>
              <p className="text-white text-sm  mt-4">
                Mission-driven, Quality, and Bespoke Services
              </p>
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

      {/* Lifecycle data */}
      <div>
        <LifeCycle
          heading1="Our Crypto Derivative Exchange"
          heading2="Development Process"
          desc="We follow a step-by-step process for crypto derivatives exchange development to provide the best services to every client."
          steps={derivativesLifeCycleData}
        />
      </div>

     </div>
  );
};

export default Derivatives;
