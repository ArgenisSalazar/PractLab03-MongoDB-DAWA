const express = require('express')
const app = express()
const clientesRoutes = require('./routes/clientes')

const db = require('./bd')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/', clientesRoutes)

app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000')
})