/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Framework from "../../../components/CommonComponent/Framework";
import { Web3WalletFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { Web3WalletExchangeFaq } from "../../../components/data/faqsData";
import accessImg from "../../../assets/payment.png";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";

const benefits = [
  [
    {
      image: accessImg,
      title: "Transaction Fee",
      points:
        "Transaction fees are a key revenue stream for Web3 wallets. A fixed or variable fee is charged based on the transaction value. More wallet transactions lead to increased revenue, making this a consistent income source.",
    },
    {
      image: accessImg,
      title: "Swapping Fees",
      points:
        "Swapping fees allow you to profit from transactions within the wallet. Popular wallets, like TrustWallet, use this approach. Wallet admins pay swapping fees for each transaction, generating earnings for the platform.",
    },
  ],
  [
    {
      image: accessImg,
      title: "DeFi Integration",
      points:
        "By integrating Web3 wallets with decentralized finance (DeFi) platforms, you can earn fixed returns while enabling wallet users to perform transactions on DeFi networks. This model boosts revenue when combined with transaction and swapping fees.",
    },
    {
      image: accessImg,
      title: "Trading Fees",
      points:
        "Web3 wallets are extensively used for trading cryptocurrencies, NFTs, and other digital assets. With multi-currency support, these wallets allow seamless trading and can be linked to various NFT marketplaces and cryptocurrency exchanges.",
    },
  ],
];

const BenefitCard = ({ image, title, points }) => {
  return (
    <div
      className="border-[1px] border-white border-opacity-20 rounded-xl py-8  flex flex-col justify-center w-full 
    md:w-[50%] lg:w-[50%] hover:bg-greish-gradient px-4 lg:px-6"
    >
      <img src={image} alt={title} className="w-12 lg:w-16" />
      <p className="text-white pt-4 text-lg md:text-xl font-bold">{title}</p>
      <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
        {points}
      </p>
    </div>
  );
};

const Web3Wallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          Web3 Wallet
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              Web3 wallets are decentralized digital wallets that provide users
              with full control over their assets in the Web3 ecosystem. Unlike
              traditional Web2 wallets, Web3 wallets are designed to interact
              with decentralized applications (dApps) and services on the
              blockchain. These wallets empower users to securely manage, store,
              and transfer cryptocurrencies, NFTs, and other digital assets
              without relying on centralized authorities or third-party
              intermediaries.
              <br /> <br />
              Are you intrigued by the growing potential of Web3 wallet
              development and eager to invest? Let our expert team transform
              your ideas into reality with top-tier wallet development
              solutions.
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
            What Sets Web3 Wallet Apart?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Did you know that venture capital firms invested over $27 billion in
            crypto projects in 2021, and an even greater amount in Web3
            initiatives? Whether you’re a startup or an established business,
            tapping into the potential of Web3 solutions can greatly expand your
            revenue opportunities. <br /> <br />
            Web3, often referred to as the third generation of the internet,
            builds upon Web2, and is designed to facilitate peer-to-peer
            interactions without the need for intermediaries or third parties.
            Contrary to the belief that Web3 is still a distant development, it
            is already being integrated into industries like NFTs,
            cryptocurrency trading, and DeFi (decentralized finance) services.{" "}
            <br /> <br />
            Web3 wallets are an evolved version of blockchain wallets, allowing
            users to securely store and trade crypto assets. They come equipped
            with advanced features such as top-tier security, multi-currency
            support, and the ability to convert cryptocurrencies into local
            currency, offering users enhanced control and flexibility over their
            digital assets.
          </p>
        </div>
        <div className="w-full lg:w-[50%]"></div>
      </div>

      {/*  Web3 Wallet Development:  */}
      <div className="mt-0 md:mt-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <p className="text-white text-center text-xl md:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          Web3 Wallet Development:
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Lucrative Revenue Models
          </span>
        </p>
        <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6 text-center">
          Here are some of the ways we help you generate revenue:
        </p>
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
          {benefits.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-6 lg:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-6 lg:mt-8"
            >
              {row.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  image={benefit.image}
                  title={benefit.title}
                  points={benefit.points}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={Web3WalletFramework}
          heading1="Web3 Wallet"
          heading2="Development Services"
          desc="With extensive expertise, we create customizable and secure wallets for storing and transferring crypto assets."
        />
      </div>

      {/* web3 crypto  wallet offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          {" "}
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold w-[80%]">
            Offer an Exhilarating User Experience with Our Web3 Crypto Wallet
            Solutions
          </p>
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

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
          Our Unique Offerings in <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Web3 Wallet
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] ">
            <img src={accessImg} alt="report-image" className="w-16 " />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Cost-effective wallet creation
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="manage-image" className="w-16" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Technical expertise
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%] ">
            <img src={accessImg} alt="wallet-image" className="w-16 " />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Flexible models
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img
              src={accessImg}
              alt="know-your-customer-image"
              className="w-16 "
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Transparent pricing
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="funding-icon" className="w-16 " />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              24/7 customer assistance
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={Web3WalletExchangeFaq} />
      </div>
    </div>
  );
};

export default Web3Wallet;
