import User from "../../models/User.js";

const deleteOneByName = async (req, res, next) => {
    try {

        const user = await User.findOne({name: req.body.name});
        if (!user) {
            return res.status(404).json({
                message: "user not found. Please try another name"
            });
        }

        let deleteUser = await User.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error);
    }
}

export {deleteOneByName}