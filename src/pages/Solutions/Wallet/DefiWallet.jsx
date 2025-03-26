/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Faq from "../../../components/resuableComponent/Faq";
import { Web3WalletExchangeFaq } from "../../../components/data/faqsData";
import Services from "../../../components/CommonComponent/Services";
import { DefiWalletService } from "../../../components/data/ServicesData";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";

const statsData = [
  { label: "User Base", value: "1M+" },
  { label: "Countries Served", value: "150+" },
  { label: "Solutions Delivered", value: "500+" },
  { label: "Total Experience", value: "300+" },
];

const steps = [
  { id: "01", title: "Blockchain Pioneers" },
  { id: "02", title: "End-to-End Services" },
  { id: "03", title: "Cost-Effective Offerings" },
  { id: "04", title: "Security-Based Approach" },
  { id: "05", title: "24/7 Customer Support" },
];

const DefiWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          DeFi Wallet <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              A white paper is an authoritative, persuasive, and comprehensive
              document that outlines a business project’s challenges and
              solutions. It plays a crucial role in establishing industry
              authority, enhancing credibility, and demonstrating thought
              leadership. In the crypto market, a well-researched white paper
              serves as a powerful tool to attract investors and showcase your
              project’s potential.
              <br /> <br />
              At Giichi IT Solution, we specialize in crafting impactful white
              papers that combine in-depth research, solution architecture, and
              token economics. Our expert writers collaborate with industry
              professionals to develop detailed, data-driven white papers that
              add credibility and authenticity to your project.
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
        </div>
      </div>

      {/* Our blockchain consulting related services */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            What's unique About DeFi Wallet?
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
        </div>
        <div className="w-full lg:w-[50%]"></div>
      </div>

      {/*Stats Data */}
      <div className="relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex justify-between items-center bg-[#283430] bg-opacity-10 py-6  rounded-lg shadow-md px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600">
                <span className="text-transparent bg-clip-text bg-green-gradient">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blockchain Consulting Services */}
      <Services
        data={DefiWalletService}
        heading1="Discover Our DeFi Wallet "
        heading2="Development Services"
        desc="Giichi IT Solutions offers a comprehensive suite of blockchain development services to help businesses unlock the full potential of blockchain technology and gain a competitive edge in the evolving Web3 landscape."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Our DeFi Development Capabilities"
        desc="Sneak peek into Giichi's blockchain consulting and development process for a detailed understanding."
      />

      {/* FAQ SECTION */}
      <div>
        <Faq data={Web3WalletExchangeFaq} />
      </div>
    </div>
  );
};

export default DefiWallet;
