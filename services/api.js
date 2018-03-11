import axios from "axios";

let endpoint = "/api/";
if (process.server) {
  endpoint = "http://localhost:8080/api/";
}

async function get(path) {
  const response = await axios.get(endpoint + path + ".json");
  return response.data;
}

export default { get };
