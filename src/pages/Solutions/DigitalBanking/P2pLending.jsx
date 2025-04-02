import { Link } from "react-router-dom";
import Faq from "../../../components/resuableComponent/Faq";
import { P2pLendingFaq } from "../../../components/data/faqsData";
import Framework from "../../../components/CommonComponent/Framework";
import { P2pLendingFramework } from "../../../components/data/frameworkData";

const P2pLending = () => {
  return (
    <div className="pt-6 md:pt-0 mb-20">

      {/* Crypto Token Development */}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold pt-4 tracking-wide">
            Future-Proof P2P Lending {" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl  2xl:text-5xl font-semibold pt-6 tracking-wide">
          Development Company
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
          Accelerate your financial objectives with our robust P2P lending software. Experience secure and seamless connections between lenders and borrowers, crafted for optimal reliability and efficiency.
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-6">
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

        <div className="w-[50%]"></div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-20 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-[35px] font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Enhance Your Lending Experience with Leading P2P Lending Platform Software
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-[90%]"  style={{ lineHeight: "1.7" }}>
          Giichi offers an unparalleled peer-to-peer lending software solution for businesses aiming to revolutionize their lending operations. Built on cutting-edge automation and AI-powered algorithms, our platform facilitates seamless connections between borrowers and lenders, boosting operational efficiency and accelerating loan processing. <br/> <br/>
          With a strong focus on security and compliance, we implement sophisticated, multilayered protocols to safeguard sensitive user data. Our P2P lending platform is designed to adapt to the ever-evolving regulatory environment, ensuring confidence and trust among all stakeholders.
         </p>
        </div>
      </div>
       
        {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-12">
        <Framework
          data={P2pLendingFramework}
          heading1="Features of P2P Lending Platform"
          heading2=""
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
