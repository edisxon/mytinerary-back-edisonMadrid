import { Router } from "express";
import { allItineraries, itinerariesById, itinerariesByCityId } from "../controllers/ityneraries/read.js";
import {createItinerary, createManyItineraries} from "../controllers/ityneraries/create.js";
import {updateLikes} from "../controllers/ityneraries/update.js"
import { deleteOneByName } from "../controllers/ityneraries/delete.js";


const router = Router();



router.get("/all", allItineraries)
router.get("/id/:id", itinerariesById)
router.get("/city/:cityId", itinerariesByCityId)
router.post("/create", createItinerary)
router.post("/createMany", createManyItineraries)
router.put("/likes", updateLikes)
router.delete("/deleteOneByName", deleteOneByName)




export default router