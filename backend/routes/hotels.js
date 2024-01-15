import expess from 'express'
const router = expess.Router();
import Hotel from '../models/Hotel.js';

// create hotel

router.post("/", async(req,res)=>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

export default router;