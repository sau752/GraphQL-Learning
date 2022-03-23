const { v4: uuid } = require("uuid");

exports.Mutation = {
    addCategory: (parent, args, { db }) => {
        const { input } = args;

        const newCategory = {
            id: uuid(),
            name: input.name
        }

        db.categories.push(newCategory);

        return newCategory;
    },
    addProduct: (parent, args, { db }) => {
        const { input } = args;

        const newProduct = {
            id: uuid(),
            name: input.name
        }

        db.products.push(newProduct);

        return newProduct;
    },
    deleteCategory: (parent, { id}, { db }) => {
        db.categories = db.categories.filter(c => c.id !== id);
        return true;
    },
    updateProduct: (parent, { id, input  }, { db }) => {
        const index = db.products.findIndex(p => p.id === id);
        db.products[index] = {
            ...db.products[index],
            ...input
        };
        
        return db.products[index];
    }
}