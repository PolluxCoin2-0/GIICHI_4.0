import BannerContent from "../../../components/CommonComponent/BannerContent";
import MetaverseBannerImg from "../../../assets/metaverseBanner.png";
import MetaverseFeatureImg from "../../../assets/metaverseFeature.png";
import Services from "../../../components/CommonComponent/Services";
import Framework from "../../../components/CommonComponent/Framework";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import { clientData } from "../../../components/data/clientData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MetaverseConsultingService } from "../../../components/data/ServicesData";
import { MetaverseConsultingFramework } from "../../../components/data/frameworkData";

const steps = [
  { id: "01", title: "Understanding Business Needs" },
  { id: "02", title: "Strategy & Roadmap Creation" },
  { id: "03", title: "Design & Development " },
  { id: "04", title: "Testing & Optimization" },
  { id: "05", title: "Deployment & Support " },
];

const MetaverseConsulting = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={MetaverseBannerImg}
        title1="Metaverse Consulting "
        title2="Company"
        desc="Seamlessly enter the Metaverse and elevate your business with our expert consulting and development services."
      />

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
           <img src={MetaverseFeatureImg} alt="Metaverse Consulting Feature Image" className=""/>
        </div>

        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Unlock Metaverse Growth with Expert Consulting  
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider w-full lg:w-[90%]">
         Our metaverse consulting services help businesses tap into the immense growth potential of the metaverse, regardless of industry. Now is the time to explore and integrate this revolutionary technology to achieve next-level success. <br/> <br/> 
         With a team of highly skilled metaverse experts, we provide strategic guidance and valuable insights, ensuring businesses make the most of metaverse opportunities for maximum benefits.
          </p>
          {/* button to connect on whatsapp */}
          <div className="mt-12">
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
          </div>
        </div>
      </div>

      {/* Blockchain Consulting Services */}
      <Services
        data={MetaverseConsultingService}
        heading1="Our Metaverse Consulting"
        heading2="& Development Services"
        desc="Giichi delivers result-driven metaverse consulting and development services, ensuring a seamless transition to revolutionize business processes."
      />

      {/* Top Benefits of blockchain development company */}
      <Framework
        data={MetaverseConsultingFramework}
        heading1="Benefits of Metaverse"
        heading2="Consulting Services"
        desc=""
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Metaverse Consulting Process"
        desc="Sneak peek into Giichi's blockchain consulting and development process for a detailed understanding."
      />

      {/* why choose giichi for blockchain consulting */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl font-bold text-white">
              Why choose Giichi for Metaverse<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Consulting Services?
              </span>
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
              Giichi offers secure, scalable, and regulatory-compliant asset
              tokenization, enabling seamless digital asset management and
              liquidity.
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

export default MetaverseConsulting;
