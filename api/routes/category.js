const router = require("express").Router()
const Category = require("../models/Category")


//CREATE
router.post("/", async (req, res) => {
    const newCat = new Category(req.body)

    try {
        const saveCat = await newCat.save()
        res.status(200).json(saveCat)

    } catch  (err) {
        res.status(500).json(err)
    }
})

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
        const allCat = await Category.find()
        res.status(200).json(allCat)

    }catch (err) {
        res.status(500).json(err)
    }
})

//GET ONE CATEGORIES
router.get("/:id", async (req, res) => {
    try {
    const catId = await Category.findById(req.params.id)
    res.status(200).json(catId)
    } catch (err) {
        res.status(500).json(err)
    }
})

 

module.exports = router