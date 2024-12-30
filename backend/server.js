const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected to db!')
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
