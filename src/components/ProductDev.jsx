/* eslint-disable react/prop-types */
const ProductDev = ({ data }) => {
    return (
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
                      <div className="mt-1 text-lg font-bold">{step.title}</div>
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
                      <div className="mt-1 text-lg font-bold">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDev;