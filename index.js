const core = require('@actions/core');
const github = require('@actions/github');
const http = require("@actions/http-client");
const PORT = 3000;
const ENDPOINT = "add-issue";
const SERVER = `http://159.89.228.48:${PORT}/${ENDPOINT}`;

const payload = JSON.stringify(github.context.payload);

const httpClient = new http.HttpClient();

httpClient.postJson(SERVER, payload).then((response) => {
    console.log(response.statusCode);
});