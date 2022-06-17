const express = require('express')
const sequelize = require('./db/')
const User = require('./db/models/user')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('jejejetl')
})

app.get('/user', async (req, res) => {
    const users = await User.findAll()
    return res.json({
        data: {
            users
        }
    })
})

app.post('/user', async (req, res) => {
    const { name, email } = req.body
    const createdUser = await User.create({
        name,
        email,
    })
    return res.json({
        data: createdUser
    })
})



sequelize.sync()

app.listen(4000, () => {
    console.log(`Server running on port: 4000`)
})