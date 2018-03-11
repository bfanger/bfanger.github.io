/* eslint-disable no-console */
const connect = require("connect");
const http = require("http");
const projects = require("./projects");
const app = connect();

const port = process.env.PORT || 8000;

app.use("/api/projects", projects);

http
  .createServer(app)
  .listen(port, () => console.log(`Listening on port ${port}`));
