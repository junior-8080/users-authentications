import axios from "axios";

let accountBaseUrl = `${process.env.ACCOUNT_API_BASE_URL}/api-key/`
export const getAccountDeatils = async (apiKey) => {
  try {
    const response = await axios.get(`${accountBaseUrl}${apiKey}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw (error);
  }
};
