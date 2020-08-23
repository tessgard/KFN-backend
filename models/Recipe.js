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
        required: true
    },
    image: {
        type: String,
    },
    servings: {
        type: Number,
    },
    ingredient1: {
        type: String,
        required: true
    },
    method1: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('recipe', RecipeSchema)