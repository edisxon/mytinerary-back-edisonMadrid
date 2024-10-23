
import City from "../../models/City.js";

const allCities = async (req, res, next) => {
    try {
        const cities = await City.find();
        res.status(200).json({
            response: cities
        })
    } catch (error) {
        next(error);
    }
};


const citiesByName = async (req, res, next) => {
    try {
        const name = req.params.name
        const cities = await City.find({ name: name });
        res.status(200).json({
            response: cities
        })
    } catch (error) {
        next(error);
    }
}


export { allCities, citiesByName }