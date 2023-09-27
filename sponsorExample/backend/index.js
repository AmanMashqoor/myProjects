import express from "express";
import {PORT, mongoDBURL} from "./config.js"; 
import mongoose from "mongoose";
// import {Book} from "./models/bookModel.js" 
// import booksRoute from "./routes/booksRoute.js";
import { Sponsor } from "./models/sponsorsModel.js";
import sponsorRoute from './routes/sponsorRoute.js';
import cors from "cors";

const app = express();

//Middleware for pasing request body
app.use(express.json());

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT, () =>{
        console.log(`App is listening to port: ${PORT}`);
});
})
.catch((error)=>{
    console.log(error);
});

//Middleware for handling CORS Policy
//Option 1: Allow all origins with Default of cors(*) 
app.use(cors());

//Option 2: Allow custom origins
// app.use(
//     cors({
//         origins:'http://localhost/5555',
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// ); 

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial')
})

// app.use('/books', booksRoute);
app.use('/sponsor', sponsorRoute);
