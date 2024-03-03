import express from "express"
import { ProdutoRouter } from "./produto.js"
import { Estoquerouter } from "./produto.js"
import { EntradaRouter } from "./produto.js"
import { SaidaRouter } from "./produto.js"
export const expressRouter = express.Router() //instância o router do express

const routerProduto = ProdutoRouter //pega a exportão do router vindo dos produtos
const routerEstoque = Estoquerouter
const routerEntrada = EntradaRouter
const routerSaida = SaidaRouter

expressRouter.use("/produto", routerProduto)//indica o endpoint padrão do caminho dos produtos
expressRouter.use("/estoque", routerEstoque)
expressRouter.use("/entrada", routerEntrada)
expressRouter.use("/saida", routerSaida)