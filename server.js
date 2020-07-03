const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express() //cria o server


server.use(express.urlencoded({ extended: true})) //resposável pelo funcionamento do body(routes)
server.use(express.static("public"))
server.use(methodOverride('_method'))
server.use(routes)


server.set( "view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true 
})


server.listen(5000, function() {
    console.log('server is RUNNING!') 

})