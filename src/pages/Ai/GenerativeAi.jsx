/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import CalendlyButton from "../../components/resuableComponent/Calendly";
import { GenerativeAiService } from "../../components/data/ServicesData";
import { BkDevIndustriesData } from "../../components/data/industriesData";
import ProductDevPhases from "../../components/CommonComponent/ProductDevPhases";
import Services from "../../components/CommonComponent/Services";
import Industries from "../../components/CommonComponent/Industries";

const steps = [
  { id: "01", title: "Define the Goal & Gather Data " },
  { id: "02", title: "Train the AI Model" },
  { id: "03", title: "Fine-Tune & Optimize" },
  { id: "04", title: "Deploy the Model" },
  { id: "05", title: "Monitor & Improve" },
];

const GenerativeAi = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={scDevBannerImg}
          alt="smart-contract-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-72 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
              Generative AI Development
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
              {" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] font-semibold leading-snug">
            Generative AI development focuses on creating models that can <br />
            generate new content, such as text, images, music, or code, by{" "}
            <br /> learning patterns from existing data.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Generative AI Development
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Generative AI development focuses on creating models that can
            generate new content, such as text, images, music, or code, by
            learning patterns from existing data.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Blockchain Supply Chain Network */}
         <ProductDevPhases 
          data={steps} 
          heading="Generative AI Development Process"
          desc=" At Giichi IT Solutions, we help enterprises achieve business
          automation with advanced, secure, and efficient smart contract
          solutions."/>
      {/* Generative AI Services */}
    
        <Services 
        data={GenerativeAiService}
        heading1="Services Provided by"
        heading2=" Generative AI in Blockchain"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum animi voluptas voluptates, nam quae aliquid velit quisquam fuga!" />
      {/* Industries  */}
         <Industries 
          data={BkDevIndustriesData}
          heading1="Industries" 
          heading2="We Serve"
          desc="As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs."/>

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default GenerativeAi;
