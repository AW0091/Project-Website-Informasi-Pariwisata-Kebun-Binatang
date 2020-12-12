const mongoose =  require('mongoose')

const restnavSchema = new mongoose.Schema({
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
    location: {
        type: String
    },
    num: {
        type: String
    }
})

module.exports = mongoose.model('restaurant-carousel', restnavSchema)