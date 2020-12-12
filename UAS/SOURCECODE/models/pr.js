const mongoose =  require('mongoose')

const pRSchema = new mongoose.Schema({
    img: {
        type: String
    }
})

module.exports = mongoose.model('promo', pRSchema)