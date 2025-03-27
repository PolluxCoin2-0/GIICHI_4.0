import { Link } from "react-router-dom"
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import Services from "../../../components/CommonComponent/Services";
import { WhiteLabelNftService } from "../../../components/data/ServicesData";
import Framework from "../../../components/CommonComponent/Framework";
import { WhiteLabelNftFramework } from "../../../components/data/frameworkData";
import TechStack from "../../../components/CommonComponent/TechStack";
import Faq from "../../../components/resuableComponent/Faq";
import { WhiteLabelNftMarketplaceFaq } from "../../../components/data/faqsData";

const WhiteLabelNftDev = () => {
  return (
    <div>
       {/* NFT Development */}
       <div className="flex flex-row justify-between items-center bg-[#283430] bg-opacity-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative w-full py-48">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="w-[50%]">
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[40px] font-semibold pt-4 tracking-wide">
          White Label NFT Marketplace {" "}
          </p>
          <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-[40px] font-semibold pt-6 tracking-wide">
          Development Company
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-6 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ducimus numquam, labore ratione perferendis reiciendis aliquid
            aspernatur culpa molestias porro perspiciatis iure consequuntur
            autem, iusto distinctio, odio blanditiis quia quibusdam?
          </p>
          {/* button to connect on whatsapp */}
          <div className="flex flex-row items-center space-x-6 mt-4">
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

        <div className="w-[50%]"></div>
      </div>

      {/*Choosing a Dedicated NFT Development Company*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            White Label NFT Marketplace Services That Boost Your Digital Presence
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            beatae hic rerum dolorum explicabo doloremque, quis numquam! Fuga
            iure obcaecati porro nemo assumenda quisquam, magni sit! Aperiam
            aliquid architecto fuga tenetur aliquam possimus rerum. Molestias
            ullam, voluptas suscipit voluptatum cupiditate itaque nostrum,
            reiciendis vel culpa facere minus, dolores expedita dolore.
          </p>
        </div>
      </div>

        {/* TOKEN DEVELOPMENT offerings */}
       <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
              <div>
                {" "}
                <img src={bgimg} alt="" className="" />
              </div>
              <div>
                <p className="text-white text-2xl font-semibold ">
                  Reach Giichi and discuss your requirements with our Multicurrency
                  Wallet experts TODAY!
                </p>
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

      {/* IDO Services */}
      <Services
        data={WhiteLabelNftService}
        heading1="Features of White Label "
        heading2="NFT Marketplace"
        desc=""
      />

       {/* Top Benefits of blockchain development company */}
       <Framework
        data={WhiteLabelNftFramework}
        heading1="Our White Label NFT "
        heading2="Marketplace Services"
        desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
      />

       {/* Technology Stack */}
       <div>
        <TechStack />
      </div>

        {/* FAQ SECTION */}
        <div className="mt-24 mb-20">
        <Faq data={WhiteLabelNftMarketplaceFaq} />
      </div>

    </div>
  )
}

export default WhiteLabelNftDev
