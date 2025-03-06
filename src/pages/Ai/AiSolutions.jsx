/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import { AiMlSolutionService } from "../../components/data/ServicesData";
import { BkDevIndustriesData } from "../../components/data/industriesData";
import ProductDevPhases from "../../components/CommonComponent/ProductDevPhases";
import Services from "../../components/CommonComponent/Services";
import Industries from "../../components/CommonComponent/Industries";
import BannerContent from "../../components/CommonComponent/BannerContent";

const steps = [
  { id: "01", title: "Data Preparation" },
  { id: "02", title: "Model Development" },
  { id: "03", title: "Model Evaluation" },
  { id: "04", title: "Deployment" },
  { id: "05", title: "Monitoring & Improvement" },
];

const AiSolutions = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
     <BannerContent
      img={scDevBannerImg}
      title1="AI/ML Solutions"
      title2=""
      desc=" At Giichi IT Solutions, we specialize in writing secure, efficient, 
          and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms."/>

      {/* AI  Services */}
        <Services 
        data={AiMlSolutionService}
        heading1="Revolutionize the Crypto World"
        heading2="with AI Development" 
        desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis voluptatum animi voluptas voluptates, nam quae aliquid velit quisquam fuga!"/>

      {/* Industries  */}
         <Industries data={BkDevIndustriesData}
          heading1="Industries"
          heading2="We Serve" 
          desc=" As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs."/>

      {/* Blockchain Supply Chain Network */}
        

          <ProductDevPhases 
          data={steps}
          heading="AI/ML Development Process" 
          desc="  At Giichi IT Solutions, we help enterprises achieve business
          automation with advanced, secure, and efficient smart contract
          solutions."/>
      {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default AiSolutions;
