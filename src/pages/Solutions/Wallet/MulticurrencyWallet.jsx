/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Framework from "../../../components/CommonComponent/Framework";
import { MulticurrencyWalletFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { MulticurrencyWalletExchangeFaq } from "../../../components/data/faqsData";
import accessImg from "../../../assets/payment.png";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import FundImg from "../../../assets/fund.png";
import SoftwareImg from "../../../assets/Software.png";
import AIImg from "../../../assets/ai.png";
import SafetyImg from "../../../assets/Safety.png";

const benefits = [
  [
    {
      image: FundImg,
      title: "Multicurrency Wallet Consulting",
      points:
        "As an established multi-currency wallet development firm, we offer expert consulting services to help businesses streamline their processes and ensure seamless wallet integration.",
    },
    {
      image: SoftwareImg,
      title: "Multicurrency Wallet Development",
      points:
        "We create secure, high-performance multi-cryptocurrency wallet solutions designed to safely store your assets and facilitate smooth transactions. Our team stays on top of cutting-edge technologies to deliver robust wallet solutions.",
    },
  ],
  [
    {
      image: AIImg,
      title: "Deployment",
      points:
        "Using advanced tools and technologies, we ensure that our wallet solutions are fully interoperable with multiple blockchain networks for a smooth user experience.",
    },
    {
      image: SafetyImg,
      title: "Token Encryption & Mining",
      points:
        "We offer comprehensive token mining services and store tokens in decentralized databases, implementing advanced encryption protocols to protect your assets from security threats.",
    },
  ],
];

const BenefitCard = ({ image, title, points }) => {
  return (
    <div
      className="border-[1px] border-white border-opacity-20 rounded-xl py-8  flex flex-col justify-center w-full 
    md:w-[50%] lg:w-[50%] hover:bg-greish-gradient px-4 lg:px-6"
    >
      <img src={image} alt={title} className="w-12 lg:w-16" />
      <p className="text-white pt-4 text-lg md:text-xl font-bold">{title}</p>
      <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
        {points}
      </p>
    </div>
  );
};

const MulticurrencyWallet = () => {
  return (
    <div className="mt-20 mb-20 ">
      {/* CRYPTO CURRENCY DIGITAL WALLET DEVELOPMENT COMPANY */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          Multi-Currency Wallet <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Development Services
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">{/* image */}</div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              Partner with a leading multi-currency wallet development company
              to build and launch secure, scalable wallet solutions. Our team of
              experts will deploy wallets on your preferred blockchain, ensuring
              a seamless experience. Designed with an intuitive, user-friendly
              interface, our multi-currency wallets elevate the overall
              financial experience for your users. <br /> <br />
              Collaborate with a trusted multi-currency wallet development
              company to create cutting-edge wallet solutions tailored to your
              needs. We specialize in developing highly secure, scalable wallets
              that support a wide range of digital assets across multiple
              blockchains.
            </p>

            {/* button to connect on whatsapp */}
            <div className="flex flex-row items-center space-x-6 mt-8">
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

      {/*  Web3 Wallet Development:  */}
      <div className="mt-0 md:mt-12 3xl:mt-24 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <p className="text-white text-center text-xl md:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          Explore Our Multicurrency
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            Wallet Development Services
          </span>
        </p>
        <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6 text-center">
          As a leading crypto wallet development company, we are your reliable
          technology partner with extensive experience in the IT domain.
        </p>
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
          {benefits.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-6 lg:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-6 lg:mt-8"
            >
              {row.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  image={benefit.image}
                  title={benefit.title}
                  points={benefit.points}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DIGITAL WALLET DEVELOPMENT SERVICES */}
      <div className="mt-20">
        <Framework
          data={MulticurrencyWalletFramework}
          heading1="Key Features of Our"
          heading2=" Multi-Currency Wallet"
          desc=""
        />
      </div>

      {/* web3 crypto  wallet offerings */}
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

      {/* Features offered by Supply Chain Management */}
      <div className="mb-6 xl:mb-12 2xl:mb-24 mt-24">
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:text-32 3xl:px-60 ">
          Our Unique Offerings in <br />
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Multicurrency Wallet
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 2xl:space-x-8 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-12">
          <div className="border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="report-image" className="w-16" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Well-equipped infrastructure
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="manage-image" className="w-16 " />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Expert development team
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="wallet-image" className="w-16" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Wide domain knowledge & Experience
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img
              src={accessImg}
              alt="know-your-customer-image"
              className="w-16"
            />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden  text-[15px] 2xl:text-[17px]">
              Customizable Solutions
            </p>
          </div>

          <div className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl h-[240px] py-12 flex flex-col justify-center items-center w-full md:w-[20%]">
            <img src={accessImg} alt="funding-icon" className="w-16" />
            <p className="text-white font-semibold pt-4 text-center group-hover:hidden text-[15px] 2xl:text-[17px]">
              Budget-friendly projects
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div>
        <Faq data={MulticurrencyWalletExchangeFaq} />
      </div>
    </div>
  );
};

export default MulticurrencyWallet;
