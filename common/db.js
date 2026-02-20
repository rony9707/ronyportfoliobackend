const mongoose = require("mongoose");
require('dotenv').config()


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    console.log("Connecting to MongoDB...");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.DBConnectionString, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log("MongoDB Connected");
  return cached.conn;
}

module.exports = connectDB;