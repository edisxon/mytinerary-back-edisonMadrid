import Itinerary from "../../models/Itinerary.js";
import "../../models/City.js"

const allItineraries = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `^${name}`, $options: "i"}
        }

        const itineraries = await Itinerary.find(query).populate('cityId' , 'name').exec();
        res.status(200).json({
            response: itineraries
        })
    } catch (error) {
        next(error);
    }
};


const itinerariesById = async (req, res, next) => {
    try {
        const _id = req.params.id
        const itineraries = await Itinerary.find({ _id: _id }).populate('cityId', 'name').exec()
        res.status(200).json({
            response: itineraries
        })
    } catch (error) {
        next(error);
    }
}


const itinerariesByCityId = async (req, res, next) => {
    try {
        const cityId = req.params.cityId; 
        const itineraries = await Itinerary.find({ cityId: cityId })

        res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
}







export { allItineraries, itinerariesById, itinerariesByCityId }