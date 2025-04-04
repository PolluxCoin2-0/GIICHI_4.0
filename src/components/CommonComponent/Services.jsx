/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ServicesCard = ({ title, description, isLastInRow, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
    >
      <div
        className={`w-full pr-12 relative mb-8 ${
          !isLastInRow
            ? "after:absolute after:top-0 after:right-0 after:h-[130%] after:w-[3px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent"
            : ""
        }`}
      >
        <p className="text-white text-lg font-bold border-b-[3px] border-white border-opacity-20 pb-2 h-16">
          {title}
        </p>
        <p className="text-sm text-white text-opacity-70 pt-4 leading-6 tracking-normal text-justify">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = ({ data, heading1, heading2, desc }) => {
  return (
    <div>
      <div className="mt-12 xl:mt-20 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
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

        <p className="text-white text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide">
          {heading1}
          <br />
          <span className="block mt-4 text-transparent bg-clip-text bg-green-gradient">
            {heading2}
          </span>
        </p>
        <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-4 leading-7 w-full md:w-[60%]">
          {desc}
        </p>

        {/* Services Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
          {data.map((service, index) => {
            const isLastInRow = (index + 1) % 3 === 0;
            return (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                isLastInRow={isLastInRow}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
