import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import poxLogo from "../assets/poxLogo.png";
import akamaiLogo from "../assets/akamai.png";
import xdcImg from "../assets/xdc.png";
import zonLogo from "../assets/zonToken.png";
import lBankLogo from "../assets/lbank.png";
import koinBxLogo from "../assets/koinbx.png";
import coinstoreLogo from "../assets/coinstore.png";
import googleLogo from "../assets/google.png";
import linodeLogo from "../assets/linode.png";
import awsLogo from "../assets/aws.png";
import sulaanaLogo from "../assets/SulanaLogo.svg";

const ClientsSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    easing: "ease-in-out", 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false, 
        },
      },
    ],
  };

  // Customize slider settings for each row
  const sliderFirstAndThirdRowSettings = {
    ...sliderSettings,
    slidesToShow: 3, 
    rtl: true, 
    autoplaySpeed: 3000,
    
  };
const sliderSecondRowSettings = {
    ...sliderSettings,
    slidesToShow: 5, 
    rtl: false, 
    autoplaySpeed: 3000,
  };

  return (
    <div className="xl:px-4 2xl:px-7 mt-8">
      {/* First Row - Sliding with 3 items */}
      <Slider {...sliderFirstAndThirdRowSettings} className="w-full mb-5">
        {[{ logo: poxLogo, name: "PolluxChain", color: "#38DD02" },
          { logo: akamaiLogo, name: "Akamai", color: "#DE891D" },
          { logo: xdcImg, name: "Xinfin Network", color: "#2C95D4" }
        ].map((item, index) => (
          <div key={index} className="px-3 mt-4">
            <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] flex justify-center items-center space-x-4">
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain text-nowrap" />
              <p className="text-sm md:text-2xl text-nowrap" style={{ color: item.color }}>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Second Row - Sliding with 5 items */}
      <Slider {...sliderSecondRowSettings} className="w-full mb-5">
        {[{ logo: zonLogo, name: "Zon Token", color: "#F23C27" },
          { logo: lBankLogo, name: "LBank", color: "#FCD739" },
          { logo: koinBxLogo, name: "KoinBx", color: "#88C047" },
          { logo: coinstoreLogo, name: "CoinStore", color: "#394c9b" },
          { logo: sulaanaLogo, name: "Sulaana", color: "#9423B5" }
        ].map((item, index) => (
          <div key={index} className="px-3 mt-4">
            <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] flex justify-center items-center space-x-4">
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain text-nowrap" />
              <p className="text-sm md:text-2xl text-nowrap" style={{ color: item.color }}>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Third Row - Sliding with 3 items */}
      <Slider {...sliderFirstAndThirdRowSettings} className="w-full">
        {[{ logo: awsLogo, name: "AWS", color: "#F99901" },
          { logo: googleLogo, name: "Google", color: "#E94234" },
          { logo: linodeLogo, name: "Linode", color: "#2CB159" }
        ].map((item, index) => (
          <div key={index} className="px-3 mt-4 ">
            <div className="rounded-2xl py-3 md:py-5 px-2 md:px-4 bg-[#151515] flex justify-center items-center space-x-4">
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain text-nowrap" />
              <p className="text-sm md:text-2xl  text-nowrap" style={{ color: item.color }}>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsSlider;
