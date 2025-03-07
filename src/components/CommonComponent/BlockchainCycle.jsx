/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Slider Arrow Component
const ArrowButton = ({ direction, onClick }) => (
  <div
    className={`custom-arrow custom-${direction}`}
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      color: "#2BB32A",
    }}
  >
    {direction === "prev" ? (
      <FaChevronLeft size={24} />
    ) : (
      <FaChevronRight size={24} />
    )}
  </div>
);

// Slider Settings Object
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: <ArrowButton direction="prev" />,
  nextArrow: <ArrowButton direction="next" />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

// Reusable BlockchainStep Component
const BlockchainStep = ({ step, title, description }) => (
  <div className="px-2 md:px-4">
    <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
      <p className="text-xl font-semibold">{step}</p>
      <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">{title}</p>
      <p className="font-semibold text-sm pt-2">{description}</p>
    </div>
  </div>
);

const BlockchainCycle = ({ title, data }) => (
  <div className="relative bg-[#283430] bg-opacity-10 mt-24 pb-16 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-64">
    <div className="hidden md:block spotlight spotlight-right"></div>
    <div className="flex flex-row space-x-20">
      <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-semibold pt-14 pb-14">
        {title}
      </span>
    </div>
    <Slider {...sliderSettings}>
      {data.map((step, index) => (
        <BlockchainStep key={index} {...step} />
      ))}
    </Slider>
  </div>
);

export default BlockchainCycle;
