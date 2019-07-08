let files = [
    "**/*.js",
    "!**/node_modules/**",
    "**/bluebird/**"
];

require('njstrace').inject({ files, logger: true });

const Promise = require('bluebird');