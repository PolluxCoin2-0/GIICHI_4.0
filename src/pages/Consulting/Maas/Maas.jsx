/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// import { PulseBeams } from "../../../components/resuableComponent/PulseBeam";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { maasLifeCycleData } from "../../../components/data/lifecycleData";
import Faq from "../../../components/resuableComponent/Faq";
import { MaasFaq } from "../../../components/data/faqsData";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import MaasBannerImg from "../../../assets/maasBannerImg.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";
import { MaasServicesData } from "../../../components/data/data";

const Maas = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image - MARKETING AS A SERVICE  */}
      <BannerContent
        img={MaasBannerImg}
        title1="Web3 & Digital"
        title2="Marketing Company"
        desc="Building Brands with Premier Web3, Digital Marketing, and Consultancy Services. At Giichi, we blend innovation with strategy to deliver cutting-edge Web3 solutions and impactful digital marketing campaigns."
      />

      {/* Banner Image */}
      {/* <div className="hidden lg:block">
        <PulseBeams />
      </div> */}

      {/* what is maas */}
      <div className="flex flex-col jjustify-start md:justify-center items-start md:items-center mt-12 px-4">
        <p className="text-white text-lg md:text-xl lg:text-3xl font-bold pt-4 leading-tight tracking-wide ">
          <span className="text-transparent bg-clip-text bg-green-gradient text-lg md:text-xl lg:text-3xl font-semibold pt-14 pb-14">
            What is Marketing As A Service?
          </span>
          - How Does it Work?
        </p>
        <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal leading-8 w-full md:w-[80%] lg:w-[60%] text-start md:text-center tracking-wider pt-6" style={{ lineHeight: "1.7" }}>
          MAAS (Marketing as a Service) is a leading Web3 marketing firm that
          helps businesses achieve their goals through innovative Web3
          strategies. We offer agile, customized marketing solutions on demand,
          driving community engagement and enhancing your online presence to
          ensure project success.
        </p>
        {/* button to connect on whatsapp */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 pt-6">
          <a
            type="button"
            href="https://wa.me/9266416198"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-5 md:px-6 lg:px-8 py-3 text-white  
            text-sm lg:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300 mt-6"
            aria-label="Contact us "
            title="Click to contact us form"
          >
            Connect on Whatsapp
          </a>
          <div>
          <ButtonFreeDemo/>
          </div>
        </div>
      </div>

      {/* what we offer as a Maas */}
      <div className="mt-20 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        {/* heading */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-white text-2xl lg:text-3xl font-bold pt-4 leading-tight tracking-wide text-center">
            MAAS: Blockchain Marketing Solutions{" "}
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] 2xl:text-lg font-normal pt-4 leading-7 w-full md:w-[60%] text-center ">
            Explore our blockchain marketing services and unlock valuable
            business opportunities.
          </p>
        </div>
      </div>

      {/* blocks content */}
      <div className="mt-8 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 lg:space-x-8 w-full">
          <div className="bg-[#3F91E3] w-full md:w-[50%] lg:w-[40%] h-[200px] p-4 lg:p-6">
            <p className="text-white text-xl md:text-lg lg:text-2xl font-semibold">
              Branding
            </p>
            <p
              className="text-white text-sm md:text-xs lg:text-[15px] font-normal mt-2 leading-relaxed w-full md:w-[90%]"
              style={{ lineHeight: "1.75" }}
            >
              Our team establish a unique and memorable brand identity tailored
              to the Web3 ecosystem. We create compelling brand strategies,
              logos, and messaging to position your business effectively.
            </p>
          </div>
          <div className="bg-[#239156] w-full md:w-[50%] lg:w-[40%] h-[200px] p-4 lg:p-6 mt-4 md:mt-0">
            <p className="text-white text-xl  md:text-lg lg:text-2xl font-semibold">
              Social Media Marketing
            </p>
            <p
              className="text-white text-sm  md:text-xs lg:text-[15px] font-normal mt-2 leading-relaxed w-full md:w-[90%]"
              style={{ lineHeight: "1.75" }}
            >
              Web drive engagement and build a strong online presence with
              strategic content, community interaction, and platform-specific
              campaigns on Twitter, Discord, Telegram, LinkedIn, and more.
            </p>
          </div>
        </div>

        {/* row 2*/}
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 lg:space-x-8 w-full mt-4 lg:mt-8">
          <div className="bg-[#EB8841] w-full md:w-[33%] h-[200px] p-4 lg:p-6">
            <p className="text-white text-[19px]  md:text-lg  lg:text-2xl font-semibold">
              Content Creation & Marketing
            </p>
            <p
              className="text-white text-sm  md:text-xs lg:text-[15px] font-normal mt-0 md:mt-2 leading-relaxed "
              style={{ lineHeight: "1.75" }}
            >
              Our team develops high-quality, informative, and engaging content,
              including blogs, whitepapers, videos, and infographics, to educate
              your audience and strengthen your brand authority.
            </p>
          </div>
          <div className="bg-[#CB3F79] w-full md:w-[33%] h-[200px] p-4 lg:p-6 mt-4 md:mt-0">
            <p className="text-white text-xl  md:text-lg lg:text-2xl font-semibold">
              UI/UX Design
            </p>
            <p
              className="text-white text-sm  md:text-xs lg:text-[15px] font-normal mt-2 leading-relaxed"
              style={{ lineHeight: "1.75" }}
            >
              We design intuitive, user-friendly, and visually appealing digital
              experiences that enhance user interaction, ensuring seamless
              navigation across Web3 platforms and applications.
            </p>
          </div>
          <div className="bg-[#3F91E3] w-full md:w-[33%] h-[200px] p-4 lg:p-6 mt-4 md:mt-0">
            <p className="text-white text-[19px]  md:text-lg  lg:text-2xl font-semibold">
              Search Engine Optimzation
            </p>
            <p
              className="text-white text-sm md:text-xs lg:text-[15px] font-normal mt-0 md:mt-2 leading-relaxed"
              style={{ lineHeight: "1.75" }}
            >
              We offer Optimization of your website and content to improve
              search engine rankings, drive organic traffic, and increase
              discoverability within the blockchain and crypto space.
            </p>
          </div>
        </div>

        {/* row 3 */}
        <div className="flex flex-row justify-center space-x-8 w-full mt-4 lg:mt-8">
          <div className="bg-[#239156] w-full md:w-[40%] h-[200px] p-4 md:p-6">
            <p className="text-white text-[19px] md:text-lg lg:text-2xl font-semibold">
              Insights and In-Depth Analytics
            </p>
            <p
              className="text-white text-sm md:text-xs lg:text-[15px] font-normal mt-0 md:mt-2 leading-relaxed w-full md:w-[90%]"
              style={{ lineHeight: "1.75" }}
            >
              We leverage data-driven strategies with real-time performance
              tracking, competitor analysis, and audience insights to refine
              marketing campaigns and maximize ROI.
            </p>
          </div>
        </div>
      </div>

      {/* our blockchain creation  process */}
      <div>
        <LifeCycle
          heading1=""
          heading2="OUR MAAS ROADMAP"
          desc="We take a structured, step-by-step approach to meet your blockchain project's needs, delivering comprehensive NFT marketing services for optimal success."
          steps={maasLifeCycleData}
        />
      </div>

      {/* Why choose Giichi for marketing services */}
      <div className="mt-0 md:mt-20 px-4 md:px-8 lg:px-12 xl:px-40 2xl:px-32 3xl:px-60">
        <div className="flex flex-col justify-center items-center">
          <p className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-semibold">
            Why Choose GIICHI's Web3 Marketing Services?
          </p>
          <p className="text-white text-opacity-70 text-sm xl:text-[16px] font-normal pt-4 leading-7 w-full lg:w-[60%] text-start lg:text-center">
            Giichi delivers expert ICO marketing solutions tailored to
            blockchain businesses, ensuring seamless execution and exceptional
            results. Here’s why we stand out in MAAS:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {MaasServicesData.map((service, index) => (
            <div
              key={index}
              className="w-full border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6"
            >
              <div className="flex flex-row justify-center">
                <img src={service.icon} alt={service.title} className="w-12" />
              </div>
              <p className="text-white pt-4 text-lg font-bold text-center">
                {service.title}
              </p>
              <p className="text-white text-opacity-50 pt-2 text-[15px] text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <Faq data={MaasFaq} />
      </div>
    </div>
  );
};

export default Maas;
