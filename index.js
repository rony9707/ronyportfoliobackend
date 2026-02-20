const express = require('express')
const mongoose = require('mongoose')
const connectDB = require("./common/db");

const app = express();
const cors = require('cors')
require('dotenv').config()


//Define Routes here
const ronyProfileDataRoute = require('./routes/profileRoutes')


//Use dot env
PORT = process.env.PORT
connectionString = process.env.DBConnectionString
frontEndConnectionString = process.env.frontEndConnectionString

console.log(frontEndConnectionString)

app.get('/', (req, res) => {
  res.send(`Server is running... DateTime is: ${new Date()}`);
})

// Start using Node------------------------------------------------------------------------

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman, server-to-server

    if (origin === frontEndConnectionString) {
      console.log('CORS origin allowed:', origin);
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Root Route
app.get("/", async (req, res) => {
  await connectDB();
  res.send(`Server is running... DateTime is: ${new Date()}`);
});

// API Routes
app.use("/agnibha", async (req, res, next) => {
  await connectDB();   // Ensure DB connected
  next();
}, ronyProfileDataRoute);


//Connection Code
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });