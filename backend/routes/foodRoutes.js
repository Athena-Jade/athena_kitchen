
import express from "express"
import { addFood, listFood, updateFood, deleteFood } from "../controllers/foodController.js"
import multer from "multer"
//import adminAuth from "../config/middleware/adminAuth.js"


const foodRouter = express.Router()

//images storage engine
const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req, file, cb)=>{
    return cb(null, `${Date.now()} ${file.originalname}`)
  }
})

const upload = multer({storage:storage})



foodRouter.post("/add", upload.single("image"), addFood) //ok 
foodRouter.get("/list", listFood)//ok
foodRouter.put("/:id",  updateFood) //ok
// foodRouter.delete("/:id", deleteFood) 
foodRouter.post("/delete", deleteFood) 



export default foodRouter