import axios from "axios";
import { loadState } from "./storage";
function getAccessToken() {
  const userData = loadState("token");
  return userData ? userData.accessToken : null;
}
const request = axios.create({ baseURL: "http://localhost:3000" });
request.interceptors.request.use((config) => {
  const user = getAccessToken();

  config.headers.Authorization = `Bearer ${user}`;

  return config;
});
export { request };
