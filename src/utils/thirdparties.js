import axios from "axios";

export const getAccountDeatils = async (apiKey) => {
  try {
    const params = `?apiKey=${apiKey}`;
    const response = await axios(`${accountBaseUrl}${params}`);
    console.log(response);
  } catch (error) {
    console.log(error);
    return error;
  }
};
