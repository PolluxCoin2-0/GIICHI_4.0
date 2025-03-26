import Framework from "../../../components/CommonComponent/Framework";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import Services from "../../../components/CommonComponent/Services";
import { P2PExchangeFaq } from "../../../components/data/faqsData";
import { P2PExchangeFramework } from "../../../components/data/frameworkData";
import { P2PDevelopmentService } from "../../../components/data/ServicesData";
import Faq from "../../../components/resuableComponent/Faq";

const steps = [
  { id: "01", title: "Requirement Gathering and Planning" },
  { id: "02", title: "Technology Stack Selection" },
  { id: "03", title: "UI/UX Development" },
  { id: "04", title: " Backend Development & Smart Contracts" },
  { id: "05", title: "Test, Improve & Deliver" },
];

const P2P = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* CENTRALIZED EXCHANGED DDEVELOPMENT COMPANY */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-[50px] font-semibold pt-4 tracking-tight leading-[1.2] md:leading-[1.4] xl:leading-[1.6] 2xl:leading-[1.2]">
           P2P Crypto Exchange Development Company
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto w-[80%]">
            Delivering Game-Changing DLT Ecosystems To Transform Your DEX
            Development Dream Into Reality
          </p>

          <div className="mt-8">
            <div>
              <p className="text-white text-[17px]">
                7+ Years of Expertise in the Blockchain Domain
              </p>
              <p className="text-white text-[17px] mt-4">
                Rigorous Testing and Responsible Handling of Errors
              </p>
              <p className="text-white text-[17px] mt-4">
                Technology-Agnostic, First-Time Right Deliverables
              </p>
              <p className="text-white text-[17px]  mt-4">
                Complete Transparency During Development
              </p>
            </div>
          </div>
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
              Talk to our Experts
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
      </div>

      {/* CENTRALIZED EXCHANGED DDEVELOPMENT SOFTWARE*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
           P2P Cryptocurrency Exchange Development
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Embrace Peer-to-Peer Trading Approach <br />{" "}
            <br />
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
              Request a free demo
            </a>
          </div>
        </div>
      </div>
      
       {/* Top Benefits of blockchain development company */}
       <div className="mt-20">
        <Framework
          data={P2PExchangeFramework}
          heading1="P2P Crypto Exchange Software:"
          heading2="Key Features"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>
     
     {/* Blockchain Development Services */}
     <Services
        data={P2PDevelopmentService}
        heading1="Features of Our Centralized "
        heading2="Crypto Exchange Development"
        desc=""
      />

     {/* Blockchain Supply Chain Network */}
     <ProductDevPhases
        data={steps}
        heading="Our P2P Exchange Development Process"
        desc="At Giichi IT Solutions, we help enterprises achieve business automation with advanced, secure, and efficient smart contract solutions."
      />

      {/* OUR P2P CRYPTO EXCHANGE: USER JOURNEY */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl font-semibold pt-4 leading-tight tracking-wide text-center">
          Our P2P Crypto Exchange 
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">Development Journey</span></p>
      </div>
     
      {/* FAQ SECTION */}
      <div>
        <Faq data={P2PExchangeFaq} />
      </div>
    </div>
  );
};

export default P2P;
