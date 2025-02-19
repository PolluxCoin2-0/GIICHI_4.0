/* eslint-disable react/prop-types */
const servicesData = [
  {
    title: " Real Estate Tokenization",
    description:
      "We develop blockchain-based solutions to facilitate seamless rental property transactions. By tokenizing real estate assets, properties can be traded digitally, enabling secure and efficient transactions. Our solutions cover technology, legal, and auditing processes to help raise capital through property-backed tokens, ensuring compliance with various jurisdictions via smart contracts.",
  },
  {
    title: " Real Estate Property Search Platform",
    description:
      "We automate the entire home-buying process with blockchain-powered platforms. Buyers can explore listings, take physical or virtual tours, and finalize purchases effortlessly. Smart contracts streamline transactions, eliminating unnecessary delays and paperwork.",
  },
  {
    title: "Real Estate Marketplace Platform",
    description:
      "Our blockchain-powered real estate marketplace ensures secure, customizable asset issuance while maintaining regulatory compliance. This reduces costs, minimizes counterparty risk, and enhances liquidity potential. With rapid, customizable issuance, firms can cater to investor demands more precisely, transforming real estate investments.",
  },
  {
    title: "Mortgage Securitization Platform",
    description:
      "Traditional loan and mortgage approvals are slow and insecure due to paper-based, non-standardized processes. Our blockchain-powered mortgage securitization platform automates approvals, secures transactions with smart contracts, and ensures real-time payment distribution to beneficiaries. Regulators receive instant reporting, making loan lifecycle management more efficient and transparent.",
  },
  {
    title: " Digital Registry Platform Development",
    description:
      "Secure asset titles and documentation are crucial for investor confidence and seamless transactions. Our blockchain-based digital registry streamlines real estate records, ensuring transparency, fraud prevention, and regulatory compliance while unlocking access to financing and economic growth.",
  },
  {
    title: "Real Estate Construction Management",
    description:
      "Large construction projects face sub-contracting inefficiencies, procurement delays, and supply chain opacity. Our blockchain solutions for real estate construction simplify procurement, automate contract management, verify product authenticity, and optimize project oversight—enhancing efficiency, reducing risks, and ensuring seamless execution.",
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
