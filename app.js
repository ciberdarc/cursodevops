const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/public/index.html')
})

app.get('/*', (req, res) => {
  return res.redirect('/')
})
// WTF is this
module.exports = app
