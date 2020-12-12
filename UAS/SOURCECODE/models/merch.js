const mongoose =  require('mongoose')

const merchanSchema = new mongoose.Schema({
    img: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('merchandise', merchanSchema)