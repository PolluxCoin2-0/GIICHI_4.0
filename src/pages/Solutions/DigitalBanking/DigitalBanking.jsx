/* eslint-disable react/no-unescaped-entities */
import Framework from "../../../components/CommonComponent/Framework";
import { DigitalBankingFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { DigitalBankingFaq } from "../../../components/data/faqsData";
import Offerings from "../../../components/CommonComponent/Offerings";
import digitalBankingBannerImg from "../../../assets/digitalBankingBanner.png";
import digitalBankingFeatureImg from "../../../assets/digitalBankingFeature.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const DigitalBanking = () => {
  return (
    <div className="pt-6 md:pt-12 mb-32">

      {/* Crypto Digital Banking Development */}
      <BannerContent
        img={digitalBankingBannerImg}
        title1="Crypto Friendly "
        title2="Digital Banking Solution"
        desc="Step into the future of banking with our scalable, feature-rich white-label crypto-friendly banking solutions designed for seamless digital finance."
      />
      
      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={digitalBankingFeatureImg} alt="" className=""/>
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Crypto Banking Solutions: Simplifying Financial Services
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-full md:w-[90%]"  style={{ lineHeight: "1.7" }}>
          As cryptocurrencies and contactless payments gain momentum, the demand for crypto-friendly banking is rising. Whether you're a bank, financial institution, startup, or established business, our comprehensive crypto banking solutions empower you to launch and scale seamlessly. <br/> <br/>
          At Giichi, we offer a ready-to-use digital banking platform with essential financial services, including bank accounts, credit/debit cards, trading, and seamless payment options—ensuring smooth operations and an effortless onboarding experience for your users.
          </p>
        </div>
      </div>

      {/* Digital Banking offerings */}
      <Offerings data=" Reach Giichi and discuss your requirements with our Digital Banking experts TODAY!"/>
   
     {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="">
        <Framework
          data={DigitalBankingFramework}
          heading1="Our Crypto Digital Banking"
          heading2="Solution Services"
          desc="A one-stop platform for all your digital banking needs, powered by cutting-edge blockchain technology for seamless and secure financial transactions."
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={DigitalBankingFaq} />
      </div>
    </div>
  );
};

export default DigitalBanking;
