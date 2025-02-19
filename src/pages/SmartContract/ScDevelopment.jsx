/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { BsClipboardDataFill } from "react-icons/bs";
import { GrDocumentPerformance } from "react-icons/gr";
import avlancheImg from "../../assets/avlanche.png";
import cosmosDkImg from "../../assets/cosmosDk.png";
import polkadotImg from "../../assets/polkadot.png";
import arbitrumImg from "../../assets/arbitrum.png";
import parityImg from "../../assets/parity.png";
import opStackImg from "../../assets/opStack.png";
import Framework from "../../components/Framework";
import { ScAuditFramework } from "../../components/data/frameworkData";


const ScData = [
  {
    logo: avlancheImg,
    title: " Avalanche Subnets ",
    description:
      " Custom blockchain networks designed for infinite scalability, allowing businesses to define their own sovereign rules while benefiting from Avalanche’s consensus.",
  },
  {
    logo: cosmosDkImg,
    title: " Cosmos SDK ",
    description:
      "An open-source framework for building interoperable multi-asset blockchains, supporting both public Proof-of-Stake (PoS) and permissioned Proof-of-Authority (PoA) networks.",
  },
  {
    logo: polkadotImg,
    title: " Polkadot Parachains",
    description:
      "A permissionless framework for launching custom Layer 2 and Layer 3 chains within the Polkadot ecosystem, enabling cross-chain communication and scalability.",
  },
  {
    logo: arbitrumImg,
    title: " Arbitrum Orbit ",
    description:
      "A flexible platform for deploying custom Layer 2 and Layer 3 chains, offering enhanced scalability with Ethereum compatibility.",
  },
  {
    logo: parityImg,
    title: " Parity Substrate ",
    description:
      "A modular and highly efficient framework by Parity Technologies, designed for building flexible and scalable blockchain architectures.",
  },
  {
    logo: opStackImg,
    title: "  OP Stack ",
    description:
      "A standardized development framework for launching Layer 2 blockchains with production-ready infrastructure, similar to OP Mainnet.",
  },
];

const ScCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 ">
      <div className="flex flex-row justify-between ">
        <img src={logo} alt={title} className="w-12" />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const ScDevelopment = () => {
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
              Development{" "}
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
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
            Smart Contracts are the Future
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 px-0 xl:px-28  leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum?
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* How does a Smart Contract Work */}
      <div className="">
        <p className="text-white text-5xl font-bold text-center">
          How does a <br />
          <span className="text-[#239400] md:text-4xl lg:text-6xl font-bold  text-center">
            Smart Contract Works?
          </span>
        </p>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          Our Smart Contract Development Services
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
          The implementation of blockchain in media and entertainment can bring
          a significant change in the industry by enabling the following:
        </p>

        <div>
        <Framework data={ScAuditFramework}/>
        </div>
      </div>

      {/* why your business need smart contract development */}
      <div className="pt-12 pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
          Why your Business need Smart Contract
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Application Development Services?
          </span>{" "}
        </p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          The existing educational system is beset with the following
          inefficiencies that lead to an <br />
          unavoidable Blockchain application in education.
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Disintermediation</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Smart contracts enable parties to enter into agreements <br />
                while eliminating third-party involvement.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Real-Time Execution
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                The execution of smart contracts takes place simultaneously
                across <br /> participating computers, once the required
                criteria are satisfied.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Transparency</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                The information in the contract is visible to all participants{" "}
                <br />
                in the blockchain network, thereby fostering <br />
                an environment of trust.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Security</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                The distributed ledger is impregnable and immune to alterations,{" "}
                <br />
                thus enhancing the security paradigm.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Accuracy</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Eliminate human error by automating record-keeping, <br />
                storage, and retrieval.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 6*/}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Financial Saving</p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                The distributed ledger is impregnable and immune to alterations,{" "}
                <br />
                thus enhancing the security paradigm.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>
        </div>
      </div>

      {/* Smart contract dev on various blokchain platforms */}
      <div>
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Smart Contract Development on <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl text-center">
            Various Blockchain Platforms
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64">
          {ScData.map((data, index) => (
            <ScCard
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>

      {/* Smart Contract Dev Process */}
      <div className="mt-20 relative">
  <div className="hidden md:block spotlight spotlight-left"></div>
  <div className="hidden md:block spotlight2 spotlight-right"></div>
  <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
    Our Smart Contract <br />
    <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
      Development Process
    </span>
  </p>
  <p className="text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
    We devise a coherent roadmap to navigate your smart contracts development journey
  </p>
  <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative mr-28">
    {/* Dotted Line */}
    {/* <div className="absolute left-1/2 top-0 h-full border-l-2 border-dotted border-white "></div> */}

    {/* Step 1 */}
    <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Analyzing the Requirements</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        01
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex flex-row space-x-12 items-center ml-[1000px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Creating the Technical Design</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        02
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex flex-row space-x-12 items-center ml-[350px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Proceeding with the Development</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        03
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
      <div className="">
        <p className="text-white text-3xl exo-font">Deployment and Testing</p>
        <p className="pt-2">
          <ul className="list-disc ml-6">
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
            <li className="text-white text-[17px] text-opacity-80 exo-font ">Comprehend business requirements</li>
          </ul>
        </p>
      </div>
      <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
        04
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

export default ScDevelopment;
