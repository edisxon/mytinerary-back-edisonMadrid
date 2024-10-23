import City from "../../models/City.js";



const createCity = async (req, res, next) => {
    try {
        const city = req.body;
        const newCity = await City.create(city);
        res.status(201).json({
            response: newCity
        })
    }
    catch (error) {
        next(error);
    }
}


const createManyCities = async (req, res, next) => {
    try {
        const cities = req.body;
        const newCities = await City.insertMany(cities);
        res.status(201).json({
            response: newCities
        })
    }
    catch (error) {
        next(error);
    }
}


export { createCity, createManyCities }