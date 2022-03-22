const { ApolloServer } = require("apollo-server");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
      Query,
      Category
  }
});

server.listen().then(({ url }) => {
  console.log("World!" + url);
});