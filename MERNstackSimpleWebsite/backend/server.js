import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json());

console.log("Henlo from server.js");

// app.get('/', (req, res)=>{
//   console.log("HOMEPAGE.")
//   res.send(`<button><a href="http://localhost:${PORT}/api/v1/restaurants">PRESS</a></button>`);
// })

app.use("/api/v1/restaurants", restaurants); //route for api 'restaurants'

app.use("*", (req, res) =>{
  res.status(404).json({error: "Page not found."});
}); //route for a path that doesn't exists 

export default app;