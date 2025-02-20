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
      <p className="text-white text-opacity-50 pt-2">{description}</p>
    </div>
  );
};
const Framework = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 md:gap-12 px-4 xl:px-12 3xl:px-64">
   {data.map((item, index) => (
  <FrameworksCard
    key={index}
    logo={item.logo}
    title={item.title}
    description={item.description}
  />
))}
</div>
  )
}

export default Framework
