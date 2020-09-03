module.exports = {
    validateCarId,
    validateCarData, 
    handleErrors
}

function validateCarId(req, res, next) {
    const carId = req.params.carId
    
    if (isNaN(carId)) {
        return res.status(400).json({error: "Invalid request"})
    }
    next()
}

function validateCarData(req, res, next) {
    const {vin, make, model, mileage, transmission_type, title} = req.body

    if (!vin || !make || !model || !mileage || !transmission_type || !title)  {
        return res.status(400).json({ error: "You must enter all required fields"})
    }
    next()
}

function handleErrors(err, req, res, next) {
    return res.status(500).json({ error: "server error"})
}
