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
          <img
            src={giichiLogo}
            alt="Giichi-logo"
            className="w-48 md:w-20 lg:w-40 xl:w-full object-contain cursor-pointer"
          />

          <div className="mt-12">
            <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
              FOLLOW
            </p>
            <div className="flex flex-row space-x-5 pt-6">
              <Link
                to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                  <FaXTwitter size={24} color="#000000" />
                </p>
              </Link>

              <Link
                to="https://www.linkedin.com/company/giichi-it-solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                  <FaLinkedinIn size={24} color="#000000" />
                </p>
              </Link>

              <Link
                to="https://www.instagram.com/giichi_labs/?igsh=MWhhY3RpMmtpeHBveA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                  <FaInstagram size={24} color="#000000" />
                </p>
              </Link>
            </div>

            <div className="flex flex-row space-x-5 pt-6">
              <Link
                to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="px-3 md:px-2 lg:px-3 py-3 md:py-2 lg:py-3 rounded-full bg-yellow-gradient transform hover:scale-110 transition-transform duration-300">
                  <FaYoutube size={24} color="#000000" />
                </p>
              </Link>

              <Link
                to="https://blog.giichi.network/"
                target="_blank"
                rel="noopener noreferrer"
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
          <a href="/about-us">
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              About Us
            </p>
          </a>
          <a href="https://blog.giichi.network/">
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              Insights
            </p>
          </a>
          <a href="/blockchain-development">
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              Blockchain
            </p>
          </a>
          <a href="/ai-ml-solution">
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              Artificial Intelligence
            </p>
          </a>
          <a href="/web3-consulting-company">
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              Web3 Consulting
            </p>
          </a>
          <a href="/token-coin-development">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
            Token Development
          </p>
          </a>
          <a href="/asset-tokenization">
          <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
            Asset Tokenization
          </p>
          </a>
          <a
            href="https://blog.giichi.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-opacity-70 hover:text-white pt-4 lg:pt-6 text-xs md:text-[11px] lg:text-xs xl:text-[15px] cursor-pointer">
              Blogs
            </p>
          </a>
          <a href="/contact-us">
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
            <div className="flex flex-row items-center space-x-2 mt-4">
              <IoCall color="#ffffff" />
              <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal ">
                +91 9252552665
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
              HR Enquiry
            </p>
            <div className="flex flex-row items-center space-x-2 mt-4">
              <IoCall color="#ffffff" />
              <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal ">
                +91 8557007331
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
              Email
            </p>
            <div className="flex flex-row items-center space-x-4 mt-4">
              <IoMailOpenSharp color="#ffffff" />
              <p className="text-white text-opacity-70 text-xs md:text-[12px] lg:text-xs xl:text-[15px] font-normal">
                info@giichi.network
              </p>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div>
          <p className="text-white font-semibold text-sm lg:text-[17px] pt-6 md:pt-0">
            LOCATION
          </p>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094246!2d144.95592831550496!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778fd78f5c4a99!2sFederation+Square!5e0!3m2!1sen!2sau!4v1614325275563!5m2!1sen!2sau"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
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
