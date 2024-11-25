import User from "../models/User.js";

const userExists = async (req, res, next) => {
    try{
        let user = await User.findOne({email: req.body.email})
        if (user){
            return res.status(400).json({
                succes: false,
                message: "user already exits"
            })
        }
        next()
    }catch(error) {
      return next(error)

    }
}

export default userExists

