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
    cookTimeHours: {
        type: Number,
    },
    cookTimeMinutes: {
        type: Number,
    },
    prepTimeHours: {
        type: Number,
    },
    prepTimeMinutes: {
        type: Number,
    },
    ingredient1: {
        type: String,
        required: true
    },
    ingredient2: {
        type: String,
    },
    ingredient3: {
        type: String,
    },
    ingredient4: {
        type: String,
    },
    ingredient5: {
        type: String,
    },
    ingredient6: {
        type: String,
    },
    ingredient7: {
        type: String,
    },
    ingredient8: {
        type: String,
    },
    ingredient9: {
        type: String,
    },
    ingredient10: {
        type: String,
    },
    method1: {
        type: String,
        require: true
    },
    method2: {
        type: String,
    },
    method3: {
        type: String,
    },
    method4: {
        type: String,
    },
    method5: {
        type: String,
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