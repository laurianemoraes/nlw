const express = require('express')
const server = express()

const {pageLanding,pageGiveClasses,pageStudy,saveClasses } = require('./pages')

const nunjucks = require('nunjucks')

//configação do nunjucks
nunjucks.configure('src/views',{
    express:server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//configurar arquivos estáticos(css,scripts,imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start do servidor
.listen(5500)