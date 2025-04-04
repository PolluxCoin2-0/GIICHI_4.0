import { WhitepaperIndustriesData } from "../../../components/data/industriesData";
import LetsTalk from "../../../components/resuableComponent/LetsTalk";
import Industries from "../../../components/CommonComponent/Industries";
import LifeCycle from "../../../components/CommonComponent/LifeCycle";
import { whitePaperLifeCycleData } from "../../../components/data/lifecycleData";
import ProductDevPhases from "../../../components/CommonComponent/ProductDevPhases";
import whitepaperFeatureimg from "../../../assets/whitepaperFeature.png";
import ButtonFreeDemo from "../../../components/resuableComponent/ButtonFreeDemo";

const steps = [
  { id: "01", title: "Expand brand presence" },
  { id: "02", title: "Build trust and credibility" },
  { id: "03", title: "Reach out to investors and partners" },
  { id: "04", title: "Amplify audience engagement" },
  { id: "05", title: "Lead generation" },
];

const WhitepaperDev = () => {
  return (
    <div className="mt-20 ">
      {/* white paper creation service */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
      <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
        <p className="text-5xl text-white font-semibold text-center">
          Personalized White Paper <br />
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Creation Services
          </span>
        </p>
        <div className="flex flex-row w-full mt-12">
          <div className="w-[50%]">
            <img
              src={whitepaperFeatureimg}
              alt="whitepaper-feature-image"
              className="w-[80%] -mt-6"
            />
          </div>
          <div className="w-[50%]">
            <p className="text-white text-opacity-70 text-justify hyphens-auto">
              A white paper is an authoritative, persuasive, and comprehensive
              document that outlines a business project’s challenges and
              solutions. It plays a crucial role in establishing industry
              authority, enhancing credibility, and demonstrating thought
              leadership. In the crypto market, a well-researched white paper
              serves as a powerful tool to attract investors and showcase your
              project’s potential.
              <br /> <br />
              At Giichi IT Solution, we specialize in crafting impactful white
              papers that combine in-depth research, solution architecture, and
              token economics. Our expert writers collaborate with industry
              professionals to develop detailed, data-driven white papers that
              add credibility and authenticity to your project.
              <br /> <br />
              Beyond content creation, we also offer white paper design
              services, ensuring your document is not only information-rich but
              also visually compelling for potential investors. Position your
              crypto project for success with our expertly crafted white paper
              creation services. Let Giichi IT Solution help you build a strong
              foundation and establish your industry leadership.
            </p>

            {/* button to connect on whatsapp */}
            <div className="flex flex-row items-center space-x-6">
              <a
                type="button"
                href="https://wa.me/9266416198"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Connect on Whatsapp
              </a>
              <ButtonFreeDemo/>
            </div>
          </div>
        </div>
      </div>

      {/* our blockchain creation  process */}
      <div>
        <LifeCycle
          heading1="Our White Paper"
          heading2="Creation Process"
          desc=""
          steps={whitePaperLifeCycleData}
        />
      </div>

      {/* Industries sector that we cover */}
      <Industries
        data={WhitepaperIndustriesData}
        heading1="Industries & Sector"
        heading2="We Cover"
        desc=" As a leading custom blockchain development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs."
      />

      {/* Blockchain Supply Chain Network */}
      <ProductDevPhases
        data={steps}
        heading="Importance of Whitepaper"
        desc="A white paper is crucial for establishing credibility, showcasing industry expertise, and attracting investors by presenting a well-researched solution to a problem. 
       "
      />
      {/* Schedule a free demo */}
      <div className="mt-12">
        <LetsTalk buttonText="Schedule A Free Demo" />
      </div>
    </div>
  );
};

export default WhitepaperDev;
