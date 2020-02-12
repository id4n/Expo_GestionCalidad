//import express from 'express'
const express= require('express')
const app = express()

app.get('*', (request, response) => {
    response.send('Hello Universe!')
})
app.listen('8080',function(){
    console.log('listening in port 8080')
})