/* eslint-disable react/prop-types */

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewData = [
  {
    review: "Partnering with Giichi IT Solutions has been an outstanding experience. Their team’s expertise in blockchain and Web3 development helped us scale our projects effortlessly. Their professionalism, commitment, and technical knowledge were key to meeting our business goals.",
    name: "Abhishek Harta",
  },
  {
    review: "We are extremely impressed with Giichi IT Solutions’ approach to blockchain development. Their team has been incredibly process-oriented, adaptable, and cooperative. They’ve consistently delivered high-quality results on time.",
    name: "Shivam Singh",
  },
  {
    review: "Giichi IT Solutions delivered exceptional work with complex UI designs and blockchain solutions. Their team’s ability to handle the most challenging features and deliver them on schedule has made them our go-to development partner.",
    name: "Shubham Gupta",
  },
  {
    review: "The team at Giichi IT Solutions was highly skilled and helped us quickly develop our MVP. They set clear deadlines, followed up regularly, and provided the right talent to ensure success.",
    name: "Saurav Singh",
  },
  {
    review: "Thanks to Giichi IT Solutions, we’ve witnessed a significant improvement in user engagement metrics. Their reliability and ability to meet deadlines have made a positive impact on our project outcomes.",
    name: "Manohar",
  },
  {
    review: "Giichi IT Solutions has been instrumental in helping us navigate the complexities of blockchain integration. Their ability to address issues promptly and their clear communication made for a smooth experience.",
    name: "Charil",
  },
  {
    review: "Giichi IT Solutions stood out for their excellent planning and blockchain expertise. Their team was responsive, professional, and delivered high-quality results consistently. Our project was a huge success thanks to them.",
    name: "Ayushi",
  },
  {
    review: "Giichi IT Solutions helped us deliver a seamless blockchain solution that met our goals. Their project management and follow-up were top-notch, and we saw a significant positive impact on our operations.",
    name: "Durgesh",
  },
  
  ]

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

// Slick slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,  
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
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
const ReviewCard = ({review, name}) => {
  return (
    <div>
         <div className="w-full mt-16 pr-0 md:pr-4 lg:pr-12 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-70 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px] h-[160px]">
          {review}
          </p>

          <div className="flex flex-row space-x-4 items-center pt-0 md:pt-6">
            <div>
              <p className="text-white">{name}</p>
            </div>
          </div>
        </div>
         {/* bottom line */}
         <div className=" md:hidden flex justify-center items-center">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
    </div>
  )
}

const Review = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-64 pt-0">
      <div className="hidden md:block spotlight1 spotlight-right1"></div>
    {/* Heading 1*/}
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          What{" "}
          <span className="text-transparent bg-clip-text bg-yellow-gradient">
            Clients{" "}
          </span>
          Say
        </p>
      </div>
     {/* Blocks */}
      <Slider {...sliderSettings} className="mt-8 w-full">
        {ReviewData.map((data, index) => (
          <div key={index} className="px-2">
            <ReviewCard
              review={data.review}
              name={data.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Review;
