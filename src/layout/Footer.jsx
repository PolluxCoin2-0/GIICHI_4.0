import giichiLogo from "../assets/Giichi_Logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 3xl:px-64 pt-12 bg-[#283430] bg-opacity-10 mt-12">
        {/* Footer contract */}
        <div className="flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div>
                <img src={giichiLogo} alt="" className=""/>
                <p className="text-white text-opacity-50 md:text-xs lg:text-[16px]">Discover the power of our secure and <br/>rewarding credit cards</p>
            </div>
            
            {/* About Us */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">About Us</p>
                <p className="text-white text-opacity-50 pt-2 md:pt-4 md:text-xs lg:text-[16px]">Investors</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Features</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Book a Demo</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Security</p>
            </div>

            {/* Products */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Products</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Credit Cards</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Gift Cards</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Saving Account</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">NFT</p>
            </div>

             {/* UseFull Links */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Useful Links</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Free Rewards</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Documentation</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Affiliate program</p>
            </div>

            {/* Socials */}
            {/* <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Socials</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">Changelog</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">License</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">SiteMaps</p>
                <p className="text-white text-opacity-50 pt-4 md:text-xs lg:text-[16px]">News</p>
            </div> */}

           {/* Socials Icons*/}
            <div>
            <p className="text-white font-semibold text-lg pt-6 md:pt-0">Follow</p>
            <div className="flex flex-row justify-between space-x-0 md:space-x-5 pt-6">
            <Link to="https://x.com/GiichiPvt?t=7FutgqPG6G_2umfDR53SgQ&s=09" target="_blank">
            <p className="px-3 py-3 rounded-full bg-yellow-gradient ">
            <FaXTwitter size={24} color="#000000"/>
            </p>
            </Link>

            <Link to="https://www.linkedin.com/company/giichi-it-solution/" target="_blank">
            <p className="px-3 py-3 rounded-full bg-yellow-gradient">
            <FaLinkedinIn size={24} color="#000000"/>
            </p>
            </Link>

            <Link to="https://www.instagram.com/giichi_labs/?igsh=MWhhY3RpMmtpeHBveA%3D%3D#" target="_blank">
            <p className="px-3 py-3 rounded-full bg-yellow-gradient">
            <FaInstagram size={24} color="#000000" />
            </p>
            </Link>

            <Link to="" target="_blank">
            <p className="px-3 py-3 rounded-full bg-yellow-gradient">
            <FaTelegramPlane size={24} color="#000000" />
            </p>
            </Link>
          </div>
            </div>



        </div>

        {/* copyright */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between pt-12 pb-8">
            <div className="flex flex-row space-x-1 justify-center items-center">
            <FaRegCopyright color="#758080" size={16}/>
            <p className="text-white text-opacity-50 text-xs md:text-xs lg:text-[16px] text-nowrap text-center">copyright 2023 Giichi All Rights Reserved</p>
           
            </div>
            <p className="text-white text-opacity-50 text-xs md:text-xs lg:text-[16px] text-nowrap text-center">This page uses cookies. See cookies details <span className="underline">here</span> </p>
        </div>
    </div>
  )
}

export default Footer
