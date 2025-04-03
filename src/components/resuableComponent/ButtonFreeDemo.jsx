import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ContactForm from "./ContactForm";

const ButtonFreeDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-7 lg:px-8 py-3 text-white 
        text-sm md:text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
        aria-label="Contact us"
        title="Click to contact us form"
      >
        Request a Free Demo
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md md:w-full mt-20 md:mt-0">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-16 md:top-5 right-0 md:right-5 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Close Modal"
            >
              <AiOutlineClose className="text-black text-lg md:text-2xl" />
            </button>

            <ContactForm isBg={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonFreeDemo;
