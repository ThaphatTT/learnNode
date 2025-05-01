require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/database.js");
connectDB();

app.use(express.json());

const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Backend with structure!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
