import Itinerary from "../../models/Itinerary.js";

const deleteOneByName = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteItinerary
        })
    } catch (error) {
        next(error);
    }
}

export {deleteOneByName}