import BannerContent from "../../../components/CommonComponent/BannerContent";
import BlockchainImg from "../../../assets/blockchainImg.png";
import Services from "../../../components/CommonComponent/Services";
import { IDOService } from "../../../components/data/ServicesData";
import BlockchainCycle from "../../../components/CommonComponent/BlockchainCycle";
import { IdoDevelopmentCycle } from "../../../components/data/developmentCycleData";
import Faq from "../../../components/resuableComponent/Faq";
import { IDOFaq } from "../../../components/data/faqsData";

const IDO = () => {
  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="IDO Development"
        title2="Services"
        desc="With expertise in 40+ blockchain protocols, Giichi IT Solutions is driving the web3 revolution with cutting-edge blockchain development services."
      />

      {/* IDO Development Journey*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4  tracking-tight">
            Insights On Initial DEX Offering(IDO)
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero. <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, in consequuntur quaerat enim vitae sed, odit culpa nisi
            incidunt distinctio autem, assumenda iure aspernatur harum suscipit
            sint voluptatem quis vero facere doloribus quasi repudiandae
            perferendis nulla! Accusantium voluptas tempore libero.
          </p>
        </div>
      </div>

      {/* IDO Services */}
      <Services
        data={IDOService}
        heading1="Striking Features of "
        heading2="IDO Development"
        desc=""
      />

      {/* Blockchain Process */}
      <div>
        <BlockchainCycle
          title="Your Roadmap To IDO Development"
          data={IdoDevelopmentCycle}
        />
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-6 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 md:mb-8 lg:mb-12 bg-[#283430] bg-opacity-10 py-20">
        <div className="w-full md:w-[50%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4">
            White-Label IDO Launchpad Development
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-50 pt-6 leading-7 w-full md:w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            fugit sit voluptas aliquam distinctio enim impedit iure amet ab
            necessitatibus. Quod, excepturi nostrum mollitia laboriosam officia
            tenetur amet. Ipsam aliquid, minus fugiat sequi, veritatis corporis
            odit cupiditate, dolorem commodi deserunt cum doloribus voluptatem
            deleniti omnis assumenda possimus soluta excepturi laboriosam.
          </p>
        </div>
        <div className="w-full md:w-[70%] lg:w-[50%] mt-4 md:mt-0">
          <p className="text-white text-lg ">
            Trending IDO Launchpad Clones To Consider~
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-6">
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">Trustpad</p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
                of medicines in parts of Latin America, Asia and Africa can be
                counterfeit.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                Solstarter (Solana)
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
                of medicines in parts of Latin America, Asia and Africa can be
                counterfeit.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-4 ">
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                BSC Pad (Binance Smart Chain)
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
                of medicines in parts of Latin America, Asia and Africa can be
                counterfeit.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                Polka Starter (Polkadot)
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
                of medicines in parts of Latin America, Asia and Africa can be
                counterfeit.
              </p>
            </div>
          </div>
        </div>
      </div>

       {/* FAQ SECTION */}
       <div className="mt-24">
        <Faq data={IDOFaq} />
      </div>
    </div>
  );
};

export default IDO;
