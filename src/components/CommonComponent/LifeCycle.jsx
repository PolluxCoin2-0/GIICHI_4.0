/* eslint-disable react/prop-types */
const LifeCycle = ({ heading1, heading2, desc, steps }) => {
  return (
    <div className="pt-6 md:pt-20 pb-20 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlight2 spotlight-right"></div>
      <p className="text-white text-center text-xl md:text-4xl xl:text-5xl font-bold pt-4 tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
        {heading1}
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient text-xl md:text-4xl xl:text-5xl text-center block mt-3">
          {heading2}
        </span>
      </p>
      <div className="flex justify-center">
        <p className="block text-sm md:text-[17px] lg:text-[15px] 2xl:text-[17px] text-white text-opacity-70 pt-4 px-4 w-full md:w-[70%] lg:w-[50%] leading-7 text-center">
          {desc}
        </p>
      </div>
      <div className="pt-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-row space-x-12 items-center ${
              index % 2 === 0
                ? "xl:ml-[200px] 2xl:ml-[150px] 3xl:ml-[400px]"
                : "xl:ml-[800px] 2xl:ml-[820px] 3xl:ml-[980px]"
            } mt-12`}
          >
            <div className="-mt-4 md:mt-0">
              <p className="text-white text-[15px] md:text-xl 2xl:text-2xl ml-[80px]">
                {step.title}
              </p>
              <p className="text-white text-[10px] md:text-[12px] 2xl:text-[14px] ml-[80px] text-opacity-70 pt-0 lg:pt-2 w-[70%] md:w-[40%] ">
                {step.description}
              </p>
            </div>
            <div className="rounded-full bg-blue-500 border-[#8AF969] border-4 md:border-8 w-12 md:w-20 h-12 md:h-20 p-3 absolute xl:left-[650px] 2xl:left-[700px] 3xl:left-[850px] -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeCycle;
