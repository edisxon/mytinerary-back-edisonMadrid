import User from "../../models/User.js";

const signOut = async (req, res, next) => {
    try{
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: false},
        )
        return  res.status(200).json({
            success: true,
            message: "disconnected",
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

export default signOut