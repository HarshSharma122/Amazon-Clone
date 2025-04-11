const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

try {
  const connect1 = mongoose.connect(
    "mongodb+srv://Harshsharma:VYn0dXG9XmBWnpcV@cluster3.1i89vhj.mongodb.net"
  );
} catch (error) {
  console.error(error.message);
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const genricmodel = mongoose.model("products",new mongoose.Schema({}, { strict: false }),"products");
app.get("/productData", async (req, res) => {
  try {
    const data = await genricmodel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch data" });
  }
});
app.listen(3000, () => {
  console.log("Your server is working");
});
