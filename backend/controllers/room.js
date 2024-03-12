import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

// create room

export const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push:{rooms:savedRoom._id},
            });
            
        } catch (err) {
            next(err)
            
        }
        res.status(200).json(savedRoom);
        
    } catch (err) {
        next(err)
        
    }
}


// update room

export const updateRoom = async(req,res,next)=>{
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updateRoom)
        
    } catch (error) {
        // res.status(500).json(error)
        next(err)
        
    }
}

// delete hotel

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };

// get hotel by id(specific hotel)

export const getRoom = async(req,res,next)=>{
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
        
    } catch (error) {
        // res.status(500).json(error)
        next()
        
    }
}


// get all hotels

export const getRooms = async(req,res,next)=>{
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
        
    } catch (error) {
        // res.status(500).json(error)
        next(err)
        
    }
}