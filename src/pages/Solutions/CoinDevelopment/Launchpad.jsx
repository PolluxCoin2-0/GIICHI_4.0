/* eslint-disable react/prop-types */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import serviceIcon from "../../../assets/collab.png";
import Faq from "../../../components/resuableComponent/Faq";
import { CoinLaunchpadFaq } from "../../../components/data/faqsData";

const features = [
  {
    icon: serviceIcon,
    title: "Know your customer (KYC)",
    description:
      "We have a team of highly trained and extensively experienced experts who develop tailored NFT marketing services, enabling businesses to achieve success within a limited timeframe.",
  },
  {
    icon: serviceIcon,
    title: "Multiple fundraising methods",
    description:
      "Our team leverages a data-driven approach to craft impactful marketing strategies that maximize reach and engagement.",
  },
  {
    icon: serviceIcon,
    title: "Crypto wallet",
    description:
      "From community building to influencer outreach, we provide end-to-end NFT marketing solutions for sustainable growth.",
  },
  {
    icon: serviceIcon,
    title: "Multi-tier staking",
    description:
      "With a track record of successful campaigns, we help businesses gain visibility and traction in the NFT space.",
  },
  {
    icon: serviceIcon,
    title: "Transparency",
    description:
      "From community building to influencer outreach, we provide end-to-end NFT marketing solutions for sustainable growth.",
  },
  {
    icon: serviceIcon,
    title: "Compatibility",
    description:
      "With a track record of successful campaigns, we help businesses gain visibility and traction in the NFT space.",
  },
];

const servicesData = [
  {
    icon: serviceIcon,
    title: "ICO Launchpad Development",
    description:
      "ICO, known as Initial Coin Offering, is a popular fundraising process. We build smart contract-based ICO platforms that.",
  },
  {
    icon: serviceIcon,
    title: "NFT Marketplace Development",
    description:
      "We create feature-rich NFT marketplaces that enable users to buy, sell, and trade digital assets securely and efficiently.",
  },
  {
    icon: serviceIcon,
    title: "DeFi Development",
    description:
      "Our DeFi solutions provide decentralized financial services, from lending to yield farming, enhancing financial inclusivity.",
  },
  {
    icon: serviceIcon,
    title: "Smart Contract Development",
    description:
      "We develop secure and efficient smart contracts to automate transactions and enhance trust in blockchain applications.",
  },
  {
    icon: serviceIcon,
    title: "Crypto Exchange Development",
    description:
      "Our crypto exchange solutions offer seamless and secure trading experiences with advanced features and high liquidity.",
  },
  {
    icon: serviceIcon,
    title: "Blockchain Consulting",
    description:
      "We provide expert guidance and strategic blockchain consulting to help businesses integrate decentralized solutions.",
  },
  {
    icon: serviceIcon,
    title: "Metaverse Development",
    description:
      "Our metaverse solutions enable businesses to create immersive virtual worlds and digital economies powered by blockchain.",
  },
  {
    icon: serviceIcon,
    title: "Token Development",
    description:
      "We offer end-to-end token development services to help businesses create, launch, and manage their crypto assets.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row items-center w-full space-x-6 mt-12">
      <div className="bg-white px-4 py-4">
        <img src={icon} alt={title} className="w-24" />
      </div>
      <div>
        <p className="text-xl text-white font-semibold">{title}</p>
        <p className="text-sm text-white text-opacity-70 pt-2">{description}</p>
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
        img={BlockchainImg}
        title1="Crypto Launchpad"
        title2="Development"
        desc="With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services."
      />

      {/* Cryptocurrency Launchpad Development Journey*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Expedite your Cryptocurrency Launchpad Development Journey
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
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
      <div className="bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">
          Our Cryptocurrency Launchpad Development Services
        </p>
        <p className="text-white text-opacity-70 pt-4 text-center">
          We provide a host of offerings to cater to diverse business needs.
        </p>
        <div className="flex flex-row justify-between items-center w-full space-x-20">
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
            Features of a Cryptocurrency Launchpad
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] font-normal pt-4 leading-7 w-full md:w-[60%] text-center">
            We deliver launchpads underpinned by the right features to deliver
            world-class performance.
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
                  className="w-20 object-cover"
                />
              </div>
              <p className="text-white pt-4 text-lg font-bold text-center">
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
