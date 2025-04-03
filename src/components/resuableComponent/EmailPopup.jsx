/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { Client, Databases } from "appwrite";

// Initialize Appwrite outside the component
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("67e0f734000b5c8bb410"); // Replace with your actual Project ID

const databases = new Databases(client);
const DATABASE_ID = "67e0f9f3001eb4c5d085";
const COLLECTION_ID = "67e0f9f90026b0512307";

const EmailPopup = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // Function to validate name (should not be empty)
  const isValidName = (name) => {
    return name.trim().length > 0;
  };

  // Function to validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to validate mobile number (basic validation for 10 digits)
  const isValidMobile = (mobile) => {
    return /^[0-9]{10}$/.test(mobile);
  };

  // Function to add data to Appwrite database
  const saveUserData = async () => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()", // Generates a unique document ID
        { Name: name, Email: email, Mobile: mobile }
      );
      console.log("Data Added:", response);
      return response;
    } catch (error) {
      console.error("Failed to add data:", error);
    }
  };

  const handleSubmit = async () => {
    if (!isValidName(name)) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isValidMobile(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    await saveUserData();
    onSubmit({ name, email, mobile });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-start items-end p-6 z-20">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="bg-black p-6 rounded-2xl shadow-lg w-96 border border-[#041805]"
      >
        <h2 className="text-xl font-semibold mb-4 text-white text-center poppins-thin">
          📩 Stay Updated!
        </h2>
        <p className="text-xs text-gray-400 text-center mb-4 poppins-thin">
          Get the latest news and offers directly in your inbox.
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border-[1px] border-white border-opacity-30 rounded-lg text-white bg-transparent focus:outline-none focus:border-blue-400 transition placeholder:text-white text-sm"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-2 border-[1px] border-white border-opacity-30 rounded-lg text-white bg-transparent focus:outline-none focus:border-blue-400 transition placeholder:text-white text-sm"
        />
        <input
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-2 mt-2 border-[1px] border-white border-opacity-30 rounded-lg text-white bg-transparent focus:outline-none focus:border-blue-400 transition placeholder:text-white text-sm"
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#64A03C] to-[#F0AA06] text-white font-medium cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            Subscribe 
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer rounded-full text-sm transition-transform duration-200 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailPopup;
