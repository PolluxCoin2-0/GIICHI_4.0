import blockchainIdenityImg from "../../../assets/bg-identity.png";
import Forecast from "../../../components/Blockchain/Forecast";
import identityImg from "../../../assets/identity.png";
import identityDataImg from "../../../assets/identityData.png";
import LetsTalk from "../../../components/LetsTalk";
import Review from "../../../components/Review";
import Faq from "../../../components/Faq";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import IdentityServices from "../../../components/Blockchain/IdentityServices";
import BlockchainCycle1 from "../../../components/Blockchain/BlockchainCycle1";

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
          Leverage blockchain technology to revolutionize digital identity management 
          with a secure, tamper-proof, and decentralized ecosystem. By eliminating 
          reliance on centralized authorities, blockchain enhances data privacy, 
          security, and user control over personal information.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Forecast */}
      <div>
        <Forecast
          img1={identityImg}
          img2={identityDataImg}
          title1="Harnessing Blockchain for Secure Digital Identity Solutions with Giichi"
          title2="Centralized vs. Decentralized: Transforming Digital Identity Management with Giichi"
          desc1="In today’s fast-evolving digital landscape, secure identity management is a critical necessity. Organizations across industries—from enterprises and governments to educational institutions—are adopting blockchain technology to establish tamper-proof, decentralized digital identity solutions.
                 At Giichi, we leverage the power of blockchain to streamline digital identification processes, ensuring unparalleled security, privacy, and trust. Our solutions empower businesses to securely store, verify, and manage credentials such as vaccination records, academic certifications, professional licenses, and employee IDs, eliminating fraud risks and unauthorized access.
                 By integrating blockchain-based identity solutions, Giichi helps organizations build a future-ready ecosystem that enhances data integrity, ensures compliance, and improves operational efficiency—while placing users in full control of their digital identity."
          desc2="Traditional identity management systems rely on centralized authorities to store and verify user identities. However, these systems come with inherent risks—data breaches, identity theft, and lack of user control. Centralized identity models create single points of failure, making personal and enterprise data vulnerable to cyber threats.
                 At Giichi, we are redefining digital identity management with blockchain-powered decentralized identity solutions. Unlike centralized systems, decentralized identity management (DID) eliminates intermediaries, giving users full ownership and control over their credentials. Our blockchain-driven approach ensures tamper-proof security, seamless verification, and enhanced privacy, empowering businesses and individuals to safeguard their digital identities like never before.
                 By bridging the gap between security and accessibility, Giichi is leading the way in decentralized identity solutions, making digital identity management safer, smarter, and future-ready."
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
          blockchain-based decentralized identity solutions. <br />
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

      {/* Clients Review */}
      <div className="mt-12">
        <Review />
      </div>

      {/* FAQ */}
      <div>
        <Faq />
      </div>

      {/* Spotlight Insights */}
      {/* <div>
        <Insights />
      </div> */}
    </div>
  );
};

export default BlockchainIdentity;
