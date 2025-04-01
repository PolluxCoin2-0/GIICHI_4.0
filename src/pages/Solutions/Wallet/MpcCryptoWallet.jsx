/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Framework from "../../../components/CommonComponent/Framework";
import { mpcCryptoWalletFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MpcWalletFaq } from "../../../components/data/faqsData";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";

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
    title:
      "DeFi Integration",
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
  { feature: "Access", cefi: "MPC scales efficiently without performance loss.", defi: " Multisig can be slow due to required coordination." },
  {
    feature: "Censorship",
    cefi: "MPC transactions are simpler and cost-effective.",
    defi: "Multisig transactions are larger and incur higher fees.",
  },
  { feature: "Cost", cefi: "MPC simplifies the user experience and can be simple for users", defi: "Multisig requires coordination and can be more complex for users." },
];

const MpcCryptoWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          MPC Crypto Wallet<br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
            Strengthen Your Institutional Wallet with Leading MPC Wallet Development Services <br/> <br/>
            Elevate your institutional wallets to highly secure solutions with the expertise of a top MPC wallet development company. Our goal is to provide advanced asset protection, ensuring peace of mind for your business.   <br/> <br/>
            With our MPC (Multi-Party Computation) wallet development services, we offer cutting-edge solutions designed to enhance the security and management of your institutional wallets. By distributing private keys across multiple parties, our MPC technology ensures that no single entity ever has access to the full key, significantly reducing the risk of hacks or breaches.
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
              <Link to="/contact-us">
                <button
                  type="button"
                  className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                  aria-label="Contact us "
                  title="Click to contact us form"
                >
                  Request a Free Demo
                </button>
              </Link>
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
        <p className="text-white text-2xl md:text-3xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
        Exploring Profitable Ways to Make Money with <br/> MPC Wallet Development Solutions
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
              <div className="bg-green  text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-center">MPC Wallets</p>
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
                    className="w-6 h-6 text-blue"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
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

      {/* web3 crypto  wallet offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our Blockchain experts TODAY!
          </p>
          <div className="flex flex-row items-center space-x-6">
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
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={MpcWalletFaq} />
      </div>
    </div>
  );
};

export default MpcCryptoWallet;
