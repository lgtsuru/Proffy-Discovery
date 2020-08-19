//Servidor
const express = require('express') /*express é uma biblioteca com varias funcoes -> pasta 'node_modules'*/
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})
//Inicio e configuracao do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) /*estamos indicando que a pasta static (onde ficam as imagens, scripts, estilos...) é a 'public' e não mais a 'NLW'*/
/*Criando rotas de onde estao as paginas usando o .get*/
.get("/", pageLanding) /*()=> é uma função anonima curta, que esta substituindo 'function (). req = requisicao. res = resposta*/    
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor    
.listen(5500)