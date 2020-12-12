const mongoose =  require('mongoose')

const anilistSchema = new mongoose.Schema({
    img: {
        type: String
    },
    img_big: {
        type: String
    },
    name: {
        type: String
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('animals-list', anilistSchema)