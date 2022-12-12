/**
 * This is the main Node.js server script for your project
 * 
 */

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const express = require('express')
const app = express()

// Serving static files
app.use(express.static('public/'));

// Define your other routes here
app.get('/hackenshaw', (req, res) => {
    res.send('Drink some water.')
  })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
 
