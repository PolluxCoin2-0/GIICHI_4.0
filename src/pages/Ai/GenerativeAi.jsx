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
        desc=" At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
      />

      {/* Generative AI Services */}
      <Services
        data={GenerativeAiService}
        heading1="Services Provided by"
        heading2=" Generative AI in Blockchain"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum animi voluptas voluptates, nam quae aliquid velit quisquam fuga!"
      />

      {/* Industries  */}
      <Industries
        data={BkDevIndustriesData}
        heading1="Industries"
        heading2="We Serve"
        desc="As a leading custom blockchain development company, we leverage different blockchain networks to provide you with the best solutions aligned with your needs."
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default GenerativeAi;
