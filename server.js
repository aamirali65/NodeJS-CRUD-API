import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/user.js";

const app = express();
const Port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.get('/',(req,res)=>{res.send('hello world')});

mongoose.connect("mongodb://127.0.0.1:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });


app.listen(Port, () => {
  console.log(`Your server is running on http://localhost:${Port}`);
});
