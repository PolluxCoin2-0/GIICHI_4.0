/* eslint-disable react/prop-types */
const IndustriesCard = ({ img, title }) => {
    return (
      <div className="border-[1px] border-white border-opacity-20 rounded-xl py-12 flex flex-col justify-center items-center">
        <img src={img} alt="industry-images" className="w-12" />
        <p className="text-white pt-4">{title}</p>
      </div>
    );
  };

const Industries = ({data}) => {
  return (
    <div>
      <div className="bg-[#283430] bg-opacity-10 text-center mt-6 md:mt-12 p-1 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12 mt-20 px-4 md:px-12 3xl:px-64">
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
  )
}

export default Industries
