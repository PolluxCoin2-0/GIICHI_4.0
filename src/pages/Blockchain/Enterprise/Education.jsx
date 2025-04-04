/* eslint-disable react/prop-types */
import EducationBannerImg from "../../../assets/EducationBanner.png";
import EducationFeatureImg from "../../../assets/EducationFeature.png";
import securityImg from "../../../assets/security.png";
import accessImg from "../../../assets/payment.png";
import credibilityImg from "../../../assets/credibility.png";
import transparencyImg from "../../../assets/search-user.png";
import { EducationFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/resuableComponent/Faq";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const benefits = [
  [
    {
      image: securityImg,
      title: "Enhanced Security",
      points: [
        "Provides a tamper-proof record of educational data.",
        "Prevents unauthorized alterations or deletions of student records.",
      ],
    },
    {
      image: accessImg,
      title: "Improved Accessibility",
      points: [
        "Enables global access to academic records for students, teachers, and institutions.",
        "Eliminates delays in retrieving credentials and transcripts.",
      ],
    },
  ],
  [
    {
      image: credibilityImg,
      title: "Enhanced Credibility",
      points: [
        "Blockchain-based degree and certificate verification ensures authenticity.",
        "Employers can instantly verify educational qualifications, reducing fraud risks.",
      ],
    },
    {
      image: transparencyImg,
      title: "Increased Transparency",
      points: [
        "Ensures trust and accountability in academic processes.",
        "Reduces disputes related to credentials and grading.",
      ],
    },
  ],
];

const BenefitCard = ({ image, title, points }) => {
  return (
    <div className="border-[1px] border-white border-opacity-20 rounded-xl py-8 lg:py-12 flex flex-col justify-center w-full 
    md:w-[50%] lg:w-[40%] md:hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-greish-gradient px-4 lg:px-6">
      <img src={image} alt={title} className="w-12 lg:w-16" />
      <p className="text-white pt-4 text-lg md:text-xl font-bold">{title}</p>
      <ul className="text-white text-opacity-70 text-[12px] lg:text-[15px] pt-4 list-disc ml-6">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={EducationBannerImg}
        title1="Blockchain Solution"
        title2="for Education"
        desc="Blockchain technology is revolutionizing the education sector by enhancing security, transparency, and accessibility."
      />

      {/* Bloackchain education forecast */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 lg:space-x-10 items-center w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-6 md:mb-12 relative">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="w-full md:w-[40%]">
          <img
            src={EducationFeatureImg}
            alt="education-feature-image"
            className="w-[70%]"
          />
        </div>
        <div className="w-full md:w-[60%] ">
          <p className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4">
            Blockchain Application in Education: Embrace Greater Transparency
            and Credibility
          </p>
          <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto" style={{ lineHeight: "1.7" }}>
            The education sector is evolving, and blockchain technology is at
            the forefront of this transformation. By offering secure,
            decentralized, and transparent records of learning, blockchain
            enhances credibility, accessibility, and efficiency in education.<br/> <br/>
            At Giichi IT Solutions, we empower educational institutions with
            cutting-edge blockchain solutions that fortify academic records,
            automate learning processes, and enhance trust in credentials. Our
            expert blockchain developers craft tailored solutions to help you
            redefine education with transparency and security.
            </p>
            <ButtonFreeDemo/>
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
            In Education
          </span>
        </p>
        <p className="text-sm lg:text-[16px] font-normal text-white text-opacity-50 pt-6 px-0 xl:px-28 leading-6 text-center">
          Blockchain technology is reshaping the education sector by enhancing
          security, accessibility, credibility, and transparency.
        </p>
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 pt-10">
          {benefits.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row justify-center w-full space-x-0 md:space-x-6 lg:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-6 lg:mt-8"
            >
              {row.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  image={benefit.image}
                  title={benefit.title}
                  points={benefit.points}
                />
              ))}
            </div>
          ))}
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
