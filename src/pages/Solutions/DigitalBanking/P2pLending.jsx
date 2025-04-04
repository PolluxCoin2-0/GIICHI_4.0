import Faq from "../../../components/resuableComponent/Faq";
import { P2pLendingFaq } from "../../../components/data/faqsData";
import Framework from "../../../components/CommonComponent/Framework";
import { P2pLendingFramework } from "../../../components/data/frameworkData";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import p2pLendingBannerImg from "../../../assets/p2pLendingBanner.png";
import p2pLendingFeatureImg from "../../../assets/p2pLendingFeature.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const P2pLending = () => {
  return (
    <div className="pt-6 md:pt-12 mb-32">
   {/*  Future-Proof P2P Lending Development */}
      <BannerContent
        img={p2pLendingBannerImg}
        title1="Future-Proof P2P Lending"
        title2="Development Solution"
        desc="Accelerate your financial objectives with our robust P2P lending software. Experience secure and seamless connections between lenders and borrowers, crafted for optimal reliability and efficiency."
      />
  
{/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-24 md:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={p2pLendingFeatureImg} alt="" className=""/>
        </div>
        <div className="w-full lg:w-[50%] mt-6 lg:mt-0">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-[35px] font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Enhance Your Lending Experience with Leading P2P Lending Platform Software
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-full md:w-[90%]"  style={{ lineHeight: "1.7" }}>
          Giichi offers an unparalleled peer-to-peer lending software solution for businesses aiming to revolutionize their lending operations. Built on cutting-edge automation and AI-powered algorithms, our platform facilitates seamless connections between borrowers and lenders, boosting operational efficiency and accelerating loan processing. <br/> <br/>
          With a strong focus on security and compliance, we implement sophisticated, multilayered protocols to safeguard sensitive user data. Our P2P lending platform is designed to adapt to the ever-evolving regulatory environment, ensuring confidence and trust among all stakeholders.
         </p>
           {/* button to connect on whatsapp */}
           <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mt-6">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-sm md:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <ButtonFreeDemo/>
          </div>
        </div>
      </div>
       
        {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-12 lg:mt-32">
        <Framework
          data={P2pLendingFramework}
          heading1=""
          heading2="Features of P2P Lending Platform"
          desc="Enhance your confidence in P2P lending with our advanced security measures. Our platform is equipped with state-of-the-art features designed to protect every transaction and user interaction."
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={P2pLendingFaq} />
      </div>
    </div>
  );
};

export default P2pLending;
