import expess from 'express'
const router = expess.Router();

router.get("/",(req,res)=>{
    res.send("this is rooms endpoint")
})

export default router;