
const Posts = require('../models/posts')

function getAll() {
    return Posts.find()
}

module.exports = {
    getAll
}