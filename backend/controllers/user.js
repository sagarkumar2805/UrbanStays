// import User from '../models/User.js';
import User from '../models/User.js'
import { createError } from '../utils/error.js';



// update User

export const updateUser = async(req,res)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updateUser)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

// delete User

export const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

// get User by id(specific User)

export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}


// get all Users

export const getUsers = async(req,res,next)=>{
    try {
        const users = await User.findById("kwjwekj");
        res.status(200).json(users);
        
    } catch (error) {
        // res.status(500).json(error)
        next(err)
        
    }
}