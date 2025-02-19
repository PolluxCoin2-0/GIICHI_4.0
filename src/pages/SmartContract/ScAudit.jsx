/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";
import { BsClipboardDataFill } from "react-icons/bs";

const FrameworksData = [
  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "Our team specializes in designing scalable and resilient decentralized networks that seamlessly integrate with physical infrastructure. Using best-in-class blockchain technology, we create systems that enhance communication between devices and nodes.",
  },
  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "Navigating the complexities of decentralized infrastructure can be challenging. Our DePIN consulting services provide strategic insights to help businesses implement the right DePIN solutions efficiently and effectively.",
  },

  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "Giichi’s DePIN tokenization service enables businesses to convert physical assets into digital tokens on the blockchain, ensuring secure transactions while adhering to regulatory compliance.",
  },
  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "We build custom DePIN marketplaces that connect digital infrastructure providers, investors, and users through a decentralized platform designed for scalability and seamless user experience.",
  },
  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "Our API development services allow seamless integration of decentralized functionalities into existing applications, providing real-time data access and interoperability between DePIN systems.",
  },
  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "Security is a top priority. Giichi performs rigorous DePIN audits to identify potential vulnerabilities, implement robust security measures, and safeguard decentralized networks against cyber threats.",
  },

  {
    logo: insurance,
    title: "Pre-Audit Consultation",
    description:
      "We develop self-executing smart contracts that automate agreements, enhance transparency, and eliminate the need for intermediaries in DePIN ecosystems.",
  },
  {
    logo: insurance,
    title: "DePIN Asset Management",
    description:
      "Giichi’s decentralized asset management solutions enable businesses to track, control, and optimize the performance of their physical and digital assets across decentralized infrastructure networks.",
  },
 
];
const FrameworksCard = ({ logo, title, description }) => {
    return (
      <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
        <div className="flex flex-row justify-between">
          <img src={logo} alt={title} className="w-20" />
        </div>
        <p className="text-white pt-4">{title}</p>
        <p className="text-white text-opacity-50 pt-2">{description}</p>
      </div>
    );
  };


const ScAudit = () => {
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
              Smart Contract{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
             Audit{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-lg font-semibold leading-snug">
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

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[50%]">{/* img */}</div>

        <div className="w-full md:w-[50%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4  ">
          Why do you Need Smart Contract Security Audit?
          </p>
          <ul className="">
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70 "> 
                <span className="text-green font-bold text-2xl">&#10003; </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laborum.
            </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate!
           </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sit?
            </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eos!
            </li>
            <li className="pt-3 text-[17px] leading-snug text-white text-opacity-70">
            <span className="text-green font-bold text-2xl">&#10003; </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, animi.
            </li>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Services */}
      <div className="mt-12 md:mt-24">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
        Smart Contract Auditing-  <br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
          The Highlights
          </span>
        </p>
        <p className="text-white text-opacity-40 pt-6 text-center">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta?
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-6 md:gap-8 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
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
    

      {/* why your business need smart contract development */}
      <div className="pt-12 pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
        Projects Requiring Smart Contract Audit</p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          The existing educational system is beset with the following
          inefficiencies that lead to an <br />
          unavoidable Blockchain application in education.
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">DeFi Platforms</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                Smart contracts enable parties to enter into agreements<br/> 
                while eliminating third-party involvement.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
              <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">
              Token Issuance
              </p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                The execution of smart contracts takes place simultaneously
                across <br /> participating computers, once the required
                criteria are satisfied.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">NFT Marketplaces</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                The information in the contract is visible to all participants{" "}
                <br />
                in the blockchain network, thereby fostering <br />
                an environment of trust.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">Blockchain</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                The distributed ledger is impregnable and immune to alterations,{" "}
                <br />
                thus enhancing the security paradigm.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">Decentralized Exchanges</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                Eliminate human error by automating record-keeping, <br />
                storage, and retrieval.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>

          {/* step 6*/}
          <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-xl md:text-3xl exo-font">Solution for Supply Chain</p>
              <p className="text-white text-[10px] md:text-[14px] text-opacity-70 exo-font pt-0 md:pt-2">
                The distributed ledger is impregnable and immune to alterations,{" "}
                <br />
                thus enhancing the security paradigm.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="hidden md:block"><BsClipboardDataFill color="#ffffff" size={36} /></p>
            <p className="block md:hidden"><BsClipboardDataFill color="#ffffff"  /></p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Smart Contract Dev Process */}
      <div className="mt-12 md:mt-20 relative">
  <div className="hidden md:block spotlight spotlight-left"></div>
  <div className="hidden md:block spotlight2 spotlight-right"></div>
  <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
  Our Smart Contract Security  <br />
    <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
    Audit Process
    </span>
  </p>
  <p className="text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
    We devise a coherent roadmap to navigate your smart contracts development journey
  </p>
  <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative">
    {/* Dotted Line */}
    {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

    {/* Step 1 */}
    <div className="flex flex-row space-x-12 items-center ml-20 md:ml-[400px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Analyzing the Requirements</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        01
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[1000px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Creating the Technical Design</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        02
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Proceeding with the Development</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Deployment and Testing</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        04
      </div>
    </div>

     {/* Step 5 */}
     <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Proceeding with the Development</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        05
      </div>
    </div>

     {/* Step 6 */}
     <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Deployment and Testing</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        06
      </div>
    </div>

     {/* Step 7 */}
     <div className="flex flex-row space-x-12 items-center  ml-20 md:ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-lg md:text-3xl exo-font">Proceeding with the Development</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[12px] md:text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-xl md:text-4xl font-bold border-white border-4 w-10 md:w-20 h-10 md:h-20 p-2 absolute left-0 md:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        07
      </div>
    </div>
  </div>
</div>


      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default ScAudit;
