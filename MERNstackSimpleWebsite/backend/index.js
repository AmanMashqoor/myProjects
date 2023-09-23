import app from "./server.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { RESTREVIEWS_DB_URI, PORT } from "./config.js";

console.log("Henlo from index.js");
dotenv.config();

mongoose.connect(RESTREVIEWS_DB_URI)
.then(()=>{
  console.log("App connected to database.")
  app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/api/v1/restaurants`);
  });
})
.catch((error)=>{
  console.log('Henlo');
  console.log({message: error.meesage});
})
