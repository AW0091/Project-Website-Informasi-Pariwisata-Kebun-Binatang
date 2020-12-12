const mongoose =  require('mongoose')

const expnavSchema = new mongoose.Schema({
    car1: {
        type: String
    },
    car2: {
        type: String
    },
    car3: {
        type: String
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    time1: {
        type: String
    },
    time2: {
        type: String
    },
    location: {
        type: String
    },
    content: {
        type: String
    },
    link: {
    type: String
    }
})

module.exports = mongoose.model('experience-carousel', expnavSchema)