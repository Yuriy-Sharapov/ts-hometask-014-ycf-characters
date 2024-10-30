import express from 'express'
// import serverless from 'serverless-http'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/characters', (req, res) => {
    res.json('/api/characters')
})

app.get('/api/characters/:cid', (req, res) => {
    const { cid } = req.params

    const character = {
        id         : cid,
        name       : "Имя персонажа",
        description: "описание...",
        modified   : "2020-07-21",
        thumbnail  : "http://...",
        comics: [
            {
                id: 1,
                name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
            }
        ]
    }

    res.json(character)
})

app.listen(3000, () =>{
    console.log(`Server is listening a PORT 3000`)
})

//module.exports.handler = serverless(app)