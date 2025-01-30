/* eslint-disable react/prop-types */
import star6Img from "../assets/star6.png";
import poxLogo from "../assets/poxLogo.png";
import akamaiLogo from "../assets/akamai.png";
import xdcImg from "../assets/xdc.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import uviLogo from "../assets/uviLogo.png";
import sulaanaLogo from "../assets/SulanaLogo.svg";
import sulmineLogo from "../assets/SulLogo.svg";
import { Link } from "react-router-dom";
import zonLogo from "../assets/zonToken.png";
import lBankLogo from "../assets/lbank.png";
import koinBxLogo from "../assets/koinbx.png";
import coinstoreLogo from "../assets/coinstore.png";
import googleLogo from "../assets/google.png";
import linodeLogo from "../assets/linode.png";
 // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
        
      }}
    >
      <FaChevronLeft size={24} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
        
      }}
    >
      <FaChevronRight size={24} />
    </div>
  );
const Mission = () => {
  const partners = [
    {
      logo: poxLogo,
      title: "Explore Polluxchain",
      link: "https://polluxchain.com/",
      description:
        "PolluxChain is a next-generation hybrid Layer 1 blockchain designed for scalability, efficiency, and seamless interoperability. Engineered by Giichi . Ltd., PolluxChain delivers cutting-edge blockchain solutions, enabling secure transactions, high-speed processing, and a decentralized ecosystem for developers, businesses, and users.",
    },
    {
      logo: uviLogo,
      title: "Trade On UviSwap",
      link: "https://uviswap.org/",
      description:
        "uviSwap is an innovative cross-chain DEX built on blockchain networks like polluxchain and other multichain. It features AI-powered smart liquidity modules for optimal asset allocation, a community-driven listing process to prevent rug-pulls, and decentralized ETFs that provide exposure to curated baskets of top-performing tokens.",
    },
    {
      logo: uviLogo,
      title: "Start Mining UVI",
      link: "https://uvi.network/",
      description:
        "Uvi Token is the native mining token of PolluxChain, enabling a decentralized and community-driven mining ecosystem. Developed by Giichi, Uvi Token introduces a unique mining mechanism where users can tap every 6 hours to mine rewards, making blockchain mining accessible to everyone.",
    },
    {
      logo: sulaanaLogo,
      title: "Explore Sulaana",
      link: "https://sulaana.com/",
      description:
        " Sulaana is a next-generation AI-powered crypto encyclopedia designed to revolutionize blockchain knowledge and research. Developed by Giichi, Sulaana integrates AI-driven insights, decentralized governance, and Web3 innovation to deliver a seamless, user-driven knowledge platform.",
    },
    {
      logo: sulmineLogo,
      title: "Get Started With Sulmine",
      link: "https://sulmine.sulaana.com/",
      description:
        "SulMine is a cutting-edge mining platform developed by Giichi, designed to offer a seamless and efficient mining experience. Powered by advanced blockchain technology, SulMine ensures security, scalability, and a user-friendly interface for effortless mining.",
    },
  ];

// Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // common card
  const PartnerCard = ({ logo, title, description, link}) => {
    return (
      <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 h-[360px] ">
        <img src={logo} alt={title} className="w-20" />
        <Link to={link} 
         target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center mt-4 space-x-2 cursor-pointer">
        <FaLink color="#F0AA06" size={20}/>
        <p className="text-white text-lg font-bold">  {title}</p>
        </Link>
        <p className="text-white text-opacity-70 pt-2">{description}</p>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 pt-12 md:pt-24">
      {/* Heading 1 */}
      <p className="text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
      Ensuring long-term success and high  <br />
        for{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
        performance for critical mission objectives
        </span>
      </p>

      {/* Heading 2 */}
      <div className="flex flex-row justify-center items-center">
        <img src={star6Img} alt="" className="hidden md:hidden" />
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-70 text-center pt-6 ">
        Fast-track your Web3 journey with GiiCHi CoPilot <br/>– a customized partnership program built to bring your vision to life.
        </p>
        <img src={star6Img} alt="" className="hidden md:hidden" />
      </div>

      {/* Heading 3 */}
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap mb-10">
          - Our Projects-
        </p>
      </div>

      {/* Blocks : Our Partners */}
      {/* Slider: Our Partners */}
      <Slider {...sliderSettings} className="mt-8 w-full">
        {partners.map((partner, index) => (
          <div key={index} className="px-2">
            <PartnerCard
              logo={partner.logo}
              title={partner.title}
              link={partner.link}
              description={partner.description}
            />
          </div>
        ))}
      </Slider>
  
      {/* Heading 4 */}
      <div className="flex flex-row justify-center items-center mt-12">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Clients-
        </p>
      </div>

      {/* Blocks : Our Clients */}
      <div className="mt-8">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 w-full">
        <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-full md:w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={poxLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#38DD02] text-sm md:text-2xl dancing-font">PolluxChain</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-full md:w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={akamaiLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#DE891D] text-sm md:text-2xl dancing-font">Akamai</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-full md:w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={xdcImg} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#2C95D4] text-sm md:text-2xl dancing-font">Xinfin Network</p>
          </div>
          
        </div>

        <div className="hidden md:flex flex-row space-x-2 md:space-x-5 space-y-2 md:space-y-0 w-full mt-5">
        <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[25%] flex flex-row justify-center items-center space-x-4">
          <img src={zonLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#F23C27] text-sm md:text-2xl dancing-font">Zon Token </p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[25%] flex flex-row justify-center items-center space-x-4">
          <img src={lBankLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#FCD739] text-sm md:text-2xl dancing-font">LBank</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[25%] flex flex-row justify-center items-center space-x-4">
          <img src={koinBxLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#88C047] text-sm md:text-2xl dancing-font">KoinBx</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[25%] flex flex-row justify-center items-center space-x-4 ">
          <img src={coinstoreLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#394c9b] text-sm md:text-2xl dancing-font">CoinStore</p>
          </div>
        
        </div>

        <div className="hidden md:flex flex-row space-x-2 md:space-x-5 space-y-2 md:space-y-0 w-full mt-5">
        <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={sulaanaLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#9423B5] text-sm md:text-2xl dancing-font">Sulaana</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={googleLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#E94234] text-sm md:text-2xl dancing-font">Google</p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] w-[33%] flex flex-row justify-center items-center space-x-4">
          <img src={linodeLogo} alt="" className="w-9 h-9 object-contain"/>
            <p className=" text-[#2CB159] text-sm md:text-2xl dancing-font">Linode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
