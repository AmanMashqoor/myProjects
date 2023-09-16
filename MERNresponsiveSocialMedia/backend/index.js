// Import necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import multer from 'multer';
import helmet from "helmet";
import morgan from 'morgan';
import path from "path";
import { fileURLToPath } from 'url';


/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// Create an Express application
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb, extended: true" }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "public/assets");
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  }
});

const upload = multer( {storage} );

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, Express with ESM!');
});


/* MONGOOSE SETUP*/
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //tlsAllowInvalidCertificates: false, // Disable certificate validation
}).then(()=>{
  app.listen(PORT, () => console.log(`Connected to database. \nServer Port: ${PORT}`));
}).catch((error)=>{
  console.log(`${error} did not connect.`)
})