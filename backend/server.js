// LANCER BACKEND npm run server
import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"
import {connectDB}  from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import authrouter from "./routes/auth.Routes.js"



// 1) app config
const app = express()



//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//db connexion
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/auth", authrouter)


//tester routes
app.get("/", (req,res)=>{
    res.send("api is working")
})

//lancer express server
app.listen(process.env.PORT, ()=>{       
    console.log(`server started on http://localhost: ${process.env.PORT}`);
    
})


      
