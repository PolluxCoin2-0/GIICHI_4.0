/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";
import { LuArrowUpRight } from "react-icons/lu";

const FrameworksData = [
  {
    logo: insurance,
    title: "Empowered Copyright Owners",
    description:
      "By reducing reliance on platform providers and intermediaries, blockchain ensures that content creators retain full control over their intellectual property and earnings.",
  },
  {
    logo: insurance,
    title: "Decentralized Payments",
    description:
      "With blockchain, payment collections and ad revenues become more efficient. Smart contracts automate revenue distribution, eliminating unnecessary fees.",
  },
  {
    logo: insurance,
    title: "Greater Transparency",
    description:
      "The decentralized nature of blockchain enhances transparency in content ownership and lifecycle tracking, ensuring fair use and accountability.",
  },
 ];

const FrameworksCard = ({ logo, title, description }) => {
  return (
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="flex flex-row justify-between items-center ">
        <img src={logo} alt={title} className="w-12" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};

const Entertainment = () => {
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
              Blockchain In Media And{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Entertainment{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-[17px] font-semibold leading-snug">
          Secure digital content, prevent piracy, and enhance transparency <br/>
          across content creation and distribution. Revolutionizing rights <br/>management and monetization with blockchain technology.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain In Media And Entertainment{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Secure digital content, prevent piracy, and enhance transparency across content creation and distribution. Revolutionizing rights management and monetization with blockchain technology.
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
          Media & Entertainment Industry: Ripe for Blockchain Adoption
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-7">
          The media and entertainment industry faces challenges like content commoditization, widespread piracy, and copyright infringements. Many users hesitate to pay for premium content, leading to revenue leakage despite new streaming models.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-7 ">
          Blockchain technology offers a solution by reducing IP infringements, ensuring transparent content ownership, and enabling seamless monetization through smart contracts. At Giichi IT Solutions, we leverage blockchain to transform digital rights management, secure content distribution, and drive revenue growth for creators and businesses.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-20  mb-24">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Impact of Blockchain in Media <br/>
        <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl"> & Entertainment</span>
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[18px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Blockchain is set to revolutionize the media and entertainment industry by offering:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64 ">
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

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Entertainment;
