/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Framework from "../../../components/CommonComponent/Framework";
import { mpcCryptoWalletFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MpcWalletFaq } from "../../../components/data/faqsData";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import customExchangeBannerImg from "../../../assets/customExchangeBanner.png";
import mpcCryptoWalletFeatureImg from "../../../assets/mpcCryptoWallet.png";
import Offerings from "../../../components/CommonComponent/Offerings";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const stages = [
  {
    number: "01",
    title: "Transaction Fees",
    socialIcon: "telegram",
  },
  {
    number: "02",
    title: "Subscription Models",
    socialIcon: null,
  },
  {
    number: "03",
    title: "DeFi Integration",
    socialIcon: null,
  },
  {
    number: "04",
    title: "Partnerships & Collaboration",
    socialIcon: null,
  },
  {
    number: "05",
    title: "Licensing & APIs",
    socialIcon: "message",
  },
];

const comparisons = [
  {
    feature: "Structure",
    cefi: "MPC is versatile and doesn’t require changes to the blockchain protocol.",
    defi: "Multisig requires protocol-level support and limiting its flexibility.",
  },
  {
    feature: "Transparency",
    cefi: "MPC schemes are blockchain-agnostic and interoperable.",
    defi: "Multisig is limited to the blockchain it’s implemented on.",
  },
  {
    feature: "Access",
    cefi: "MPC scales efficiently without performance loss.",
    defi: " Multisig can be slow due to required coordination.",
  },
  {
    feature: "Censorship",
    cefi: "MPC transactions are simpler and cost-effective.",
    defi: "Multisig transactions are larger and incur higher fees.",
  },
  {
    feature: "Cost",
    cefi: "MPC simplifies the user experience and can be simple for users",
    defi: "Multisig requires coordination and can be more complex for users.",
  },
];

const MpcCryptoWallet = () => {
  return (
    <div className="mt-20 mb-20 ">

       {/* Banner Image content */}
       <BannerContent
        img={customExchangeBannerImg}
        title1="MPC Crypto Wallet"
        title2="Development Services"
        desc="Strengthen Your Institutional Wallet with Leading MPC Wallet Development Services"
      />

      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative mt-32">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        
        <div className="flex flex-row w-full">
          <div className="w-[50%]"><img src={mpcCryptoWalletFeatureImg} alt="" className=""/></div>
          <div className="w-[50%]">
          <p className="text-5xl text-white font-semibold">
          MPC Crypto Wallet
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
            <p className="text-white text-opacity-70 text-justify hyphens-auto mt-6" style={{ lineHeight: "1.7" }}>
              Elevate your institutional wallets to highly secure solutions with
              the expertise of a top MPC wallet development company. Our goal is
              to provide advanced asset protection, ensuring peace of mind for
              your business. <br /> <br />
              With our MPC (Multi-Party Computation) wallet development
              services, we offer cutting-edge solutions designed to enhance the
              security and management of your institutional wallets. By
              distributing private keys across multiple parties, our MPC
              technology ensures that no single entity ever has access to the
              full key, significantly reducing the risk of hacks or breaches.
            </p>

            {/* button to connect on whatsapp */}
            <div className="flex flex-row items-center space-x-6 mt-6">
              <a
                type="button"
                href="https://wa.me/9266416198"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Connect on Whatsapp
              </a>
              <ButtonFreeDemo/>
            </div>
          </div>
        </div>
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={mpcCryptoWalletFramework}
          heading1="Explore Our MPC Crypto"
          heading2="Wallet Development Solutions"
          desc="Discover our advanced MPC crypto wallet development services tailored to meet the unique needs of both users and businesses."
        />
      </div>

      {/* DEFI DEVELOPMENT JOURNEY */}
      <div className="mt-24">
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-white text-2xl md:text-3xl px-2 font-bold pt-4 leading-tight tracking-wide text-center"
            style={{ lineHeight: "1.5" }}
          >
            Exploring Profitable Ways to Make Money with <br /> MPC Wallet
            Development Solutions
          </p>
        </div>
        <div className="p-4 mt-6">
          <div className="relative flex items-center justify-between max-w-7xl 3xl:max-w-[1380px] mx-auto">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative flex flex-col items-center"
              >
                {/* Connecting vertical line */}
                {index < stages.length && (
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 h-full">
                    <div className="w-0 h-28 border-r-2 border-dashed border-gray-300"></div>
                  </div>
                )}
                {/* Outer light green circle with blinking effect */}
                <div className="w-36 h-36 bg-green bg-opacity-20 rounded-full flex items-center justify-center relative z-10 animate-blink">
                  {/* Inner dark green circle */}
                  <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center font-bold z-20">
                    {stage.number}
                  </div>
                </div>
                {/* Stage title */}
                <div className="text-center mt-24 w-48 text-lg text-white font-medium">
                  {stage.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIFFERNCE BETWEEN CEFI VS DEFI */}
      <div className="mt-24">
        <p className="text-white text-4xl font-semibold text-center">
          MPC Wallets vs. Multi-Signature Crypto Wallets
        </p>
        <div className="flex gap-4 p-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-6">
          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 text-blue-500"
                  >
                    <path d="M2 7h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2z" />
                    <path d="M16 12h4" />
                    <circle cx="18" cy="12" r="1" />
                    <path d="M6 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-center">
                  MPC Wallets
                </p>
              </div>

              <div className="bg-green bg-opacity-10 p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="text-white font-normal">{comp.cefi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-blue-500"
                  >
                    <path d="M6 10v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
                    <path d="M9 10V7a3 3 0 0 1 6 0v3" />
                    <circle cx="12" cy="18" r="1" />
                    <path d="M5 20h14" />
                    <path d="M3 10h18" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold">Multisig Wallets</p>
              </div>

              <div className="bg-green bg-opacity-10 text-white p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="font-normal text-white">{comp.defi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain   wallet offerings */}
      <Offerings data="  Reach Giichi and discuss your requirements with our Blockchain experts TODAY!"/>
  
  {/* FAQ SECTION */}
      <div>
        <Faq data={MpcWalletFaq} />
      </div>
    </div>
  );
};

export default MpcCryptoWallet;
