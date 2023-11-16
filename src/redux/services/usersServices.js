import axios from "axios";

const API_URL = `https://code-battle-4dabfab863b2.herokuapp.com/api/v1/user`;

const users = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

const usersServices = {
  users,
};

export default usersServices;
