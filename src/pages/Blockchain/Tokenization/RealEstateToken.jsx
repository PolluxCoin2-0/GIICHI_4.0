/* eslint-disable react/prop-types */
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import { Link } from "react-router-dom";
import { RealEstateTokenizationService } from "../../../components/data/ServicesData";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import realEstateTokenBanner from "../../../assets/realEstateTokenBanner.png";
import realEstateTokenFeature from "../../../assets/realEstateTokenFeature.png";

const steps = [
  { id: "01", title: "Asset Structuring & Legal Compliance" },
  { id: "02", title: "Tokenization & Smart Contract Development" },
  { id: "03", title: "Investor Onboarding & Regulatory Verification" },
  { id: "04", title: "Token Distribution & Trading" },
  { id: "05", title: "Asset Management & Revenue Distribution" },
];

const RealEstatetToken = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={realEstateTokenBanner}
        title1="Real Estate"
        title2="Tokenization Service"
        desc="Begin your real estate tokenization journey with Giichi, a leading real estate tokenization company dedicated to turning your vision into reality."
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-12 w-full px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          <img src={realEstateTokenFeature} alt="real-estate-token-feature-image" className="w-[90%]"/>
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            Introduction to Real Estate Tokenization
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6 leading-8">
          Real estate tokenization is the process of converting ownership rights of a physical property into digital tokens on a blockchain. These tokens represent fractional ownership of the asset, allowing investors to buy, sell, and trade real estate more efficiently and securely.
          <br/> <br/>
          By leveraging blockchain technology, tokenization enhances liquidity, reduces transaction costs, and increases accessibility to real estate investments, making it possible for a broader range of investors to participate in the market. It also ensures transparency, security, and efficiency by utilizing smart contracts to automate transactions and ownership transfers.
          <br/> <br/>
         Real estate tokenization is revolutionizing the industry by breaking down barriers and offering a more flexible and inclusive way to invest in property assets.
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
          desc="Explore the world of real estate tokenization and discover how blockchain technology is revolutionizing property investments by enhancing transparency, accessibility, and efficiency."
        />
      </div>

      {/* Real Estate Tokenization Services */}
      <Services
        data={RealEstateTokenizationService}
        heading1="Real Estate "
        heading2=" Tokenization Services"
        desc="Powered by blockchain technology, real estate tokenization development services are redefining how properties are bought, sold, and managed."
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default RealEstatetToken;
