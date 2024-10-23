
const bad_request = (error, req, res, next) => {
    console.log(error);
    if (error.statusCode === 400) {
        return res.status(400).json({   
            success: false,
            message: "error, try another approach"
        })
    }
    next(error)
}

export default bad_request