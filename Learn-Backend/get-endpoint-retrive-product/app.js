const express = require('express');

const app = express()
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hello')
})

// Middleware to parse JSON request
app.use(express.json());

// Sample product and user data

const product = [
    {id:1, name: 'Product 1'},
    {id:2, name: 'Product 2'}
];

const users = [
    {id:1, name:'User 1'},
    {id:2, name:'User 2'}
]

// Define get endpoint to retrive product listing

app.get('/api/product',(req,res) => {
    res.json(product);
})

// Define get endpoint to retrive user information
app.get('/api/users/:userId',(req,res) => {
    const userId = parseInt(req.params.userId);

   
    const user = users.find((user) => user.id === userId);
    
    if(!user) {
        return res.status(404).json({error:'User not found'})
    }

    res.json(user);
})








app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})