/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlockchainCycle1 = ({ title }) => {
  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
      }}
    >
      <FaChevronLeft size={24} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#2BB32A",
      }}
    >
      <FaChevronRight size={24} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default (for larger screens)
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 1000,  // Set the autoplay speed (in milliseconds)
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px (tablets)
        settings: {
          slidesToShow: 2, // Show 2 cards per row
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425, // For screens smaller than 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 card per row
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="relative bg-[#283430] bg-opacity-10 mt-24 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-64">
      <div className="hidden md:block spotlight spotlight-right"></div>
        <div className="flex flex-row space-x-20">
          <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-3xl font-semibold pt-14 pb-14">
            {title}
          </span>
          
        </div>
        <Slider {...settings}>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Decentralized Digital Identity</p>
              <p className="font-semibold text-sm pt-2">
              Users can create self-sovereign identities (SSI) that allow full control over personal data, reducing reliance on centralized authorities.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg"> Secure Login & Authentication </p>
              <p className="font-semibold text-sm pt-2">
              Eliminates password-based logins with blockchain-powered authentication, reducing the risk of credential theft and phishing attacks.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
              KYC & AML Compliance
              </p>
              <p className="font-semibold text-sm pt-2">
              Streamlines identity verification for banks, financial institutions, and crypto exchanges, ensuring compliance while reducing onboarding time.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg"> Digital Voting Systems</p>
              <p className="font-medium text-sm pt-2">
              Enables secure, transparent, and fraud-resistant online voting by ensuring voter identities remain verifiable and immutable.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
              Healthcare & Medical Records
              </p>
              <p className="font-medium text-sm pt-2">
              Stores patient identities, health records, and medical histories securely, allowing seamless access while maintaining privacy and compliance.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
                {" "}
                Education & Credential Verification
              </p>
              <p className="font-medium text-sm pt-2">
              Universities and institutions can issue tamper-proof digital diplomas and certifications, enabling instant verification by employers and organizations.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Government & Public Services</p>
              <p className="font-medium text-sm pt-2">
              Enhances e-governance by securing citizen IDs, passports, and social security data on a blockchain, preventing fraud and identity theft.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
              Supply Chain & Workforce Identity
              </p>
              <p className="font-medium text-sm pt-2">
              Ensures authenticity of supplier identities, preventing fraud while allowing secure workforce credentialing and verification.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg"> Travel & Immigration</p>
              <p className="font-medium text-sm pt-2">
              Enables digital passports and visa records, streamlining border control and airport security with faster, secure identity verification.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg"> Financial Inclusion & Banking</p>
              <p className="font-medium text-sm pt-2">
              Provides unbanked individuals with verifiable digital identities, enabling them to access financial services without traditional documentation barriers.
              </p>
            </div>
          </div>
        </Slider>
        </div>
    </div>
  );
};

export default BlockchainCycle1;
