import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3100;
app.use(express.json());
app.use(cors());

const shopSchema = new Schema({
  image: String,
  title: String, // String is shorthand for {type: String}
  price: Number,
  oldPrice: Number,
  sale:String,
  discount:Number
});

const ShopModel = mongoose.model("Shop", shopSchema);

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await ShopModel.findById(id);
    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/", async (req, res) => {
  try {
    const shop = await ShopModel.find({});
    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { image, title, price ,oldPrice,sale,discount} = req.body;
    const NewShop = new ShopModel({ image, title, price ,oldPrice,sale,discount});
    await NewShop.save();
    res.send("added");
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { image, title, price ,oldPrice,sale,discount} = req.body;
    const { id } = req.params;
    const shop = await ShopModel.findByIdAndUpdate(id, { image, title, price ,oldPrice,sale,discount});
    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await ShopModel.findByIdAndDelete(id);
    res.send(shop);
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect("mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/")
  .then(() => console.log("Connected!"));
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
