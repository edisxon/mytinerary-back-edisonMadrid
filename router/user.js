import { Router } from "express";
import { allUsers } from "../controllers/users/read.js";
import { createUser, createManyUsers } from "../controllers/users/create.js";
import { deleteOneByName } from "../controllers/users/delete.js";
import { updatePhoto } from "../controllers/users/update.js";
import userExists from "../middlewares/userExists.js";
import validator from "../middlewares/validator.js"
import createSchema from "../schemas/user/create.js"
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";


const router = Router();



router.get("/all", passport.authenticate("jwt", {session: false}) , allUsers)
router.post("/create", validator(createSchema), userExists, createHash, createUser)
router.post("/createMany", createManyUsers)
router.put("/updatePhoto", updatePhoto)
router.delete("/deleteByName", deleteOneByName)



export default router;