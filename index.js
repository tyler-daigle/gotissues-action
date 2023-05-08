const core = require('@actions/core');
const github = require('@actions/github');
const http = require("@actions/http-client");
const PORT = 3000;
const ENDPOINT = "add-issue";
const SERVER = `http://159.89.228.48:${PORT}/${ENDPOINT}`;

core.debug.enable = true;

const data = {
  name: "Spudge", 
  issue: "I'm having a problem with my computer.",
  id: "as245asdf1"
};

// const payload = JSON.stringify(data);

core.debug(JSON.stringify(data));
const httpClient = new http.HttpClient();

httpClient.postJson(SERVER, data).then((response) => {
    console.log(response.statusCode);
}).catch((error) => {
  console.log(error.message);
});