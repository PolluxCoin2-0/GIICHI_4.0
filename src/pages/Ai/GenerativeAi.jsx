/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import { GenerativeAiService } from "../../components/data/ServicesData";
import { BkDevIndustriesData } from "../../components/data/industriesData";
import ProductDevPhases from "../../components/CommonComponent/ProductDevPhases";
import Services from "../../components/CommonComponent/Services";
import Industries from "../../components/CommonComponent/Industries";
import BannerContent from "../../components/CommonComponent/BannerContent";

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
      <BannerContent
        img={scDevBannerImg}
        title1="Generative AI Development"
        title2=""
        desc="Generative AI development focuses on creating models that can generate new content, such as text, images, music, or code, by learning patterns from existing data."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Generative AI Development Process"
        desc="Our comprehensive generative AI development process equips businesses with powerful GenAI solutions that drive innovation and enhance operational efficiency."
      />

      {/* Generative AI Services */}
      <Services
        data={GenerativeAiService}
        heading1="Services Provided by"
        heading2=" Generative AI in Blockchain"
        desc="Generative AI enhances blockchain by optimizing smart contract development, automating code generation, improving security through anomaly detection, and enabling AI-driven data insights."
      />

      {/* Industries  */}
      <Industries
        data={BkDevIndustriesData}
        heading1="Industries"
        heading2="We Serve"
        desc=""
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default GenerativeAi;
