import  express from "express";
import { Students_list } from "./rout/students.js";
import dotenv from "dotenv";

dotenv.config()

let port=process.env.PORT;

let app=express();

app.use(express.json())

app.use("/students",Students_list)


app.listen(port,()=>console.log(`Server running in localhost:${port}`))