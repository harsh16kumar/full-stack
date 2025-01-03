
require('dotenv').config()

const express = require('express')
const app = express()


const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello World of Twitter!')
})
app.get('/twitter/name', (req, res) => {
  res.send('<h1>Hello World of Twitter of Harsh Kumar!</h1>')
})

app.get('/youtube' , (req,res)=>{
    res.send('Welcome to my Youtube Channel')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})