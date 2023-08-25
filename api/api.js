import axios from "axios";

const API = axios.create({
  baseURL: `${process.NEXT_PUBLIC_WEB_URL_DEV}`,
});

export default API;
