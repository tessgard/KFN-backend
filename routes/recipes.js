const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User')
const Recipe = require('../models/Recipe')

// @route    GET api/recipes
// @desc     Get all recipes
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const recipes = await Recipe.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(recipes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

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