import City from "../../models/City.js";


const updatePopulation = async (req, res, next) => {
    try {
        let city = req.body
        
        const cityExists = await City.findById(city._id);
        if (!cityExists) {
            return res.status(404).json({
                message: "City not found. Please try another ID."
            });
        }
        let upd = await City.updateOne(
            {_id: city._id},
            {population: city.population}
        )

        if (upd){
            return res.status(200).json({
                response: upd
            })
        }


    }catch (error){

        next(error)

    }
}


export { updatePopulation }