/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";

const FrameworksCard = ({ logo, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
      className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6"
    >
      <div className="flex flex-row justify-between">
        <img src={logo} alt={title} className="w-12" />
        <LuArrowUpRight color="#2BB32A" size={28} />
      </div>
      <p className="text-white pt-4 text-lg font-bold">{title}</p>
      <p className="text-white text-opacity-50 pt-2 text-[15px]">{description}</p>
    </motion.div>
  );
};

const Framework = ({ data, heading1, heading2, desc }) => {
  return (
    <div className="mt-12 relative">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block spotlightOrange spotlightOrange-left"
      ></motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block spotlight spotlight-left"
      ></motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:block spotlight2 spotlight-right"
      ></motion.div>
      
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl px-2 font-bold pt-4 leading-tight tracking-wide text-center">
          {heading1}
          <br />
          <span className="text-transparent bg-clip-text bg-green-gradient block mt-0 md:mt-4">
            {heading2}
          </span>
        </p>

        <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[80%] lg:w-[70%] xl:w-[50%] leading-7 text-center">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8 gap-4 xl:gap-8 px-4 xl:px-36 2xl:px-32 3xl:px-64">
        {data.map((item, index) => (
          <FrameworksCard
            key={index}
            logo={item.logo}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Framework;
