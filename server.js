const express = require('express')
const connectDB = require('./config/db')
const Recipe = require('./models/Recipe')


const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false}))

app.get('/', (req, res) => 
res.json({ msg: 'welcome to the Kind Food Network API'})
)

app.get('/allrecipes', async (req, res) => {
    const allRecipes = await Recipe.find()
    res.json(allRecipes)
})

// Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/recipes', require('./routes/recipes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))


