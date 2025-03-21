/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import Forecast from "../../../components/CommonComponent/Forecast";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import whatsAppImg from "../../../assets/whatsapp.png";
import { BlockchainDepinFaq } from "../../../components/data/faqsData";
import { BlockchainDepinService } from "../../../components/data/ServicesData";
import { BlockchainDepinForecast } from "../../../components/data/forecastData";
import { BlockchainDepinFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import { DepinUseCaseData } from "../../../components/data/ServicesData";

const BlockchainDepin = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainDepinImg}
        title1="DePIN Development"
        title2="Company"
        desc="Building a decentralized infrastructure network is no longer a
            challenge. Giichi enables businesses to transform their physical
            infrastructure into decentralized networks that enhance efficiency,
            security, and transparency."
      />

      {/* Forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast data={BlockchainDepinForecast} />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Depin Framework */}
      <Framework
        data={BlockchainDepinFramework}
        heading1="GiiCHi Advanced DePIN"
        heading2="Development Services"
        desc="As a leading DePIN development company, Giichi offers a comprehensive range of services to help businesses harness the power of decentralized infrastructure and optimize operational efficiency."
      />

      {/* Blockchain frameworks */}
      <Framework
        data={DepinUseCaseData}
        heading1="DePIN Use Cases: Transforming Industries with"
        heading2=" Decentralized Infrastructure"
        desc=" Giichi delivers cutting-edge DePIN solutions tailored to various industries, helping businesses enhance efficiency, security, and transparency through decentralized networks."
      />

      {/* Services */}
      <Services
        data={BlockchainDepinService}
        heading1="Key Components Powering"
        heading2="DePIN’s Ecosystem"
        desc="For businesses looking to unlock the full potential of decentralized infrastructure, understanding the fundamental components of DePIN (Decentralized Physical Infrastructure Networks) is crucial."
      />

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Hire Us" />
      </div>

      {/* FAQ Section */}
      <div>
        {" "}
        <Faq data={BlockchainDepinFaq} />{" "}
      </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={whatsAppImg} alt="WhatsApp-icon" className="" />
      </a>
    </div>
  );
};

export default BlockchainDepin;
