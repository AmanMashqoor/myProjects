import express from "express";

const router = express.Router();

router.route("/").get((req, res)=>{
  res.send("Hello World.");
})

// router.get("/hello",(req, res)=>{
//   res.send("What the hell.");
// })

export default router;