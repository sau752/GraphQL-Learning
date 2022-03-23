exports.Category = {
    products:  (parent, args, { db }) => {
        const categoryId = parent.id;
        return db.products.filter(product => product.categoryId === categoryId);
    }
  }