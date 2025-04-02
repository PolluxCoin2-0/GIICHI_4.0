import BannerContent from "../../../components/CommonComponent/BannerContent";
import centralizedExchangeBannerImg from "../../../assets/centralizeExchangeBanner.png";
import centralizedExchangeFeatureimg from "../../../assets/centralizeExchangeFeature.png";
import Framework from "../../../components/CommonComponent/Framework";
import { CentralizedExchangeFramework } from "../../../components/data/frameworkData";
import Services from "../../../components/CommonComponent/Services";
import { CentralizedDevelopmentService } from "../../../components/data/ServicesData";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { centralizedLifeCycleData } from "../../../components/data/lifecycleData";
import Faq from "../../../components/resuableComponent/Faq";
import { CentralizedExchangeFaq } from "../../../components/data/faqsData";

const Centralized = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={centralizedExchangeBannerImg}
        title1="Centralized Exchange"
        title2=" Development Services"
        desc="Leverage the advantages of high-quality, institutional-grade centralized exchange development to create a fully functional and feature-packed platform."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={centralizedExchangeFeatureimg}
            alt="centralized Exchanged development"
            className=""
          />
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Centralized Exchange Development
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Elevate your business by creating a secure, scalable, and highly
            functional centralized cryptocurrency exchange with our expert team.
            Our centralized crypto exchange platforms offer instant liquidity,
            robust APIs, and enhanced security measures to ensure a seamless
            user experience. <br /> <br />
            Our skilled and experienced developers specialize in building
            cutting-edge crypto exchange software, delivering feature-rich,
            uninterrupted exchanges. We utilize the latest tools and
            technologies to build resilient and market-ready crypto exchanges.
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
          data={CentralizedExchangeFramework}
          heading1="Centralized Crypto Exchange"
          heading2="Development Services"
          desc="Explore the comprehensive centralized crypto exchange development services we offer."
        />
      </div>

      {/* Blockchain Development Services */}
      <Services
        data={CentralizedDevelopmentService}
        heading1="Features of Our Centralized "
        heading2="Crypto Exchange Development"
        desc="Discover the key features of the centralized cryptocurrency exchanges we develop:"
      />

      {/* Lifecycle data */}
      <div>
        <LifeCycle
          heading1="Our Crypto Derivative Exchange"
          heading2="Development Process"
          desc="We follow a step-by-step process for crypto derivatives exchange development to provide the best services to every client."
          steps={centralizedLifeCycleData}
        />
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={CentralizedExchangeFaq} />
      </div>
    </div>
  );
};

export default Centralized;
