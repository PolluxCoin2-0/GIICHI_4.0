/* eslint-disable react/prop-types */
const Process = ({ heading1, heading2, desc, processSteps }) => {
  return (
    <div className="mt-0 2xl:mt-20 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <p className="text-white text-center text-xl md:text-4xl 2xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60">
        {heading1} <br />
        <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl 2xl:text-5xl text-center">
          {heading2}
        </span>
      </p>
      <p className="text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        {desc}
      </p>
      <div className="pt-4 pb-8 bg-[#283430] bg-opacity-10 mt-8 relative mr-0 3xl:mr-28 px-4">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-row space-x-8 md:space-x-12 items-center ${
              index % 2 === 0
                ? "ml-12 md:ml-40 lg:ml-4 xl:ml-32 3xl:ml-[400px]"
                : "ml-12 md:ml-40 lg:ml-[550px] xl:ml-[750px] 2xl:ml-[850px] 3xl:ml-[1000px]"
            } mt-12`}
          >
            <div>
              <p className="text-white text-[15px] md:text-2xl 2xl:text-3xl font-semibold w-full md:w-[70%] 2xl:w-full 3xl:w-[70%]">
                {step.title}
              </p>
              <ul className="list-disc ml-3 md:ml-6 pt-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-white text-[10px] md:text-[15px] text-opacity-80"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-white text-[15px] md:text-4xl font-semibold md:font-bold border-white border-2 md:border-4 w-7 md:w-20 h-7 md:h-20 p-2 
            absolute left-0 lg:left-[420px] xl:left-[600px] 2xl:left-[700px] 3xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
