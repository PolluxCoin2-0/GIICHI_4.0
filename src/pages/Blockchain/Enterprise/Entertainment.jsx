/* eslint-disable react/prop-types */
import MediaBannerImg from "../../../assets/MediaBanner.png";
import MediaFeatureImg from "../../../assets/MediaFeature.png";
import Framework from "../../../components/CommonComponent/Framework";
import { EntertainmentFramework } from "../../../components/data/frameworkData";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const Entertainment = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={MediaBannerImg}
        title1="Blockchain In Media &"
        title2="Entertainment"
        desc=" Secure digital content, prevent piracy, and enhance transparency across content creation and distribution. Revolutionizing rights management and monetization with blockchain technology."
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-20 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
      <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>

        <div className="w-full md:w-[40%]">
          <img
            src={MediaFeatureImg}
            alt="media-feature-image"
            className="w-full object-contain"
          />
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 ">
            Media & Entertainment Industry: Ripe for Blockchain Adoption
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 leading-7 text-justify hyphens-auto">
            The media and entertainment industry faces challenges like content
            commoditization, widespread piracy, and copyright infringements.
            Many users hesitate to pay for premium content, leading to revenue
            leakage despite new streaming models.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 leading-7 text-justify hyphens-auto">
            Blockchain technology offers a solution by reducing IP
            infringements, ensuring transparent content ownership, and enabling
            seamless monetization through smart contracts. At Giichi IT
            Solutions, we leverage blockchain to transform digital rights
            management, secure content distribution, and drive revenue growth
            for creators and businesses.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/*Entertainment Framework*/}
      <Framework
        data={EntertainmentFramework}
        heading1="Impact of Blockchain in Media"
        heading2="& Entertainment"
        desc=" Blockchain is set to revolutionize the media and entertainment industry by offering:"
      />

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Entertainment;
