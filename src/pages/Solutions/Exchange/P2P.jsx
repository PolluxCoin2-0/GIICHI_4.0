import BannerContent from "../../../components/CommonComponent/BannerContent";
import Framework from "../../../components/CommonComponent/Framework";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import Services from "../../../components/CommonComponent/Services";
import { P2PExchangeFaq } from "../../../components/data/faqsData";
import { P2PExchangeFramework } from "../../../components/data/frameworkData";
import { P2PDevelopmentService } from "../../../components/data/ServicesData";
import Faq from "../../../components/resuableComponent/Faq";
import p2pExchangeBannerImg from "../../../assets/p2pExchangeBanner.png";
import p2pFeatureImg from "../../../assets/p2pFeature.png";

const steps = [
  { id: "01", title: "Requirement Gathering and Planning" },
  { id: "02", title: "Technology Stack Selection" },
  { id: "03", title: "UI/UX Development" },
  { id: "04", title: " Backend Development & Smart Contracts" },
  { id: "05", title: "Test, Improve & Deliver" },
];

const P2P = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* P2P EXCHANGED DEVELOPMENT COMPANY */}
      <BannerContent
        img={p2pExchangeBannerImg}
        title1="P2P Crypto Exchange "
        title2="Development Company"
        desc=" By eliminating intermediaries, our P2P Exchange Development enables direct peer-to-peer trading."
      />

      {/* CENTRALIZED EXCHANGED DDEVELOPMENT SOFTWARE*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img
            src={p2pFeatureImg}
            alt=""
            className="P2P Crypto Exchange Development Image"
          />
        </div>

        <div className="w-full lg:w-[50%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            P2P Cryptocurrency Exchange Development
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Adopt the Peer-to-Peer Trading Model <br /> <br />
            In 2023, P2P cryptocurrency exchange platforms saw substantial
            trading activity. These platforms connect buyers and sellers
            directly, eliminating intermediaries and offering improved security,
            cost-efficiency, user control, and transparency in the trading
            process. <br /> <br />A smart contract-based escrow ensures
            transaction integrity. At Giichi, we specialize in creating complex
            and scalable trustless ecosystems tailored to your business goals.
            Simplify the trading experience for your users with exceptional P2P
            crypto exchange application development.
          </p>
          <div className="mt-8 flex flex-row items-center space-x-6">
            <div>
              <p className="text-white text-[15px]">
                <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                Decentralized, Fee-Free Trading
              </p>
              <p className="text-white text-[15px] mt-4">
                <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                Enhanced Security and Privacy
              </p>
            </div>

            <div>
              <p className="text-white text-[15px]">
                <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                Complete User Control
              </p>
              <p className="text-white text-[15px] mt-4">
                <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
                Transparent, Trustless Trading
              </p>
            </div>
          </div>
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
              Request a free demo
            </a>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={P2PExchangeFramework}
          heading1="P2P Cryptocurrency Exchange Software :"
          heading2="Key Features"
          desc="The P2P exchange industry has seen rapid growth in recent years. As a leading P2P crypto exchange development company, we integrate the latest industry-standard features into our solutions."
        />
      </div>

      {/* Blockchain Development Services */}
      <Services
        data={P2PDevelopmentService}
        heading1="Advanced P2P Exchange "
        heading2="Development Features"
        desc="If your vision goes beyond what the popular P2P exchanges offer and basic features aren’t enough, we have you covered. Stand out from the competition with these trending P2P cryptocurrency exchange development features:"
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Our P2P Exchange Development Process"
        desc="At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
      />

      {/* FAQ SECTION */}
      <div>
        <Faq data={P2PExchangeFaq} />
      </div>
    </div>
  );
};

export default P2P;
