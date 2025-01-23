/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import star1Img from "../../assets/star1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlockchainCycle = ({title}) => {
    // Custom Arrow Components
    const CustomPrevArrow = ({ onClick }) => (
      <div
        className="custom-arrow custom-prev"
        onClick={onClick}
        style={{ display: "flex", alignItems: "center", cursor: "pointer", color:"#2BB32A" }}
      >
        <FaChevronLeft size={24} />
      </div>
    );
    
    const CustomNextArrow = ({ onClick }) => (
      <div
        className="custom-arrow custom-next"
        onClick={onClick}
        style={{ display: "flex", alignItems: "center", cursor: "pointer", color:"#2BB32A"}}
      >
        <FaChevronRight size={24} />
      </div>
    );
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };

  return (
    <div>
       <div className="bg-[#283430] bg-opacity-10 mt-24 3xl:px-64">
        <div className="flex flex-row space-x-20">
          <span className="text-transparent bg-clip-text bg-green-gradient text-3xl font-semibold pt-14 pb-14">
            {title}
          </span>
          <img src={star1Img} alt="" className="object-contain w-16 pb-12" />
        </div>
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-6">
              <p className="text-xl font-semibold">01.</p>
              <p className="font-semibold text-lg">Requirement Gathering</p>
              <p className="font-semibold text-sm pt-2">
                Meetings with stakeholders to gather detailed functional and
                non-functional requirements.
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200  rounded-2xl p-6">
              <p  className="text-xl font-semibold">02.</p>
              <p className="font-semibold text-lg">Planning and Design</p>
              <p  className="font-semibold text-sm pt-2">
                Define the architecture and design based on project
                requirements.
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200  rounded-2xl p-6">
              <p  className="text-xl font-semibold">03.</p>
              <p className="font-semibold text-lg">Development</p>
              <p  className="font-semibold text-sm pt-2"> Meetings with stakeholders to gather detailed functional and
              non-functional requirements.</p>
            </div>
          </div>
        </Slider>

        <div className="flex flex-row justify-end mt-6">
        <img src={star1Img} alt="" className="object-contain" />
        <img src={star1Img} alt="" className="object-contain w-12 pb-20" />
        </div>
      </div>
    </div>
  )
}

export default BlockchainCycle
