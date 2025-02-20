import blockchainIdenityImg from "../../../assets/bg-identity.png";
import Forecast from "../../../components/Blockchain/Forecast";
import LetsTalk from "../../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import Services from "../../../components/Blockchain/Services";
import WhatsAppImg from "../../../assets/whatsapp.png";
import { BlockchainIdentityFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/Faq";
import { BlockchainIdentityService } from "../../../components/data/ServicesData";
import BlockchainCycle from "../../../components/Blockchain/BlockchainCycle";
import { BlockchainIdentityCycle } from "../../../components/data/developmentCycleData";
import { BlockchainIdentityForecast } from "../../../components/data/forecastData";

const BlockchainIdentity = () => {
  return (
    <div className="pt-6 md:pt-12 mb-12">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={blockchainIdenityImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full hidden md:flex flex-col items-start justify-center">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain Identity{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Management{" "}
            </span>
          </p>
          <p className="pt-4 md:text-[15px] lg:text-[17px] font-semibold leading-snug">
            Leverage blockchain technology to revolutionize digital identity
            management <br />
            with a secure, tamper-proof, and decentralized ecosystem. By
            eliminating <br />
            reliance on centralized authorities, blockchain enhances data
            privacy, <br />
            security, and user control over personal information.
          </p>

          {/* Button */}
          <CalendlyButton />
        </div>

        {/* for mobile */}
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Identity Management{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Leverage blockchain technology to revolutionize digital identity
            management with a secure, tamper-proof, and decentralized ecosystem.
            By eliminating reliance on centralized authorities, blockchain
            enhances data privacy, security, and user control over personal
            information.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast
        data={BlockchainIdentityForecast}
        />
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Connect On Whatsapp" />
      </div>

      {/* Services */}
      <div className="mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Unlocking the Power of Blockchain for
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Identity Management with Giichi
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-xs lg:text-sm xl:text-lg font-normal pt-2">
          At Giichi, we are revolutionizing identity management by leveraging
          blockchain-based decentralized identity solution. <br />
          Our approach eliminates traditional inefficiencies, ensuring privacy,
          security, and seamless accessibility while putting <br />
          users in control of their digital identities.
        </p>
        <Services data={BlockchainIdentityService}/>
      </div>

      {/* Blockchain Cycle Slider */}
      <div>
        <BlockchainCycle title="Use Cases of Blockchain for Identity Management" data={BlockchainIdentityCycle} />
      </div>

      {/* FAQ */}
      <div>
        <Faq data={BlockchainIdentityFaq} />
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
