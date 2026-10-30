const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Router
app.use('/api', apiRoutes);

// Root Status
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    app: 'FASHION CUT Barber Shop REST API',
    time: new Date().toISOString()
  });
});

// Try connecting to MongoDB if configured
if (process.env.MONGODB_URI) {
  try {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('⚡ Connected to MongoDB database successfully.'))
      .catch((err) => console.log('ℹ️ MongoDB connection not available. Using high-performance in-memory data store.'));
  } catch (e) {
    console.log('ℹ️ Running in in-memory mode.');
  }
}

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`💈 FASHION CUT Backend Server running on port ${PORT}`);
  console.log(`💈 API Endpoint: http://localhost:${PORT}/api`);
  console.log(`===================================================`);
});
