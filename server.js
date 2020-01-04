const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

// import the schema and resolvers
const typeDefs = importSchema("./src/schemas/schema.graphql");
const resolvers = require("./src/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server running at port ${url}`);
});
