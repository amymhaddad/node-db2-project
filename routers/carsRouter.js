const express = require("express")
const carRouter = express.Router()

const Car = require("../data/carsModel")
const {validateCarId, validateCarData} = require("../middleware/Middlewares")


carRouter.get("/", (req, res, next) => {
    Car.get()
    .then(car => {
        return res.status(200).json(car)
    })
    .catch(err => next(err))
})

carRouter.get("/:carId", validateCarId, (req, res, next) => {
    const carId = req.params.carId

    Car.getById(carId)
    .then(car => {
        if (!car) {
            return res.status(404).json({error: "The car id is not found"})
        }
        return res.status(200).json(car)
    })
    .catch(err => next(err))
})

carRouter.post("/", validateCarData, (req, res, next) => {
    Car.insert(req.body)
    .then(newCar => {
        return res.status(200).json(newCar)
    })
    .catch(err => next(err))
})

module.exports = carRouter;
