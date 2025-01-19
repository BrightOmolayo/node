// require('dotenv').config()

// const http = require('http')
// const url = require('url')
// const fs = require('fs')

// http.createServer(function (req, res) {
//   // eslint-disable-next-line n/no-deprecated-api
//   const q = url.parse(req.url, true)
//   const filename = '.' + q.pathname
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/html' })
//       return res.end('404 Not Found')
//     }
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write(data)
//     return res.end()
//   })
// }).listen(8080)

const express = require('express')
const app = express()
const path = require('path')
console.log(__dirname)

app.get('/:filename', (req, res) => {
  const fileName = req.params.filename
  const filePath = path.join(__dirname, 'public', fileName)
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('File not found!')
    }
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`)
})
