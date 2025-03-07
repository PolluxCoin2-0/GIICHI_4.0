/* eslint-disable react/prop-types */
const ProductDevPhases = ({ data, heading, desc }) => {
    return (
      <div className="relative mt-20  mb-24 pt-8 pb-8 bg-[#283430] bg-opacity-10">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <div className="flex flex-col items-center">
      <p className="text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold pt-4 leading-tight tracking-wide px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center">
        {heading}
      </p>
      <p className="hidden md:block text-sm md:text-[10px] xl:text-[15px] text-white text-opacity-70 pt-4 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 text-center w-[60%]">
      {desc}
      </p>
      </div>
      <div className="flex flex-wrap justify-center p-8">
        <div className="flex max-w-3xl justify-center flex-wrap flex-col md:flex-row md:items-center">
          {/* Top row - 3 hexagons on desktop, stacked on mobile */}
          <div className="flex justify-center w-full flex-col md:flex-row xl:-mb-16 md:-mb-4">
            {data.slice(0, 3).map((step, index) => (
              <div key={index} className="relative m-0 md:m-4">
                {/* Hexagon outer gradient */}
                <div
                  className="w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-[#F0AA06] to-[#64A03C]"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {/* White inner hexagon with shadow */}
                  <div
                    className="absolute inset-2 bg-black flex items-center justify-center m-0 md:m-1"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="text-white font-medium text-center">
                      <div className="text-lg font-bold">{step.id}.</div>
                      <div className="mt-1 text-[12px] md:text-lg font-bold">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom row - 2 hexagons on desktop, stacked on mobile */}
          <div className="flex justify-center w-full flex-col md:flex-row">
            {data.slice(3, 5).map((step, index) => (
              <div key={index + 3} className="relative m-0 md:m-4">
                {/* Hexagon outer gradient */}
                <div
                  className="w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-[#F0AA06] to-[#64A03C]"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {/* White inner hexagon with shadow */}
                  <div
                    className="absolute inset-2 bg-black flex items-center justify-center m-0 md:m-1"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="text-white font-medium text-center">
                      <div className="text-lg font-bold">{step.id}.</div>
                      <div className="mt-1 text-[12px] md:text-lg font-bold">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ProductDevPhases;