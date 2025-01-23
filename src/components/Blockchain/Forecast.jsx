import star2Img from "../../assets/star2.png";
import element1Img from "../../assets/element1.png";;
import element2Img from "../../assets/element2.png";
import circle1Img from "../../assets/circle1.png";
import circle3Img from "../../assets/circle3.png";
import circle5Img from "../../assets/circle5.png";
const Forecast = () => {
  return (
    <div>
       <div className="flex flex-row justify-between items-center mt-28 w-full 3xl:px-20">
              {/* images section */}
              <div className="relative inline-block -ml-12 w-[15%]">
                <img
                  src={circle3Img}
                  alt=""
                  className="w-36 relative z-10 hidden md:block"
                />
                <img
                  src={circle5Img}
                  alt=""
                  className=" w-28 absolute -top-20 left-20 z-20 hidden md:block"
                />
              </div>
      
              {/* block section */}
              <div className="flex flex-row justify-center items-center space-x-12 w-[70%]">
                <div className="flex flex-col items-center justify-center w-[50%]">
                  <img src={element1Img} alt="" className="w-60" />
                  <p className="text-white text-xl font-semibold pt-10">
                    Blockchain Market Forecast: Growth <br />
                    Projections and Opportunities Ahead
                  </p>
                  <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-28">
                    As consumer demand for sustainability rises, blockchain technology
                    is essential for verifying ethical practices and enhancing
                    security, efficiency, transparency, and compliance across various
                    business operations. Antier stands out as a premiblockchain
                    development company, having completed over 1,000 projects since
                    its inception.
                  </p>
                </div>
      
                <div className="flex flex-col items-center justify-center w-[50%]">
                  <img src={element2Img} alt="" className="w-80" />
                  <p className="text-white text-xl font-semibold pt-16">
                    Blockchain Market Forecast: Growth
                    <br />
                    Projections and Opportunities Ahead
                  </p>
                  <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-28">
                    As consumer demand for sustainability rises, blockchain technology
                    is essential for verifying ethical practices and enhancing
                    security, efficiency, transparency, and compliance across various
                    business operations. Antier stands out as a premiblockchain
                    development company, having completed over 1,000 projects since
                    its inception.
                  </p>
                </div>
              </div>
      
              {/* images section */}
              <div className="w-[15%]">
                <img src={circle1Img} alt="" className="-mt-72 ml-12" />
                <img src={star2Img} alt="" className="mt-8 ml-40 object-cover w-16" />
              </div>
            </div>
    </div>
  )
}

export default Forecast
