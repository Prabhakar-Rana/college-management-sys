const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');

// Import Routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

const app = express();

// Connect to MongoDB
connectDB();
app.use(cors());
app.use(cors({
  origin: 'https://college-management-sys-frontend.vercel.app'
}));

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use Routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/faculty', facultyRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
