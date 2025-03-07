/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import { AiMlSolutionService } from "../../components/data/ServicesData";
import { aiMlIndustriesData } from "../../components/data/industriesData";
import ProductDevPhases from "../../components/CommonComponent/ProductDevPhases";
import Services from "../../components/CommonComponent/Services";
import Industries from "../../components/CommonComponent/Industries";
import BannerContent from "../../components/CommonComponent/BannerContent";

const steps = [
  { id: "01", title: "Consultation Phase" },
  { id: "02", title: "Requirement Analysis" },
  { id: "03", title: "Development Phase" },
  { id: "04", title: "Testing & Deployment" },
  { id: "05", title: "Maintenance & Support" },
];

const AiSolutions = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={scDevBannerImg}
        title1="AI/ML Solutions"
        title2=""
        desc="AT Giichi IT Solutions, We maximize your business efficiency and productivity with our cutting-edge AI/ML development services and solutions!"
      />

      {/* AI  Services */}
      <Services
        data={AiMlSolutionService}
        heading1="Transform the crypto landscape "
        heading2="with advanced AI development"
        desc="At Giichi IT Solutions, we harness the power of AI and ML to revolutionize the crypto world, transforming the way it operates for enhanced efficiency and innovation."
      />

      {/* Industries  */}
      <Industries
        data={aiMlIndustriesData}
        heading1="Industries"
        heading2="We Serve"
        desc=" As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best AI solutions
          aligned with your needs."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="AI/ML Development Process"
        desc="At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
      />

      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default AiSolutions;
