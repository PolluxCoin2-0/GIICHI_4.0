import { Link } from "react-router-dom"
import Framework from "../../../components/CommonComponent/Framework"
import { DigitalWalletFramework } from "../../../components/data/frameworkData"
import Industries from "../../../components/CommonComponent/Industries"
import { digitalWalletIndustriesData } from "../../../components/data/industriesData"
import Faq from "../../../components/resuableComponent/Faq"
import { DigitalWalletExchangeFaq } from "../../../components/data/faqsData"

const DigitalWallet = () => {
  return (
    <div  className="mt-20 mb-20 ">
        {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
        <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
      <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          Crypto Digital Wallet  <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Company
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">
            {/* image */}
          </div>
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

      {/* DIGITAL WALLET DEVELOPMENT PORTFOLIO  */}
      <div className="mt-20">
      <p className="text-3xl text-white font-semibold text-center">
        Crypto Digital Wallet Development Portfolios
      </p>
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={DigitalWalletFramework}
          heading1="Digital Wallet"
          heading2="Development Services"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

       {/* Industries  */}
       <Industries
        data={digitalWalletIndustriesData}
        heading1="Industries Harnessing the Potential of Our Crypto"
        heading2=" Digital Wallet Development Solutions"
        desc=""
      />
      
     
      {/* FAQ SECTION */}
      <div>
        <Faq data={DigitalWalletExchangeFaq} />
      </div>
    </div>
  )
}

export default DigitalWallet
