var hoaxer = require('hoaxer');

var database = { products: [] };

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: hoaxer.commerce.productName(),
    description: hoaxer.lorem.sentences(),
    price: hoaxer.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: hoaxer.random.number()
  });
}

console.log('database');