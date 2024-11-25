import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    let passwordBody = req.body.password;
    let passwordDB = req.user.password;

    let compare = await bcryptjs.compareSync(
        passwordBody,
        passwordDB
    )
    if (compare){
        delete req.body.password
        return next();
    }
    return res.status(400).json({
        success: false,
        message: "there is something wrong with your info"
    })
}