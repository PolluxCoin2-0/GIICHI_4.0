/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import insurance from "../../assets/insurance.png";

const Education = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 z-10">
        <img
          src={BlockchainImg}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-40 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain Solution for{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Education{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] lg:text-lg font-semibold leading-snug">
          Blockchain technology is revolutionizing the education sector <br/>by enhancing security, transparency, and accessibility. 
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
            Blockchain Solution for Education{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
          Blockchain technology is revolutionizing the education sector by enhancing security, transparency, and accessibility. 
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain education forecast */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
          Blockchain Application in Education: Embrace Greater Transparency and Credibility
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6">
          The education sector is evolving, and blockchain technology is at the forefront of this transformation. By offering secure, decentralized, and transparent records of learning, blockchain enhances credibility, accessibility, and efficiency in education.
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6">
          At Giichi IT Solutions, we empower educational institutions with cutting-edge blockchain solutions that fortify academic records, automate learning processes, and enhance trust in credentials. Our expert blockchain developers craft tailored solutions to help you redefine education with transparency and security.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

    {/* Benefits of blockchain application */}
      <div className="mt-24">
          <p className="text-white text-center text-xl md:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          Benefits of Blockchain<br />
            <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
              {" "}
              In Education
            </span>
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6">
          Blockchain technology is reshaping the education sector by enhancing security, accessibility, credibility, and 
transparency.
 
          </p>
          <div>
            <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
              <div className="flex flex-col md:flex-row w-full justify-center space-x-0 md:space-x-6 lg:space-x-8">
                <div
                  className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center w-full md:w-[33%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="security-&-transparency-image" className="w-20" />
                  <p className="text-white pt-4 text-xl font-bold ">
                    Lack of Security and Transparency
                  </p>
                  <p className="text-white text-opacity-70 text-[15px] pt-4">Blockchain solutions for education provides a secure and tamper-proof record of educational data, ensuring that student records and results cannot be altered or deleted.</p>
                </div>
                <div
                  className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center  w-full md:w-[33%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="enhanced-security-image" className="w-20" />
                  <p className="text-white pt-4 text-xl font-bold ">
                  Enhanced security
                  </p>
                  <p className="text-white text-opacity-70 text-[15px] pt-4">Blockchain solutions for education provides a secure and tamper-proof record of educational data, ensuring that student records and results cannot be altered or deleted.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-6 lg:space-x-8 mt-4 md:mt-6 lg:mt-8">
                <div
                  className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center  w-full md:w-[33%]  
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="" className="w-20" />
                  <p className="text-white pt-4 text-xl font-bold ">
                    Lack of Security and Transparency
                  </p>
                  <p className="text-white text-opacity-70 text-[15px] pt-4">Blockchain solutions for education provides a secure and tamper-proof record of educational data, ensuring that student records and results cannot be altered or deleted.</p>
                </div>
                <div
                  className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center w-full md:w-[33%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="" className="w-20" />
                  <p className="text-white pt-4 text-xl font-bold ">
                    Lack of Security and Transparency
                  </p>
                  <p className="text-white text-opacity-70 text-[15px] pt-4">Blockchain solutions for education provides a secure and tamper-proof record of educational data, ensuring that student records and results cannot be altered or deleted.</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Education;
