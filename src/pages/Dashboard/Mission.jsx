/* eslint-disable react/prop-types */
import poxLogo from "../../assets/poxLogo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import uviLogo from "../../assets/uviLogo.png";
import sulaanaLogo from "../../assets/SulanaLogo.svg";
import sulmineLogo from "../../assets/sulLogo.svg";
import { Link } from "react-router-dom";
import ClientsSlider from "./ClientsSlider";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import polediumLogo from "../../assets/polediumLogo.png";
import pmTradeLogo from "../../assets/pm_Logo.png";
import hyperpoxLogo from '../../assets/hyperlogo.svg';

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
      logo: polediumLogo,
      title: "Explore our Web Banking",
      link: "https://poledium.net/",
      description:
        "Poledium is a Decentralized Web3 banking on PolluxChain where user Stake $POX, earn massive APY rewards, and access borderless financial services—no banks, no limits.",
    },
    {
      logo: pmTradeLogo,
      title: "Trade on PM NFT",
      link: "https://pmtrade.polluxchain.com/",
      description:
        "PM_TRADE is a powerful staking platform where you can stake a minimum of 10 POX, gain eligibility for USDX, and enjoy unlimited rewards.Stake, earn, and grow your wealth seamlessly.",
    },
    {
      logo: hyperpoxLogo,
      title: "Explore Hyperpox",
      link: "https://hyperpox.com/",
      description:
        "HyperPOX offers USDX staking & POX rewards with up to 5% ROI. Earn passive income, team bonuses & maximize crypto earnings today.",
    },
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
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (index) => {
      document.querySelectorAll(".slick-slide").forEach((slide, i) => {
        slide.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
    },
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
  const PartnerCard = ({ logo, title, description, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
    return (
      <div className="w-full border-[1px] border-white border-opacity-10 rounded-3xl p-4 lg:p-6">
        <img
          src={logo}
          alt={title}
          className="w-20 h-20 md:w-20  object-contain"
        />
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center mt-4 space-x-2 cursor-pointer"
        >
          <FaLink color="#F0AA06" size={20} />
          <p className="text-white text-lg font-bold text-nowrap"> {title}</p>
        </Link>
        <p
          className="text-white text-opacity-70 pt-2"
          style={{
            maxHeight: isExpanded ? "none" : "3.6em",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        {/* Toggle "View More" / "View Less" */}
        <div className="flex justify-between items-center w-[250px] ">
          <button
            onClick={toggleDescription}
            className="text-orange font-medium leading-snug py-4 text-justify focus:outline-none"
            aria-label="read more content" type="button" title="Click to read more description"
          >
            {isExpanded ? (
              <FiMinusCircle size={24} color="#ffffff" />
            ) : (
              <FiPlusCircle size={24} color="#ffffff" />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-64 pt-6 md:pt-12">
      <div className="hidden md:block spotlight2 spotlight-left1"></div>
      <div className="hidden md:block spotlight1 spotlight-right1"></div>
      {/* Heading 1 */}
      <p className="hidden md:block text-white text-xl md:text-4xl 2xl:text-6xl font-bold text-center pt-4 leading-snug tracking-wide">
        Ensuring long-term success and high performance for
        <br />
        <span className="block pt-2 text-transparent bg-clip-text bg-green-gradient">
          critical mission objectives
        </span>
      </p>
      <p className="block md:hidden text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
        Ensuring long-term success and high{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
          performance for critical mission objectives
        </span>
      </p>

      {/* Heading 2 */}
      <div className="flex flex-row justify-center items-center">
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-70 text-center pt-6 ">
          Fast-track Your Web3 Journey With GiiCHi <br />
        </p>
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
      <div className="flex flex-row justify-center items-center mt-12 md:mt-20">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Clients-
        </p>
      </div>
      {/* Blocks : Our Clients */}
      <ClientsSlider />
    </div>
  );
};

export default Mission;
