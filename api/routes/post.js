const route = require("express").Router()
const user = require("../models/User")
const post = require("../models/Post")
 



// Create post

route.post("/", async (req, res) => {
   const newPost = new post(req.body)

   try {
       const savePost = await newPost.save()
        res.status(200).json(savePost)
   } catch (err) {
    res.status(500).json(err)
   }
})


// Update post

route.put("/:id", async (req, res) => {
  try {
      const posts = await post.findById(req.params.id)
      if (posts.username === req.body.username)

      try {
        const updatedPost = await post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedPost)

      } catch (err) {
        res.status(500).json(err)
      }else {res.status(401).json("You can only update your account")}

  } catch (err) {
    res.status(500).json(err)
  }  
})


//Delete post
route.delete("/:id", async (req, res) => {
  try {
    const posts =   await post.findOneAndDelete(req.params.id)
  
    try {

        
        res.status(200).json("Post has been deleted..")

    } catch (err) {
      res.status(500).json(err)
    }  
    } catch (err) {
    res.status(500).json(err)
  }
})

 

  
   

// Get post

//09166907411

route.get("/:id", async (req, res) => {
    try {
        const posts = await post.findById(req.params.id)
      
        res.status(200).json(posts)
        
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get all post

route.get("/", async (req, res) => {
  const username = req.query.user
  const catName = req.query.cat

  try {
    let posts;
    if (username) {
      posts = await post.find({username})
    } else if (catName) {
      posts = await post.find({categories: {$in: [catName],}})
    } else {
      posts = await post.find()
    }
    res.status(200).json(posts)

  } catch (err) {
    res.status(500).json(err)
  }

})

 
 
module.exports = route

