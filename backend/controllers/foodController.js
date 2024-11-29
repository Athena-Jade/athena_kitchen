import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    nombre: req.body.nombre,
      cuisson: req.body.cuisson,   
     preparation: req.body.preparation,

    ingredient1: req.body.ingredient1,
    ingredient2: req.body.ingredient2,
    ingredient3: req.body.ingredient3,
    ingredient4: req.body.ingredient4,
    ingredient5: req.body.ingredient5,
    ingredient6: req.body.ingredient6,
    ingredient7: req.body.ingredient7,

    description1: req.body.description1,
    description2: req.body.description2,
    description3: req.body.description3,
    description4: req.body.description4,
    description5: req.body.description5,
    description6: req.body.description6,
    description7: req.body.description7,

    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

// All food list Afficher la liste food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//update food item
const updateFood = async (req, res) => {
  try {
    const updatedfood = await foodModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json({ success: true, data: "food updated" });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};

//delete 1 food
const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "food has been deleted" });
  } catch (error) {
    res.json({ success: false, message: "error" });
  }
};

export { addFood, listFood, updateFood, deleteFood };
