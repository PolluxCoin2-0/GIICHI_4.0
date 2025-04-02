import Faq from "../../../components/resuableComponent/Faq";
import { NftMarketplaceFaq } from "../../../components/data/faqsData";
import nftMarketplaceFeatureImg from "../../../assets/nftMarketplaceFeature.png";
import nftMarketplaceBannerImg from "../../../assets/nftMarketplaceBanner.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";

const NftMarketplace = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* NFT Marketplace */}
      <BannerContent
        img={nftMarketplaceBannerImg}
        title1="NFT Marketplace"
        title2="Development Company"
        desc="An NFT marketplace is a decentralized platform that allows users to buy, sell, and trade digital assets, such as artwork, collectibles, music, and more, using blockchain technology. "
      />

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <img src={nftMarketplaceFeatureImg} alt="" className="" />
        </div>
        <div className="w-full lg:w-[60%] ">
          <p
            className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[42px] font-semibold pt-4 tracking-tight"
            style={{ lineHeight: "1.4" }}
          >
            Comprehensive NFT Marketplace Solutions
          </p>
          <p
            className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-70 pt-6 leading-6 text-justify hyphens-auto tracking-wider"
            style={{ lineHeight: "1.7" }}
          >
            Giichi is a leading NFT marketplace development company, offers
            unparalleled experience and expertise in creating high-performance,
            scalable marketplaces where users can mint, buy, sell, and trade
            NFTs. <br /> <br />
            With features like auction systems, royalty management, and
            multi-chain support, NFT marketplaces enable creators, collectors,
            and investors to engage in a transparent and efficient digital asset
            ecosystem. The customization and scalability of these platforms make
            them ideal for businesses looking to tap into the booming NFT
            market. <br /> <br />
            We specialize in building NFT marketplaces tailored to various
            business sectors. Our services will elevate your brand with unique
            digital collectibles. 
          </p>
          <ul className=" text-white mt-6">
            <div className="flex flex-row items-center">
              <span className="w-2 h-2 bg-green mr-4 inline-block"></span>
              <li>Ready-to-Launch Solutions</li>
            </div>
            <div className="flex flex-row items-center">
              <span className="w-2 h-2 bg-green mr-4 inline-block mt-2"></span>
              <li className="pt-2">Reduced Fraud Risk</li>
            </div>
            <div className="flex flex-row items-center">
              <span className="w-2 h-2 bg-green mr-4 inline-block mt-2"></span>
              <li className="pt-2">Seamless User Experience</li>
            </div>
            <div className="flex flex-row items-center">
              <span className="w-2 h-2 bg-green mr-4 inline-block mt-2"></span>
              <li className="pt-2">Fully Customizable & Scalable</li>
            </div>
          </ul>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-32 mb-20">
        <Faq data={NftMarketplaceFaq} />
      </div>
    </div>
  );
};
export default NftMarketplace;
