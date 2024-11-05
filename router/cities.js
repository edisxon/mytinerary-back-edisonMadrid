import { Router } from "express";
import { allCities, citiesByName } from "../controllers/cities/read.js";
import {createCity, createManyCities} from "../controllers/cities/create.js";
import {updatePopulation} from "../controllers/cities/update.js";
import { deleteOneByName } from "../controllers/cities/delete.js";

const router = Router();

router.get("/all", allCities)
router.get("/id/:id", citiesByName)
router.post("/create", createCity)
router.post("/createMany", createManyCities)
router.put("/population", updatePopulation)
router.delete("/deleteOneByName", deleteOneByName)









export default router