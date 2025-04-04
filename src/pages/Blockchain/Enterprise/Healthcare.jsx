/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import HealthBannerImg from "../../../assets/HealthBanner.png";
import Framework from "../../../components/CommonComponent/Framework";
import { HealthcareFramework } from "../../../components/data/frameworkData";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const Healthcare = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image */}
      <BannerContent
        img={HealthBannerImg}
        title1=" Blockchain Development"
        title2="For Healthcare"
        desc="Revolutionizing Healthcare with Secure & Efficient Blockchain Solutions"
      />

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-6 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 md:mb-8 lg:mb-12">
        <div className="w-full md:w-[50%] ">
          <p className="text-white text-2xl xl:text-4xl 3xl:text-5xl font-semibold pt-4" style={{ lineHeight: "1.2" }}>
            The Challenges of Healthcare Without Blockchain
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-50 pt-6 leading-7 w-full md:w-[80%]">
            In today’s healthcare system, data security, accessibility, and
            integrity remain critical issues. From blood pressure readings to
            prescription records, patient data needs 24/7 availability for
            accurate monitoring and treatment. However, the existing
            infrastructure struggles with:
          </p>
          <ButtonFreeDemo/>
        </div>
        <div className="w-full md:w-[70%] lg:w-[50%] mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 items-center ">
            <div className=" bg-[#239400] bg-opacity-5 p-6 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              <p className="text-[#239400] text-5xl font-semibold">30%</p>
              <p className="text-white pt-2 text-[17px] md:text-[14px] lg:text-[17px]">
                of medicines in parts of Latin America, Asia and Africa can be
                counterfeit.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-5 p-9 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              <p className="text-[#239400] text-5xl font-semibold"> 50M+</p>
              <p className="text-white pt-2 text-[17px] md:text-[14px] lg:text-[17px]">
                patient records were breached in 2021 (Global News Wire).
              </p>
            </div>
          </div>

          <div className="flex flex-row space-x-6 items-center mt-6">
            <div className=" bg-[#239400] bg-opacity-5 p-8 rounded-3xl md:rounded-bl-3xl  rounded-br-3xl  w-full">
              <p className="text-[#239400] text-5xl font-semibold ">$60B+</p>
              <p className="text-white pt-2 text-[17px] md:text-[14px] lg:text-[17px]">
                lost annually due to healthcare fraud and abuse (Global News
                Wire).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="flex justify-center items-center pt-6 lg:pt-16 pb-6">
        <div className="relative mb-8 w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
      </div>

      {/* Healthcare framework */}
      <Framework
        data={HealthcareFramework}
        heading1="How Giichi's Blockchain Healthcare"
        heading2=" Solutions Drive Real Impact"
        desc="At Giichi IT Solutions, we tackle critical healthcare challenges with cutting-edge blockchain applications that ensure security, efficiency, and transparency across the industry."
      />

      {/* Schedule a free demo */}
      <div>
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default Healthcare;
