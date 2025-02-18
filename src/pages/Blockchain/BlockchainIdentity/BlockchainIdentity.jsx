import blockchainIdenityImg from "../../../assets/bg-identity.png";
import Forecast from "../../../components/Blockchain/Forecast";
import identityImg from "../../../assets/BlockchainId1.png";
import identityDataImg from "../../../assets/BlockchainId2.png";
import LetsTalk from "../../../components/LetsTalk";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import IdentityServices from "../../../components/Blockchain/IdentityServices";
import BlockchainCycle1 from "../../../components/Blockchain/BlockchainCycle1";
import Faq1 from "../../../components/Faq1";
import WhatsAppImg from "../../../assets/whatsapp.png";

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
      <div className="mt-10">
        <Forecast
          img1={identityImg}
          img2={identityDataImg}
          title1="Harnessing Blockchain for Secure Digital Identity Solutions with Giichi"
          title2="Centralized vs. Decentralized: Transforming Digital Identity Management with Giichi"
          desc1="At Giichi, we leverage the power of blockchain to streamline digital identification processes, ensuring unparalleled security, privacy, and trust. Our solutions empower businesses to securely store, verify, and manage credentials such as vaccination records, academic certifications, professional licenses, and, eliminating fraud risks and unauthorized access."
          desc2="Traditional identity management systems rely on centralized authorities to store and verify user identities. However, these systems come with inherent risks, data breaches, identity theft, and lack of user control. Centralized identity models create single points of failure, making personal and enterprise data vulnerable to cyber threats."
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
        <IdentityServices />
      </div>

      {/* Blockchain Cycle Slider */}
      <div>
        <BlockchainCycle1 title="Use Cases of Blockchain for Identity Management" />
      </div>

      {/* FAQ */}
      <div>
        <Faq1 />
      </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        title="Chat with us on WhatsApp"
      >
        <img src={WhatsAppImg} alt="WhatsApp" className="" />
      </a>
    </div>
  );
};

export default BlockchainIdentity;
