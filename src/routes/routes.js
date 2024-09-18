const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");
const RbacRouter = require('./rbac.route')

const routes = Router()

routes.use('/matriculas', matriculaRoutes)
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/RbacRouter', RbacRouter)

module.exports = routes