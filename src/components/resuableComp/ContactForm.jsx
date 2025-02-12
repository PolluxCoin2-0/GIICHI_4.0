/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createContactApi } from "../../api/apiFunctions";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isloading, setIsLoading] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    mobile: "",
    subject: "",
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

  const handlePhoneChange = (value, country) => {
    setFormData({
      ...formData,
      mobile: value,
      countryCode: country.dialCode, // Store country code separately
    });
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

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateData = validate();
    console.log(validateData);
    if (!validateData) {
      toast.warning("Fill all the required field!");
      return;
    }
    if (isloading) {
      toast.warning("Loading....");
    }
    try {
      setIsLoading(true);
      const response = await createContactApi(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.countryCode,
        formData.mobile,
        formData.subject,
        formData.message
      );
      console.log({ response });
      setFormData(response);
      if (response?.M === "Contact created successfully") {
        toast.success("Submitted Successfully");
      }
      console.log(formData);
    } catch (error) {
      console.log("error", error);
    }
    console.log({ formData });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 md:mt-20 bg-greish-gradient h-full pb-24 px-4 md:px-0">
      <div className="border-2 border-white border-opacity-15 rounded-3xl px-4 md:px-6 lg:px-12 py-6 md:py-10 w-full md:w-[80%] lg:w-[70%] xl:w-[40%] pb-20 bg-gray-gradient ">
        <p className="text-white text-xl md:text-3xl font-bold text-center">
          Please Share Your Details
        </p>
        <p className="text-white text-opacity-60 pt-4 md:pt-8 text-sm md:text-[17px]">
          Contact Details:
        </p>

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
                onChange={(value, country) => handlePhoneChange(value, country)}
                className="w-full p-0 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
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

          <div className="flex flex-col w-full mt-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-1 md:p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm">{errors.subject}</p>
            )}
          </div>
          {/* message */}
          <div className="mt-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Description:"
              className="w-full p-2 border-[1px] border-white border-opacity-15 rounded-md bg-white bg-opacity-10 text-white
              placeholder:text-white placeholder:text-opacity-60 placeholder:text-sm"
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}
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
