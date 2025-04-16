const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require('./models/UserData.model');
const addressModel = require('./models/addressData.model')
try {
  const connect1 = mongoose.connect(
    "mongodb+srv://Harshsharma:VYn0dXG9XmBWnpcV@cluster3.1i89vhj.mongodb.net"
  );
} catch (error) {
  console.error(error);
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

app.post('/create', (req, res)=>
{
  const{name, email, password, number} = req.body;
  const users = new userModel({
    name,
    email,
    password,
    number
  })
  users.save();
})


app.post('/addressData', (req, res)=>
{
  const {firstName, lastName, addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    phone} = req.body;

  const userAddress = new  addressModel({
    firstName, lastName, addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
    phone
  })
  userAddress.save();
})




const ans = mongoose.model("user", new mongoose.Schema({}, {strict:false}), "users");

app.get('/userData', async (req, res) =>
{
  const a = await ans.find();
  res.json(a);
})
app.listen(3000, () => {
  console.log("Your server is working");
});