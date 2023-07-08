import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEB_URL}`,
});

export default API;
