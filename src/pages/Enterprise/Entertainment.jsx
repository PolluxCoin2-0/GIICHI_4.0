/* eslint-disable react/prop-types */
import MediaBannerImg from "../../assets/MediaBanner.png";
import MediaFeatureImg from "../../assets/MediaFeature.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import Framework from "../../components/Framework";
import { EntertainmentFramework } from "../../components/data/frameworkData";

const Entertainment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={MediaBannerImg}
          alt="media-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain In Media &{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Entertainment{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-[17px] xl:text-[15px] 2xl:text-[17px] font-semibold leading-snug">
          Secure digital content, prevent piracy, and enhance transparency <br/>
          across content creation and distribution. Revolutionizing rights <br/>management and monetization with blockchain technology.
          </p>
          {/* Button */}
          <CalendlyButton />
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
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-20 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">
          <img src={MediaFeatureImg} alt="media-feature-image" className="w-full object-contain"/>
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 ">
          Media & Entertainment Industry: Ripe for Blockchain Adoption
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 leading-7 text-justify hyphens-auto">
          The media and entertainment industry faces challenges like content commoditization, widespread piracy, and copyright infringements. Many users hesitate to pay for premium content, leading to revenue leakage despite new streaming models.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 leading-7 text-justify hyphens-auto">
          Blockchain technology offers a solution by reducing IP infringements, ensuring transparent content ownership, and enabling seamless monetization through smart contracts. At Giichi IT Solutions, we leverage blockchain to transform digital rights management, secure content distribution, and drive revenue growth for creators and businesses.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div className="relative mt-8 mb-12">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Impact of Blockchain in Media <br/>
        <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl"> & Entertainment</span>
        </p>
        <p className="hidden md:block text-sm md:text-[10px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        Blockchain is set to revolutionize the media and entertainment industry by offering:
        </p>

       <div>
       <Framework data={EntertainmentFramework}/>
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
