const { products, categories } = require("../db");

exports.Query = {
  fruits: () => {
    return "mango";
  },
  numberOfAnimals: () => {
    return 5;
  },
  price: () => {
    return 7.99;
  },
  isValid: () => {
    return false;
  },
  animals: () => {
    return ["cat", "dog"];
  },
  products: (parent, { filter }, context) => {
    let filteredProducts = products;
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      } else {
        filteredProducts = filteredProducts.filter((product) => {
            return !product.onSale;
          });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    const { id } = args;
    return products.find((p) => p.id === id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((c) => c.id === id);
  },
};
