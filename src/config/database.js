const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
