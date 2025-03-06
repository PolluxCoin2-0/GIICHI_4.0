import blockchainIdenityImg from "../../../assets/bg-identity.png";
import Forecast from "../../../components/CommonComponent/Forecast";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import WhatsAppImg from "../../../assets/whatsapp.png";
import { BlockchainIdentityFaq } from "../../../components/data/faqsData";
import { BlockchainIdentityService } from "../../../components/data/ServicesData";
import BlockchainCycle from "../../../components/CommonComponent/BlockchainCycle";
import { BlockchainIdentityCycle } from "../../../components/data/developmentCycleData";
import { BlockchainIdentityForecast } from "../../../components/data/forecastData";
import Faq from "../../../components/resuableComponent/Faq";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const BlockchainIdentity = () => {
  return (
    <div className="pt-6 md:pt-12 mb-12">
      {/* Banner Image */}
      <BannerContent
        img={blockchainIdenityImg}
        title1="Blockchain Identity"
        title="Management"
        desc=" Leverage blockchain technology to revolutionize digital identity management with a secure, tamper-proof, and decentralized ecosystem. By eliminating reliance on centralized authorities, blockchain enhances data privacy, security, and user control over personal information."
      />

      {/* Forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast data={BlockchainIdentityForecast} />
      </div>

      {/* Services */}
      <Services
        data={BlockchainIdentityService}
        heading1="Unlocking the Power of Blockchain for"
        heading2="Identity Management with Giichi"
        desc=" At Giichi, we are revolutionizing identity management by leveraging blockchain-based decentralized identity solution. Our approach eliminates traditional inefficiencies, ensuring privacy, security, and seamless accessibility while putting users in control of their digital identities."
      />

      {/* Blockchain Cycle Slider */}
      <div>
        <BlockchainCycle
          title="Use Cases of Blockchain for Identity Management"
          data={BlockchainIdentityCycle}
        />
      </div>

      {/* FAQ */}
      <div>
        <Faq data={BlockchainIdentityFaq} />
      </div>

      <div>
        <LetsTalk buttonText="Connect On Whatsapp" />
      </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={WhatsAppImg} alt="WhatsApp" className="" />
      </a>
    </div>
  );
};

export default BlockchainIdentity;
