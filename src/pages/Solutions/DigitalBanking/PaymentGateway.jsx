import Framework from "../../../components/CommonComponent/Framework";
import { PaymentGatewayFramework } from "../../../components/data/frameworkData";
import Faq from "../../../components/resuableComponent/Faq";
import { PaymentGatewayBankingFaq } from "../../../components/data/faqsData";
import Services from "../../../components/CommonComponent/Services";
import { PaymentGatewayService } from "../../../components/data/ServicesData";
import Offerings from "../../../components/CommonComponent/Offerings";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import payementGatewayBannerImg from "../../../assets/paymentGatewayBanner.png";
import { GiWallet } from "react-icons/gi";
import { IoOptionsOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { FaCartArrowDown } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const steps = [
  {
    icon: <GiWallet className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Integration with Wallet",
  },
  {
    icon: <IoOptionsOutline className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Payment Option Selection & Generation",
  },
  {
    icon: <RiMoneyRupeeCircleFill className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Transaction Initiation",
  },
  {
    icon: <SiHiveBlockchain className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Blockchain Monitoring & Confirmation",
  },
  {
    icon: <FaCartArrowDown  className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Order Fulfilment & Settlement",
  },
  {
    icon: <RiSecurePaymentLine className="w-12 h-12 text-blue-500" color="#ffffff" />,
    title: "Transaction Complete",
  },
];

const PaymentGateway = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Crypto Token Development */}
      <BannerContent
        img={payementGatewayBannerImg}
        title1="Crypto Payment Gateway"
        title2="Development Company"
        desc="Empower users with secure and seamless payment solutions crafted by a leading global crypto payment gateway development company."
      />
 
     {/* WHY TO INVEST IN CRYPTO EXCHANGE COMPANY*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center ">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-10 md:py-16 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              <p className="text-[#239400] text-4xl md:text-5xl font-semibold">5+</p>
              <p className="text-white pt-2 text-[15px] md:text-[14px] lg:text-[17px]">
                Years of Crypto Expertise
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-10 md:py-16 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              <p className="text-[#239400] text-4xl md:text-5xl font-semibold">100+</p>
              <p className="text-white pt-2 text-[15px] md:text-[14px] lg:text-[17px]">
                Solutions Delivered
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-4 ">
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-10 md:py-16 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              <p className="text-[#239400] text-4xl md:text-5xl font-semibold">150+</p>
              <p className="text-white pt-2 text-[15px] md:text-[14px] lg:text-[17px]">
                Merchant Accounts Served
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 px-6 py-10 md:py-16 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              <p className="text-[#239400] text-4xl md:text-5xl font-semibold">3M+</p>
              <p className="text-white pt-2 text-[15px] md:text-[14px] lg:text-[17px]">
                Monthly Transactions
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-[35px] font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.4' }}>
          Crypto Payment Gateway Development: Unlocking Unmatched Potential
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-4 leading-6 text-justify hyphens-auto tracking-wider w-full md:w-[90%]"  style={{ lineHeight: "1.7" }}>
          According to research by Future Market Insights, the global crypto payments market is set to expand at a CAGR of 14.1%, with its value rising from $1,294.1 million in 2023 to $4,853.8 million by 2033. This rapid growth presents a unique opportunity for merchants to integrate instant, secure, and borderless payment solutions. <br/> <br/>
          Partnering with Giichi gives you access to world-class infrastructure, deep domain expertise, and tailored solutions designed to fit your exact business needs. Whether you require a custom-built or white-label crypto payment gateway, we ensure a cost-effective, seamless, and future-ready payment experience.
          </p>
        </div>
      </div>

      {/* workflow of a wallet */}
      <div className="mt-16 md:mt-32 mb-12">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          Inside Custom Cryptocurrency Wallet Development : <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            A Step-By-Step Workflow
          </span>
        </p>
        <div className="p-8 rounded-lg shadow-lg max-w-[1400px] mx-auto mt-0 md:mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center relative mt-8 md:mt-0"
              >
                <div className="w-20 h-20 bg-[#073106] rounded-full flex items-center justify-center mb-4 transition-transform duration-500 ease-in-out hover:scale-110">
                  {step.icon}
                </div>
                <p className="text-sm text-white text-center w-[110%] md:w-[80%]">
                  {step.title}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-20 w-60 border-t-[2px] border-dashed border-gray-300 -z-[1]"></div>
                )}
                {/* <div className="hidden md:flex items-center justify-center w-8 h-8 bg-[#010F02] text-white rounded-full  absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  {index + 1}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Gateway offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Payment Gateway experts TODAY!"/>
     
     {/* TOKEN COIN DEVELOPMENT SERVICES*/}
      <div className="">
        <Framework
          data={PaymentGatewayFramework}
          heading1="Our Crypto Digital Banking"
          heading2="Solution Services"
          desc="Our team of experts delivers secure and cost-effective crypto payment gateway solutions designed to seamlessly integrate with payment processors. "
        />
      </div>

      {/* Blockchain Consulting Services */}
      <Services
        data={PaymentGatewayService}
        heading1="Key Features of Cryptocurrency"
        heading2="Payment Gateway Solutions"
        desc="Our merchant crypto payment gateway is designed with world-class features to enhance user experience and streamline transactions. Here’s a closer look at its standout functionalities:"
      />

      {/* FAQ SECTION */}
      <div className="mt-24">
        <Faq data={PaymentGatewayBankingFaq} />
      </div>
    </div>
  );
};

export default PaymentGateway;
