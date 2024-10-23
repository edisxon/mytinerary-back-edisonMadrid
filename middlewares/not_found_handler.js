const not_found_handler = (req, res) => {
    return res.status(404).json({
        success: false,
        message: `not found, the method ${req.method} with the path ${req.url} does not exist`
    })
}

export default not_found_handler