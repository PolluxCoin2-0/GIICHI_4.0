
import blockImg1 from "../assets/blockImg1.png";
import blockImg2 from "../assets/blockImg2.png";
import blockImg3 from "../assets/blockImg3.png";
import blockImg4 from "../assets/blockImg4.png";
import blockImg5 from "../assets/blockImg5.png";
import blockImg6 from "../assets/blockImg6.png";
import Mission from "./Mission";
import Objectives from "./Objectives";
import Review from "../components/Review";
import LetsTalk from "../components/LetsTalk";
import Typewriter from "../components/Typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import whatsAppImg from "../assets/whatsapp.png";
import calendlyImg from "../assets/calendar.png";

const Dashboard = () => {
  return (
    <div className="pt-6 md:pt-20 ">
      {/* Section 1 */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-60 ">
        {/* Heading 2 */}
        <p className="text-center">
          <motion.p
             className="text-white text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center pt-4 leading-tight tracking-wide"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
          Unlock Web3 Success <br />
          </motion.p>
          <motion.p
               className="text-white text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-center pt-4 leading-tight tracking-wide"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              by Partnering with{" "}
              <span className="text-transparent bg-clip-text bg-green-gradient">
            GiiCHi
          </span>
            </motion.p>
          
        </p>

        {/* Heading 3 */}
        <div className="flex flex-row justify-center items-center h-10 md:h-20">
          <p className="text-sm md:text-md lg:text-3xl font-semibold  text-center pt-6">
            <Typewriter />
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 pt-8">
          <Link to="/contact-us">
          <button
            type="button"
            className="bg-green-gradient cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-12 py-3 text-white rounded-full text-lg md:text-xl text-nowrap transform hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </button>
          </Link>
          <Link to="/about-us">
            <button
              type="button"
              className="bg-black shadow-inner cursor-pointer shadow-lightGray text-white text-lg md:text-xl px-6 lg:px-12 py-3 rounded-full text-nowrap transform hover:scale-105 transition-transform duration-300"
            >
              About GiiCHi
            </button>
          </Link>
        </div>
      </div>

      {/* Section-2 Blocks Section */}
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full px-4 md:px-8 lg:px:24 xl:px-20 2xl:px-40 3xl:px-80 pt-10 md:pt-20">
        <div className="w-full md:w-[35%] border-[1px] border-white border-opacity-30 px-2 md:px-4 rounded-3xl p-2 md:p-4 bg-gray-gradient ">
          <img src={blockImg1} alt="" className="w-full " />
          <p className="text-white text-opacity-50 mt-4 lg:mt-4 xl:mt-4 mb-5 lg:-mb-2 xl:mb-4 block md:hidden lg:block px-2 lg:text-[15px] xl:text-[18px] text-justify">
          GiiCHi CoPilot offers the expertise, tools, and support you need to navigate the complexities of the Web3 ecosystem. With a tailored approach, we help you build, scale, and innovate within the decentralized world, ensuring your success every step of the way. Let us be your guide in making your Web3 ambitions come to life, from concept to execution.
          </p>
          <p className="text-white text-opacity-50 mt-2 mb-2 hidden md:block lg:hidden text-[12px]">
          GiiCHi CoPilot offers the expertise, tools, and support you need to navigate the complexities of the Web3 ecosystem. With a tailored approach, we help you build, scale, and innovate within the decentralized world, ensuring your success every step of the way. Let us be your guide in making your Web3 ambitions come to life, from concept to execution.
          </p>
        </div>

        <div className="w-full md:w-[65%] mt-4 md:mt-0">
          <div className="flex flex-row space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-3xl p-2 md:p-4 bg-gray-gradient">
            <div>
              <img src={blockImg2} alt="" className="" />
            </div>
            <div>
              <img src={blockImg3} alt="" className="" />
              <img src={blockImg4} alt="" className="mt-2 md:mt-4" />
            </div>
          </div>
          <div className="flex flex-row space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-3xl mt-4 p-2 md:p-4 bg-gray-gradient">
            <img src={blockImg5} alt="" className="w-[50%] lg:w-[62%]" />
            <img
              src={blockImg6}
              alt=""
              className="w-[50%] lg:w-[206px] xl:w-full pr-2"
            />
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-16 ">
        <div
          className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] 
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
        ></div>
      </div>

      {/* BLOCKCHAIN FEATURE PAGE */}
      {/* <div>
        <Features />
      </div> */}

      {/* MISSION PAGE */}
      <div>
        <Mission />
      </div>

      {/* OBJECTIVES PAGE */}
      <div>
        <Objectives />
      </div>

      {/* CLIENTS REVIEW PAGE */}
      <div className="pt-12 md:pt-24">
        <Review />
      </div>

      {/* CLIENTS REVIEW PAGE */}
      <div className="pt-6">
        <LetsTalk buttonText="Lets Talk" />
      </div>

      {/* whatsapp image */}
      <div>
     <a href="https://wa.me/9266416198" id="whatsapp-icon" target="_blank" title="Chat with us on WhatsApp">
    <img src={whatsAppImg} alt="WhatsApp" className="" />
    </a>
    </div>

    {/* Calender Image */}
    <div>
      <a href="" id="calender-icon" target="_blank" title="Schedule Meeting">
      <img src={calendlyImg} alt="calender" className="" />
      </a>
    </div>



    </div>
  );
};

export default Dashboard;
