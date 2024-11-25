import { Router } from "express";
import citiesRouter from "./cities.js"
import itinerariesRouter from "./itineraries.js"
import userRouter from "./user.js"
import authRouter from "./auth.js"




const router = Router();

router.use("/cities", citiesRouter)
router.use("/itineraries", itinerariesRouter)
router.use("/users", userRouter)
router.use("/auth", authRouter)




export default router