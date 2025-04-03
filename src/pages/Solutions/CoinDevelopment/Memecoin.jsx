/* eslint-disable react/no-unescaped-entities */
import Framework from "../../../components/CommonComponent/Framework";
import { MemecoinFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MemecoinFaq } from "../../../components/data/faqsData";
import Offerings from "../../../components/CommonComponent/Offerings";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import memeCoinBannerImg from "../../../assets/memeCoinBanner.png";

const Memecoin = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Crypto Token Development */}
      <BannerContent
        img={memeCoinBannerImg}
        title1="Meme Coin"
        title2="Development Company"
        desc="Launch a market-ready meme coin with our blockchain expertise! We design secure, high-performance meme coins with structured tokenomics, automated smart contracts, and seamless liquidity integration for a smooth and successful launch."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.5" }}
          >
            Leverage the Growing Popularity of Meme Coin Development
          </p>
          <p className="text-white text-lg lg:text-xl font-semibold pt-4 tracking-tight">
            Can a Meme Coin Be More Than Just Hype?
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-4 leading-6 text-justify hyphens-auto mt-6"
            style={{ lineHeight: "1.7" }}
          >
            In today's evolving financial landscape, meme coins have transcended
            internet humor, merging blockchain innovation, community-driven
            momentum, and high-frequency trading to create valuable digital
            assets. Once seen as speculative trends, meme coins now command
            significant liquidity and institutional attention, proving that
            viral culture—when strategically engineered—can achieve long-term
            market relevance. <br /> <br />
            As a leading meme coin development company, we craft
            enterprise-grade blockchain solutions with robust smart contract
            architecture and efficient token economies. Whether you're launching
            the next viral sensation or a community-driven digital asset, our
            expertise ensures a secure, optimized, and impactful market entry.
          </p>
        </div>
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Memecoin Development experts TODAY!" />

      {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="mt-10 3xl:mt-32">
        <Framework
          data={MemecoinFramework}
          heading1=""
          heading2="Our Meme Coin Development Services"
          desc="As a top-tier meme coin development company, we provide end-to-end solutions to ensure your successful entry into the meme coin market."
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={MemecoinFaq} />
      </div>
    </div>
  );
};

export default Memecoin;
