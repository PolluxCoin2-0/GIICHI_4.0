import BannerContent from "../../../components/CommonComponent/BannerContent";
import Framework from "../../../components/CommonComponent/Framework";
import { TokenCoinFramework } from "../../../components/data/frameworkData";
import { tokenDevelopmentData } from "../../../components/data/clientData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Offerings from "../../../components/CommonComponent/Offerings";
import tokenCoinDevelopmentBannerImg from "../../../assets/tokenCoinDevBanner.png";
import tokenCoinDevelopmentFeatureImg from "../../../assets/tokenCoinFeature.png";

const Token = () => {
  return (
    <div  className="pt-6 md:pt-12 mb-20">
      {/* Crypto Token Development */}
      <BannerContent
        img={tokenCoinDevelopmentBannerImg}
        title1="Leading Crypto Token"
        title2="Development Company"
        desc="Transform your digital strategy with our premium crypto token development services. As a CMMI Level 5-certified firm, we provide cutting-edge solutions that adhere to the highest industry standards."
      />
   
      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
         <img src={tokenCoinDevelopmentFeatureImg} alt="" className=""/>
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Next-Gen Crypto Token Development at Your Fingertips
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto"  style={{ lineHeight: "1.7" }}>
          Explore our comprehensive crypto token development services, designed to deliver advanced and feature-rich tokens tailored to your needs. Our expertise ensures seamless functionality, including:
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-12 mt-8">
            <div>
              <p className="text-white text-sm "><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Multi-Chain Minting</p>
              <p className="text-white text-sm mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Effortless Token Listing</p>
              <p className="text-white text-sm mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span> Universal Wallet Compatibility</p>
              <p className="text-white text-sm  mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Secure Token Minting</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-white text-sm "><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Strategic Token Pausing</p>
              <p className="text-white text-sm mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Efficient Token Burning </p>
              <p className="text-white text-sm mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Multiple Currency Support</p>
              <p className="text-white text-sm  mt-4"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Robust Multi-Factor Security</p>
            </div>
          </div>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Token Development experts TODAY!"/>
    
     {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-20">
        <Framework
          data={TokenCoinFramework}
          heading1="Explore Our Comprehensive "
          heading2="Token Development Services"
          desc="Unlock limitless opportunities with our cryptocurrency development solutions, designed to support various blockchain ecosystems and asset types."
        />
      </div>

           {/* why choose giichi for blockchain consulting */}
            <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pb-20 bg-[#283430] bg-opacity-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
                {/* Custom First Card */}
                <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
                  <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl 3xl:text-2xl font-bold text-white">
                  Mastering the Art of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                    Web3 Token Development
                    </span>
                  </h3>
                  <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
                  As a leading blockchain innovator, our token development company is dedicated to crafting cutting-edge Web3 tokens that drive the decentralized revolution.
                  </p>
                </div>
                {/* Mapping Client Data */}
                {tokenDevelopmentData.map((client, index) => (
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

export default Token;
