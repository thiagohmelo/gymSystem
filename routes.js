const express = require('express')
const routes = express.Router()
const instructors = require('./controllers/instructors')
const members = require('./controllers/members')

routes.get('/', function(req, res) {
    return res.redirect('/instructors')
})

//GET: receber Resource
//POST: criar e salvar novo Resource como dados enviados
//PUT: Atualizar Resource
//Delete: deletar

// ############################## -INSTRUCTORS-  ##################################
routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get ('/instructors/:id', instructors.show) 
routes.get ('/instructors/:id/edit', instructors.edit) 
routes.post('/instructors', instructors.post)
routes.put('/instructors', instructors.put)
routes.delete('/instructors', instructors.delete)

// ############################## -M E M B E R S-  ##################################


routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get ('/members/:id', members.show) 
routes.get ('/members/:id/edit', members.edit) 
routes.post('/members', members.post)
routes.put('/members', members.put)
routes.delete('/members', members.delete)



module.exports = routes