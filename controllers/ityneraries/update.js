import Itinerary from "../../models/Itinerary.js";


const updateLikes = async (req, res, next) => {
    try {
        let itinerary = req.body
        const itineraryExists = await Itinerary.findById(itinerary._id)
        if (!itineraryExists) {
            return res.status(404).json({
                message: "Itinerary not found. Please try another ID."
            });
        }
        let upd = await Itinerary.updateOne(
            { _id: itinerary._id },
            { likes: itinerary.likes }
        )

        if (upd) {
            return res.status(200).json({
                response: upd
            })
        }
    } catch (error) {
        next(error) 
    }
}

export {updateLikes}