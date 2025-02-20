/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import Forecast from "../../../components/Blockchain/Forecast";
import logictisImg from "../../../assets/logictics.png";
import realStateImg from "../../../assets/real-estate.png";
import energyImg from "../../../assets/energy.png";
import satelliteImg from "../../../assets/satellite.png";
import manufactureImg from "../../../assets/manufacture.png";
import healthImg from "../../../assets/health.png";
import LetsTalk from "../../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../../components/resuableComp/Calendly";
import Services from "../../../components/Blockchain/Services";
import whatsAppImg from "../../../assets/whatsapp.png";
import { BlockchainDepinFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/Faq";
import { BlockchainDepinService } from "../../../components/data/ServicesData";
import { BlockchainDepinForecast } from "../../../components/data/forecastData";
import Framework from "../../../components/Framework";
import { BlockchainDepinFramework } from "../../../components/data/frameworkData";


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
            Building a decentralized infrastructure network is no longer a
            challenge. <br />
            Giichi enables businesses to transform their physical infrastructure
            into <br />
            decentralized networks that enhance efficiency, security, and
            transparency.
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
            Building a decentralized infrastructure network is no longer a
            challenge. Giichi enables businesses to transform their physical
            infrastructure into decentralized networks that enhance efficiency,
            security, and transparency.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-6 md:mt-20">
        <Forecast data={BlockchainDepinForecast}/>
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
          As a leading DePIN development company, Giichi offers a comprehensive
          range of services to help businesses harness the power of <br />
          decentralized infrastructure and optimize operational efficiency.
        </p>

       <div>
       <Framework data={BlockchainDepinFramework}/>
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
          Giichi delivers cutting-edge DePIN solutions tailored to various
          industries, helping businesses <br />
          enhance efficiency, security, and transparency through decentralized
          networks.
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
          For businesses looking to unlock the full potential of decentralized
          infrastructure, understanding <br />
          the fundamental components of DePIN (Decentralized Physical
          Infrastructure Networks) is crucial.
        </p>
        <Services data={BlockchainDepinService}/>
      </div>

      {/* connect section */}
      <div>
        <LetsTalk buttonText="Hire Us" />
      </div>

      {/* FAQ Section */}
      <div> <Faq data={BlockchainDepinFaq}/> </div>

      {/* whatsapp image */}
      <a
        href="https://wa.me/9266416198"
        id="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
      >
        <img src={whatsAppImg} alt="WhatsApp" className="" />
      </a>
    </div>
  );
};

export default BlockchainDepin;
