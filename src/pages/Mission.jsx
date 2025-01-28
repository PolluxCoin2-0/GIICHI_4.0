import PropTypes from "prop-types";
import star6Img from "../assets/star6.png";
import crowd1Logo from "../assets/crowd1Logo.png";
import polluxLogo from "../assets/polluxLogo (3).png";
import Spot30Logo from "../assets/spot30Logo.png";
import colourTradeLogo from "../assets/colorTradeLogo.png";

const Mission = () => {
  const partners = [
    {
      logo: crowd1Logo,
      title: "Crowd1",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: crowd1Logo,
      title: "Crowd1",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: polluxLogo,
      title: "Pollux",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
  ];

  const clients = [
    {
      logo: Spot30Logo,
      title: "Spot30",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: colourTradeLogo,
      title: "Color Trade",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
    {
      logo: Spot30Logo,
      title: "Spot30",
      description:
        "Accelerate your Web3 journey with GiiCHi CoPilot, a tailored partnership program designed to turn your vision into reality.",
    },
  ];

  // common card
  const PartnerCard = ({ logo, title, description }) => {
    return (
      <div className="w-full md:w-[33%] xl:w-[30%] border-[1px] border-white border-opacity-30 rounded-3xl p-4 lg:p-6">
        <img src={logo} alt={title} className="" />
        <p className="text-white pt-4">{title}</p>
        <p className="text-white text-opacity-50 pt-2">{description}</p>
      </div>
    );
  };
  // PropTypes validation
  PartnerCard.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64 pt-12 md:pt-24">
      {/* Heading 1 */}
      <p className="text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-4 leading-tight tracking-wide">
        Generating lasting performance <br />
        for{" "}
        <span className="text-transparent bg-clip-text bg-green-gradient">
          Mission Critical Priorities
        </span>
      </p>

      {/* Heading 2 */}
      <div className="flex flex-row justify-between items-center">
        <img src={star6Img} alt="" className="hidden md:block" />
        <p className="text-sm md:text-lg font-semibold text-white text-opacity-50 text-center pt-6">
          Accelerate your Web3 journey with GiiCHi CoPilot, a tailored
          partnership <br />
          program designed to turn your vision into reality.
        </p>
        <img src={star6Img} alt="" className="hidden md:block" />
      </div>

      {/* Heading 3 */}
      <div className="flex flex-row justify-center items-center mt-6">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Partners-
        </p>
      </div>

      {/* Blocks : Our Partners */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-6 xl:space-x-0 space-y-4 md:space-y-0 w-full mt-8">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            logo={partner.logo}
            title={partner.title}
            description={partner.description}
          />
        ))}
      </div>

      {/* Heading 4 */}
      <div className="flex flex-row justify-center items-center mt-12">
        <p className="bg-darkGray text-white px-8 lg:px-24 py-3 rounded-full text-[17px] font-medium text-nowrap">
          - Our Clients-
        </p>
      </div>

      {/* Blocks : Our Clients */}
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-6 xl:space-x-0 space-y-4 md:space-y-0 w-full mt-8">
        {clients.map((client, index) => (
          <PartnerCard
            key={index}
            logo={client.logo}
            title={client.title}
            description={client.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
