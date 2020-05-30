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
router.post('/', [ auth, [
    check('name', 'name is required').not().isEmpty(),
	check('description', 'description is required').not().isEmpty(),
	check('category', 'category is required').not().isEmpty(),
    check('ingredient1', 'at least 1 ingredient is required').not().isEmpty(),
    check('method1', 'method is required').not().isEmpty()
]
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    const { 
		name,
		description,
		image,
		servings,
		cookTimeHours,
		cookTimeMinutes,
		prepTimeHours,
		prepTimeMinutes,
		ingredient1,
		ingredient2,
		ingredient3,
		ingredient4,
		ingredient5,
		ingredient6,
		ingredient7,
		ingredient8,
		ingredient9,
		ingredient10, 
		method1, 
		method2,
		method3,
		method4,
		method5,
		category } = req.body

    try {
        const newRecipe = new Recipe({
            user: req.user.id,
            name,
            description,
            image,
            servings,
			cookTimeHours,
			cookTimeMinutes,
			prepTimeHours,
			prepTimeMinutes,
			ingredient1,
			ingredient2,
			ingredient3,
			ingredient4,
			ingredient5,
			ingredient6,
			ingredient7,
			ingredient8,
			ingredient9,
			ingredient10, 
			method1, 
			method2,
			method3,
			method4,
			method5,
            category
        })

        const recipe = await newRecipe.save()
        res.json(recipe)
    } catch (error) {
        console.error(err.message);
		res.status(500).send('Server Error');
    }
})

// @route           PUT api/recipes/:id
// @description     Update recipe
// @access          Private 
router.put('/:id', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	const { 
		name, 
		description, 
		image, 
		servings,
		cookTimeHours,
		cookTimeMinutes,
		prepTimeHours,
		prepTimeMinutes,
		ingredient1,
		ingredient2,
		ingredient3,
		ingredient4,
		ingredient5,
		ingredient6,
		ingredient7,
		ingredient8,
		ingredient9,
		ingredient10, 
		method1, 
		method2,
		method3,
		method4,
		method5,
		category } = req.body;

	// Build recipe object
	const recipeFields = {}
	if (name) recipeFields.name = name
	if (description) recipeFields.description = description
	if (image) recipeFields.image = image
	if (servings) recipeFields.servings = servings
	if (cookTimeHours) recipeFields.cookTimeHours = cookTimeHours
	if (cookTimeMinutes) recipeFields.cookTimeMinutes = cookTimeMinutes
	if (prepTimeHours) recipeFields.prepTimeHours = prepTimeHours
	if (prepTimeMinutes) recipeFields.prepTimeMinutes = prepTimeMinutes
	if (ingredient1) recipeFields.ingredient1 = ingredient1
	if (ingredient2) recipeFields.ingredient2 = ingredient2
	if (ingredient3) recipeFields.ingredient3 = ingredient3
	if (ingredient4) recipeFields.ingredient4 = ingredient4
	if (ingredient5) recipeFields.ingredient5 = ingredient5
	if (ingredient6) recipeFields.ingredient6 = ingredient6
	if (ingredient7) recipeFields.ingredient7 = ingredient7
	if (ingredient8) recipeFields.ingredient8 = ingredient8
	if (ingredient9) recipeFields.ingredient9 = ingredient9
	if (ingredient10) recipeFields.ingredient10 = ingredient10
	if (method1) recipeFields.method1 = method1
	if (method2) recipeFields.method2 = method2
	if (method3) recipeFields.method3 = method3
	if (method4) recipeFields.method4 = method4
	if (method5) recipeFields.method5 = method5
	if (category) recipeFields.category = category;


	try {
		let recipe = await Recipe.findById(req.params.id);

		if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

		// Make sure user owns recipe
		if (recipe.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		recipe = await Recipe.findByIdAndUpdate(
			req.params.id,
			{ $set: recipeFields },
			{ new: true }
		);

		res.json(recipe);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route           DELETE api/recipes/:id
// @description     Edit a recipe
// @access          Private 
router.delete('/:id', auth, async (req, res) => {
	try {
		const recipe = await Recipe.findById(req.params.id);

		if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

		// Make sure user owns recipe
		if (recipe.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Recipe.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Recipe deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router