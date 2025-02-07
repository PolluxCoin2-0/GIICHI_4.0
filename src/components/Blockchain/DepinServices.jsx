/* eslint-disable react/prop-types */

// service data
const servicesData = [
    {
      title: "Core Infrastructure",
      description:
        "The backbone of DePIN, core infrastructure enables seamless connectivity for businesses and users. It includes routers, servers, hotspots, and energy sources, ensuring efficient access to decentralized networks.",
    },
    {
      title: "Infrastructure Providers",
      description:
        "Infrastructure providers play a vital role in optimizing and maintaining physical infrastructure within DePIN ecosystems. Whether through individual or collective contributions, they enhance network reliability, security, and overall performance.",
    },
    {
      title: " Decentralized Ledger Technology",
      description:
        "A decentralized ledger acts as the foundation for secure and transparent transaction processing within DePIN. Its immutable and distributed nature ensures trust, accountability, and data integrity across the network.",
    },
    {
      title: " Incentive Mechanisms",
      description:
        "To drive participation and sustain operations, DePIN platforms integrate crypto-based incentive mechanisms. These token rewards encourage hardware providers and users to contribute actively, ensuring continuous engagement and efficiency.",
    },
    {
      title: "End Users",
      description:
        "Users interact with DePIN-powered services by paying fees, usually in the ecosystem’s native cryptocurrency. This decentralized economic model fosters wider adoption, ensuring a self-sustaining, transparent, and efficient system.",
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
  
  const DepinServices = () => {
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
  
  export default DepinServices;
  