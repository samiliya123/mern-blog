const route = require("express").Router()
const user = require("../models/User")
const post = require("../models/Post")
const bcrypt = require("bcrypt")



// Update

route.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id ) {
        if (req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            
             const updateUser = await user.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
             res.status(200).json(updateUser)
              
        } catch (err) {
            res.status(500).json(err)
        }  
        } else {
            res.status(401).json("You can update only your account!")
        }
})


// Delete
 
route.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id ) {
       try {
            const users = await user.findById(req.params.id)

            try {
                await post.deleteMany({username: users.username})
                await user.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted...")
                
            } catch (err) {
                res.status(500).json(err)
            } 
    } catch (err) {
        res.status(404).json("User not found!")
    } 
        } else {
            res.status(401).json("You can delete only your account!")
        }
})

// Get user

route.get("/:id", async (req, res) => {
    try {
        const users = await user.findById(req.params.id)
        const {password, ...others} = users._doc
        res.status(200).json(others)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = route

