import circle1Img from "../assets/circle1.png";
import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import founderImg from "../assets/pic.png";

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
const ReviewCard = () => {
  return (
    <div>
         <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]">
          Partnering with Giichi IT Solutions has been an outstanding experience. Their team’s expertise in blockchain and Web3 development helped us scale our projects effortlessly. Their professionalism, commitment, and technical knowledge were key to meeting our business goals.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="w-12" />
            <div>
              <p className="text-white">Abhishek</p>
              {/* <p className="text-white">CEO</p> */}
            </div>
          </div>
        </div>
    </div>
  )
}

const Review = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-64 pt-0">
      <div className="hidden md:block spotlight1 spotlight-right1"></div>
      {/* Heading 1 */}
      <div className="flex flex-row justify-start md:justify-between items-center pr-0 md:pr-48">
        {/* <p className="bg-darkGray text-white px-8 lg:px-20 py-3 rounded-full text-[17px] font-medium">
          -Clients Review-
        </p> */}
        <img src={circle1Img} alt="" className="w-28 hidden md:hidden" />
      </div>

      {/* Heading 2 */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
          What{" "}
          <span className="text-transparent bg-clip-text bg-yellow-gradient">
            Clients{" "}
          </span>
          Say
        </p>
        <img src={star1Img} alt="" className="w-16 hidden md:hidden" />
      </div>

      {/* Heading 3*/}
      <div className="flex flex-row justify-between pr-0 md:pr-40">
        <p className="text-md lg:text-lg font-semibold text-white text-opacity-50 pt-4 md:pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img
          src={star2Img}
          alt=""
          className="object-contain pb-10 hidden md:hidden"
        />
      </div>

      {/* Blocks */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-6 lg:space-x-12 w-full pt-10 xl:pt-20">
        {/* first column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]">
          Giichi IT Solutions stood out for their excellent planning and blockchain expertise. Their team was professional, committed, responsive, professional, and delivered high-quality results consistently. Our project was a huge success thanks to them.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="w-12" />
            <div>
              <p className="text-white">Abhishek Harta</p>
              {/* <p className="text-white">CEO</p> */}
            </div>
          </div>
        </div>
        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
        {/* second column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 pt-10 md:pt-0 md:relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]">
          We are extremely impressed with Giichi IT Solutions’ approach to blockchain development. Their team has been incredibly process-oriented, adaptable, and cooperative. They’ve consistently delivered high-quality results on time.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="w-12" />
            <div>
              <p className="text-white">Shivam Singh</p>
              {/* <p className="text-white">CEO</p> */}
            </div>
          </div>
        </div>
        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
        {/* Third Column */}
        <div className="w-full md:w-[33%] pr-0 md:pr-4 lg:pr-12 pt-10 md:pt-0">
          <p className="text-white text-opacity-50 md:border-b-2 border-white border-opacity-20 pb-6 text-sm md:text-[17px]" >
          Giichi IT Solutions delivered exceptional work with complex UI designs and blockchain solutions. Their team’s ability to handle the most challenging features and deliver them on schedule has made them our go-to development partner.
          </p>

          <div className="flex flex-row space-x-6 items-center pt-0 md:pt-6">
            <img src={founderImg} alt="" className="w-12" />
            <div>
              <p className="text-white">Saurav Singh</p>
              {/* <p className="text-white">CEO</p> */}
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className=" md:hidden flex justify-center items-center pt-8">
          <div className="relative w-[80%] md:w-[60%] before:absolute before:inset-0 before:rounded-full before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
