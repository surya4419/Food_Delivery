import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
//import bcrypt from "bcrypt"
import argon2 from "argon2"
import validator from "validator"


//login user
const loginUser = async (req,res) => {
      const {email,password} = req.body;
      try {
        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({success:false,message:"User Doesn't exist" })
        }

        const isMatch = await argon2.verify(user.password,password);

        if(!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
      } catch (error) {
            console.log(Error);
            res.json({success:false,message:"Error"})
      }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try{
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exits"})
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong Password"})
        }

        //hashing user password 
        const hashedpassword = await argon2.hash(password)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

// Middleware to verify token and extract user info
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ success: false, message: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(400).json({ success: false, message: "Invalid token." });
    }
};

// Get user details
const userDetails = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId).select("-password"); // Exclude password
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching user details" });
    }
};


export { loginUser ,registerUser, authenticateToken,userDetails}