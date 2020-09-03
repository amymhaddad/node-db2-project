const express = require("express")
const router = express.Router()

const carRouter = require("./carsRouter")

router.use("/cars", carRouter)

module.exports = router;