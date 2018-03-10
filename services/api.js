import axios from "axios";
const endpoint = "http://localhost:8080/api/";

async function get(path) {
  const response = await axios.get(endpoint + path);
  return response.data;
}

export default { get };
