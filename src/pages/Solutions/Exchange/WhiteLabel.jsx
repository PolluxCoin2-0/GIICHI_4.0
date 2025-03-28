import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Framework from "../../../components/CommonComponent/Framework";
import { WhiteLabelExchangeFramework } from "../../../components/data/frameworkData";
import { FaExchangeAlt, FaShoppingCart } from "react-icons/fa";
import { FaEthereum, FaWallet } from "react-icons/fa6";
import Faq from "../../../components/resuableComponent/Faq";
import { WhiteLabelExchangeFaq } from "../../../components/data/faqsData";

const platforms = [
 {
    name: "Data Encryption",
    icon: <FaEthereum />,
    description:
      "Data encryption helps prevent unauthorized access to user credentials and other sensitive information.",
    color: "bg-black",
  },
  {
    name: "Jail Login",
    icon: <FaWallet />,
    description:
      "The jail login feature blocks login attempts for a specified duration after multiple failed login attempts.",
    color: "bg-black",
  },
  {
    name: "Two-Factor Authentication",
    icon: <FaShoppingCart />,
    description:
      "Our white label Bitcoin exchange solution includes a 2FA mechanism to provide an extra layer of security during the login process.",
    color: "bg-black",
  },
  {
    name: "Anti-Denial of Service (Dos)",
    icon: <FaExchangeAlt />,
    description:
      "Anti-DoS protection safeguards the ecosystem by detecting and mitigating a high volume of requests identified by the trading engine.",
    color: "bg-black",
  },
  {
    name: "Token-Based HTTP Authentication",
    icon: <FaExchangeAlt />,
    description:
      "Mechanisms like OAuth provide secure user authentication through token-based HTTP authentication.",
    color: "bg-black",
  },
  {
    name: "Anti-Distributed Denial Of Service (DDoS)",
    icon: <FaEthereum />,
    description:
      "Anti-DDoS protection shields the white label crypto trading platform from attacks where multiple connected devices target it simultaneously.",
    color: "bg-black",
  },
  {
    name: "Server-Side Request Forgery (SSRF) Protection",
    icon: <FaWallet />,
    description:
      "SSRF protection defends the crypto white label exchange from attacks originating within authorized internal applications.",
    color: "bg-black",
  },
  {
    name: "HTTP Parameter Pollution Protection",
    icon: <FaShoppingCart />,
    description:
      "This protection safeguards networks from web attacks where HTTP requests are manipulated to access hidden data.",
    color: "bg-black",
  },
];

const WhiteLabel = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="White Label Crypto"
        title2="Exchange Development"
        desc="Offering Secure, Scalable, Compliant, and Future-Proof White Label Exchange Software for Businesses Looking to Launch Their Own Custom Cryptocurrency Exchange with Minimal Development Time, Lower Costs, and Seamless Integration of Advanced Features."
      />

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Top White Label Crypto Exchange Software for a Quick Launch
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
          Cryptocurrency is rapidly becoming a legitimate, high-potential asset. As adoption increases and the user base expands, having a robust, responsive, and user-friendly trading infrastructure is essential. <br/> <br/>
          At Giichi, we specialize in offering the best white label crypto exchange software development solutions for financial institutions looking for a flexible trading platform with an easy-to-use back office. <br/> <br/>
          We provide you with a solid software foundation for your exchange business, empowering you to make a significant impact on your customers with a fully customizable, feature-rich white label cryptocurrency exchange.
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
              Talk to our Experts
            </a>
          </div>
        </div>
      </div>

      {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[60%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
          Maximize Efficiency and Save Thousands with White Label Crypto Exchange Solutions
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
          Building a secure, multi-currency, high-frequency digital asset trading platform requires significant time, resources, and investment. Giichi is ready-to-deploy white label crypto exchange software offers a straightforward, rapid, cost-effective solution to launch your crypto trading platform without the complexity.<br/> <br/>
          Opting for white label cryptocurrency exchange development can significantly reduce costs. However, the following factors influence the pricing of a white label crypto exchange:
          </p>

          <div className="flex flex-row items-center space-x-12 mt-8">
            <div>
              <p className="text-white text-sm ">
              Type of exchange (CEX/DEX/hybrid)
              </p>
              <p className="text-white text-sm mt-4">
              Security level (high/medium)
              </p>
              <p className="text-white text-sm mt-4">
              Additional API Integrations
              </p>
            </div>
            <div>
              <p className="text-white text-sm">
              UI/UX design (basic/advanced)
              </p>
              <p className="text-white text-sm  mt-4">
              Extra features or modules
              </p>
              <p className="text-white text-sm  mt-4">
              Blockchain and token integrations
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
              Connect on Whatsapp
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[40%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
      </div>

      {/* Top Benefits of blockchain development company */}
      <div className="mt-20">
        <Framework
          data={WhiteLabelExchangeFramework}
          heading1="White Label Crypto Exchange Software : "
          heading2="Key Features"
          desc="Here are a few amazing benefits that your business can get from our top blockchain consultants."
        />
      </div>

      {/* WHITE LABEL CRYPTO EXCHANGE FEATURES */}
      <div className="mt-20 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight text-center">
          Security Features Of White Label
          <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
            Crypto Currency Exchange Script
          </span>
        </p>
        <p className="text-white text-lg text-opacity-70 text-center pt-4">
        We implement an institutional-grade security framework for your trading platform, incorporating features such as:
        </p>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12">
          {platforms.map((platform, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className={`text-white p-6 rounded-2xl shadow-lg ${platform.color}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <h2 className="text-xl font-bold">{platform.name}</h2>
                  <p className="text-sm opacity-80">{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={WhiteLabelExchangeFaq} />
      </div>
    </div>
  );
};

export default WhiteLabel;
