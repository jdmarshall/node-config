delete require.cache[require.resolve('./config.mjs')];

module.exports = require("./config.mjs").config;
