const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const categoriesRoute = require("./routes/category")

const multer = require("multer");
const path = require("path");

dotenv.config()

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))
 app.use(cors())
 
mongoose.connect(process.env.MONGO_URL, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
   .then(console.log("Connect to mongodb"))
   .catch((err) => console.log(err))

   const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images")
    }, 
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
   }) 

   const upload = multer({storage:storage})

   app.use("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
        
   })

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
app.use("/api/category", categoriesRoute)



app.listen("5000", () => {
    console.log("Backend running!")
} )