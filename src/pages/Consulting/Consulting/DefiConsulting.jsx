import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import { clientData } from "../../../components/data/clientData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Forecast from "../../../components/CommonComponent/Forecast";
import { DefiConsultingForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/CommonComponent/Framework";
import { DefiConsultingFramework } from "../../../components/data/frameworkData";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import { Link } from "react-router-dom";

const DefiConsulting = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainImg}
        title1="Defi Consulting "
        title2="Services"
        desc="We simplify your entry into the DeFi market, whether for launching a decentralized exchange or starting staking activities."
      />

      {/* Bloackchain forecast */}
      <div className="mt-20">
        <Forecast data={DefiConsultingForecast} />
      </div>

      {/* Defi Consulting Services */}
      <Framework
        data={DefiConsultingFramework}
        heading1="Benefits of DeFi"
        heading2="Consulting Services"
        desc=""
      />

      {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our DeFi Consultant
            experts TODAY!
          </p>
          <div className="flex flex-row items-center space-x-6">
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
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* why choose giichi for blockchain consulting */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pb-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl 3xl:text-2xl font-bold text-white">
              Why choose Giichi for DeFi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Consulting Services?
              </span>
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
              By partnering with Giichi, you gain access to a team of
              experienced technical experts providing comprehensive consulting
              services.
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

export default DefiConsulting;
