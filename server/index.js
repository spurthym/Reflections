import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from cors;


const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const CONNECTION_URL="mongodb+srv://spurthy:reflections@cluster0.xrqcclw.mongodb.net/";

const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server Listening on Port${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.setDriver('useFindAndModify',false);