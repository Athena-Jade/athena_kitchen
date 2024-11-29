import adminModel from "../models/AdminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.json({ success: false, message: "admin doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invalid credentials" });
    }

    const token = createToken(admin._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

// créer le token pour l'admin. Dès que l'admin s'inscrit (register),
// il reçoit un token. grâce à son token on peut l'authentifier securité
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};



//route for admin login
const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await adminModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "admin already exists" });
    }

    //validitin email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password must have 8 characters",
      });
    }
    //creer salt
    const salt = await bcrypt.genSalt(10);
    // crypter mot passe
    const hashedPassword = await bcrypt.hash(password, salt);

    //créer le nouveau admin
    const newAdmin = new adminModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    //sauvegarder newAdmin dans bdd
    const admin = await newAdmin.save();

    //Ajouter le token
    const token = createToken(admin._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error.message" });
  }
};


//update admin
const updateAdmin = async (req, res) => {
  try {
    const admin = await adminModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json({success:true, message:"admin updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"error"})
    
  }
};





//après login de l'admin, dès que je rafraichit la page, l'admin est déconnecté: il faut trouver une solution avec refetch afin que l'admin soit login
// R E F E T C H USER
const refetchAdmin = async(req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(data);
  });
};








export { loginAdmin, registerAdmin, updateAdmin,  refetchAdmin };
