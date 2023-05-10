const core = require('@actions/core');
const github = require('@actions/github');
// const http = require("@actions/http-client");

const repoName = core.getInput('repo_name');
const repoOwner = core.getInput('repo_owner');
const issueCreator = core.getInput('issue_creator');
const issue = core.getInput('issue');


core.debug.enable = true;

core.debug(`repoName: ${repoName}`);
core.debug(`repoOwner: ${repoOwner}`);
core.debug(`issueCreator: ${issueCreator}`);
core.debug(`issue: ${issue.title}`);