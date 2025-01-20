import giichiLogo from "../assets/Giichi_Logo.png";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-4 md:px-64 pt-12 bg-[#283430] bg-opacity-10 mt-12">
        {/* Footer contract */}
        <div className="flex flex-col md:flex-row justify-between">
            {/* Logo */}
            <div>
                <img src={giichiLogo} alt="" className=""/>
                <p className="text-white text-opacity-50">Discover the power of our secure and <br/>rewarding credit cards</p>
            </div>
            
            {/* About Us */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">About Us</p>
                <p className="text-white text-opacity-50 pt-2 md:pt-4">Investors</p>
                <p className="text-white text-opacity-50 pt-2">Features</p>
                <p className="text-white text-opacity-50 pt-2">Book a Demo</p>
                <p className="text-white text-opacity-50 pt-2">Security</p>
            </div>

            {/* Products */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Products</p>
                <p className="text-white text-opacity-50 pt-2 md:pt-4">Credit Cards</p>
                <p className="text-white text-opacity-50 pt-2">Gift Cards</p>
                <p className="text-white text-opacity-50 pt-2">Saving Account</p>
                <p className="text-white text-opacity-50 pt-2">NFT</p>
            </div>

             {/* UseFull Links */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Useful Links</p>
                <p className="text-white text-opacity-50 pt-2 md:pt-4">Free Rewards</p>
                <p className="text-white text-opacity-50 pt-2">Documentation</p>
                <p className="text-white text-opacity-50 pt-2">Affiliate program</p>
            </div>

            {/* Socials */}
            <div>
                <p className="text-white font-semibold text-lg pt-6 md:pt-0">Socials</p>
                <p className="text-white text-opacity-50 pt-2 md:pt-4">Changelog</p>
                <p className="text-white text-opacity-50 pt-2">License</p>
                <p className="text-white text-opacity-50 pt-2">SiteMaps</p>
                <p className="text-white text-opacity-50 pt-2">News</p>
            </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between pt-12 pb-8">
            <div className="flex flex-row space-x-1 justify-center items-center">
            <FaRegCopyright color="#758080" size={16}/>
            <p className="text-white text-opacity-50 text-sm md:text-md">copyright 2023 Giichi All Rights Reserved</p>
           
            </div>
            <p className="text-white text-opacity-50 text-sm md:text-md">This page uses cookies. See cookies details <span className="underline">here</span> </p>
        </div>
    </div>
  )
}

export default Footer
