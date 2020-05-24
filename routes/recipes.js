const express = require('express')
const router = express.Router()

// @route           GET api/recipes
// @description     Get all recipes
// @access          Public 
router.get('/', (req, res) => {
    res.send('Get all recipes')
})

// @route           GET api/myrecipes
// @description     Get all logged in user recipes
// @access          Private 
router.get('/', (req, res) => {
    res.send('Get all logged in user recipes')
})

// @route           POST api/recipes
// @description     Create new recipe
// @access          Private 
router.post('/', (req, res) => {
    res.send('Create new recipe')
})

// @route           PUT api/myrecipes/:id
// @description     Update recipe
// @access          Private 
router.put('/:id', (req, res) => {
    res.send('Update recipe')
})

// @route           DELETE api/myrecipes/:id
// @description     Edit a recipe
// @access          Private 
router.delete('/:id', (req, res) => {
    res.send('Delete recipe')
})

module.exports = router