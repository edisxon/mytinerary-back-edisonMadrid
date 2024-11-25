import User from "../../models/User.js";

const createUser = async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = await User.create(user);
        res.status(201).json({
            response: newUser
        })
    }
    catch (error) {
        next(error);
    }
}


const createManyUsers = async (req, res, next) => {
    try {
        const users = req.body;
        const newUsers = await User.insertMany(users);
        res.status(201).json({
            response: newUsers
        })
    }
    catch (error) {
        next(error);
    }
}


export {createUser, createManyUsers}