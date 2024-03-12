import expess from 'express'
const router = expess.Router();
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyTokens.js';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';


// create room

router.post("/:hotelid",verifyAdmin, createRoom)

// update room

router.put("/:id",verifyAdmin, updateRoom)

// delete room

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

// get specific room

router.get("/:id", getRoom)

// get all rooms
router.get("/",getRooms)


export default router;
