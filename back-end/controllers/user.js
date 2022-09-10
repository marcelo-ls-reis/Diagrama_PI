const User = require('../models/User')

const controller = {} // objeto vazio

/*
    Método de CRUD do controller 
    create: cria um novo usuário
    retrive: retorna todos usuários cadastrados
    retriveOne: retorna um unico usuário
    update: atualiza os dados de um usuário
    delete: exclui um usuário
*/

controller.create = async(req, res) => {
    try{
        await User.create(req.body)
        // HTTP 201: Create
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller