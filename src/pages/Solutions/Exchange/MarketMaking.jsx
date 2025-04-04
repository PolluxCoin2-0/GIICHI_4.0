import BannerContent from "../../../components/CommonComponent/BannerContent";
import Framework from "../../../components/CommonComponent/Framework";
import { MarketMakingExchangeFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MarketMakingExchangeFaq } from "../../../components/data/faqsData";
import marketMakingBannerImg from "../../../assets/marketMakingBanner.png";
import marketMakingFeatureImg from "../../../assets/marketMakingFeature.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const MarginMaking = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={marketMakingBannerImg}
        title1="Crypto Market "
        title2="Making Services"
        desc="Enhancing Your Strategic Expansion in the Digital Asset Space"
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={marketMakingFeatureImg} alt="market making " className="" />
        </div>

        <div className="w-full lg:w-[50%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Leading Innovators in Crypto Market Making
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            Years of Expertise in Creating Sustainable Markets <br /> <br />
            Crypto market making optimizes trading platforms by ensuring deep
            liquidity, maintaining tight bid-ask spreads, and stabilizing
            pricing. Market makers play a crucial role in strengthening order
            books, improving trade execution, and fostering user confidence.{" "}
            <br /> <br />
            At Giichi, we are recognized as a top-tier crypto market maker,
            providing advanced liquidity solutions to enhance market efficiency.
            Our strategic market-making services and automated crypto
            market-making software empower digital assets and trading platforms
            to excel in the competitive crypto landscape.
            <br /> <br />
          </p>
          {/* button to connect on whatsapp */}
          <div className="">
           <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={MarketMakingExchangeFramework}
          heading1="Crypto Market Making"
          heading2="Services"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={MarketMakingExchangeFaq} />
      </div>
    </div>
  );
};

export default MarginMaking;
