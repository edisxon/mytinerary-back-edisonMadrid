import User from "../../models/User.js";


const updatePhoto = async (req, res, next) => {
    try {
        let user = req.body
        
        const userExists = await User.findById(user._id);
        if (!userExists) {
            return res.status(404).json({
                message: "user not found. Please try another ID."
            });
        }
        let upd = await User.updateOne(
            {_id: user._id},
            {photo: user.photo}
        )

        if (upd){
            return res.status(200).json({
                response: upd
            })
        }


    }catch (error){

        next(error)

    }
}


export { updatePhoto }