import { useState } from "react";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="border-2 border-white border-opacity-15 rounded-3xl px-12 py-10 w-[40%] mb-20">
        <p className="text-white text-3xl font-bold text-center">
          Please Share Your Details{" "}
        </p>
        <p className="text-white text-opacity-60 pt-8">Contact Details:</p>

        {/* details */}
        <div className="pt-4">
          {/* Last and first name */}
          <div className="flex flex-row space-x-4">
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="First Name"
            />
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Last Name"
            />
          </div>

           {/* Email and Mobile no. */}
           <div className="flex flex-row space-x-4 mt-4">
            <input
              id="input"
              type="email"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Email"
            />
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Mobile"
            />
          </div>

           {/* Nature of Work & Purpose*/}
           <div className="flex flex-row space-x-4 mt-4">
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Nature of Work"
            />
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Purpose"
            />
          </div>

          <p className="text-white text-opacity-60 pt-8">Best Date & Time to Reach You:</p>

           {/* Date & Time */}
           <div className="flex flex-row space-x-4 mt-4">
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="First Name"
            />
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Last Name"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
          <input
              id="input"
              type="textArea"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 
          placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal"
              placeholder="Nature of Work"
            />
          </div>

          {/* Button */}
          <div className="mt-4">
            <button 
            type="button"
            className="text-black bg-[#FFC900] w-full py-2 rounded-md">
                Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
