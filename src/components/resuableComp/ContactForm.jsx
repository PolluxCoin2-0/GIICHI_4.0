/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    natureOfWork: "",
    natureOfWorkOther: "", // Added field for nature of work (if 'Others' is selected)
    purpose: "",
    purposeOther: "", // Added field for purpose (if 'Others' is selected)
    date: null,
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number format"; // Mobile number validation (basic format check)
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  // Custom Input for DatePicker with Calendar Icon
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-full">
      <input
        ref={ref}
        type="text"
        value={value}
        onClick={onClick}
        readOnly
        placeholder="Date*"
        className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white pr-24 placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
      />
      <FaCalendarAlt
        className="absolute right-3 top-3 text-white cursor-pointer"
        onClick={onClick}
      />
    </div>
  ));

  return (
    <div className="flex flex-col justify-center items-center mt-8 md:mt-20 bg-greish-gradient h-full pb-24 px-4 md:px-0">
      <div className="border-2 border-white border-opacity-15 rounded-3xl px-4 md:px-12 py-6 md:py-10 w-full md:w-[40%] pb-20 bg-gray-gradient ">
        <p className="text-white text-xl md:text-3xl font-bold text-center">
          Please Share Your Details
        </p>
        <p className="text-white text-opacity-60 pt-4 md:pt-8 text-sm md:text-[17px]">Contact Details:</p>
        
       
        <div className="pt-4">
           {/* first and last name */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 w-full">
            <div className="flex flex-col w-full md:w-[50%]">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white
                 placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col w-full md:w-[50%] mt-4 md:mt-0">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
         
         {/* email and mobile number */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4 w-full">
            <div className="flex flex-col w-full md:w-[50%]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10
               text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>
            {/* Phone input with country code */}
            <div className="flex flex-col w-full md:w-[50%] mt-4 md:mt-0">
              <PhoneInput
                country={"in"} // Default to India
                value={formData.mobile}
                onChange={(value) =>
                  setFormData({ ...formData, mobile: value })
                }
                className="w-full p-0 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white 
              placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
                buttonClass="!w-[12%] !text-black"
                placeholder="Enter phone number"
                preferredCountries={["in"]} // Make India appear first in the list
                onlyCountries={["in", "us", "gb", "ca", "au", "de", "fr", "it"]} // List other countries you want to include
              />
              {errors.mobile && (
                <p className="text-red-400 text-sm mt-2">{errors.mobile}</p>
              )}
            </div>
          </div>
         
         {/* nature of work and purpose */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4 w-full">
            <div className="w-full md:w-[50%]">
            <select
              name="natureOfWork"
              value={formData.natureOfWork}
              onChange={handleChange}
              className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
            >
              <option value="" className="text-black text-sm">
                Nature of Work
              </option>
              <option value="Consulting" className="text-black text-sm">
                Consulting
              </option>
              <option value="Development" className="text-black text-sm">
                Development
              </option>
              <option value="Marketing" className="text-black text-sm">
                Marketing
              </option>
            </select>
            </div>
            
            <div className="w-full md:w-[50%] mt-4 md:mt-0">
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
            >
              <option value="" className="text-black text-sm">
                Purpose
              </option>
              <option value="CoPilot" className="text-black text-sm">
                CoPilot
              </option>
              <option
                value="Build a Product/Service"
                className="text-black text-sm"
              >
                Build a Product/Service
              </option>
              <option
                value="Technical Support/Query"
                className="text-black text-sm"
              >
                Technical Support/Query
              </option>
              <option value="Schedule a Demo" className="text-black text-sm">
                Schedule a Demo
              </option>
              <option value="Others" className="text-black text-sm">
                Others
              </option>
            </select>
            </div>
          </div>
         
         <p className="text-white text-opacity-60 pt-4 md:pt-8">
            Best Date & Time to Reach You:
          </p>

          {/* date and time */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4 w-full">
            <div className="w-full md:w-[50%]">
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                customInput={<CustomInput />}
              />
            </div>
            
            <div className="w-full md:w-[50%] mt-4 md:mt-0">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white"
              >
                <option value="" className="text-[#A2A698] text-sm">
                  Time*
                </option>
                <option value="09:00 AM" className="text-black text-sm">
                  09:00 AM
                </option>
                <option value="10:00 AM" className="text-black text-sm">
                  10:00 AM
                </option>
                <option value="11:00 AM" className="text-black text-sm">
                  11:00 AM
                </option>
                <option value="12:00 PM" className="text-black text-sm">
                  12:00 PM
                </option>
                <option value="01:00 PM" className="text-black text-sm">
                  01:00 PM
                </option>
                <option value="02:00 PM" className="text-black text-sm">
                  02:00 PM
                </option>
              </select>
            </div>
          </div>
          
          {/* message */}
          <div className="mt-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message:"
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white
              placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
            />
          </div>
         
         {/* submit button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="text-black bg-yellow-gradient w-full py-2 rounded-md font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
