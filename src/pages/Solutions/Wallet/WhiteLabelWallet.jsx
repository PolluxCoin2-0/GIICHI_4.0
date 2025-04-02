import { Link } from "react-router-dom";
import Framework from "../../../components/CommonComponent/Framework";
import { WhiteLabelWalletFramework } from "../../../components/data/frameworkData";
import Industries from "../../../components/CommonComponent/Industries";
import { whiteLabelIndustriesData } from "../../../components/data/industriesData";
import Faq from "../../../components/resuableComponent/Faq";
import { WhiteLabelWalletExchangeFaq } from "../../../components/data/faqsData";
import whiteLabelCryptoWalletFeatureImg from "../../../assets/whiteLabelWalletFeature.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import whiteLabelBannerImg from "../../../assets/whiteLabelBanner.png";

const statsData = [
  { label: "Registration", value: "200+" },
  { label: "Profiles completed", value: "150+" },
  { label: "Gift Purchases", value: "500+" },
  { label: "Referrals", value: "300+" },
  { label: "Registration", value: "Unlimited" },
];

const WhiteLabelWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      
      {/* WHITE LABEL CRYPTO WALLET DEVELOPMENT COMPANY */}
      <BannerContent
        img={whiteLabelBannerImg}
        title1="White Label"
        title2="Cryptocurrency Wallet"
        desc=" Boost your investments with our ready-to-launch, White Label cryptocurrency wallet. "
      />
 
       {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: "1.5" }}>
            Exploring the Key Features of White Label Cryptocurrency Wallets
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            A White-Label cryptocurrency wallet is a pre-built, fully-tested,
            and customizable solution for securely storing, sending, and
            receiving cryptocurrencies, NFTs, stablecoins, and various other
            digital assets. This ready-made platform can be quickly adapted to
            your brand’s requirements, streamlining the deployment and launch
            process for both web and mobile platforms. <br /> <br />
            Creating a White-Label wallet demands deep domain knowledge,
            extensive experience, and expertise — all of which are available
            through top-tier development companies like Giichi. We offer both
            custodial and non-custodial wallet development on prominent
            blockchain networks, backed by over a decade of industry experience.
          </p>
          
            {/* button to connect on whatsapp */}
            <div className="flex flex-row items-center space-x-6 mt-8">
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
        <div className="w-full lg:w-[50%]"><img src={whiteLabelCryptoWalletFeatureImg} alt="" className="" /></div>
      </div>

      {/*Stats Data */}
      <div className="relative ">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex justify-between items-center bg-[#283430] bg-opacity-10 py-10 rounded-lg shadow-md px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-32">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
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

      {/* Industries  */}
      <div className="mt-20">
        <Industries
          data={whiteLabelIndustriesData}
          heading1="Various Industries"
          heading2="We Serve"
          desc=""
        />
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={WhiteLabelWalletFramework}
          heading1="Explore Our White Label "
          heading2="Crypto Wallet Development Services"
          desc=""
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={WhiteLabelWalletExchangeFaq} />
      </div>
    </div>
  );
};

export default WhiteLabelWallet;
