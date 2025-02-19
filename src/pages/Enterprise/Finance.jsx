/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import Faq from "../../components/Faq";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";
import depinArchImg from "../../assets/depinArch.png";

const FrameworksData = [
  {
    logo: depinArchImg,
    title: "Capital Markets",
    description:
      "Our team specializes in designing scalable and resilient decentralized networks that seamlessly integrate with physical infrastructure. Using best-in-class blockchain technology, we create systems that enhance communication between devices and nodes.",
  },
  {
    logo: depinArchImg,
    title: "Payments and Remittance",
    description:
      "Navigating the complexities of decentralized infrastructure can be challenging. Our DePIN consulting services provide strategic insights to help businesses implement the right DePIN solutions efficiently and effectively.",
  },

  {
    logo: depinArchImg,
    title: "DePIN Tokenization Service",
    description:
      "Giichi’s DePIN tokenization service enables businesses to convert physical assets into digital tokens on the blockchain, ensuring secure transactions while adhering to regulatory compliance.",
  },
  {
    logo: depinArchImg,
    title: "DePIN Marketplace Development",
    description:
      "We build custom DePIN marketplaces that connect digital infrastructure providers, investors, and users through a decentralized platform designed for scalability and seamless user experience.",
  },
  {
    logo: depinArchImg,
    title: "DePIN API Development",
    description:
      "Our API development services allow seamless integration of decentralized functionalities into existing applications, providing real-time data access and interoperability between DePIN systems.",
  },
  {
    logo: depinArchImg,
    title: "DePIN Audit and Security",
    description:
      "Security is a top priority. Giichi performs rigorous DePIN audits to identify potential vulnerabilities, implement robust security measures, and safeguard decentralized networks against cyber threats.",
  },
];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient">
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="" />
      </div>
      <p className="text-white pt-4">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const Finance = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain Financial{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Services{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-[18px] font-semibold leading-snug">
            With expertise in 40+ blockchain protocols, Giichi IT Solutions{" "}
            <br />
            is driving the web3 revolution with cutting-edge <br />
            blockchain development services.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Development Company{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            With expertise in 40+ blockchain protocols, Giichi IT Solutions is
            driving the web3 revolution with cutting-edge blockchain development
            services.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain supply chain forecast */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
            Blockchain Applications in Finance: Driving the Change
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain finance use cases challenges  */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
          Use Cases for Blockchain in <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Financial Services
          </span>
        </p>

        <p className="text-white text-opacity-40 pt-6 text-center">
          As a leading DePIN development company, Giichi offers a comprehensive
          range of services to help businesses harness the power of <br />
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

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
          Key Elements of Blockchain: Reasons to Integrate
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Blockchain in FinTech Industry
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-xs lg:text-[15px] text-white text-center text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Our Blockchain Supply Chain Solutions are brimmed with user-friendly
          and advanced features to help businesses
          <br />
          manage their supply chain operations without any hassle.
        </p>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 xl:space-x-6 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Cryptographic Security
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
               bottom-12 md:bottom-8 p-4 md:p-2 lg:md:p-4 left-0 right-0 text-center "
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Distributed Ledger Architecture
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>
          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[33%] group relative ">
            <img src={insurance} alt="" className="w-20 group-hover:hidden" />
            <p className="text-white pt-4 text-center group-hover:hidden">
              Network Consensus Mechanism
            </p>
            <p
              className=" text-white text-opacity-70 pt-4 text-sm md:text-[8px] lg:text-xs xl:text-sm opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-150 absolute 
                bottom-12 md:bottom-8 left-0 right-0 text-center p-4 md:p-2 lg:md:p-4"
            >
              The intuitive reporting dashboard provides real-time access to
              balance reports and transaction records, enabling complete
              transparency and well-informed decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
      {/* FAQ SECTION */}
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Finance;
