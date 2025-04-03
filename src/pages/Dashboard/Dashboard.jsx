import Mission from "./Mission";
import Objectives from "./Objectives";
import LetsTalk from "../../components/resuableComponent/LetsTalk";
import Typewriter from "../../components/resuableComponent/Typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import whatsAppImg from "../../assets/whatsapp.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Review from "./Review";
import EmailPopup from "../../components/resuableComponent/EmailPopup";
import calendlyImg from "../../assets/calendar.png";

const Dashboard = () => {
  const [blogData, setBlogData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  // FOR GETTING ALL THE BLOGS DATA HERE IN GIICHI
  const fetchData = async () => {
    const res = await axios.get(
      "https://bnode.giichi.network/api/blog/getAllBlogs?search="
    );
    console.log("Res", res?.data?.data);
    setBlogData(res?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
   // FOR EMAIL POPUP
 useEffect(() => {
  const timer = setTimeout(() => setPopupOpen(true), 2000); // Show after 2s
  return () => clearTimeout(timer);
 }, []);

   const handleEmailSubmit = (email) => {
    console.log("Email Submitted:", email);
  };

 // FOR CALENDLY POPUP
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    // Initialize the Calendly widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/giichi-network',
      });
    }
    return false;
  };


  return (
    <div className="pt-6 md:pt-20 ">
      
      {/* Section 1 */}   
      <div className="px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>

        {/* Heading 2 */}
          <motion.h1
            className="text-white text-2xl md:text-4xl lg:text-6xl font-bold text-center pt-4 leading-10 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
             Empowering Web3 & Blockchain 
             <br />
            Innovation with{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              GiiCHi
            </span>
          </motion.h1>

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
              className="bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-12 py-3 text-white rounded-full text-lg md:text-xl text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "  title="Click to contact us form"
            >
              Contact Us
            </button>
          </Link>
          <Link to="/about-us">
            <button
              type="button"
              className="bg-black focus:outline-none shadow-inner cursor-pointer shadow-lightGray text-white text-lg md:text-xl px-6 lg:px-12 py-3 rounded-full text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="About giichi"  title="Click to visit About page"
            >
              About GiiCHi
            </button>
          </Link>
        </div>
      </div>

      {/* Section-2 Blocks Section */}
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full px-4 md:px-8 lg:px:24 xl:px-36 2xl:px-40 3xl:px-80 pt-10 md:pt-20">
        <Link
          to={`https://blog.giichi.network/blog-detail/${blogData[0]?._id}`}
          target="_blank" rel="noopener noreferrer"
          className="w-full h-full md:w-[35%] border-[1px] border-white border-opacity-30 px-2 md:px-4 
      rounded-3xl p-2 md:p-4 bg-gray-gradient "
        >
          <img
            src={blogData[0]?.blogImages[0]}
            alt={blogData[0]?.shortDescription || "Blog-Feature-image"}
            className="w-full rounded-2xl"
          />
          <p className="text-white relative overflow-hidden max-h-[13em] text-opacity-50 mt-4 lg:mt-4 xl:mt-4 mb-5 lg:-mb-2 xl:mb-4 block md:hidden lg:block px-2 lg:text-[15px] xl:text-[18px] 3xl:text-[17px] z-10">
            <div
              dangerouslySetInnerHTML={{ __html: blogData[0]?.description }}
              className="line-clamp-10 text-justify hyphens-auto"
            />
          </p>

          <p className="text-white relative overflow-hidden max-h-[11em] text-opacity-50 mt-2 mb-2 hidden md:block lg:hidden text-[12px] z-10">
            <div
              dangerouslySetInnerHTML={{ __html: blogData[0]?.description }}
              className="line-clamp-10 text-justify hyphens-auto"
            />
          </p>
        </Link>

        <div className="w-full md:w-[65%] mt-4 md:mt-0">
          <div className="flex flex-row w-full space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-3xl p-2 md:p-4 bg-gray-gradient">
            <Link
              to={`https://blog.giichi.network/blog-detail/${blogData[1]?._id}`}
              target="_blank" rel="noopener noreferrer"
              className="w-[60%] md:w-[50%] relative group overflow-hidden"
            >
              <img
                src={blogData[1]?.blogImages[0]}
                alt={blogData[1]?.shortDescription || "Blog Feature image"}
                className="w-full h-full object-center rounded-2xl z-20"
              />
              <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-70 
              text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                {blogData[1]?.shortDescription}
              </p>
            </Link>
            <div className="w-[60%] md:w-[50%]">
              <Link
                to={`https://blog.giichi.network/blog-detail/${blogData[2]?._id}`}
                target="_blank" rel="noopener noreferrer"
                className="relative group overflow-hidden"
              >
                <img
                  src={blogData[2]?.blogImages[0]}
                  alt={blogData[2]?.shortDescription || "Blog Feature image"}
                  className="w-full h-36 rounded-2xl z-20 object-cover"
                />
                <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-70 text-white p-1 
                md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                  {blogData[2]?.shortDescription}
                </p>
              </Link>
              <Link
                to={`https://blog.giichi.network/blog-detail/${blogData[3]?._id}`}
                target="_blank" rel="noopener noreferrer"
                className="relative group overflow-hidden"
              >
                <img
                  src={blogData[3]?.blogImages[0]}
                  alt={blogData[3]?.shortDescription || "Blog Feature image"}
                  className="mt-2 md:mt-4 w-full h-36 rounded-2xl z-20 object-cover"
                />
                <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                  {blogData[3]?.shortDescription}
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-row w-full space-x-2 md:space-x-4 border-[1px] border-white border-opacity-30 rounded-3xl mt-4 p-2 md:p-4 bg-gray-gradient">
            <Link
              to={`https://blog.giichi.network/blog-detail/${blogData[4]?._id}`}
              target="_blank" rel="noopener noreferrer"
              className="w-[50%] h-40 relative group overflow-hidden"
            >
              <img
                src={blogData[4]?.blogImages[0]}
                alt={blogData[4]?.shortDescription || "Blog Feature image"}
                className="w-full h-full rounded-2xl z-20 object-cover"
              />
              <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full
               bg-black bg-opacity-70 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 
               group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                {blogData[4]?.shortDescription}
              </p>
            </Link>

            <Link
              to={`https://blog.giichi.network/blog-detail/${blogData[5]?._id}`}
              target="_blank" rel="noopener noreferrer"
              className="w-[49%] h-40 pr-0 relative group overflow-hidden"
            >
              <img
                src={blogData[5]?.blogImages[0]}
                alt={blogData[5]?.shortDescription || "Blog Feature image"}
                className="w-full h-full object-cover rounded-2xl z-20"
              />
              <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                {blogData[5]?.shortDescription}
              </p>
            </Link>
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
        <a
          href="https://wa.me/9266416198"
          id="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <img src={whatsAppImg} alt="WhatsApp-icon" className="" />
        </a>
      </div>

      <div className="p-10 ">
      <EmailPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSubmit={handleEmailSubmit}
      />
    </div> 

      {/* Calender Image */}
      <div>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div className="cursor-pointer" id="calender-icon"title="Schedule Meeting">
      <img src={calendlyImg} alt="calender" className="" onClick={handleClick}/>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
