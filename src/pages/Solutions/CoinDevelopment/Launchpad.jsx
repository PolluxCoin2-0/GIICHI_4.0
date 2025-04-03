/* eslint-disable react/prop-types */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import serviceIcon from "../../../assets/collab.png";
import Faq from "../../../components/resuableComponent/Faq";
import { CoinLaunchpadFaq } from "../../../components/data/faqsData";
import StakingImg from "../../../assets/Staking.png";
import supplyChainImg from "../../../assets/logictics.png";
import WalletImg from "../../../assets/wallet (2).png";
import FundImg from "../../../assets/fund.png";
import RecordImg from "../../../assets/record.png";
import icoImg from "../../../assets/ico (1).png";
import idoImg from "../../../assets/ido.png";
import ieoImg from "../../../assets/ieo.png";
import ifoImg from "../../../assets/ifo.png";
import igoImg from "../../../assets/igo.png";
import iioImg from "../../../assets/iio.png";
import iloImg from "../../../assets/ilo.png";
import inoImg from "../../../assets/ino.png";
import launchpadBannerImg from "../../../assets/launchpadBanner.png";
import launchpadFeatureImg from "../../../assets/launchpadFeature.png";

const features = [
  {
    icon: RecordImg,
    title: "Know your customer (KYC)",
    description:
      "Ensures businesses and investors are verified, granting only legitimate users access to the platform.",
  },
  {
    icon: FundImg,
    title: "Multiple fundraising methods",
    description:
      "Supports various fundraising models, allowing businesses to raise capital seamlessly.",
  },
  {
    icon: WalletImg,
    title: "Integrated Crypto Wallet",
    description:
      "A secure built-in crypto wallet facilitates safe transactions and storage of digital assets.",
  },
  {
    icon: StakingImg,
    title: "Multi-tier staking",
    description:
      "Enables multiple crowdfunding rounds based on the total tokens staked, enhancing participation flexibility.",
  },
  {
    icon: serviceIcon,
    title: "Enhanced Transparency",
    description:
      "Boosts project visibility, attracting more investors and fostering trust within the ecosystem.",
  },
  {
    icon: supplyChainImg,
    title: "Blockchain Compatibility",
    description:
      "Supports multiple blockchain networks, giving platform owners the flexibility to expand functionality across different ecosystems.",
  },
];

const servicesData = [
  {
    icon: icoImg,
    title: "ICO Launchpad Development",
    description:
      "We develop smart contract-powered ICO (Initial Coin Offering) platforms, enabling businesses to seamlessly list tokens and raise funds efficiently.",
  },
  {
    icon: ieoImg,
    title: "IEO Launchpad Development",
    description:
      "Our expert developers create customized IEO (Initial Exchange Offering) launchpads, allowing businesses to list their projects on crypto exchanges for streamlined fundraising.",
  },
  {
    icon: inoImg,
    title: "INO Launchpad Development",
    description:
      "With the rising popularity of INO (Initial NFT Offering), we build high-performance INO launchpads to facilitate fundraising for NFT projects while delivering a seamless user experience.",
  },
  {
    icon: igoImg,
    title: "IGO Launchpad Development",
    description:
      "We specialize in IGO (Initial Game Offering) launchpads, enabling blockchain gaming projects to raise funds and enter the GameFi ecosystem effortlessly.",
  },
  {
    icon: iioImg,
    title: "IIO Launchpad Development",
    description:
      "Our team builds secure and scalable IIO (Initial Insurance Offering) launchpads, designed specifically for insurance-related crypto fundraising initiatives.",
  },
  {
    icon: ifoImg,
    title: "IFO Launchpad Development",
    description:
      "We develop IFO (Initial Farming Offering) launchpads, empowering DeFi projects to raise capital through farming events on decentralized exchange (DEX) platforms.",
  },
  {
    icon: idoImg,
    title: "IDO Launchpad Development",
    description:
      "Our IDO (Initial DEX Offering) launchpad solutions provide decentralized projects with secure, scalable, and high-performance platforms for efficient fundraising.",
  },
  {
    icon: iloImg,
    title: "ILO Launchpad Development",
    description:
      "We build ILO (Initial Liquidity Offering) launchpads, integrating Automated Market Maker (AMM), liquidity pools, and other essential features to help startups fuel their growth.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row items-center w-full space-x-4 md:space-x-6 mt-12">
      <div className="bg-[#073106] px-6 py-6 rounded-lg">
        <img src={icon} alt={title} className="w-24" />
      </div>
      <div>
        <p className="text-sm md:text-xl text-white font-semibold">{title}</p>
        <p className="text-xs md:text-sm text-white text-opacity-70 pt-1 md:pt-2">
          {description}
        </p>
      </div>
    </div>
  );
};
const Launchpad = () => {
  const half = Math.ceil(servicesData.length / 2);
  const firstColumn = servicesData.slice(0, half);
  const secondColumn = servicesData.slice(half);
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={launchpadBannerImg}
        title1="Crypto Launchpad"
        title2="Development"
        desc="Simplify and optimize the fundraising process with our advanced crypto launchpad solutions."
      />

      {/* Cryptocurrency Launchpad Development Journey*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={launchpadFeatureImg} alt="" className="" />
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Accelerate Your Crypto Launchpad Development
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto"
            style={{ lineHeight: "1.7" }}
          >
            The growing adoption of cryptocurrencies has paved the way for
            innovative, investor-friendly solutions like crypto launchpads,
            which simplify the fundraising process for blockchain projects.
            These platforms empower startups to raise capital and expand
            efficiently while unlocking new revenue opportunities. <br /> <br />
            At Giichi, we provide end-to-end crypto launchpad development
            services, helping you build a robust launchpad and capitalize on the
            booming crypto industry. Our experienced blockchain engineers and
            industry experts ensure a fast time-to-market, giving you a
            competitive edge.
          </p>

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
              Talk to our Experts
            </a>
          </div>
        </div>
      </div>

      {/* Cryptocurrency Launchpad Development Services*/}
      <div className="bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60 py-12 mt-12 lg:mt-32">
        <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">
          Our Cryptocurrency Launchpad Development Services
        </p>
        <p className="text-white text-opacity-70 pt-4 text-center">
          We offer a wide range of launchpad development solutions tailored to
          diverse business needs.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-x-0 lg:space-x-20">
          <div className="flex flex-col justify-between items-center w-full">
            {firstColumn.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="flex flex-col justify-between items-center w-full">
            {secondColumn.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Why choose Giichi for marketing services */}
      <div className="mt-20 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">
            Key Features of a Cryptocurrency Launchpad
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] font-normal pt-4 leading-7 w-full md:w-[60%] text-center">
            Our launchpads are designed with advanced features to ensure
            top-tier performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((service, index) => (
            <div
              key={index}
              className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6"
            >
              <div className="flex flex-row justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 object-cover"
                />
              </div>
              <p className="text-white pt-8 text-lg font-bold text-center">
                {service.title}
              </p>
              <p className="text-white text-opacity-50 pt-2 text-[15px] text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={CoinLaunchpadFaq} />
      </div>
    </div>
  );
};

export default Launchpad;
