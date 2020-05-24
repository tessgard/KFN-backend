const mongoose = require('mongoose')

const RecipeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    method: {
        type: Array,
        require: true
    },
    tags: {
        type: Array,
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('recipe', RecipeSchema)