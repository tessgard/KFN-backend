const express = require('express')

const app = express()

app.get('/', (req, res) => 
res.json({ msg: 'welcome to the Kind Food Network API'})
)


// Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/recipes', require('./routes/recipes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))


