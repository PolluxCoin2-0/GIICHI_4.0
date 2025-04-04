/* eslint-disable react/no-unescaped-entities */
import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainConsultingBannerImg from "../../../assets/bkConsultingBannerImg.png";
import BlockchainConsultingFeatureImg from "../../../assets/bkConsultingFeature.png";
import Services from "../../../components/CommonComponent/Services";
import { BlockchainConsultingService } from "../../../components/data/ServicesData";
import Framework from "../../../components/CommonComponent/Framework";
import { BlockchainConsultingFramework } from "../../../components/data/frameworkData";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import { clientData } from "../../../components/data/clientData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { blockchainConsultingSteps } from "../../../components/data/productDevPhases";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const BlockchainConsulting = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainConsultingBannerImg}
        title1="Blockchain"
        title2="Consulting Company"
        desc="Allow our team of knowledgeable blockchain experts to assist companies in realizing the full potential of blockchain technology and putting it into practice correctly to reap its advantages."
      />

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
      <div className="w-full lg:w-[40%] relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <img src={BlockchainConsultingFeatureImg} alt="Blockchain Consulting Feature Image" className=""/>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full lg:w-[60%]">
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight">
          Skilled Blockchain Advisors at Your Disposal
        </p>
        <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto md:text-start md:hyphens-none tracking-wider" style={{ lineHeight: "1.7" }}>
          Giichi is a leading blockchain consulting company, empowering businesses with cutting-edge blockchain solutions that maximize the technology's potential for growth and innovation. <br/><br/>
          Blockchain is a transformative network, offering trust, transparency, and security—features that drive significant impact across industries. By integrating blockchain into business strategies, companies can unlock new opportunities and turn their goals into success stories.  
          As a renowned blockchain consulting firm, we have a team of expert blockchain consultants who continuously research, develop, and test blockchain ecosystems. Their dedication ensures innovative solutions that seamlessly integrate blockchain architecture into businesses, driving efficiency and competitive advantage.  
        </p>
        {/* button to connect on whatsapp */}
        <div className="">
        <ButtonFreeDemo/>
        </div>
      </motion.div>
    </div>

      {/* Blockchain Consulting Services */}
      <Services
        data={BlockchainConsultingService}
        heading1="Our Blockchain"
        heading2="Consulting Services"
        desc="Our blockchain consulting and development services are designed to offer strategic insights on seamlessly integrating blockchain technology into businesses, maximizing their efficiency and growth potential."
      />

      {/* Top Benefits of blockchain development company */}
      <Framework
        data={BlockchainConsultingFramework}
        heading1="Top Benefits of Blockchain"
        heading2="Consulting Company"
        desc="Discover the incredible benefits your business can gain from our expert blockchain consultants."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={blockchainConsultingSteps}
        heading="Blockchain Consulting Process"
        desc="Sneak peek into Giichi's blockchain consulting and development process for a detailed understanding."
      />

      {/* why choose giichi for blockchain consulting */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl font-bold text-white">
              Why choose Giichi for Blockchain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Consulting Services?
              </span>
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
            Giichi is a trusted and reputable blockchain consulting company, dedicated to helping businesses seamlessly implement blockchain technology and maximize its full potential.
            </p>
          </div>
          {/* Mapping Client Data */}
          {clientData.map((client, index) => (
            <div
              key={index}
              className="p-4 md:p-6 text-gray-900 rounded-2xl flex flex-col space-y-6 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(100,255,100,0.5),_0_0_15px_rgba(100,255,100,0.3)]"
            >
              <div className="flex flex-row space-x-4 items-center">
                <p>
                  <IoMdCheckmarkCircleOutline
                    size={32}
                    className="text-3xl text-[#64A03C] rounded-full"
                  />
                </p>
                <p className="font-semibold text-white poppins-thin text-lg 2xl:text-xl">
                  {client.title}
                </p>
              </div>

              <p className="text-sm font-normal poppins-thin text-white opacity-80 w-[80%] ml-2">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainConsulting;
