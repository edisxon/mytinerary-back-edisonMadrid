import User from "../../models/User.js";

const signIn = async (req, res, next) => {
    try{
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
        )
        return  res.status(200).json({
            success: true,
            message: "user signed in",
            user: {
                email: req.user.email,
                name: req.user.name
            },
            token: req.token
        })
    }catch(error) {
        next(error)
    }
}

export default signIn