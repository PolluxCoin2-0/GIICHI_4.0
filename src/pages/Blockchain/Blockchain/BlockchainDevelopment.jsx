/* eslint-disable react/prop-types */
import BlockchainImg from "../../../assets/blockchainImg.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Forecast from "../../../components/CommonComponent/Forecast";
import BlockchainCycle from "../../../components/CommonComponent/BlockchainCycle";
import { BkDevIndustriesData } from "../../../components/data/industriesData";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import WhatsAppImg from "../../../assets/whatsapp.png";
import { BlockchainDevelopmentFaq } from "../../../components/data/faqsData";
import { BlockchainDevelopmentService } from "../../../components/data/ServicesData";
import { BlockchainDevelopmentCycle } from "../../../components/data/developmentCycleData";
import { BlockchainDevelopmentForecast } from "../../../components/data/forecastData";
import { BlockchainDevelopmentFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import Framework from "../../../components/CommonComponent/Framework";
import Services from "../../../components/CommonComponent/Services";
import Industries from "../../../components/CommonComponent/Industries";
import TechStack from "../../../components/CommonComponent/TechStack";
import { BlockchainDevtechCategories } from "../../../components/data/techStackData";
const BlockchainDevelopment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="Blockchain Development"
        title2="Company"
        desc="With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services."
      />

      {/* Bloackchain forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast data={BlockchainDevelopmentForecast} />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Development Services */}
      <Services
        data={BlockchainDevelopmentService}
        heading1="Our Blockchain"
        heading2="Development Services"
        desc=" Giichi IT Solutions offers a comprehensive suite of blockchain development services to help businesses unlock the full potential of blockchain technology and gain a competitive edge in the evolving Web3 landscape."
      />

      {/* Industries  */}
      <Industries
        data={BkDevIndustriesData}
        heading1="Industries"
        heading2="We Serve"
        desc="As a leading custom blockchain development company, we leverage different blockchain networks to provide you with the best solutions aligned with your needs."
      />

      {/* Blockchain Development frameworks */}
      <Framework
        data={BlockchainDevelopmentFramework}
        heading1="Blockchain Frameworks We Utilize"
        heading2="L2/L3 Development"
        desc=" At Giichi IT Solutions, our team of expert blockchain developers specializes in Layer 2 and Layer 3 blockchain solutions, leveraging advanced frameworks to enhance scalability, efficiency, and interoperability."
      />

      {/* Blockchain Process */}
      <div>
        <BlockchainCycle
          title=" Our Blockchain App Development Process"
          data={BlockchainDevelopmentCycle}
        />
      </div>

      {/* Technology Stack */}
      <div>
        <TechStack data={ BlockchainDevtechCategories }/>
      </div>

      {/* Schedule a free demo */}
      <div className="mt-12">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={BlockchainDevelopmentFaq} />
      </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={WhatsAppImg} alt="WhatsApp-icon" className="" />
      </a>
    </div>
  );
};

export default BlockchainDevelopment;
