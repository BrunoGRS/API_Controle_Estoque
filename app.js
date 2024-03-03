import express from "express"
import cors from "cors"
import { main } from "./database/database.js"
import { expressRouter } from "./routers/router.js"

const app = express()

//MIDLIEWARES
app.use(cors()) //permite a utilização do cors para segurança
app.use(express.json()) //permite a comunicação via json

//Conectar com o banco
const connectionDb = main()

// Config Rotas
const routerProd = expressRouter
const routerEsto = expressRouter
const routerEntra = expressRouter
const routerSaida = expressRouter

app.use("/api", routerProd, routerEsto, routerEntra, routerSaida)

app.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000>');
  })
