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
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
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
  product: (parent, args, { db }) => {
    const { id } = args;
    return db.products.find((p) => p.id === id);
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, args, { db }) => {
    const { id } = args;
    return db.categories.find((c) => c.id === id);
  },
};
