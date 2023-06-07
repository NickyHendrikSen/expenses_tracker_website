import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://localhost:3000/'
})

export default axiosClient;