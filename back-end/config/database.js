const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb+srv://marceloreis:<password>@cluster0.tgwi9hm.mongodb.net/?retryWrites=true&w=majority', {
        userNewUrlParser: true,
        userUnifiedTopology: true
    })
}