import { Link } from "react-router-dom";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import Framework from "../../../components/CommonComponent/Framework";
import { WhiteLabelBankingFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { WhiteLabelBankingFaq } from "../../../components/data/faqsData";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";

const steps = [
  { id: "01", title: "Understanding Your Needs" },
  { id: "02", title: "Design and Planning" },
  { id: "03", title: "Customization" },
  { id: "04", title: "Development" },
  { id: "05", title: "Deployment" },
];

const WhiteLabelBanking = () => {
  return (
    <div className="pt-6 md:pt-0 mb-20">

      {/* Crypto Token Development */}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-4 tracking-wide">
          White Label {" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-6 tracking-wide">
          Crypto Banking Services
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
          Expand and innovate your financial business worldwide with Antier’s fully customizable white-label crypto banking solutions.
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
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          White Label Crypto Bank Development Company: Delivering Cutting-Edge Solutions
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-[90%]">
          The financial sector is undergoing a major transformation, driven by blockchain technology and cryptocurrencies. As crypto-friendly banking services gain traction, we recognize the challenges of building a crypto bank from the ground up—requiring significant time, money, and resources. <br/> <br/>
          With our pre-engineered white-label crypto banking software, you can seamlessly launch your crypto bank in no time, eliminating the complexities of development. <br/> <br/>
          
          </p>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our White Label Crypto experts TODAY!
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

    {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="">
        <Framework
          data={WhiteLabelBankingFramework}
          heading1="Discover the Versatility of Our"
          heading2=" White-Label Crypto Banking Solutions"
          desc="As a pioneer in digital innovation, Antier delivers white-label crypto banking solutions equipped with advanced banking modules to streamline your operations—all within a comprehensive, all-in-one package."
        />
      </div>

       {/* Blockchain Supply Chain Network */}
       <ProductDevPhases
        data={steps}
        heading="White Label Banking Development Process"
        desc="At Giichi, we provide a structured, innovative approach to white-label Neo Bank development, enabling your institution to deliver strong financial services under your unique brand."
      />

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={WhiteLabelBankingFaq} />
      </div>
    </div>
  );
};

export default WhiteLabelBanking;
