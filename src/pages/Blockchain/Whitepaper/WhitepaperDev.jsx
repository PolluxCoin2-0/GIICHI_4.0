import { Link } from "react-router-dom";
import Supp1Img from "../../../assets/Supp1.png";
import { WhitepaperIndustriesData } from "../../../components/data/industriesData";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import Industries from "../../../components/CommonComponent/Industries";
const WhitepaperDev = () => {
  return (
    <div className="mt-20 ">
      {/* white paper creation service */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        <p className="text-5xl text-white font-semibold text-center">
          Personalized White Paper <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Creation Services
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae tenetur cupiditate labore libero porro veniam dicta
              aliquid officia autem atque doloribus ullam esse ut, optio aut, ab
              aliquam. Placeat laudantium magnam unde quis quas ex eos
              consequuntur ut eum exercitationem impedit, enim non ab iure
              laborum alias, reiciendis fuga cupiditate.
            </p>
            <p className="text-white text-opacity-70 pt-4 text-justify hyphens-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae tenetur cupiditate labore libero porro veniam dicta
              aliquid officia autem atque doloribus ullam esse ut, optio aut, ab
              aliquam. Placeat laudantium magnam unde quis quas ex eos
              consequuntur ut eum exercitationem impedit, enim non ab iure
              laborum alias, reiciendis fuga cupiditate.
            </p>
            {/* button to connect on whatsapp */}
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Connect on Whatsapp
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* our blockchain creation  process */}
      <div className="bg-[#283430] bg-opacity-10 relative mt-20 pt-10 pb-10 flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-4xl text-white font-semibold text-center">
          Our White Paper <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-5xl">
            Creation Process
          </span>
        </p>
        <p className="text-white text-opacity-70 pt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque.
        </p>
        {/* button for a free demo */}
        <Link to="/contact-us">
          <button
            type="button"
            className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white text-[17px] text-nowrap transform hover:scale-105 transition-transform duration-300"
            aria-label="Contact us "
            title="Click to contact us form"
          >
            Request a Free Demo
          </button>
        </Link>
        {/* process */}
        <div className="pt-4 pb-8 mt-8 relative ">
          {/* Step 1 */}
          <div className="flex flex-row space-x-12 items-center mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Understand</p>
              <p className="text-white text-[17px] text-opacity-80 exo-font pt-2 w-[40%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem vero odio rerum suscipit qui nulla! Quidem illo dolores veritatis!
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[500px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              01
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-[700px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Research</p>
              <p className="text-white text-[17px] text-opacity-80 exo-font pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem vero odio rerum suscipit qui nulla! Quidem illo dolores veritatis!
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[500px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              02
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-row space-x-12 items-center mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Content Creation</p>
              <p className="text-white text-[17px] text-opacity-80 exo-font pt-2 w-[40%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem vero odio rerum suscipit qui nulla! Quidem illo dolore veritatis!
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[500px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              03
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-[700px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Design</p>
              <p className="text-white text-[17px] text-opacity-80 exo-font pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem vero odio rerum suscipit qui nulla! Quidem illo dolores veritatis!
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[500px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              04
            </div>
          </div>
          {/* Step 5 */}
          <div className="flex flex-row space-x-12 items-center mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">Delivery</p>
              <p className="text-white text-[17px] text-opacity-80 exo-font pt-2 w-[40%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt rem vero odio rerum suscipit qui nulla! Quidem illo dolores veritatis!
              </p>
            </div>
            <div className="text-white text-4xl font-bold border-white border-4 w-20 h-20 p-2 absolute left-[500px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              05
            </div>
          </div>
        </div>
      </div>

      {/* Importance of whitepaper */}
      <div className="mt-20 text-center">
      <p className="text-5xl text-white font-semibold text-center">Importance of Whitepaper </p>
      <p className="text-white text-opacity-70 text-center pt-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        A whitepaper is a detailed and authoritative report that explains a complex issue, proposes a solution, or presents research findings. <br/>
        Whitepapers are commonly used in business, technology, and academia to inform and persuade an audience. <br/>Here’s why they are important:</p>
            <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 pt-10">
                  <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-6 lg:space-x-8">
                    <div
                      className=" rounded-xl py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                    md:hover:scale-105 transition-transform duration-500 ease-in-out "
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4 ">
                      Establishing Authority and Credibility
                      </p>
                    </div>
                    <div
                      className="mt-4 md:mt-0 py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                    md:hover:scale-105 transition-transform duration-500 ease-in-out "
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4 ">
                      Educating the Audience
                      </p>
                    </div>
                    <div
                      className="mt-4 md:mt-0  py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                    md:hover:scale-105 transition-transform duration-500 ease-in-out "
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4 ">
                      Supporting Decision-Making
                      </p>
                    </div>
                  </div>
        
                  <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-6 lg:space-x-8 mt-4 md:mt-6 lg:mt-8">
                    <div
                      className="py-12 flex flex-col justify-center items-center w-full md:w-[33%]  
                    md:hover:scale-105 transition-transform duration-500 ease-in-out "
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4">
                      Marketing and Lead Generation
                      </p>
                    </div>
                    <div
                      className="mt-4 md:mt-0  py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                    md:hover:scale-105 transition-transform duration-500 ease-in-out"
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4 ">
                      Differentiating a Product or Service
                      </p>
                    </div>
                    <div
                      className="mt-4 md:mt-0  py-12 flex flex-col justify-center items-center w-full md:w-[33%] 
                    md:hover:scale-105 transition-transform duration-500 ease-in-out "
                    >
                      <img src={Supp1Img} alt="" className="w-20" />
                      <p className="text-white pt-4 ">
                      Fundraising and Investment Attraction
                      </p>
                    </div>
                  </div>
                </div>
      </div>

      {/* Industries sector that we cover */}
          <Industries 
          data={WhitepaperIndustriesData}
          heading1="Industries & Sector"
          heading2="We Cover"
          desc=" As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs."/>

       {/* Schedule a free demo */}
       <div className="mt-12">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default WhitepaperDev;
