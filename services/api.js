let endpoint = "/api/";

let fetch;
if (process.server) {
  fetch = require("node-fetch");
  endpoint = "http://localhost:8080/api/";
} else {
  fetch = window.fetch;
}
async function get(path) {
  const response = await fetch(endpoint + path + ".json");
  return response.json();
}

export default { get };
