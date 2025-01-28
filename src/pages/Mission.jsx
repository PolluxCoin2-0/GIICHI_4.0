/* eslint-disable react/prop-types */
import star6Img from "../assets/star6.png";
import crowd1Logo from "../assets/crowd1Logo.png";
import polluxLogo from "../assets/polluxLogo (3).png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mission = () => {
  const partners = [
    {
      logo: crowd1Logo,
      title: "Crowd1",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: crowd1Logo,
      title: "Crowd1",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: polluxLogo,
      title: "Pollux",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
  ];

// Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // common card
  const PartnerCard = ({ logo, title, description }) => {
    return (
      <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
        <img src={logo} alt={title} className="" />
        <p className="text-white pt-4">{title}</p>
        <p className="text-white text-opacity-50 pt-2">{description}</p>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 pt-12 md:pt-24">
      {/* Heading 1 */}
      <p className="text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
        Generating lasting performance <br />
        for{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Mission Critical Priorities
        </span>
      </p>

      {/* Heading 2 */}
      <div className="flex flex-row justify-between items-center">
        <img src={star6Img} alt="" className="hidden md:block" />
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-50 text-center pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star6Img} alt="" className="hidden md:block" />
      </div>

      {/* Heading 3 */}
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap mb-10">
          - Our Projects-
        </p>
      </div>

      {/* Blocks : Our Partners */}
      {/* Slider: Our Partners */}
      <Slider {...sliderSettings} className="mt-8 w-full">
        {partners.map((partner, index) => (
          <div key={index} className="px-2">
            <PartnerCard
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
            />
          </div>
        ))}
      </Slider>
  
      {/* Heading 4 */}
      <div className="flex flex-row justify-center items-center mt-12">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Clients-
        </p>
      </div>

      {/* Blocks : Our Clients */}
      <div className="mt-8">
        <div className="flex flex-row space-x-2 md:space-x-5 space-y-5 md:space-y-0 w-full">
        <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515]  w-[25%] flex flex-row justify-center items-center space-x-6 ">
            <p className=" text-lightGray text-sm md:text-3xl"></p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515]  w-[25%] flex flex-row justify-center items-center space-x-6 ">
            <p className=" text-lightGray text-sm md:text-3xl"> </p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515]  w-[25%] flex flex-row justify-center items-center space-x-6 ">
            <p className=" text-lightGray text-sm md:text-3xl"> </p>
          </div>
          <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515]  w-[25%] flex flex-row justify-center items-center space-x-6 ">
            <p className=" text-lightGray text-sm md:text-3xl"> </p>
          </div>
        </div>

        <div className="flex flex-row space-x-2 md:space-x-5 space-y-2 md:space-y-0 w-full mt-5">
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[20%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[20%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[20%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[20%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[20%]"></p>
        </div>

        <div className="flex flex-row space-x-2 md:space-x-5 space-y-2 md:space-y-0 w-full mt-5">
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[25%]"></p>
          <p className="rounded-2xl py-10 px-2 md:px-4 bg-[#151515] w-[25%]"></p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
