import City from "../../models/City.js";

const deleteOneByName = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteCity
        })
    } catch (error) {
        next(error);
    }
}

export { deleteOneByName }