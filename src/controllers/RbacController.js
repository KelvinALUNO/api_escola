const Permission = require('../models/Permission')
const Role = require('../models/Role')
class RbacController {
    async listPermissions(req, res){
        const data = await Permission.findAll()
        return res.status(200).send(data)
    }
    async listRoles(req, res){
        const data = await Role.findAll()
        return res.status(200).send(data)
    }
    async createOnePermissions(req, res){
        try {
           const dados = req.body
           if (!dados.description){
            return res.status(400).send('descrição obrigtória')
           }
           const perrmissionExists = await Permission.findOne({where: {description: dados.description}})
           if (perrmissionExists) {
            return res.status(400).send('Já existe uma permissão com essa descrição')
           }
           const novo = await Permission.create(dados)
           return res.status(201).send(novo)
        } catch (error){
            console.log(error.message)
            return res.status(500).sed("algo deu errado")
        }
    }
    async criateOneRoles(req, res){

    }
    async listPermissionsByRole(req, res){

    }
    async addPermissionsToRole(req, res){

    }
    async addRoleToUser(req, res){

    }
}