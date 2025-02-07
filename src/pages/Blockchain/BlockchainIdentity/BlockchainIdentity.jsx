import blockchainIdenityImg from "../../../assets/bg-identity.png";
import Forecast from "../../../components/Blockchain/Forecast";
import identityImg from "../../../assets/identity.png";
import identityDataImg from "../../../assets/identityData.png";
import LetsTalk from "../../../components/LetsTalk";
import Services from "../../../components/Blockchain/Services";
import BlockchainCycle from "../../../components/Blockchain/BlockchainCycle";
import Review from "../../../components/Review";
import Faq from "../../../components/Faq";
// import Insights from "../../../components/Blockchain/Insights";
import CalendlyButton from "../../../components/resuableComp/Calendly";

const BlockchainIdentity = () => {
  return (
    <div className="pt-6 md:pt-12">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={blockchainIdenityImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 left-80 w-full h-full hidden md:flex flex-col items-start justify-center">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Blockchain In Identity{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Management{" "}
            </span>
          </p>
          <p className="pt-6 text-lg font-semibold leading-snug">
            Enable more secure storage and management of digital identities in{" "}
            <br />
            blockchain with a single, tamper-proof ecosystem.
          </p>

            {/* Button */}
         <CalendlyButton/>
        </div>

        
        {/* for mobile */}
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain In Identity Management{" "}
            </span>
           </p>
          <p  className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Enable more secure storage and management of digital identities in{" "}
            <br />
            blockchain with a single, tamper-proof ecosystem.
          </p>
           {/* Button */}
           <CalendlyButton/>
        </div>
      </div>

      {/* Forecast */}
      <div>
        <Forecast
          img1={identityImg}
          img2={identityDataImg}
          title1="Tapping into the Power of Blockchain for Secure Digital Identification Solutions"
          title2="Blockchain Market Forecast: Growth Centralized vs. Decentralized: Redefining Digital Identity Management"
          desc1="As consumer demand for sustainability rises, blockchain technology
                                is essential for verifying ethical practices and enhancing
                                security, efficiency, transparency, and compliance across various
                                business operations. Antier stands out as a premiblockchain
                                development company, having completed over 1,000 projects since
                                its inception."
          desc2="As consumer demand for sustainability rises, blockchain technology
                                is essential for verifying ethical practices and enhancing
                                security, efficiency, transparency, and compliance across various
                                business operations. Antier stands out as a premiblockchain
                                development company, having completed over 1,000 projects since
                                its inception."
        />
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Connect On Whatsapp" />
      </div>

      {/* Services */}
      <div className="mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          Benefits of Blockchain for
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Identity Management
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg font-normal pt-2">
          Blockchain-based decentralized identity management solutions address
          the existing challenges,
          <br /> enabling the betterment of the entire process.
        </p>
        <Services />
      </div>

      {/* Blockchain Cycle Slider */}
      <div>
        <BlockchainCycle title="Use Cases of Blockchain for Identity Management" />
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
