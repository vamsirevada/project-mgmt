const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log('MongoDB Connected...'.cyan.bold);
};

module.exports = connectDB;
