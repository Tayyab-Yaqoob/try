require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello1 World!')
})

app.get('/tayyab',(req,res)=>{
    res.send("<h1>Me Tayyab Hun</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})