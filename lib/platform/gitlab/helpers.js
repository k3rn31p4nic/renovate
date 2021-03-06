const get = require('./gl-got-wrapper');

module.exports = {
  createFile,
  updateFile,
};

async function createFile(
  repository,
  branchName,
  filePath,
  fileContents,
  message
) {
  const opts = {};
  const url = `projects/${repository}/repository/files/${filePath.replace(
    /\//g,
    '%2F'
  )}`;
  opts.body = {
    branch: branchName,
    commit_message: message,
    encoding: 'base64',
    content: Buffer.from(fileContents).toString('base64'),
  };
  await get.post(url, opts);
}

async function updateFile(
  repository,
  branchName,
  filePath,
  fileContents,
  message
) {
  const opts = {};
  const url = `projects/${repository}/repository/files/${filePath.replace(
    /\//g,
    '%2F'
  )}`;
  opts.body = {
    branch: branchName,
    commit_message: message,
    encoding: 'base64',
    content: Buffer.from(fileContents).toString('base64'),
  };

  await get.put(url, opts);
}
