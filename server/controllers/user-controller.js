const User = require("../models/User")
const bcrypt = require("bcryptjs")

const getAllUsers = async(req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({users});
}

const signup = async(req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err);
    }
    if(existingUser)
    return res.status(400).json({message: "User Already Exists! Login Instead"});
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashedPassword,
        // blogs: []
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(200).json({userId:user._id});
}

const login = async(req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err);
    }
    if(!existingUser)
    return res.status(404).json({message: "User Not Found"});
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect)
    return res.status(400).json({message: "Incorrect password"});
    return res.status(200).json({message: "Login successful",userId:existingUser._id});
}
const getUserById=async(req,res,next)=>{
    const userId=req.params.id;
   try {
    const userdata=await User.findById(userId);
    res.status(200).json({data:userdata});
   } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
   }
}
module.exports = {
    getUserById,
    getAllUsers,
    signup,
    login
 }