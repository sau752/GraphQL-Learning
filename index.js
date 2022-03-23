const { ApolloServer } = require("apollo-server");
const { db } = require("./db");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
      Query,
      Category,
      Mutation
  },
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log("World!" + url);
});