
const Posts = require('../models/posts')

function getAll() {
    return Posts.find()
}

function create(post){
    return Posts.create(post)
}

function findPost(id){
    return Posts.findById(id)
}


module.exports = {
    getAll,
    create,
    findPost
}