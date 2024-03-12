import expess from 'express'
const router = expess.Router();
import { createHotel, getHotels, updateHotel,getHotel, deleteHotel } from '../controllers/hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyTokens.js';


// create hotel

router.post("/",verifyAdmin, createHotel)

// update hotel

router.put("/:id",verifyAdmin, updateHotel)

// delete hotel

router.delete("/:id",verifyAdmin, deleteHotel)

// get specific hotel

router.get("/:id", getHotel)

// get all hotels
router.get("/",getHotels)


export default router;