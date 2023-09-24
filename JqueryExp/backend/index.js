import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {MONGO_DB, PORT} from './config.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_DB)
.then(()=>{
    console.log("Database connected.");
    app.listen(PORT, ()=>{
        console.log(`Listening to: ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})

app.get('/', (req, res)=>{
    // console.log("SHIT");
    try{
        let obj = {
            name: "Aman",
            age: 24,
            occupation: "Student",
            staus: {
                maritalStatus: "Single",
                graduationStatus: "Passed" 
            }
        }
        res.send(obj);
    }
    catch(error){
        res.status(501).json({message:error.message});
    }
})