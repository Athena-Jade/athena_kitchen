import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nombre: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  preparation: {
    type: Number,
    required: true,
  },
  cuisson: {
    type: Number,
    required: true,
  },
 
  ingredient1: {
    type: Array,
    required: true,
  },

  ingredient2: {
    type: Array,
    required: true,
  },
  ingredient3: {
    type: Array,
    required: true,
  },
  ingredient4: {
    type: Array,
    required: true,
  },
  ingredient5: {
    type: Array,
    required: false,
  },
  ingredient6: {
    type: Array,
    required: false,
  },
  ingredient7: {
    type: Array,
    required: false,
  },

  description1: {
    type: Array,
    required: true,
  },
  description2: {
    type: Array,
    required: true,
  },
  description3: {
    type: Array,
    required: true,
  },
  description4: {
    type: Array,
    required: false,
  },
  description5: {
    type: Array,
    required: false,
  },
  description6: {
    type: Array,
    required: false,
  },
  description7: {
    type: Array,
    required: false,
  },

  category: {
    type: String,
    required: true,
  },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
