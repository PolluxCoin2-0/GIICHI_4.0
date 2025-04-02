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
        desc="As a leading IDO development company, we facilitate seamless fundraising through decentralized exchange platforms."
      />

      {/* IDO Development Journey*/}
      <div className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-32 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 2xl:mt-32 mb-6 md:mb-12">
        <div className="w-full lg:w-[50%] relative">
          <div className="hidden md:block spotlight spotlight-left"></div>
          <div className="hidden md:block spotlight2 spotlight-right"></div>
          {/* img */}
        </div>
        <div className="w-full lg:w-[50%] ">
          <p className="text-white text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold pt-4 tracking-tight" style={{ lineHeight: '1.5' }}>
          Understanding Initial DEX Offering (IDO)
          </p>
          <p className="text-sm lg:text-[14px] 2xl:text-[16px] font-normal text-white text-opacity-50 pt-6 leading-6 text-justify hyphens-auto"  style={{ lineHeight: "1.7" }}>
          An Initial DEX Offering (IDO) leverages Decentralized Exchanges (DEXs) to provide primary liquidity, allowing users to stake tokens in exchange for new Liquidity Provider (LP) tokens, which are then released with the token launch. This model encourages informed decision-making and introduces innovative trading solutions.<br/> <br/>
          IDO platforms distribute tokens to trusted crypto users, facilitating initial liquidity offerings for DeFi projects. The process is entirely decentralized and automated through smart contracts, ensuring both transparency and anonymity.
          
          </p>
        </div>
      </div>

      {/* IDO Services */}
      <Services
        data={IDOService}
        heading1="Key Features of "
        heading2="IDO Development"
        desc="IDO development platforms equip projects with cutting-edge features to facilitate capital raising and connect with crypto investors effectively."
      />

      {/* Blockchain Process */}
      <div>
        <BlockchainCycle
          title="Your Roadmap to Successful IDO Development"
          data={IdoDevelopmentCycle}
        />
      </div>

      {/* Bloackchain entertainment forecast */}
      <div className="flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-6 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-12 md:mt-24 mb-12 md:mb-8 lg:mb-12 bg-[#283430] bg-opacity-10 py-20">
        <div className="w-full md:w-[50%] ">
          <p className="text-white text-2xl xl:text-4xl font-semibold pt-4" style={{ lineHeight: '1.5' }}>
            White-Label IDO Launchpad Development
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white text-opacity-50 pt-6 leading-7 w-full md:w-[80%]"  style={{ lineHeight: "1.7" }}>
          Accelerate your fundraising journey with our customizable white-label IDO launchpad solutions. Designed for efficiency and flexibility, these pre-built platforms provide a cost-effective approach to launching your IDO, tailored to fit your business needs.
          </p>
          <p className="text-sm lg:text-[15px] 2xl:text-[17px] font-normal text-white pt-6 leading-7 w-full md:w-[80%]">Why Choose Our White-Label IDO Launchpad?</p>
          <p className="text-sm font-normal text-white text-opacity-50 pt-6 leading-7 w-full md:w-[80%]"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Secure & Transparent Decentralized Ecosystem</p>
          <p className="text-sm font-normal text-white text-opacity-50 pt-2 leading-7 w-full md:w-[80%]"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Dynamic Price Discovery Mechanism</p>
          <p className="text-sm font-normal text-white text-opacity-50 pt-2 leading-7 w-full md:w-[80%]"><span className="w-2 h-2 bg-green mr-4 inline-block"></span>Multi-Chain Compatibility</p>
        </div>
        <div className="w-full md:w-[70%] lg:w-[50%] mt-4 md:mt-0">
          <p className="text-white text-lg ">
          Popular IDO Launchpad Clones to Consider:
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-6">
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">Trustpad</p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
              A highly interoperable, user-friendly launchpad with a strong market presence, making it a top choice for token launches.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                Solstarter (Solana)
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
              A premier Solana-based launchpad that facilitates seamless fundraising and investor participation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center mt-4 ">
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tl-3xl w-full md:w-[70%]">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                Binance Smart Chain
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
              A top-tier launchpad specializing in token distribution and liquidity generation, simplifying launch complexities.
              </p>
            </div>
            <div className=" bg-[#239400] bg-opacity-10 p-6 rounded-3xl md:rounded-tr-3xl w-full md:w-[70%] mt-4 md:mt-0">
              {/* img */}
              <p className="text-white text-lg font-medium pt-4">
                Polka Starter (Polkadot)
              </p>
              <p className="text-white text-opacity-70 pt-2 text-[17px] md:text-[14px] ">
              A feature-rich Polkadot-based launchpad with advanced cross-chain capabilities, addressing key crypto space challenges.
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
