const mongoose =  require('mongoose')

const homenavSchema = new mongoose.Schema({
    img: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    link: {
        type: String
    }
})

module.exports = mongoose.model('home-carousel', homenavSchema)