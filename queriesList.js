/* ----------------------- Queries ----------------------

query ExampleQuery {
  fruits
  numberOfAnimals
  isValid
  price
  animals
}

query ExampleQuery {
  products {
    name
  }
}

query ExampleQuery {
  product(id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b") {
    name
    price
  }
}

query ExampleQuery($categoryId: String!) {
  category(id: $categoryId) {
    id
    name
  }
}

----------------------- Queries ------------------------- */