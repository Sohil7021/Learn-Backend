const express = require('express')

const app = express()
const cart = [];

// Endpoint to remove a product from the cart
app.delete('/remove-from-cart/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const productIndex = cart.findIndex((p) => p.id === productId);
  
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in the cart' });
    }
  
    // Remove the product from the cart
    cart.splice(productIndex, 1);
  
    res.status(200).json({ message: 'Product removed from cart', cart });
  });
  
  // Endpoint to cancel an order
  app.delete('/cancel-order', (req, res) => {
    if (cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
  
    // You would typically undo any order-related database operations here
  
    // Clear the cart
    cart.length = 0;
  
    res.status(200).json({ message: 'Order canceled' });
  });
  



const port = 3000
app.listen(port,() => {
    console.log(`Server runnning on ${port}`)
})