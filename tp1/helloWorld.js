const express = require('express')
const app = express()
const port = 3000
let resquestCount = []

app.use('/', (req, res, next) =>{
    req.
    let date = new Date()
    console.log("[" + date.toISOString() + "]" + req.url)
    next()
})

app.get('/welcome', (req, res) => {
  res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle')
})

app.get('/secret', (req, res) => {
    res.sendStatus(401)
    res.send('Vous ne possédez pas les droits pour accéder à ma page secrète')
  })

app.get('/error', (req, res) => {
res.sendStatus(500)
res.sendFile('Vous ne possédez pas les droits pour accéder à ma page secrète')
})

app.get('/img', (req, res) => {
    res.download("C:/Users/enzol/OneDrive/Bureau/cours/node/tps-main/tps-main/Cours_Noded/tp1/LmpwZw.png")
    })

app.get("/redirectMe", (req,  res, next)=>{
    res.redirect("http://extra.univ-littoral.fr/");
})

app.get("/somme", (req,  res, next)=>{
    res.send("Bienvenue sur la page de " + req.params.name)
})

app.get("/users/?", (req,  res, next)=>{
    res.send("Bienvenue sur la page de " + req.params.name)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})