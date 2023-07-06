import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http"; 
import dotenv from "dotenv";
import router from './routes'

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json())

const server = http.createServer(app)
server.listen(5500, ()=>{
    console.log('Server is running on http://localhost:5500')
})

const mongoUrl = process.env.Mongo_URL 

mongoose.connect(mongoUrl)
.then(()=> {console.log('MongoDB connected')})
.catch((err) => {console.log(err)})

app.use('/', router)