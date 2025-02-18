import giichiLogo from "../assets/Giichi_Logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import indiaMap from "../assets/indiaflag.png";
const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-64 pt-12 bg-[#283430] bg-opacity-10 ">
      {/* Footer contract */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div>
          <img src={giichiLogo} alt="" className="w-48 md:w-20 lg:w-40 xl:w-full object-contain" />
        </div>

        {/* About Us */}
        <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
            GO TO
          </p>
          <a href="/dashboard" >
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          HOME
          </p>
          </a>
          <a href="/about-us">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          ABOUT US
          </p>
          </a>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          OUR WORKS
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          BLOGS
          </p>
          <a href="/contact-us">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          CONTACT
          </p>
          </a>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          CAREERS
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          TERMS & CONDITIONS
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          PRIVACY POLICY
          </p>
          <a href="">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          SITEMAP
          </p>
          </a>
         
        </div>

        {/* Products */}
        <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          OUR SERVICES
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          BLOCKCHAIN DEVELOPMENT
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          DIGITAL TRANSFORMATION
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          ARTIFICIAL INTELLIGENCE
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          APPLICATION DEVELOPMENT
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          WEBSITE DEVELOPMENT
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          CLOUD SOLUTIONS
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          DEVOPS SOLUTIONS
          </p>
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
          TECHNOLOGY CONSULTING 
          </p>
        </div>

      

        {/* Socials Icons*/}
        <div>
          <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
            FOLLOW
          </p>
          <div className="flex flex-row space-x-5 pt-6">
            <Link
              to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
              target="_blank"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaXTwitter size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.linkedin.com/company/giichi-it-solution/"
              target="_blank"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.instagram.com/giichi_labs/?igsh=MWhhY3RpMmtpeHBveA%3D%3D#"
              target="_blank"
            >
              <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaInstagram size={24} color="#000000" />
              </p>
            </Link>
          </div>
          </div>

            {/* UseFull Links */}
        <div className="mt-5 md:mt-10">
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
          BUSINESS INQUIRY
          </p>
          <div className="flex flex-row items-center space-x-4 mt-6">
          <img src={indiaMap} alt="india-map-image" className="w-10  transform hover:scale-110 transition-transform duration-300"/>
          <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-semibold ">+91 92664 16198</p>
          </div>
         </div>
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
