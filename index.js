const express = require('express');
const db = require('./db/config')
const route = require('./controllers/route');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000
require('dotenv').config()
const fs = require('fs');
const path = require('path');

//Setup Express App
const app = express();
// Middleware
app.use(bodyParser.json());
// Set up CORS  
app.use(cors())
//API Routes
app.use('/api', route);


app.get('/', async (req, res) => {
    res.send('Welcome to my world...')
});

// Get port from environment and store in Express.

const server = app.listen(port, () => {
    const protocol = (process.env.HTTPS === true || process.env.NODE_ENV === 'production') ? 'https' : 'http';
    const { address, port } = server.address();
    const host = address === '::' ? 'https://66a77f04cdb44c2baa5d2baf--enchanting-choux-b6a6d4.netlify.app/auth/sign-in' : "";
    console.log(`Server listening at ${protocol}://${host}:${port}/`);
});


// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL || 'mongodb+srv://swati:anch@cluster0.8i9fpcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE = process.env.DB || 'fox_crm'

db(DATABASE_URL, DATABASE);
