import b5Img from "../assets/blockchain.png";
import b4Img from "../assets/metaverse.png";
import b6Img from "../assets/crypto.png";
import b7Img from "../assets/ai2.png";
import b8Img from "../assets/defi.png";
import b9Img from "../assets/cloud.png";

const Objectives = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-64 pt-12 md:pt-24">
      <div className="hidden md:block spotlight spotlight-left"></div>
      {/* Heading 1*/}
      <p className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pt-4 leading-tight tracking-wide">
        Delivering Web3 Strategic
        <br />
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Objectives
        </span>
      </p>
      {/* Heading 2*/}
      <div className="flex flex-row justify-between">
        <p className="text-sm md:text-lg font-medium text-white text-opacity-70 pt-4 md:pt-6">
          Giichi is focused on leveraging Web3 technology to provide
          decentralized solutions, <br />
          empowering users with enhanced security, transparency, and control
          over their digital <br /> assets and interactions.
        </p>
      </div>

      {/* blocks  */}
      <div className="mt-8">
        {/* block1 row {top row} */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 mt-4 lg:mt-0">
          {/* Block 1 */}
          <div className="w-[27%] relative group overflow-hidden">
            <img src={b5Img} alt="blockchain-image" className="w-full h-auto" />

            {/* Hover effect content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] md:text-2xl font-normal md:font-bold">
                  BLOCKCHAIN
                </p>
              </div>
              <p className="pt-1 md:pt-4 text-[6px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                Giichi IT Solutions delivers cutting-edge blockchain solutions,
                empowering enterprises to innovate, scale, and operate smarter
                than ever before.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-[44%] relative group  overflow-hidden">
            <img src={b4Img} alt="metaverse-image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] md:text-2xl font-normal md:font-bold">
                  METAVERSE
                </p>
              </div>
              <p
                className="pt-1 md:pt-4 text-[8px] md:text-sm w-full md:w-[80%] absolute bottom-0  left-0  bg-black bg-opacity-50
               text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
              >
                {" "}
                We empower businesses to achieve breakthrough moments in the
                Metaverse by building immersive, scalable, and interactive
                virtual experiences.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-[27%] relative group  overflow-hidden">
            <img src={b6Img} alt="crypto-solution-image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[8px] md:text-2xl font-normal md:font-bold">
                  CRYPTO SOLUTIONS
                </p>
              </div>
              <p className="pt-1 md:pt-4 text-[4px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                Leverage our cutting-edge crypto solutions to launch, scale, and
                optimize your project. At Giichi IT Solutions, we harness
                blockchain innovation to build transformative solutions that
                drive real-world impact and accelerate business growth.
              </p>
            </div>
          </div>
        </div>

        {/* block2 bottom row  */}
        <div className="w-full flex flex-row justify-between space-x-2 md:space-x-4 pt-2 md:pt-4">
          {/* Block 4 */}
          <div className="w-[33%] relative group  overflow-hidden">
            <img src={b7Img} alt="artificial-inteligence-image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] md:text-2xl font-normal md:font-bold">
                  {" "}
                  ARTIFICIAL INTELLIGENCE
                </p>
              </div>
              <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                Amplifying Efficiency with Cutting-Edge AI/ML Solutions:
                Maximize your business efficiency and productivity with Giichi’s
                premium AI/ML development services and solutions.
              </p>
            </div>
          </div>

          {/* Block 5 */}
          <div className="w-[33%] relative group  overflow-hidden">
            <img src={b8Img} alt="defi-image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] md:text-2xl font-normal md:font-bold">
                  {" "}
                  DEFI{" "}
                </p>
              </div>
              <p className="pt-1 md:pt-4 text-[5px] md:text-sm absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                Decentralized Finance (DeFi) is reshaping the financial
                landscape, eliminating intermediaries and empowering users with
                full control over their assets. At Giichi, we develop
                cutting-edge DeFi solutions, from smart contract development to
                yield farming platforms, DEXs, and lending protocols.
              </p>
            </div>
          </div>

          {/* Block 6 */}
          <div className="w-[33%] relative group  overflow-hidden">
            <img src={b9Img} alt="cloud-solution-image" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
              <div className="absolute bottom-0 top-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-[10px] md:text-2xl font-normal md:font-bold">
                  {" "}
                  CLOUD SOLUTIONS{" "}
                </p>
              </div>
              <p className="pt-1 md:pt-4 text-[4px] md:text-sm absolute bottom-0  left-0 w-full bg-black bg-opacity-50 text-white p-1 md:p-4 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                Leverage the power of cloud computing to scale your business
                seamlessly. Giichi delivers secure, efficient, and scalable
                cloud solutions, optimizing performance, storage, and
                cost-efficiency. From cloud migration to infrastructure
                management, we ensure a seamless digital transformation for your
                enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
