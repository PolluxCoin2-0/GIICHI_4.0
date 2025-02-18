/* eslint-disable react/prop-types */
const servicesData = [
  {
    title: "Blockchain Consultation & Integration",
    description:
      "From strategy formulation to seamless implementation, our blockchain experts guide you at every step of your development journey, ensuring successful integration with deep industry expertise.",
  },
  {
    title: "Layer 2 Development",
    description:
      "We build innovative Layer 2 solutions, including rollups and state channels, to enhance scalability and efficiency while integrating seamlessly with existing blockchain networks.",
  },
  {
    title: "Blockchain Protocol Development",
    description:
      "Our team specializes in developing scalable and customizable blockchain protocols, from consensus mechanisms to governance structures, tailored to your unique business requirements.",
  },
  {
    title: "Mortgage Securitization Platform",
    description:
      "We design secure, high-performance trading platforms for seamless cryptocurrency transactions, ensuring compliance and scalability for both centralized and decentralized exchanges.",
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Our NFT marketplaces come with multi-chain support, smart contract integration, and secure payment gateways, ensuring authenticity, security, and seamless token transactions.",
  },
  {
    title: "Smart Contract Development & Audit",
    description:
      "We create and audit smart contracts with rigorous testing to ensure security, efficiency, and compliance with industry standards across multiple blockchain platforms.",
  },
];

const ServicesCard = ({ title, description, isLastInRow }) => {
  return (
    <div>
      <div
        className={`w-full pr-12 relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent
             after:via-white/30 after:to-transparent ${
               isLastInRow ? "after:w-0" : ""
             }`}
      >
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
        {servicesData.map((service, index) => {
          const isLastInRow = (index + 1) % 3 === 0;
          return (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              isLastInRow={isLastInRow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
