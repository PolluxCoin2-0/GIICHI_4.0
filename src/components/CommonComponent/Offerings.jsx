/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import bgimg from "../../assets/bitcoin-key-wallet.svg";

const Offerings = ({data}) => {
  return (
    <div>
        <div className="bg-[#283430] bg-opacity-20 flex flex-col md:flex-row items-center space-x-0 md:space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
             <div>
               {" "}
               <img src={bgimg} alt="" className="" />{" "}
             </div>
             <div>
               <p className="text-white text-lg lg:text-2xl font-semibold mt-6 md:mt-0">
                {data}
               </p>
               <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6">
                 <a
                   type="button"
                   href="https://wa.me/9266416198"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-5 md:px-6 lg:px-8 py-3 text-white 
                   text-sm lg:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                   aria-label="Contact us "
                   title="Click to contact us form"
                 >
                   Connect on Whatsapp
                 </a>
                 <Link to="/contact-us">
                   <button
                     type="button"
                     className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  
                     text-sm lg:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                     aria-label="Contact us "
                     title="Click to contact us form"
                   >
                     Request a Free Demo
                   </button>
                 </Link>
               </div>
             </div>
           </div>
    </div>
  )
}

export default Offerings
