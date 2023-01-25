const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router();
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("<h1>funcionando..</h1>")
})

const rotas = require('./rotas')
app.use('/api', rotas)

const port = 3001

app.listen(port, () => {
    console.log('server running on http://localhost:', port)
})
