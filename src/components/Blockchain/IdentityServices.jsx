/* eslint-disable react/prop-types */

// service data
const servicesData = [
    {
      title: " Privacy Preservation",
      description:
        "With Self-Sovereign Identity (SSI) principles, users retain complete control over their personal data. They decide what to share, with whom, and when—minimizing unauthorized access and misuse.",
    },
    {
      title: "Elimination of Single Point of Failure",
      description:
        "Decentralized identity solutions remove reliance on central authorities, distributing identity data across a secure blockchain network, making it resistant to breaches and failures.",
    },
    {
      title: "Interoperability",
      description:
        "Our blockchain identity solutions provide a common framework for authentication and verification, enabling seamless integration across multiple platforms and industries.",
    },
    {
      title: " Easy Accessibility",
      description:
        "Giichi empowers underrepresented and unbanked populations by offering portable digital identities that aren’t tied to a specific institution or region—bridging the digital divide.",
    },
    {
      title: " Enhanced Security",
      description:
        "Blockchain’s cryptographic algorithms ensure data integrity and protection against tampering, fraud, and identity theft, while decentralized verification mechanisms enhance security.",
    },
    {
      title: "User Control",
      description:
        "Individuals gain full ownership and control over their identity data, managing access permissions, consent preferences, and verification processes on their terms.",
    },
    {
      title: "Cost Efficiency",
      description:
        "By eliminating intermediaries and automating verification processes, blockchain-based identity solutions significantly reduce operational costs while increasing efficiency.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Giichi’s solutions align with global data protection regulations, incorporating privacy-preserving mechanisms, consent management, and seamless compliance for businesses and individuals.",
    },
    {
      title: " Scalability",
      description:
        "Built for the future, our blockchain identity solutions scale effortlessly, accommodating growing user bases and transaction volumes without compromising performance.",
    },
  ];
  
  const ServicesCard = ({ title, description, isLastInRow }) => {
    return (
      <div>
        <div
          className={`w-full pr-12 relative mb-8 after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-gradient-to-b after:from-transparent
             after:via-white/30 after:to-transparent ${
            isLastInRow ? 'after:w-0' : ''
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
  
  const IdentityServices = () => {
    return (
      <div>
        {/* services Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
          {/* services Block */}
          {servicesData.map((service, index) => {
            const isLastInRow = (index + 1) % 3 === 0; // Check if the current index is the last item in the row (every third item)
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
  
  export default IdentityServices;
  