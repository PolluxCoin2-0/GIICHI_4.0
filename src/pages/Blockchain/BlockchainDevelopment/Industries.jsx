/* eslint-disable react/prop-types */
import healthImg from "../../../assets/healthcare 1.png";
import propertyImg from "../../../assets/property 1.png";
import museumImg from "../../../assets/museum 1.png";
import agriImg from "../../../assets/agriculture 1.png";
import logisticImg from "../../../assets/Group (14).png";
import retailImg from "../../../assets/retail.png";
import tripImg from "../../../assets/trip.png";
import mediaImg from "../../../assets/media.png";
import energyImg from "../../../assets/energy.png";
import educationImg from "../../../assets/education.png";

const IndustriesData = [
  {
    img: healthImg,
    title: "HealthCare",
  },
  {
    img: propertyImg,
    title: "Real Estate",
  },
  {
    img: museumImg,
    title: "BFSI",
  },
  {
    img: agriImg,
    title: "Agriculture",
  },
  {
    img: logisticImg,
    title: "Logistics",
  },
  {
    img: retailImg,
    title: "Retail",
  },
  {
    img: mediaImg,
    title: "Entertainment",
  },
  {
    img: tripImg,
    title: "Travel and Tourism",
  },
  {
    img: educationImg,
    title: "Education",
  },
  {
    img: energyImg,
    title: "Energy",
  },
];

const IndustriesCard = ({ img, title }) => {
    return (
      <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center">
        <img src={img} alt="" className="w-20" />
        <p className="text-white pt-4">{title}</p>
      </div>
    );
  };

const Industries = () => {
  return (
    <div>
      <div className="bg-[#283430] bg-opacity-10 text-center mt-6 md:mt-12 p-1 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12 mt-20 px-4 md:px-12 3xl:px-64">
          {IndustriesData.map((industry, index) => (
            <IndustriesCard
              key={index}
              img={industry.img}
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industries
