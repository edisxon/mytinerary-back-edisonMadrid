import City from "../../models/City.js";

const deleteOneByName = async (req, res, next) => {
    try {
        
        const city = await City.findOne({name: req.body.name});
        if (!city) {
            return res.status(404).json({
                message: "City not found. Please try another name."
            });
        }

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

export {deleteOneByName}