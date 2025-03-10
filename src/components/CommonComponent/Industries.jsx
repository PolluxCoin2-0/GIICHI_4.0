/* eslint-disable react/prop-types */
const IndustriesCard = ({ img, title }) => {
    return (
      <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center">
        <img src={img} alt="industry-images" className="w-12" />
        <p className="text-white pt-4 text-[17px]">{title}</p>
      </div>
    );
  };

const Industries = ({data, heading1, heading2, desc}) => {
  return (
    <div>
    <div className="relative text-center mt-8 md:mt-24 ">
        <div className="hidden md:block spotlight spotlight-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
        <div className="flex flex-col items-center">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60">
          {heading1} {" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
           {heading2}
          </span>
        </p>
        <p className="hidden md:block text-sm md:text-[17px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 w-[60%]">
         {desc}
        </p>
        </div>
      <div className="bg-[#283430] bg-opacity-10 text-center mt-6 md:mt-12 p-1 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12 xl:gap-8 mt-20 px-4 md:px-12 xl:px-36 2xl:px-32 3xl:px-64">
          {data.map((industry, index) => (
            <IndustriesCard
              key={index}
              img={industry.img}
              title={industry.title}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Industries
