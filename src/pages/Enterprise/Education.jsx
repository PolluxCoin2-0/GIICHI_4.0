/* eslint-disable react/prop-types */
import BlockchainImg from "../../assets/blockchainImg.png";
import LetsTalk from "../../components/LetsTalk";
import CalendlyButton from "../../components/resuableComp/Calendly";
import { BsClipboardDataFill } from "react-icons/bs";
import { GrDocumentPerformance } from "react-icons/gr";
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
            With expertise in 40+ blockchain protocols, Giichi IT Solutions{" "}
            <br />
            is driving the web3 revolution with cutting-edge <br />
            blockchain development services.
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Development Company{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            With expertise in 40+ blockchain protocols, Giichi IT Solutions is
            driving the web3 revolution with cutting-edge blockchain development
            services.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 mt-12 md:mt-24 mb-12">
        <div className="w-full md:w-[40%]">{/* img */}</div>

        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4 px-0 xl:px-28 ">
            Blockchain Application in Education: Embrace Greater Transparency
            and Credibility
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
          <p className="text-sm lg:text-[15px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            molestiae minus quasi nostrum vitae ratione excepturi ducimus esse
            saepe magni ipsum? Quia perferendis rerum sit impedit blanditiis et
            nobis reiciendis recusandae provident? Sequi ea quibusdam, quo
            nesciunt porro voluptas ducimus.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Challenges with blockchainn education */}
      <div className="pt-12 pb-20">
        <p className="text-white text-center text-xl md:text-4xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 ">
          Challenges with the Existing Educational Process:
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            What can Blockchain address?
          </span>{" "}
        </p>
        <p className="hidden lg:block text-center text-sm md:text-[17px] lg:text-[15px] xl:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
          The existing educational system is beset with the following
          inefficiencies that lead to an <br />
          unavoidable Blockchain application in education.
        </p>

        <div className="pt-4">
          {/* step 1 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Inefficient Record Keeping
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Educational institutions currently use paper-based methods to{" "}
                <br /> manage academic records, certificates, and credentials,{" "}
                <br />
                leading to impersonation risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 2 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Learner Performance Tracking
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Educational institutions currently use paper-based methods to{" "}
                <br /> manage academic records, certificates, and credentials,{" "}
                <br />
                leading to impersonation risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 3 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Ineffective Identity Management
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Educational institutions currently use paper-based methods to{" "}
                <br /> manage academic records, certificates, and credentials,{" "}
                <br />
                leading to impersonation risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 4 */}
          <div className="flex flex-row space-x-12 items-center ml-[980px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Accountability Issues
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Educational institutions currently use paper-based methods to{" "}
                <br /> manage academic records, certificates, and credentials,{" "}
                <br />
                leading to impersonation risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <GrDocumentPerformance color="#ffffff" size={36} />
            </div>
          </div>

          {/* step 5 */}
          <div className="flex flex-row space-x-12 items-center ml-[400px] mt-12">
            <div className="">
              <p className="text-white text-3xl exo-font">
                Transcript Availability
              </p>
              <p className="text-white text-[14px] text-opacity-70 exo-font pt-2">
                Educational institutions currently use paper-based methods to{" "}
                <br /> manage academic records, certificates, and credentials,{" "}
                <br />
                leading to impersonation risks.
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-white border-4 w-20 h-20 p-2 absolute left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <BsClipboardDataFill color="#ffffff" size={36} />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <p className="text-white text-center text-xl md:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
            Benefits of Blockchain application <br />
            <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
              {" "}
              In Education
            </span>
          </p>
          <div>
            <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
              <div className="flex flex-col md:flex-row w-full justify-center space-x-0 md:space-x-6 lg:space-x-8">
                <div
                  className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center w-full md:w-[33%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="" className="w-20" />
                  <p className="text-white pt-4 text-xl font-bold ">
                    Lack of Security and Transparency
                  </p>
                  <p className="text-white text-opacity-70 text-[15px] pt-4">Blockchain solutions for education provides a secure and tamper-proof record of educational data, ensuring that student records and results cannot be altered or deleted.</p>
                </div>
                <div
                  className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center  w-full md:w-[33%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-6"
                >
                  <img src={insurance} alt="" className="w-20" />
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
      </div>
      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Education;
