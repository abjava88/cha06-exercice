require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/ToDoRoute");  

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
// Enable CORS on express js  
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));