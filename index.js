const express = require('express')
const serverless = require('serverless-http')
const charactersDb = require('./characters_db.json');

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/characters', (req, res) => {

    const { id } = req.query

    // Если id не задан, то выводим весь список
    if (!id) res.json(charactersDb)
    else {
        // Если id задан, то ищем конкретный элемент списка
        const character = charactersDb.find((char) => char.id == id )
        if (character)
            res.json(character) 
        else
            res.json('Code: 404')
    }
})

// app.get('/api/characters/:id', (req, res) => {
//     const { id } = req.params

//     const character = charactersDb.find((char) => char.id == id )
//     if (character)
//         res.json(character) 
//     else
//         res.json('Code: 404')
// })

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () =>{
//     console.log(`Server is listening a PORT ${PORT}`)  
// })
   
module.exports.handler = serverless(app)  