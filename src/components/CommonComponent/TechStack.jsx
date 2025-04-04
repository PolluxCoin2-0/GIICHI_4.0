/* eslint-disable react/prop-types */

const TechStackSection = ({ title, technologies }) => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-x-4 md:space-x-6 lg:space-x-12 w-full">
      <div className="w-full md:w-[20%] lg:w-[30%] xl:w-[20%]">
        <p className="text-white bg-darkGray rounded-md mt-0 md:mt-8 px-4 md:px-5 py-2 md:py-3 text-sm md:text-[17px] 2xl:text-[14px] 3xl:text-[17px] 2xl:px-[17px] text-start font-semibold">
          {title}
        </p>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[30%] xl:w-[80%] flex flex-row flex-wrap justify-start items-center md:space-x-6 lg:space-x-12 mt-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[10%] md:w-[10%]"
          >
            <img
              src={tech.img}
              alt={`${tech.name}-img`}
              className="w-10 md:w-12"
            />
            <p className="text-white text-xs md:text-sm pt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack = ({data}) => {
 return (
    <div className="relative mt-12 2xl:mt-20 ">
      <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide text-center">
        Technology{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Stack
        </span>
      </p>
      <p className="text-white text-opacity-40 pt-6 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-64">
        We leverage cutting-edge technologies and platforms being practiced in
        the <br /> global market and stay abreast of the latest market trends.
      </p>
      <div className="px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-64 flex flex-col items-start w-full space-y-12 mt-12">
        {data.map((category, index) => (
          <TechStackSection
            key={index}
            title={category.title}
            technologies={category.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
