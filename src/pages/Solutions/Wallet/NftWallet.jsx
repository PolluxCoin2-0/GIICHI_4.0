/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Faq from "../../../components/resuableComponent/Faq";
import { NftWalletFaq } from "../../../components/data/faqsData";
import { FaExchangeAlt } from "react-icons/fa";

const platforms = [
  {
    name: "Custodial Wallet",
    desc: "A custodial NFT wallet is managed by a third party that securely stores assets, tokens, and private keys on its servers. Users must log into the wallet to access and perform transactions.",
    icon: <FaExchangeAlt />,
    color: "bg-black",
  },
  {
    name: "Non-Custodial Wallet",
    desc: "A non-custodial NFT wallet gives users full control over their assets and private keys. Owners are solely responsible for securing their keys and must avoid sharing private information with third parties.",
    icon: <FaExchangeAlt />,
    color: "bg-black",
  },
  {
    name: "Hot Wallet",
    desc: "Hot wallets are desktop and mobile applications that allow users to buy, sell, and exchange NFTs. These wallets operate online, with strong security measures in place to prevent unauthorized access or tampering.",
    icon: <FaExchangeAlt />,
    color: "bg-black",
  },
];

const NftWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          NFT Wallet <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              Ensure top-notch security and scalability for your tokens with our
              NFT wallet solutions. As a leading NFT wallet development company,
              we create private key-based platforms that give users full control
              over their assets. Our wallets enable seamless buying, selling,
              and exchanging of NFTs, delivering a world-class experience that
              leaves a lasting impact. <br /> <br />
              An NFT wallet is a digital wallet designed specifically for
              storing, managing, and trading non-fungible tokens (NFTs). Unlike
              regular crypto wallets that hold fungible tokens like Bitcoin or
              Ethereum, NFT wallets store unique digital assets such as artwork,
              collectibles, in-game items, and virtual real estate.
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

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            How Secure Are Our NFT Wallet Services?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            NFTs are valued for their authenticity, integrity, and immutability,
            making them a secure digital asset that cannot be easily hacked.
            Security is a top priority in our NFT wallet development process.{" "}
            <br /> <br />
            As a trusted NFT wallet development company, our blockchain experts
            bring extensive domain knowledge and technical expertise to build
            robust and scalable wallets from scratch. We stay updated with the
            latest advancements in the crypto space and integrate cutting-edge
            security measures into our solutions.
          </p>
        </div>
        <div className="w-full lg:w-[50%]"></div>
      </div>

      {/* Types of cryptocurrency exchange platform */}
      <div className="mt-20">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Types of NFT Wallet
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-8">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-start text-start gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-semibold">{platform.name}</h2>
                  <p className="w-[90%] text-white text-sm text-opacity-70">
                    {platform.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={NftWalletFaq} />
      </div>
    </div>
  );
};

export default NftWallet;
