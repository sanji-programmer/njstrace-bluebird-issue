let files = [
    "**/*.js",
    "!**/node_modules/**",
    "**/bluebird/**"
];

require('njstrace').inject({ files });

const Promise = require('bluebird');