/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Faq from "../../../components/resuableComponent/Faq";
import { DefiWalletFaq } from "../../../components/data/faqsData";
import Services from "../../../components/CommonComponent/Services";
import { DefiWalletService } from "../../../components/data/ServicesData";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import defiWalletFeatureImg from "../../../assets/defiFeature.png";
import { defiWalletSteps } from "../../../components/data/productDevPhases";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";
import defiWalletImg from "../../../assets/defiWalletImg.png";

const statsData = [
  { label: "User Base", value: "500k+" },
  { label: "Countries Served", value: "5+" },
  { label: "Solutions Delivered", value: "100+" },
  { label: "Total Experience", value: "5+ Years" },
];

const DefiWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center">
          DeFi Wallet <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center w-full mt-12">
          <div className="w-full md:w-[50%]"><img src={defiWalletFeatureImg} alt="" className="w-[80%]"/></div>
          <div className="w-full md:w-[50%] mt-6 md:mt-0">
            <p className="text-white text-opacity-70 text-justify hyphens-auto text-sm md:text-[16px]" style={{ lineHeight: "1.7" }}>
              Collaborate with the leading DeFi wallet development company to
              provide users with a wallet that ensures full asset control and
              superior security. Our solutions enable smooth and transparent
              transactions.
              <br /> <br />A DeFi wallet is a decentralized digital wallet that
              allows users to store, manage, and trade digital assets securely
              without relying on centralized intermediaries. Unlike traditional
              wallets, DeFi wallets are connected to decentralized applications
              (dApps) on blockchain networks, particularly Ethereum and other
              compatible blockchains. They empower users with full control over
              their assets, ensuring that they can participate in decentralized
              finance (DeFi) activities like lending, borrowing, staking, and
              liquidity provision.
            </p>

            {/* button to connect on whatsapp */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 mt-6">
              <a
                type="button"
                href="https://wa.me/9266416198"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-sm md:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
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

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-0 md:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
            DeFi Wallet Development: Unlock the Potential with Our Flexible
            Solutions
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Decentralized Finance (DeFi) wallets have captured the attention of
            crypto enthusiasts worldwide, offering innovative ways to grow
            income in the crypto space. With features like open-source code,
            high security, and compliance with industry standards, DeFi wallets
            have become a cornerstone of financial innovation. <br /> <br />
            Partner with Giichi, a leading DeFi wallet development company, to
            tap into this billion-dollar market. Our team brings deep expertise
            and knowledge to create custom DeFi wallet solutions tailored to
            meet your needs. We offer a variety of flexible options and provide
            continuous post-deployment support, along with marketing assistance
            to maximize the reach of your wallet. Explore our solutions and take
            advantage of this high-growth opportunity!
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
        <img src={defiWalletImg} alt="" className="" />
      
        </div>
      </div>

      {/*Stats Data */}
      <div className="relative mt-24 mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#283430] bg-opacity-10 py-10  rounded-lg shadow-md px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-6 md:mt-0"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">
                <span className="text-transparent bg-clip-text bg-green-gradient">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Consulting Services */}
      <Services
        data={DefiWalletService}
        heading1="Discover Our DeFi Wallet "
        heading2="Development Services"
        desc="Along with DeFi wallet development, we offer a full spectrum of services tailored to your vision and user needs."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={defiWalletSteps}
        heading="Our DeFi Development Capabilities"
        desc="Trust our experienced DeFi wallet development team, recognized for crafting successful solutions across the globe."
      />

      {/* FAQ SECTION */}
      <div>
        <Faq data={DefiWalletFaq} />
      </div>
    </div>
  );
};

export default DefiWallet;
