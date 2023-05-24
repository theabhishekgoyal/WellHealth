const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT ||3000

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
// Using mongodb atlas cloud database
mongoose
  .connect(
    "mongodb+srv://abhishek:UyClZtu0tcMMENkE@atlascluster.thlvtaa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err));

const appformSchema = new mongoose.Schema({
  department: String,
  email:String,
  date: String,
  time: String,
  name: String,
  phone: String,
  message: String,
});
const appform = new mongoose.model("appform", appformSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/appointment", function (req, res) {
  res.sendFile(__dirname + "/public/appoinment.html");
});
app.post("/appointment", function (req, res) {
  const createappointment = async () => {
          try {
            const newdata = new appform({
              department: req.body.department,
              date: req.body.date,
              name:req.body.name,
              time:req.body.time,
              message:req.body.message,
              phone:req.body.phone,
              email:req.body.email,
            });
            const result = await newdata.save();
          } catch (err) {
            console.log(err);
          }
         };
    createappointment();
  res.sendFile(__dirname + "/public/confirmation.html");
});

app.listen(PORT, function () {
  console.log(`Server started at Port ${PORT}`);
});
