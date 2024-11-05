import Itinerary from "../../models/Itinerary.js";



const createItinerary = async (req, res, next) => {
    try {
        const itinerary = req.body;
        const newItinerary = await Itinerary.create(itinerary);
        res.status(201).json({
            response: newItinerary
        })
    }
    catch (error) {
        next(error);
    }
}


const createManyItineraries = async (req, res, next) => {
    try {
        const itineraries = req.body;
        const newItineraries = await Itinerary.insertMany(itineraries);
        res.status(201).json({
            response: newItineraries
        })
    }
    catch (error) {
        next(error);
    }
}

export { createItinerary, createManyItineraries }
