import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http"; 
import router from './routes'

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json())

const server = http.createServer(app)
server.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000')
})

const mongoUrl = 'mongodb+srv://AwesomeBeto:xSKoJMk0RSXPgm4b@cluster0.fhejqp8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
.then(()=> {console.log('MongoDB connected')})
.catch((err) => {console.log(err)})

app.use('/', router)