/* eslint-disable react/prop-types */
import EducationBannerImg from "../../../assets/EducationBanner.png";
import EducationFeatureImg from "../../../assets/EducationFeature.png";
import CalendlyButton from "../../../components/resuableComponent/Calendly";
import securityImg from '../../../assets/security.png';
import accessImg from "../../../assets/accessibility.png";
import credibilityImg from "../../../assets/credibility.png";
import transparencyImg from "../../../assets/transparency.png";
import { EducationFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/resuableComponent/Faq";
const Education = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 z-10">
        <img
          src={EducationBannerImg}
          alt="education-banner-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-20 lg:left-24 xl:left-48 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              Blockchain Solution {" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-4xl lg:text-5xl font-bold">
              for Education{" "}
            </span>
          </p>
          <p className="pt-6 md:text-[15px] 2xl:text-lg font-semibold leading-snug">
            Blockchain technology is revolutionizing the education sector <br />
            by enhancing security, transparency, and accessibility.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
        <div className="md:hidden flex flex-col items-start justify-center pt-6">
          <p className="">
            <span className="text-white text-3xl font-bold">
              Blockchain Solution for Education{" "}
            </span>
          </p>
          <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-50">
            Blockchain technology is revolutionizing the education sector by
            enhancing security, transparency, and accessibility.
          </p>
          {/* Button */}
          <CalendlyButton />
        </div>
      </div>

      {/* Bloackchain education forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 lg:space-x-10 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          <img src={EducationFeatureImg} alt="education-feature-image" className="w-[70%]"/>
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4">
            Blockchain Application in Education: Embrace Greater Transparency
            and Credibility
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            The education sector is evolving, and blockchain technology is at
            the forefront of this transformation. By offering secure,
            decentralized, and transparent records of learning, blockchain
            enhances credibility, accessibility, and efficiency in education.
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            At Giichi IT Solutions, we empower educational institutions with
            cutting-edge blockchain solutions that fortify academic records,
            automate learning processes, and enhance trust in credentials. Our
            expert blockchain developers craft tailored solutions to help you
            redefine education with transparency and security.
          </p>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-0 md:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Benefits of blockchain application */}
      <div className="mt-0 md:mt-12 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight spotlight-right"></div>
        <p className="text-white text-center text-xl md:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
          Benefits of Blockchain
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center">
            {" "}
            In Education
          </span>
        </p>
        <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6 text-center">
          Blockchain technology is reshaping the education sector by enhancing
          security, accessibility, <br /> credibility, and transparency.
        </p>
        <div>
          <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
            <div className="flex flex-col md:flex-row w-full justify-center space-x-0 md:space-x-6 lg:space-x-8">
              <div
                className="border-[1px] border-white border-opacity-20 rounded-xl py-8 lg:py-12 flex flex-col justify-center w-full md:w-[50%] lg:w-[40%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-4 lg:px-6"
              >
                <img
                  src={securityImg}
                  alt="security-&-transparency-image"
                  className="w-12 lg:w-20"
                />
                <p className="text-white pt-4 text-lg md:text-xl font-bold ">
                  Enhanced Security
                </p>
                <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
                  <ul className="list-disc ml-6">
                    <li>Provides a tamper-proof record of educational data.</li>
                    <li>
                      Prevents unauthorized alterations or deletions of student
                      records.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl py-8 lg:py-12 flex flex-col justify-center  w-full  md:w-[50%] lg:w-[40%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-4 lg:px-6"
              >
                <img
                  src={accessImg}
                  alt="enhanced-security-image"
                  className="w-12 lg:w-20"
                />
                <p className="text-white pt-4 text-lg md:text-xl font-bold ">
                  Improved Accessibility
                </p>
                <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
                  <ul className="list-disc ml-6">
                    <li>
                      {" "}
                      Enables global access to academic records for students,
                      teachers, and institutions.
                    </li>
                    <li>
                      {" "}
                      Eliminates delays in retrieving credentials and
                      transcripts.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-6 lg:space-x-8 mt-4 md:mt-6 lg:mt-8">
              <div
                className="border-[1px] border-white border-opacity-20 rounded-xl py-8 lg:py-12 flex flex-col justify-center  w-full md:w-[50%] lg:w-[40%]  
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-4 lg:px-6"
              >
                <img src={credibilityImg} alt="" className="w-12 lg:w-20" />
                <p className="text-white pt-4 text-lg md:text-xl font-bold ">
                  Enhanced Credibility
                </p>
                <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
                  <ul className="list-disc ml-6">
                    <li>
                      {" "}
                      Blockchain-based degree and certificate verification
                      ensures authenticity.
                    </li>
                    <li>
                      {" "}
                      Employers can instantly verify educational qualifications,
                      reducing fraud risks.
                    </li>
                  </ul>
                </p>
              </div>
              <div
                className="mt-4 md:mt-0 border-[1px] border-white border-opacity-20 rounded-xl py-8 lg:py-12 flex flex-col justify-center w-full  md:w-[50%] lg:w-[40%] 
                            md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-4 lg:px-6"
              >
                <img src={transparencyImg} alt="" className="w-12 lg:w-20" />
                <p className="text-white pt-4 text-lg md:text-xl font-bold ">
                  Increased Transparency
                </p>
                <p className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4">
                  <ul className="list-disc ml-6">
                    <li>
                      {" "}
                      Ensures trust and accountability in academic processes.
                    </li>
                    <li>
                      {" "}
                      Reduces disputes related to credentials and grading.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* faq */}
      <div>
        <Faq data={EducationFaq} />
      </div>
    </div>
  );
};

export default Education;
