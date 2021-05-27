
const express = require('express')
const posts = require('../usecases/posts')

const router = express.Router()

router.get('/', async (request, response) => {
    try{

        // response.sendFile(path.join(__dirname, '../../', 'index.html'));
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
            message: 'Error at get all posts',
            error: error.message
        })
    }
})

router.post('/', async(request, response) => {
    try{
        const postCreated = await posts.create(request.body)
        response.json({
            succes: true,
            message: 'post created',
            data:{
                koder: postCreated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at create post',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const postFinded = await posts.findPost(id)

        response.json({
            succes: true,
            message: 'post updated',
            data:{
                data: postFinded
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at update post',
            error: error.message
        })
    }
})

module.exports = router