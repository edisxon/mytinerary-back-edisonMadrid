import { Router } from "express";
import { allCities, citiesByName } from "../controllers/cities/read.js";
import {createCity, createManyCities} from "../controllers/cities/create.js";


const router = Router();

router.get("/all", allCities)
router.get("/id/:id", citiesByName)
router.post("/create", createCity)
router.post("/createMany", createManyCities)







export default router