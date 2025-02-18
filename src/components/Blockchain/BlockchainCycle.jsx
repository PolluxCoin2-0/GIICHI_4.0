/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlockchainCycle = ({ title }) => {
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
              <p className="text-xl font-semibold">01.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Requirement Analysis</p>
              <p className="font-semibold text-sm pt-2">
                We begin by understanding your business objectives, use cases,
                and technical requirements to define the project scope and
                feasibility.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">02.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Blockchain Consultation </p>
              <p className="font-semibold text-sm pt-2">
                Our experts analyze the best blockchain platform, consensus
                mechanism, and architecture to align with your business goals.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">03.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
                Technical Architecture & Planning
              </p>
              <p className="font-semibold text-sm pt-2">
                We design the system architecture, select the technology stack,
                and outline the development roadmap, ensuring a strong
                foundation.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">04.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">UI/UX Design</p>
              <p className="font-medium text-sm pt-2">
                Our design team creates user-friendly interfaces that enhance
                accessibility and improve the overall experience of the
                blockchain application.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">05.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
                Smart Contract Development
              </p>
              <p className="font-medium text-sm pt-2">
                We develop and implement secure, efficient, and self-executing
                smart contracts tailored to your blockchain application's
                functionality.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">06.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
                {" "}
                Core Blockchain Development
              </p>
              <p className="font-medium text-sm pt-2">
                Our developers integrate blockchain components such as consensus
                algorithms, nodes, and APIs, ensuring seamless interoperability
                and scalability.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">07.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Testing & Security Audit</p>
              <p className="font-medium text-sm pt-2">
                Rigorous testing, including functionality, performance, and
                security audits, is conducted to identify vulnerabilities and
                optimize the application.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">08.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">
                Deployment & Network Setup
              </p>
              <p className="font-medium text-sm pt-2">
                We deploy the blockchain solution on the preferred mainnet or
                testnet, ensuring smooth functionality and seamless integration.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">09.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Monitoring & Optimization</p>
              <p className="font-medium text-sm pt-2">
                Post-launch monitoring and performance tracking are implemented
                to enhance security, efficiency, and user experience.
              </p>
            </div>
          </div>
          <div className="px-2 md:px-4">
            <div className="bg-green-gradient shadow-inner shadow-gray-200 rounded-2xl p-4 xl:p-6">
              <p className="text-xl font-semibold">10.</p>
              <p className="font-semibold text-lg lg:text-[17px] xl:text-lg">Maintenance & Upgrades</p>
              <p className="font-medium text-sm pt-2">
                We provide ongoing support, updates, and feature enhancements to
                keep your blockchain app future-ready and competitive.
              </p>
            </div>
          </div>
        </Slider>

        
      </div>
    </div>
  );
};

export default BlockchainCycle;
