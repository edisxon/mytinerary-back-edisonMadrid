import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    let password = req.body.password;
    let hashPassword = await bcryptjs.hashSync(
        password,
        10
    )
    req.body.password = hashPassword;
    return next();
}