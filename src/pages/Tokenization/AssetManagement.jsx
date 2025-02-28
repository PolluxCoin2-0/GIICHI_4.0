/* eslint-disable react/prop-types */
import scDevBannerImg from "../../assets/ScDevBanner.png";
import LetsTalk from "../../components/resuableComp/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const clientData = [
  {
    description:
      "Partnering with Giichi IT Solutions has been an outstanding experience. Their team’s expertise in blockchain and Web3 helped us scale our projects effortlessly.",
    title: "Blockchain Pioneers",
   
  },
  {
    description:
      "Giichi IT Solutions provided us with top-notch Web3 solutions. Their professionalism and dedication to quality are unmatched.",
      title: "Customization Excellence",
  
  },
  {
    description:
      "The team at Giichi IT Solutions exceeded our expectations. Their blockchain expertise helped us launch our product successfully.",
      title: "End-to-End Services",
   
  },
  {
    description:
      "An exceptional experience working with Giichi IT Solutions! Their knowledge and commitment to excellence are truly commendable.",
      title: "Security-Centric Approach",
    
  },
  {
    description:
      "Giichi IT Solutions transformed our vision into reality with their deep understanding of Web3 technology. Highly recommended!",
      title: "24/7 Support",
  },
];

const AssetManagement = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={scDevBannerImg}
          alt="smart-contract-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
            Crypto Asset 
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl font-bold">
            Management Services {" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] font-semibold leading-snug">
          At Giichi IT Solutions, we specialize in writing secure, <br/>
          efficient, and automated smart contracts for Ethereum, TRON, <br/>Hyperledger, EOS, and other blockchain platforms.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Real World Asset Tokenization  Development{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          At Giichi IT Solutions, we specialize in writing secure, efficient, and automated smart contracts for Ethereum, TRON, Hyperledger, EOS, and other blockchain platforms.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-6 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          {/* <img src={scDevFeatureImg} alt="smart-contract-feature-image" className="w-[90%]"/> */}
        </div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  ">
          Cryptocurrency Asset Management Solutions - The Paradigm Shift to an Emerging Market
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6  leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, architecto soluta hic nisi aliquid dolore deleniti, explicabo cumque odit itaque dolor voluptatum dicta nemo perspiciatis magnam voluptas, vero laborum.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-70 pt-6   leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga ad laboriosam aspernatur velit nam aliquid blanditiis aut unde nemo.
          </p>
          {/* button for a free demo */}
        <Link to="/contact-us">
          <button
            type="button"
            className="mt-8 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
            aria-label="Contact us "
            title="Click to contact us form"
          >
            Request a Free Demo
          </button>
        </Link>
        </div>
        
      </div>
         
      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>
      
      {/* why choose asset token for business */}
           <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-8">
             <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide ">
             Choosing Giichi for Digital <br/>
             <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">Asset Management</span></p>
              {/* Reviews Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-0 md:mt-20">
               {/* Custom First Card */}
               <div className="mr-6 text-gray-900 rounded-lg shadow-md flex flex-col space-y-4 p-0 md:p-4">
                <h3 className="poppins-thin text-[18px] md:text-2xl lg:text-[17px] xl:text-lg 2xl:text-2xl font-bold text-white">
                   Why choose Giichi for Asset <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64A03C] to-[#F0AA06]">
                   Management Services?
                   </span>
                 </h3>
                 <p className="text-[14px] md:text-[15px] lg:text-[14px] font-medium poppins-thin text-white opacity-80">
                 By partnering with Antier, you can rely on a team of technical experts with real-world experience delivering end-to-end blockchain services.
                 </p>
               </div>
     
               {/* Mapping Client Data */}
               {clientData.map((client, index) => (
                 <div
                   key={index}
                   className="p-4 md:p-6 text-gray-900 rounded-2xl flex flex-col space-y-6 relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(100,255,100,0.5),_0_0_15px_rgba(100,255,100,0.3)]"
                 >
                   <div className="flex flex-row space-x-4 items-center">
                     <p><IoMdCheckmarkCircleOutline size={40} className="text-3xl text-[#64A03C] rounded-full" /></p>
                     <p className="font-semibold text-white poppins-thin text-xl">
                       {client.title}
                     </p>
                   </div>
                  
                   <p className="text-sm font-normal poppins-thin text-white opacity-80">
                     {client.description}
                   </p>
                   
                 </div>
               ))}
             </div>
           </div>
     {/* Schedule a free demo */}
      <div className="mt-20">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default AssetManagement;
