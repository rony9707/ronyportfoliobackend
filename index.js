const express = require('express')
const mongoose = require('mongoose')

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
  res.send(`Server is running... DateTime is:`);
})

// Start using Node------------------------------------------------------------------------

app.use(cors({
  credentials: true,
  origin:[frontEndConnectionString]
}))

app.use(express.json())

app.use("/agnibha",ronyProfileDataRoute)


//Connection Code
mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected to database");
   
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  }); 