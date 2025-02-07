/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import Forecast from "../../../components/Blockchain/Forecast";
import depinImg from "../../../assets/depin (2).png";
import depinSolImg from "../../../assets/depinsol2.png";
import depinArchImg from "../../../assets/depinArch.png";
import depinApiImg from "../../../assets/depinApi.png";
import depinAssetImg from "../../../assets/depinAsset.png";
import depinAuditImg from "../../../assets/depinAudit.png";
import depinDevImg from "../../../assets/depinDev.png";
import depinGoverImg from "../../../assets/depinGover.png";
import depinScImg from "../../../assets/depinSc.png";
import depinServiceImg from "../../../assets/depinService.png";
import depinTokenImg from "../../../assets/depinToken.png";
import logictisImg from "../../../assets/logictics.png";
import realStateImg from "../../../assets/real-estate.png";
import energyImg from "../../../assets/energy.png";
import satelliteImg from "../../../assets/satellite.png";
import manufactureImg from "../../../assets/manufacture.png";
import healthImg from "../../../assets/health.png";
import LetsTalk from "../../../components/LetsTalk";
import Faq from "../../../components/Faq";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import DepinServices from "../../../components/Blockchain/DepinServices";


const FrameworksData = [
  {
    logo: depinArchImg,
    title: "DePIN Architecture Design",
    description:
      "Our team specializes in designing scalable and resilient decentralized networks that seamlessly integrate with physical infrastructure. Using best-in-class blockchain technology, we create systems that enhance communication between devices and nodes.",
  },
  {
    logo: depinServiceImg,
    title: "DePIN Consulting Services",
    description:
      "Navigating the complexities of decentralized infrastructure can be challenging. Our DePIN consulting services provide strategic insights to help businesses implement the right DePIN solutions efficiently and effectively.",
  },

  {
    logo: depinTokenImg,
    title: "DePIN Tokenization Service",
    description:
      "Giichi’s DePIN tokenization service enables businesses to convert physical assets into digital tokens on the blockchain, ensuring secure transactions while adhering to regulatory compliance.",
  },
  {
    logo: depinDevImg,
    title: "DePIN Marketplace Development",
    description:
      "We build custom DePIN marketplaces that connect digital infrastructure providers, investors, and users through a decentralized platform designed for scalability and seamless user experience.",
  },
  {
    logo: depinApiImg,
    title: "DePIN API Development",
    description:
      "Our API development services allow seamless integration of decentralized functionalities into existing applications, providing real-time data access and interoperability between DePIN systems.",
  },
  {
    logo: depinAuditImg,
    title: "DePIN Audit and Security",
    description:
      "Security is a top priority. Giichi performs rigorous DePIN audits to identify potential vulnerabilities, implement robust security measures, and safeguard decentralized networks against cyber threats.",
  },

  {
    logo: depinAssetImg,
    title: "DePIN Smart Contract Development",
    description:
      "We develop self-executing smart contracts that automate agreements, enhance transparency, and eliminate the need for intermediaries in DePIN ecosystems.",
  },
  {
    logo: depinGoverImg,
    title: "DePIN Asset Management",
    description:
      "Giichi’s decentralized asset management solutions enable businesses to track, control, and optimize the performance of their physical and digital assets across decentralized infrastructure networks.",
  },
  {
    logo: depinScImg,
    title: "DePIN Governance",
    description:
      "We implement decentralized governance frameworks that allow stakeholders to participate in decision-making processes through transparent and democratic voting mechanisms.",
  },
];

