import axios from "axios";

let accountBaseUrl = `http://localhost:3001/v1/auth/api-key/`
export const getAccountDeatils = async (apiKey) => {
  try {
    const response = await axios.get(`${accountBaseUrl}${apiKey}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error);
  }
};
