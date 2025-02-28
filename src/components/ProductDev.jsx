/* eslint-disable react/prop-types */
const ProductDev = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center p-8">
      <div className="flex max-w-3xl justify-center flex-wrap">
        {/* Top row - 3 hexagons */}
        <div className="flex justify-center w-full -mb-4">
          {data.slice(0, 3).map((step, index) => (
            <div key={index} className="mx-6 relative">
              {/* Hexagon outer gradient */}
              <div 
                className={`w-64 h-64 ${
                  index === 0 
                    ? "bg-gradient-to-r  from-[#F0AA06] to-[#64A03C]" 
                    : index === 1 
                      ? "bg-gradient-to-r from-[#F0AA06] to-[#64A03C]" 
                      : "bg-gradient-to-r from-[#F0AA06] to-[#64A03C]"
                }`}
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              >
                {/* White inner hexagon with shadow */}
                <div 
                  className="absolute inset-2 bg-black  flex items-center justify-center m-1"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
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
        
        {/* Bottom row - 2 hexagons */}
        <div className="flex justify-center w-full">
          {data.slice(3, 5).map((step, index) => (
            <div key={index + 3} className="mx-6 relative">
              {/* Hexagon outer gradient */}
              <div 
                className={`w-64 h-64 ${
                  index === 0 
                    ? "bg-gradient-to-r from-[#F0AA06] to-[#64A03C]" 
                    : "bg-gradient-to-r from-[#F0AA06] to-[#64A03C]"
                }`}
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              >
                {/* White inner hexagon with shadow */}
                <div 
                  className="absolute inset-2 bg-black flex items-center justify-center m-1"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
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