const DepinUseCaseData = [
  {
    logo: logictisImg,
    title: "Logistics & Supply Chain",
    description:
      "Giichi’s DePIN solutions revolutionize supply chain management by ensuring real-time tracking, improved transparency, and efficient inventory management. Businesses can leverage decentralized platforms to minimize delays, streamline logistics, and enhance overall supply chain performance.",
  },
  {
    logo: realStateImg,
    title: "Real Estate",
    description:
      "We develop DePIN-based property management platforms that simplify rent collection, maintenance scheduling, and stakeholder communication. Our decentralized solutions ensure secure and immutable property records, reducing disputes and fostering trust among tenants, landlords, and investors.",
  },

  {
    logo: energyImg,
    title: "Energy & Utilities",
    description:
      "Giichi empowers energy companies with decentralized energy trading platforms that optimize resource allocation, enhance transaction transparency, and support sustainable energy initiatives. Our solutions enable peer-to-peer energy exchange and eliminate reliance on intermediaries.",
  },
  {
    logo: satelliteImg,
    title: "Telecommunications",
    description:
      "With Giichi’s DePIN solutions, telecom businesses can establish decentralized communication networks that improve data privacy, reduce dependency on traditional infrastructure, and facilitate peer-to-peer transactions, ensuring a more resilient and efficient telecom ecosystem.",
  },
  {
    logo: healthImg,
    title: "Healthcare",
    description:
      "We enhance healthcare data management by developing decentralized networks for patient records. Our solutions improve data security, interoperability among healthcare providers, and patient access to medical history, fostering a secure and efficient healthcare ecosystem.",
  },
  {
    logo: manufactureImg,
    title: "Manufacturing",
    description:
      "Giichi’s DePIN technology strengthens manufacturing operations by securing sensitive data, ensuring process transparency, and optimizing supply chains. Our solutions help streamline workflows, enhance collaboration, and prevent vulnerabilities in production environment.",
  },
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const DepinUseCaseCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};
const BlockchainDepin = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={BlockchainDepinImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-3xl"
        />
        {/* The text */}
        <div className="absolute top-0 md:left-16 lg:left-24 xl:left-40 2xl:left-72 w-full h-full hidden md:flex flex-col items-start justify-center">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              DePIN Development{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient text-5xl font-bold">
              Company{" "}
            </span>
          </p>
          <p className="pt-6 text-lg font-semibold leading-snug">
          Building a decentralized infrastructure network is no longer a challenge. <br/>
          Giichi enables businesses to transform their physical infrastructure into <br/>
          decentralized networks that enhance efficiency, security, and transparency.
          </p>

          {/* Button */}
          <CalendlyButton />
        </div>

        {/* for mobile */}
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              DePIN Development Company{" "}
            </span>
            <br />
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Building a decentralized infrastructure network is no longer a challenge. 
          Giichi enables businesses to transform their physical infrastructure into 
          decentralized networks that enhance efficiency, security, and transparency.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-10">
        <Forecast
          img1={depinImg}
          img2={depinSolImg}
          title1="Revolutionize your infrastructure with Giichi’s DePIN expertise!"
          title2="DePin Solutions: Future-Proofing Your Infrastructure for Business Growth"
          desc1="Traditional infrastructure systems often face inefficiencies, centralization risks, and high operational costs. The rise of DePIN (Decentralized Physical Infrastructure Networks) is driven by the need for secure, transparent, and scalable management of physical assets across industries. "
          desc2="Giichi empowers businesses to embrace this transformation by delivering customized DePIN solutions that streamline infrastructure management. Our cutting-edge DePIN development services help organizations seamlessly integrate decentralized networks, transforming their physical infrastructure into future-ready, high-performance systems."
        />
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Services */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
          GiiCHi Advanced DePIN <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center">
        As a leading DePIN development company, Giichi offers a comprehensive range of services to help businesses harness the power of <br/>
        decentralized infrastructure and optimize operational efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-6 md:gap-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          {FrameworksData.map((data, index) => (
            <FrameworksCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Talk to Our Experts" />
      </div>

      {/* Blockchain frameworks */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold pt-4 leading-tight tracking-wide text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        DePIN Use Cases: Transforming Industries with 
          <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
          Decentralized Infrastructure
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        Giichi delivers cutting-edge DePIN solutions tailored to various industries, helping businesses <br/>
        enhance efficiency, security, and transparency through decentralized networks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-6 md:gap-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          {DepinUseCaseData.map((data, index) => (
            <DepinUseCaseCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mt-12 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
        Key Components Powering 
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
          DePIN’s Ecosystem
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm md:text-lg font-normal pt-2">
        For businesses looking to unlock the full potential of decentralized infrastructure, understanding <br/>
        the fundamental components of DePIN (Decentralized Physical Infrastructure Networks) is crucial.
        </p>
        <DepinServices />
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Hire Us" />
      </div>

      {/* FAQ Section */}
      <div>
        {/* <Faq /> */}
      </div>

     
    </div>
  );
};

export default BlockchainDepin;
