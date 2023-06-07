import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import dotenv from "dotenv";

const app= express()

const PORT: string | number = process.env.PORT || 4000


app.use(cors());
app.use(express.json());
app.use(todoRoutes);
dotenv.config()



const uri:string=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ie14wco.mongodb.net/${process.env.MONGO_DB}`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("findOneAndUpdate", false)

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })