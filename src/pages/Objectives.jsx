import star1Img from "../assets/star1.png";
import star2Img from "../assets/star2.png";
import b5Img from "../assets/B5.png";
import b4Img from "../assets/B4.png";
import b6Img from "../assets/B6.png";
import b7Img from "../assets/B7.png";
import b8Img from "../assets/B8.png";
import b9Img from "../assets/B9.png";

const Objectives = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 pt-12 md:pt-24">
      {/* heading 1 */}
      <div className="flex flex-row justify-between items-center">
        <img src={star1Img} alt="" className="hidden md:hidden" />
      </div>

      {/* Heading 2 */}
      <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
        Delivering Web3 Strategic
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Objectives
        </span>
      </p>

      {/* Heading 3*/}
      <div className="flex flex-row justify-between">
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-50 pt-4 md:pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img
          src={star2Img}
          alt=""
          className="object-contain pb-10 hidden md:hidden"
        />
      </div>

      {/* blocks  */}
      <div className="mt-8">
        {/* block1 row {top row} */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 mt-4 lg:mt-0">
          {/* Block 1 */}
          <div className="w-[27%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-white py-2 text-start pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN</div>
            <img src={b5Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ut quo a, optio mollitia voluptate temporibus eum. Sit, ad accusantium.</p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-[44%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-start text-white py-2 pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN </div>
            <img src={b4Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci nesciunt perspiciatis deserunt libero minus aliquam repudiandae at, iure quae!</p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-[27%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-start text-white py-2 pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN</div>
            <img src={b6Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus officia sapiente qui repellat pariatur reprehenderit natus saepe quod id nobis?</p>
            </div>
          </div>
        </div>

        {/* block2 row  */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 pt-2 md:pt-4">
          {/* Block 4 */}
          <div className="w-[33%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-start text-white py-2 pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN</div>
            <img src={b7Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi voluptates cum et, veritatis animi eum totam consequatur natus illum!</p>
            </div>
          </div>

          {/* Block 5 */}
          <div className="w-[33%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-start text-white py-2 pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN</div>
            <img src={b8Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, assumenda. Eveniet magni distinctio obcaecati dolore unde voluptate officia vero minus!</p>
            </div>
          </div>

          {/* Block 6 */}
          <div className="w-[33%] relative group">
            <div className="absolute bottom-0 left-0 w-full text-start text-white py-2 pl-6 pb-6 text-2xl font-bold">BLOCKCHAIN</div>
            <img src={b9Img} alt="" className="w-full h-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio repellat distinctio enim dicta alias laborum quod. Cumque, quae rerum!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
