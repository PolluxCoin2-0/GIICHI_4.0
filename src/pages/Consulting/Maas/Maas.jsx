/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BlockchainImg from "../../../assets/blockchainImg.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import { PulseBeams } from "../../../components/resuableComponent/PulseBeam";
import serviceIcon from "../../../assets/collab.png";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { maasLifeCycleData } from "../../../components/data/lifecycleData";

const services = [
  {
    icon: serviceIcon,
    title: "Experienced Team",
    description:
      "We have a team of highly trained and extensively experienced experts who develop tailored NFT marketing services, enabling businesses to achieve success within a limited timeframe.",
  },
  {
    icon: serviceIcon,
    title: "Strategic Approach",
    description:
      "Our team leverages a data-driven approach to craft impactful marketing strategies that maximize reach and engagement.",
  },
  {
    icon: serviceIcon,
    title: "Comprehensive Solutions",
    description:
      "From community building to influencer outreach, we provide end-to-end NFT marketing solutions for sustainable growth.",
  },
  {
    icon: serviceIcon,
    title: "Proven Results",
    description:
      "With a track record of successful campaigns, we help businesses gain visibility and traction in the NFT space.",
  },
];

const Maas = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20 ">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainImg}
        title1="Marketing As A"
        title2="Service"
        desc="Forging Brands With Ultimate Web3 and Digital Marketing, and Consultancy Services"
      />

      {/* Banner Image */}
      <div>
        <PulseBeams />
      </div>

      {/* what is maas */}
      <div className="flex flex-col justify-center items-center ">
        <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide">
          <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-semibold pt-14 pb-14">
            MAAS
          </span>
          - What it is and How Does it Work?
        </p>
        <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-4 leading-7 w-full md:w-[60%] text-center">
          MAAS (Marketing as a Service) is a trusted Web3 marketing firm. Our
          holistic approach helps businesses like yours gain potential goals by
          harnessing the power of Web3 technologies. We take pride in providing
          agile and tailored managed services that deliver on-demand marketing
          solutions and drive community building and engagement activities to
          boost your overall online presence and ensure the success of your
          project!
        </p>
        {/* button to connect on whatsapp */}
        <div className="flex flex-row items-center space-x-6">
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
          <Link to="/contact-us">
            <button
              type="button"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Request a Free Demo
            </button>
          </Link>
        </div>
      </div>

      {/* what we offer as a Maas */}
      <div className="mt-20 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        {/* heading */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">
            What We Offer at MAAS: <br />
            <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-bold pt-14 pb-14">
              A Blockchain Marketing Company
            </span>
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-4 leading-7 w-full md:w-[60%] text-center">
            Take a look to avail business benefits with our blockchain marketing
            services
          </p>
        </div>
      </div>


          {/* blocks content */}
          <div className="mt-8 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
          {/* row 1 */}
          <div className="flex flex-row justify-center space-x-8 w-full">
            <div className="bg-[#3F91E3] w-[40%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">Branding</p>
              <p className="text-white text-[15px] font-normal mt-2 w-[80%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
            <div className="bg-[#239156] w-[40%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">Social Media Marketing</p>
              <p className="text-white text-[15px] font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
          </div>
          
           {/* row 2*/}
          <div className="flex flex-row justify-center space-x-8 w-full mt-8">
            <div className="bg-[#EB8841] w-[33%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">Content Creation & Marketing</p>
              <p className="text-white text-[15px] font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
            <div className="bg-[#CB3F79] w-[33%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">UI/UX Design</p>
              <p className="text-white text-[15px] font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
            <div className="bg-[#3F91E3] w-[33%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">Search Engine Optimzation</p>
              <p className="text-white text-[15px] font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
          </div>

            {/* row 3 */}
            <div className="flex flex-row justify-center space-x-8 w-full mt-8">
            <div className="bg-[#239156] w-[40%] h-[200px] p-6">
              <p className="text-white text-2xl font-semibold">Insights and In-Depth Analytics</p>
              <p className="text-white text-[15px] font-normal mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hic nostrum nihil sapiente sed perspiciatis earum deserunt! Modi ullam corrupti debitis magnam qui voluptates repellendus voluptatum atque nesciunt, assumenda rerum.</p>
            </div>
           </div>
        </div>

       {/* our blockchain creation  process */}
       <div>
        <LifeCycle
          heading1="OUR MAAS ROADMAP"
          heading2=""
          desc="We address your blockchain project's requirements by providing comprehensive NFT marketing services in a systematic, step-by-step approach."
          steps={maasLifeCycleData}
        />
      </div>

       {/* Why choose Giichi for marketing services */}
       <div className="mt-20 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
          <div className="flex flex-col justify-center items-center">
          <p className="text-white text-2xl md:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">Why Choose GIICHI's Web3 Marketing Services</p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] font-normal pt-4 leading-7 w-full md:w-[60%] text-center">Antier is a name you can trust when it comes to selecting the best ICO marketing firm. We, as campaigners in this field, will cater to the varied needs of different blockchain-based businesses in the best possible manner without giving anyone even a single chance to complain. Here are a few benefits you get when you choose Antier for MAAS:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6"
        >
          <div className="flex flex-row justify-center">
            <img src={service.icon} alt={service.title} className="w-12" />
          </div>   
          <p className="text-white pt-4 text-lg font-bold text-center">{service.title}</p>
          <p className="text-white text-opacity-50 pt-2 text-[15px] text-center">
            {service.description}
          </p>
        </div>
      ))}
    </div>
        </div>
    </div>
  );
};

export default Maas;
