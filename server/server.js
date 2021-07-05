const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Item = require("./model/item");
const cors = require("cors");
require("dotenv/config");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/itemlist", async (req, res) => {
  const getItem = await Item.find();
  try {
    res.json(getItem);
  } catch (err) {
    res.json({ message: err });
  }
});

app.get("/itemlist/:name", async (req, res) => {
  try {
    const findItem = await Item.findOne({ name: req.params.name });
    res.send(findItem);
  } catch (err) {
    res.json({ message: err });
  }
});

app.post("/itemlist", upload.single("image"), async (req, res) => {
  const newItem = new Item({
    id: req.body.id,
    image: req.file.path,
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

mongoose.connect(
  process.env.DB_connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(5000);
