/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import star1Img from "../../assets/star1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlockchainCycle = ({ title }) => {
  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
        
      }}
    >
      <FaChevronLeft size={24} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
      }}
    >
      <FaChevronRight size={24} />
    </div>
  );

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default (for larger screens)
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px (tablets)
        settings: {
          slidesToShow: 2, // Show 2 cards per row
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425, // For screens smaller than 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 card per row
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="bg-[#283430] bg-opacity-10 mt-24 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64">
        <div className="flex flex-row space-x-20">
          <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-semibold pt-14 pb-14">
            {title}
          </span>
          <img
            src={star1Img}
            alt=""
            className="object-contain w-16 pb-12 hidden md:block"
          />
        </div>
        <Slider {...settings}>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-6">
              <p className="text-xl font-semibold">01.</p>
              <p className="font-semibold text-lg">Requirement Gathering</p>
              <p className="font-semibold text-sm pt-2">
                Meetings with stakeholders to gather detailed functional and
                non-functional requirements.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-6">
              <p className="text-xl font-semibold">02.</p>
              <p className="font-semibold text-lg">Planning and Design</p>
              <p className="font-semibold text-sm pt-2">
              Meetings with stakeholders to gather detailed functional and
              non-functional requirements.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-6">
              <p className="text-xl font-semibold">03.</p>
              <p className="font-semibold text-lg">Development</p>
              <p className="font-semibold text-sm pt-2">
                Meetings with stakeholders to gather detailed functional and
                non-functional requirements.
              </p>
            </div>
          </div>
        </Slider>

        <div className="hidden md:flex flex-row justify-end mt-6">
          <img src={star1Img} alt="" className="object-contain" />
          <img src={star1Img} alt="" className="object-contain w-12 pb-20" />
        </div>
      </div>
    </div>
  );
};

export default BlockchainCycle;
