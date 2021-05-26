

const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    createdDate: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        minLenght: 2,
        required: true
    },
    title: {
        type: String,
        min: 1,
        max: 999,
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        require : false
    }
})

const model = mongoose.model('posts', postsSchema)

module.exports = model





// let post = {
//     postId: 1,
//     userId: 1,
//     createdDate: moment().format('L'),
//     content: "adfa asdf asdf asdf asdf",
//     title: "primer post",
//     imageUrl: "https://picsum.photos/50/50",
//     likes: 6,
// }