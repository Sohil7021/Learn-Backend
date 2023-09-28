const express = require('express');
const bodyParser = require('body-parser'); // For parsing JSON request bodies

const app = express();
app.use(bodyParser.json());

// Sample product data (you would typically use a database)
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // Add more products here
];

// Sample cart data (you can use a database for this as well)
const cart = [];

// Endpoint to add a product to the cart
app.post('/add-to-cart/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Add the product to the cart
  cart.push(product);

  res.status(200).json({ message: 'Product added to cart', cart });
});

// Endpoint to process the order
app.post('/process-order', (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }

  // Calculate the total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  // You would typically do more here, e.g., create an order in the database

  // Clear the cart
  cart.length = 0;

  res.status(200).json({ message: 'Order processed', totalPrice });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
