const path = require('path')

const express = require('express')
const compression = require('compression')
const helmet = require('helmet')

const port = process.env['PORT'] || 3000
const app = express()

app.use(helmet())
app.use(compression())
app.use(express.static(path.join(__dirname, 'static'), {}))

app.listen(port, function(e) {
    if (e) return console.error(e)

    return console.log('listening on port', port)
})