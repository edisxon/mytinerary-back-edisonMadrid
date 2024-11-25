import { Router } from "express";
import signIn from "../controllers/auth/signin.js"
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signout.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import  jwt  from "jsonwebtoken";



const router = Router();

router.post("/signin", accountNotExists, isValidPassword, generateToken , signIn)
router.post ("/signout", passport.authenticate("jwt", {session: false}), signOut)

router.get(
    "/google",
    passport.authenticate("google", {session: false, scope: ["profile", "email"]})

)

router.get(
    "/google/callback",
    passportGoogle.authenticate("google", {session: false, failureRedirect: "/signin"}),
    (req, res) => {
        const user = req.user;

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name,
            },
            process.env.SECRET,
            {expiresIn: 60*60*24}
        )
        res.json({
            message: "auth successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
        })
    }
)



export default router