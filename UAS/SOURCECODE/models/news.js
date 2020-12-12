const mongoose =  require('mongoose')

const newsNSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    img: {
        type: String
    },
    abstract: {
        type: String
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('berita', newsNSchema)