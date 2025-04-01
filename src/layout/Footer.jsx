import giichiLogo from "../assets/Giichi_Logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoMailOpenSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-32 3xl:px-64 pt-12 bg-[#283430] bg-opacity-10 ">
      {/* Footer contract */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div>
          <img src={giichiLogo} alt="Giichi-logo" className="w-48 md:w-20 lg:w-40 xl:w-full object-contain cursor-pointer" />

          <div className="mt-12">
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
            FOLLOW
          </p>
          <div className="flex flex-row space-x-5 pt-6">
            <Link
              to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
              target="_blank" rel="noopener noreferrer"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaXTwitter size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.linkedin.com/company/giichi-it-solution/"
              target="_blank" rel="noopener noreferrer"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.instagram.com/giichi_labs/?igsh=MWhhY3RpMmtpeHBveA%3D%3D#"
              target="_blank" rel="noopener noreferrer"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaInstagram size={24} color="#000000" />
              </p>
            </Link>
          </div>

          <div className="flex flex-row space-x-5 pt-6">
            <Link
              to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
              target="_blank" rel="noopener noreferrer"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaYoutube size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://blog.giichi.network/"
              target="_blank" rel="noopener noreferrer"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <RiMediumFill size={24} color="#000000" />
              </p>
            </Link>
             </div>
          </div>
        </div>

        {/* About Us */}
        <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
            QUICK LINKS
          </p>
          <a href="https://www.giichi.network/about-us" >
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
           About Us
          </p>
          </a>
          <a href="https://blog.giichi.network/" >
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Insights
          </p>
          </a>
          <a href="https://www.giichi.network/blockchain-development">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Blockchain
          </p>
          </a>
          <a href="https://www.giichi.network/ai-ml-solution" >
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Artificial Intelligence
          </p>
          </a>
          <a href="/">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Web3 Consulting
          </p>
          </a>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Crypto Solutions
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          Asset Tokenization
          </p>
          <a href="https://blog.giichi.network/" target="_blank" rel="noopener noreferrer">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
           Blogs
          </p>
          </a>
          <a href="https://www.giichi.network/contact-us">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
           Contact
          </p>
          </a>
        </div>

        {/* Products */}
        <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          CONNECT
          </p>
          <div className="mt-8">
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          Sales Enquiry
          </p>
          <div className="flex flex-row items-center space-x-4 mt-4">
          <IoCall color="#ffffff"/>
          <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal ">+91 92664 16198</p>
          </div>
         </div>
         <div className="mt-8">
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          HR Enquiry
          </p>
          <div className="flex flex-row items-center space-x-4 mt-4">
          <IoCall color="#ffffff"/>
          <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal ">+91 92664 16198</p>
          </div>
         </div>
         <div className="mt-8">
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          Email
          </p>
          <div className="flex flex-row items-center space-x-4 mt-4">
          <IoMailOpenSharp color="#ffffff"/>
          <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal">info@giichi.network</p>
          </div>
         </div>
      </div>

        {/* Socials Icons*/}
        <div>
       
        </div>
      </div>

      {/* copyright */}
      <div className="flex flex-col md:flex-row justify-center pt-14 pb-8">
        <div className="flex flex-row space-x-1 justify-center items-center">
          <FaRegCopyright color="#758080" size={16} />
          <p className="text-white text-opacity-50 text-xs md:text-xs lg:text-[16px] text-nowrap text-center">
            copyright 2023 Giichi - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
