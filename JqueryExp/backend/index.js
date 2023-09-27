import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {MONGO_DB, PORT} from './config.js';
import bodyParser from 'body-parser';
import fs from "fs";
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import sponsorRoute from './routes/sponsorRoute.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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

// app.get('/', (req, res)=>{
//     // fs.readFile('../frontend/index.html')
//     res.sendFile(path.join(__dirname, '../frontend/index.html'));
// })

app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
    // return response.status(234).send('Welcome to SponsorSHALA.')
})

app.use('/', sponsorRoute);