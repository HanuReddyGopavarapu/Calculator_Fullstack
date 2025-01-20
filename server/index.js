const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB Connected'))
   .catch((err) => console.error('DB Connection Error:', err));

// Routes
app.use('/api/calculations', require('./routed/calculationroutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
