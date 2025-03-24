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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Function to validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to add email to Appwrite database
  const emailGiichi = async (email) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()", // Generates a unique document ID
        { Email: email }
      );
      console.log("Email Added:", response);
      return response;
    } catch (error) {
      console.error("Failed to add email:", error);
    }
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    await emailGiichi(email);
    onSubmit(email);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-start items-end p-6 z-50">
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
        className="bg-black p-6 rounded-2xl shadow-lg w-96 border border-gray-800"
      >
        <h2 className="text-xl font-semibold mb-4 text-white text-center poppins-thin">
          📩 Stay Updated!
        </h2>
        <p className="text-xs text-gray-400 text-center mb-4 poppins-thin">
          Get the latest news and offers directly in your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-700 rounded-lg text-white placeholder-gray-500 bg-transparent focus:outline-none focus:border-blue-400 transition placeholder:poppins-thin"
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#64A03C] to-[#F0AA06] text-white font-medium cursor-pointer poppins-thin transition-transform duration-200 hover:scale-105"
          >
            Subscribe 
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 poppins-thin cursor-pointer rounded-full text-sm transition-transform duration-200 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailPopup;
