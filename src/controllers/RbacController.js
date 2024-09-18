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
           const permissionExists = await Permission.findOne({where: {description: dados.description}})
           if (permissionExists) {
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
        try {
            const dados = req.body
            if (!dados.description){
             return res.status(400).send('descrição obrigtória')
            }
            const roleExists = await Role.findOne({where: {description: dados.description}})
            if (roleExists) {
             return res.status(400).send('Já existe uma função com essa descrição')
            }
            const novo = await Role.create(dados)
            return res.status(201).send(novo)
         } catch (error){
             console.log(error.message)
             return res.status(500).sed("algo deu errado")
         }

    }
    async listPermissionsByRole(req, res){
        try {
            const {id} = req.params
            const role = await Role.findOne(
                {where: {id: id},
                include: [{model: Permission}]
            })
            if (!role) {
                return res.status(404).send('função não encontrada')
            }
            return res.status(200).send(role)
        } catch (error){
            console.log(error.message)
            return res.status(500).sed("algo deu errado")
        }
    }
    async addPermissionsToRole(req, res){

    }
    async addRoleToUser(req, res){

    }
}
module.exports = new RbacController()