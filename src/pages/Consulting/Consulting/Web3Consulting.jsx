import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Services from "../../../components/CommonComponent/Services";
import Framework from "../../../components/CommonComponent/Framework";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import { clientData } from "../../../components/data/clientData";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Web3ConsultingService } from "../../../components/data/ServicesData";
import { Web3ConsultingFramework } from "../../../components/data/frameworkData";

const steps = [
  { id: "01", title: "Initial Consultation & Needs Assessment" },
  { id: "02", title: "Strategy & Roadmap Development" },
  { id: "03", title: "Prototyping & MVP Development" },
  { id: "04", title: "Full-Scale Development & Integration" },
  { id: "05", title: "Deployment, Security, & Ongoing Support" },
];

const Web3Consulting = () => {
  return (
    <div>
      {/* Banner Image */}
      <BannerContent
        img={BlockchainImg}
        title1="Web3 Consulting "
        title2="Company"
        desc="Forging Brands With Ultimate Web3 and Digital Marketing, and Consultancy Services"
      />

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Best Web3 Consultants at Your Service
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
          {/* button to connect on whatsapp */}
          <div className="mt-8">
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
        data={Web3ConsultingService}
        heading1="Web3 Consulting Services"
        heading2=""
        desc=" Giichi IT Solutions offers a comprehensive suite of blockchain development services to help businesses unlock the full potential of blockchain technology and gain a competitive edge in the evolving Web3 landscape."
      />

      {/* Top Benefits of blockchain development company */}
      <Framework
        data={Web3ConsultingFramework}
        heading1="Benefits of"
        heading2="Web3 Blockchain"
        desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Web3 Consulting Process"
        desc="Sneak peek into Giichi's blockchain consulting and development process for a detailed understanding."
      />

      {/* why choose giichi for blockchain consulting */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
          {/* Custom First Card */}
          <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4 mt-8 md:mt-0">
            <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-xl 3xl:text-2xl font-bold text-white">
              Why choose Giichi for Asset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                Tokenization Services?
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

export default Web3Consulting;
