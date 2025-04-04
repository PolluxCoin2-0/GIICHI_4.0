import Services from "../../../components/CommonComponent/Services";
import { WhiteLabelNftService } from "../../../components/data/ServicesData";
import Framework from "../../../components/CommonComponent/Framework";
import { WhiteLabelNftFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { WhiteLabelNftMarketplaceFaq } from "../../../components/data/faqsData";
import whiteLabelNftDevFeatureImg from "../../../assets/whiteLabelNftDevFeature.png";
import whiteLabelNftDevFeature2Img from "../../../assets/wlNftFeature2.png";
import Offerings from "../../../components/CommonComponent/Offerings";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const WhiteLabelNftDev = () => {
  return (
    <div>
      {/* NFT Development */}
      <div className="flex flex-col md:flex-row justify-between items-start bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-12 md:py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-full md:w-[60%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold pt-4 tracking-wide">
            White Label NFT Marketplace{" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold pt-0 md:pt-6 tracking-wide" style={{ lineHeight: '1.5' }}>
            Development Company
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 md:pt-10 leading-7" style={{ lineHeight: '1.8' }}>
            We are dedicated to delivering cutting-edge, fully-secure white
            label NFT marketplace development services. Our solutions are backed
            by industry-leading protocols, secure storage, multi-signature
            wallets, and comprehensive smart contract audits. With a strong
            focus on security, we ensure the integrity and confidentiality of
            your digital assets.
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mt-4 md:mt-8">
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

        <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0"><img src={whiteLabelNftDevFeatureImg} alt="" className="w-[80%]"/></div>
      </div>

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={whiteLabelNftDevFeature2Img} alt="" className="w-[80%]" />
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            White Label NFT Marketplace Services to Elevate Your Digital
            Presence
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider"
            style={{ lineHeight: "1.7" }}
          >
            With our team of expert blockchain developers, we specialize in
            building and launching white label NFT marketplaces at lightning
            speed. We ensure high uptime, rapid transaction processing, and a
            seamless user experience. Designed for scalability, our platform
            architecture allows for easy expansion to accommodate future growth
            without sacrificing performance. <br /> <br />
            Our comprehensive white label NFT marketplace solutions provide
            secure features for minting, listing, transacting, and trading NFT
            collections, offering a unique and tailored experience. Led by our
            certified, skilled NFT developers, we deliver top-notch white-label
            NFT marketplaces in record time.
          </p>
        </div>
      </div>

      {/*  white label NFT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our white label NFT experts TODAY!"/>
   
      {/* IDO Services */}
      <Services
        data={WhiteLabelNftService}
        heading1="Features of White Label "
        heading2="NFT Marketplace"
        desc="Explore the compelling features that will help elevate your business to new heights."
      />

      {/* Top Benefits of blockchain development company */}
      <Framework
        data={WhiteLabelNftFramework}
        heading1="Our White Label NFT "
        heading2="Marketplace Services"
        desc="We go beyond the expectations of today’s customers, providing a range of cutting-edge white label NFT marketplace platform services perfect for startups, SMBs, and Fortune 500 companies."
      />

      {/* FAQ SECTION */}
      <div className="mt-24 mb-20">
        <Faq data={WhiteLabelNftMarketplaceFaq} />
      </div>
    </div>
  );
};

export default WhiteLabelNftDev;
