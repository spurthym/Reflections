import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postsRoutes from "./routes/posts.js"
const app = express();

app.use("/posts",postsRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://spurthy:reflections@cluster0.xrqcclw.mongodb.net/";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Set useFindAndModify option to false directly in mongoose.connect()
    // to avoid the error and ensure compatibility with the latest MongoDB driver.
    useFindAndModify: false 
  })
  .then(() => app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`)))
  .catch((error) => console.log(error.message));
