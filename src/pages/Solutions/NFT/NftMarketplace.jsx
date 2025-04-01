import { Link } from "react-router-dom";
import Faq from "../../../components/resuableComponent/Faq";
import { NftMarketplaceFaq } from "../../../components/data/faqsData";

const NftMarketplace = () => {
  return (
    <div>
      {/* NFT Development */}
      <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-4 tracking-wide">
            NFT Marketplace{" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[53px] font-semibold pt-6 tracking-wide">
            Development Company
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
          An NFT marketplace is a decentralized platform that allows users to buy, sell, and trade digital assets, such as artwork, collectibles, music, and more, using blockchain technology. These platforms provide a secure environment where non-fungible tokens (NFTs) can be minted, listed, and transacted.
          </p>
          <ul className="list-disc text-white mt-4 p-4">
            <li>Ready-to-Launch Solutions</li>
            <li className="pt-2">Reduced Fraud Risk</li>
            <li className="pt-2">Seamless User Experience</li>
            <li className="pt-2">Fully Customizable & Scalable</li>
          </ul>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-4">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[50%]"></div>
      </div>

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Comprehensive NFT Marketplace Solutions
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider">
          Giichi is a leading NFT marketplace development company, offers unparalleled experience and expertise in creating high-performance, scalable marketplaces where users can mint, buy, sell, and trade NFTs.  <br/> <br/>
          We specialize in building NFT marketplaces tailored to various business sectors. Our services will elevate your brand with unique digital collectibles. <br/> <br/>
          With features like auction systems, royalty management, and multi-chain support, NFT marketplaces enable creators, collectors, and investors to engage in a transparent and efficient digital asset ecosystem. The customization and scalability of these platforms make them ideal for businesses looking to tap into the booming NFT market.
          </p>
        </div>
      </div>
      
      {/* FAQ SECTION */}
      <div className="mt-24 mb-20">
        <Faq data={NftMarketplaceFaq} />
      </div>
    </div>
  );
};
export default NftMarketplace;
