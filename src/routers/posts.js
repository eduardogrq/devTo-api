
const express = require('express')
const posts = require('../usecases/posts')

const router = express.Router()

router.get('/', async (request, response) => {
    try{
        const allPosts = await posts.getAll()

        response.json({
            succes: true,
            message: 'All posts',
            data:{
                posts: allPosts
            }
        })
    } catch(error) {
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

module.exports = router