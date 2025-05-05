const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');
// const authRoutes = require('./routes/authRoutes');
// const auth = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Public routes (remove auth middleware for now)
app.use('/api/tasks', taskRoutes);
// app.use('/api/auth', authRoutes); // will use later

// Health check
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ DB connection error:', err));

