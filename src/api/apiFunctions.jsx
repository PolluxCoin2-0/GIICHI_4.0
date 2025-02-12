import axios from "axios";
import API_ENDPOINTS from "./apiEndPoints";
const BASE_URL = import.meta.env.VITE_BASE_URL;
/**
 * Generic POST request handler
 * @param {string} endpoint - The API endpoint to call (without base URL).
 * @param {object} data - Data to send in the POST request.
 * @returns {Promise<object>} - The response data from the API.
 */
const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(
      `Error in POST ${endpoint}:`,
      error.response || error.message
    );
    throw error;
  }
};

// CREATE CONTACT
export const createContactApi = async (firstName, lastName, email, countryCode, mobileNo, subject, description) => {
  const mobileValue = mobileNo.slice(countryCode.length);
  return postRequest(API_ENDPOINTS.user.createContact, {
    firstName,
    lastName,
    email,
    countryCode,
    mobileNo: mobileValue,
    subject,
    description
  });
};
