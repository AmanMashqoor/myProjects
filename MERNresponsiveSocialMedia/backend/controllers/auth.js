import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const register = async(req, res) =>{
  try{
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      firends,
      location,
      occupation
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      firends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random()*10000),
      impressions: Math.floor(Math.random()*10000)
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err){
      res.status(500).send({error: err.message});
  }
};

/* FUNCTION FOR LOGGING IN*/
export const login = async (req, res) => {
  try{
    const {email, password} = req.body; //destructuring email and password from req.body

    const user = await User.findOne({email: email}); //checking if user exists in database using their input email

    if(!user)
    {
      return res.status(400).json({msg: "User does not exist."});
    } //if user does not exist show error msg

    const isMatch = await bcrypt.compare(password, user.password); //if email exists in db, match the input password with hash password corresponding to the stored email in database
    if(!isMatch){
      return res.status(400).json({msg: "Invalid password."});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({token, user});
    
  } catch(error){
    res.status(500).json({error: err.message});
  }
}