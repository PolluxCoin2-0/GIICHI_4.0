/* eslint-disable react/prop-types */

import { LuArrowUpRight } from "react-icons/lu";

const FrameworksCard = ({ logo, title, description }) => {
  return (
   
    <div className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6 ">
      <div className="flex flex-row justify-between ">
        <img src={logo} alt={title} className="w-12" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2 text-[15px]">{description}</p>
    </div>
  );
};
const Framework = ({data, heading1, heading2, desc}) => {
  return (
    <div className="mt-12 relative">
    <div className="hidden md:block spotlight spotlight-left"></div>
    <div className="hidden md:block spotlight2 spotlight-right"></div>
    <div className="flex flex-col justify-center items-center">
        <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
         {heading1}<br />{" "}
          <span className="text-transparent bg-clip-text bg-green-gradient">
            {heading2}
          </span>
        </p>

        <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[80%] lg:w-[70%] xl:w-[50%] leading-7 text-center">
         {desc}
        </p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 md:gap-12 xl:gap-8 px-4 xl:px-36 2xl:px-32 3xl:px-64">
   {data.map((item, index) => (
  <FrameworksCard
    key={index}
    logo={item.logo}
    title={item.title}
    description={item.description}
  />
))}
</div>
</div>
  )
}

export default Framework
