const GMR = require("graphql-merge-resolvers");

const { userResolver } = require("./user");
const { articleResolver } = require("./article");

const resolver = GMR.merge([userResolver, articleResolver]);

module.exports = resolver;
