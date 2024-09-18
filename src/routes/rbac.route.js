const { Router } = require('express')
const RbacController = require('../controllers/RbacController')
const RbacRouter = new Router()
RbacRouter.get('/listPermissions', RbacController.listPermissions)
RbacRouter.get('/listRoles', RbacController.listRoles)
RbacRouter.post('/createOnePermissions', RbacController.createOnePermissions)
RbacRouter.post('/criateOneRoles', RbacController.criateOneRoles)
module.exports = new RbacRouter
