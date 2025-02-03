import giichiLogo from "../assets/Giichi_Logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 3xl:px-64 pt-12 bg-[#283430] bg-opacity-10 ">
      {/* Footer contract */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo */}
        <div>
          <img src={giichiLogo} alt="" className="" />
        </div>

        {/* About Us */}
        <div>
          <p className="text-white font-semibold text-lg pt-6 md:pt-0">
            About Us
          </p>
          <p className="text-white text-opacity-50 pt-2 md:pt-4 md:text-xs lg:text-[16px]">
            Investors
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Features
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Book a Demo
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Security
          </p>
        </div>

        {/* Products */}
        <div>
          <p className="text-white font-semibold text-lg pt-6 md:pt-0">
            Products
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Credit Cards
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Gift Cards
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Saving Account
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            NFT
          </p>
        </div>

        {/* UseFull Links */}
        <div>
          <p className="text-white font-semibold text-lg pt-6 md:pt-0">
            Useful Links
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Free Rewards
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Documentation
          </p>
          <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">
            Affiliate program
          </p>
        </div>

        {/* Socials Icons*/}
        <div>
          <p className="text-white font-semibold text-lg pt-6 md:pt-0">
            Follow
          </p>
          <div className="flex flex-row space-x-5 pt-6">
            <Link
              to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
              target="_blank"
            >
              <p className="px-3 py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaXTwitter size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.linkedin.com/company/giichi-it-solution/"
              target="_blank"
            >
              <p className="px-3 py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn size={24} color="#000000" />
              </p>
            </Link>

            <Link
              to="https://www.instagram.com/giichi_labs/?igsh=MWhhY3RpMmtpeHBveA%3D%3D#"
              target="_blank"
            >
              <p className="px-3 py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                <FaInstagram size={24} color="#000000" />
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="flex flex-col md:flex-row justify-center pt-14 pb-8">
        <div className="flex flex-row space-x-1 justify-center items-center">
          <FaRegCopyright color="#758080" size={16} />
          <p className="text-white text-opacity-50 text-xs md:text-xs lg:text-[16px] text-nowrap text-center">
            copyright 2023 Giichi All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
