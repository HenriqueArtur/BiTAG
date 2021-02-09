const { response } = require('express');
const express = require('express')
const app = express()

app.listen(4000, () => {
    console.log("Aplication running on 4000 port!");
})

app.get('/', (request, response) => {
    response.send("Hello world!")
})