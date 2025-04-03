import BannerContent from "../../../components/CommonComponent/BannerContent";
import Framework from "../../../components/CommonComponent/Framework";
import { ICOFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { ICOFaq } from "../../../components/data/faqsData";
import icoDevelopmentBannerImg from "../../../assets/icoDevBanner.png";
import icoDevelopmentFeatureImg from "../../../assets/icoDevFeature.png";

const ICO = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={icoDevelopmentBannerImg}
        title1="ICO Development"
        title2="Company"
        desc="End-to-end ICO development solutions designed to ensure a successful Initial Coin Offering launch, driving efficient fundraising efforts."
      />

      {/* ICO Development Journey*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={icoDevelopmentFeatureImg} alt="" className=""/>
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Leading ICO Development for Seamless Fundraising
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto"  style={{ lineHeight: "1.7" }}>
          In the crypto space, Initial Coin Offerings (ICO) serve as the equivalent of Initial Public Offerings (IPO) in traditional markets. Establishing a strong market presence is crucial for both startups and established businesses, requiring substantial capital investment, this is where ICO development services play a vital role. <br/><br/>
          Our team of experts guides you through the entire ICO development journey, from token creation and launch to strategic marketing, ensuring a smooth and successful fundraising process. Step into the world of ICOs with confidence and unlock new growth opportunities.
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
      <Framework
        data={ICOFramework}
        heading1="Our Comprehensive ICO "
        heading2="Development Services"
        desc="We provide a full suite of ICO development services designed to help businesses leverage blockchain technology for successful fundraising. Explore our key offerings:"
      />

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={ICOFaq} />
      </div>
    </div>
  );
};

export default ICO;
