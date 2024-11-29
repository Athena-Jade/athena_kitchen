import express from "express";
import AdminModel from "../models/AdminModel.js";

import { loginAdmin, registerAdmin, updateAdmin,  refetchAdmin } from "../controllers/adminController.js";

const authrouter = express.Router();


authrouter.post("/login", loginAdmin)
authrouter.post("/register", registerAdmin)
authrouter.put("/:id", updateAdmin)

authrouter.get("/refetch", refetchAdmin)

export default authrouter
