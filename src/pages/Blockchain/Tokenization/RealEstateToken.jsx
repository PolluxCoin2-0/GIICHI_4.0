/* eslint-disable react/prop-types */
import scDevBannerImg from "../../../assets/ScDevBanner.png";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { Link } from "react-router-dom";
import { RealEstateTokenizationService } from "../../../components/data/ServicesData";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";

const steps = [
  { id: "01", title: "Asset Valuation" },
  { id: "02", title: "Tokenization" },
  { id: "03", title: "Token Offering" },
  { id: "04", title: "Secondary Market" },
  { id: "05", title: "Income Generation" },
];

const RealEstatetToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={scDevBannerImg}
        title1="Real Estate Tokenization "
        title2="Service"
        desc=" At Giichi IT Solutions, we specialize in writing secure, efficient, 
          and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms."
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            Introduction to Real Estate Tokenization
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur, architecto soluta hic nisi aliquid dolore deleniti,
            explicabo cumque odit itaque dolor voluptatum dicta nemo
            perspiciatis magnam voluptas, vero laborum.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga ad
            laboriosam aspernatur velit nam aliquid blanditiis aut unde nemo.
          </p>
          {/* button for a free demo */}
          <Link to="/contact-us">
            <button
              type="button"
              className="mt-8 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Request a Free Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Blockchain Supply Chain Network */}
      <div>
        <ProductDevPhases
          data={steps}
          heading="The Process of Real Estate Tokenization"
          desc="  At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
        />
      </div>

      {/* Real Estate Tokenization Services */}
      <Services
        data={RealEstateTokenizationService}
        heading1="Real Estate "
        heading2=" Tokenization Services"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum 
          animi voluptas voluptates, nam quae aliquid velit quisquam fuga!"
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default RealEstatetToken;
