/* eslint-disable react/prop-types */
import RealEstateBannerImg from "../../../assets/RealEstateBanner.png";
import RealEstateFeatureImg from "../../../assets/RealEstateFeature.png";
import { RealEstateFaq } from "../../../components/data/faqsData";
import { RealEstateServicesData } from "../../../components/data/ServicesData";
import Faq from "../../../components/resuableComponent/Faq";
import Services from "../../../components/CommonComponent/Services";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";
import { motion } from "framer-motion";

const RealEstate = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={RealEstateBannerImg}
        title1="Blockchain Solutions"
        title2="for Real Estate"
        desc=" Revolutionizing real estate by addressing key challenges like mortgage securitization, inefficient asset management, and illegal property transfers. "
      />

      {/* Bloackchain REAL ESTATE forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-2 lg:space-x-12 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-0 md:mb-12 relative">
  <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>

  {/* Image Animation - Scale Up */}
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
    className="w-full md:w-[40%]"
  >
    <img
      src={RealEstateFeatureImg}
      alt="real-estate-feature-image"
      className="w-[80%]"
    />
  </motion.div>

  <motion.div className="w-full md:w-[60%]">
    {/* Title Animation - From Top to Bottom */}
    <motion.p
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4"
      style={{ lineHeight: "1.4" }}
    >
      Capitalize on Giichi for Blockchain Solutions in Real Estate – We’re the
      Architects of Change
    </motion.p>

    {/* Paragraph Animations - From Bottom to Top */}
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 text-justify hyphens-auto"
      style={{ lineHeight: "1.7" }}
    >
      With deep blockchain expertise and a global presence, Giichi IT Solutions
      empowers clients to redefine the future of real estate. We transform
      challenges into opportunities, unlocking limitless possibilities and
      ensuring success with cutting-edge blockchain innovations.
    </motion.p>

    <motion.p
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: false, amount: 0.2 }}
      className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 text-justify hyphens-auto"
      style={{ lineHeight: "1.7" }}
    >
      At Giichi IT Solutions, we lead the way in blockchain-powered real estate
      solutions, ensuring transparency, efficiency, and security in every
      transaction. Our expert team designs cutting-edge blockchain systems to
      eliminate industry bottlenecks such as:
    </motion.p>

    {/* Bullet Points Animation - Fade In */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col md:flex-row space-x-0 md:space-x-40 mt-8"
    >
      <ul className="flex flex-col space-y-4">
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          Multiple Intermediaries
        </li>
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          Identity Theft
        </li>
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          Delayed Transactions
        </li>
      </ul>
      <ul className="flex flex-col space-y-4 mt-4 md:mt-0">
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          Title Disputes
        </li>
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          Data Breaches
        </li>
        <li className="text-white text-xs md:text-sm ">
          <span className="w-2 h-2 bg-green mr-2 md:mr-4 inline-block"></span>
          High Transaction Costs
        </li>
      </ul>
    </motion.div>

    {/* Button Animation - From Bottom to Top */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <ButtonFreeDemo />
    </motion.div>
  </motion.div>
</div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* RealEstate Services */}
      <Services
        data={RealEstateServicesData}
        heading1="Our Blockchain Real Estate Software "
        heading2=" Development Services"
        desc=" At Giichi IT Solutions, we provide a comprehensive suite of blockchain solutions 
        for real estate, empowering market players with cutting-edge technology and expert 
        talent to revolutionize their existing systems."
      />

      {/* Faq */}
      <div>
        <Faq data={RealEstateFaq} />
      </div>
    </div>
  );
};

export default RealEstate;
