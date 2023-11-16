import axios from "axios";

const API_URL = `https://code-battle-4dabfab863b2.herokuapp.com/api/v1/flood/data`;

const floodData = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

const floodServices = {
  floodData,
};

export default floodServices;
