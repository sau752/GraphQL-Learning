const { gql } = require("apollo-server");

exports.typeDefs = gql`
type Query {
  fruits: String
  numberOfAnimals: Int!
  price: Float
  isValid: Boolean
  animals: [String!]!
  products(filter: ProductsFilterInput): [Product!]!
  product(id: String!): Product
  categories: [Category!]!
  category(id: String!): Category
}

type Product {
  id: ID!
  name: String!
  description: String
  quantity: Int
  price: Float
  onSale: Boolean
}

type Category {
    id: ID!
    name: String!
    products: [Product!]!
}

input ProductsFilterInput {
    onSale: Boolean
}
`;