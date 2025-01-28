/* eslint-disable react/prop-types */

// service data
const servicesData = [
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
  {
    title: "Blockchain Consultation &  Integration",
    description:
      "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Antier's deep industry knowledge and proven track record ensure successfull blockchain integration.",
  },
];

const ServicesCard = ({ title, description }) => {
  return (
    <div>
      <div className="w-full pr-12 relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent after:via-white/30 after:to-transparent">
        <p className="text-white text-lg font-bold border-b-2 border-white border-opacity-20 pb-2">
          {title}
        </p>
        <p className="text-sm text-white text-opacity-70 pt-4">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      {/* services Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
        {/* services Block */}
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
