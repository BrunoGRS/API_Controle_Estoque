import express from "express"
import { ProdutoController } from "../controllers/produtoController.js";
import { EstoqueController } from "../controllers/estoqueController.js";
import { EntradaController } from "../controllers/entradaController.js";
import { SaidaController } from "../controllers/saidaController.js";

export const ProdutoRouter = express.Router()
export const Estoquerouter = express.Router()
export const EntradaRouter = express.Router()
export const SaidaRouter = express.Router()

//Rotas produtos
ProdutoRouter.route("/criar").post((req,res)=> ProdutoController.criarProduto(req,res))
ProdutoRouter.route("/buscar").get((req,res)=> ProdutoController.mostrarProdutos(req,res))
ProdutoRouter.route("/buscar/:id").get((req,res)=> ProdutoController.buscarProdutoID(req,res))
ProdutoRouter.route("/deletar/:id").delete((req,res)=> ProdutoController.deletarProduto(req,res))
ProdutoRouter.route("/atualizar/:id").put((req,res)=> ProdutoController.atualizarProduto(req,res))

//Rotas Estoque
Estoquerouter.route("/criar").post((req,res)=> EstoqueController.criarEstoque(req,res))
Estoquerouter.route("/buscar").get((req,res)=> EstoqueController.mostrarEstoque(req,res))
Estoquerouter.route("/buscar/:id").get((req,res)=> EstoqueController.buscarEstoqueID(req,res))
Estoquerouter.route("/deletar/:id").delete((req,res)=> EstoqueController.deletarEstoque(req,res))
Estoquerouter.route("/atualizar/:id").put((req,res)=> EstoqueController.atualizarEstoque(req,res))

//Rota Entrada
EntradaRouter.route("/produto").post((req,res)=> EntradaController.entradaProduto(req,res))

//Rota Saída
SaidaRouter.route("/produto").post((req,res)=> SaidaController.saidaProduto(req,res))