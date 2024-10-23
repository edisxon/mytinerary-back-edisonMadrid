
import City from "../../models/City.js";

const allCities = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `^${name}`, $options: "i"}
        }

        const cities = await City.find(query);
        res.status(200).json({
            response: cities
        })
    } catch (error) {
        next(error);
    }
};


const citiesByName = async (req, res, next) => {
    try {
        const _id = req.params.id
        const cities = await City.find({ _id: _id });
        res.status(200).json({
            response: cities
        })
    } catch (error) {
        next(error);
    }
}


export { allCities, citiesByName }