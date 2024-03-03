import { db } from "../database/database.js";
import { Produto } from "../models/modelProduto.js";

export const ProdutoController = {

    criarProduto: async(req,res)=>{
        try {

            const produto = {
                 NomeProduto: req.body.NomeProduto,
                 QuantidadeProduto: req.body.QuantidadeProduto,
                 CodEstoque: req.body.CodEstoque
            }

            if (!Produto.sync().isPending) {
                await Produto.sync();
              }

            if(Produto.create(produto)){
                res.status(201).send({msg:'Produto criado com sucesso!'})
            }

        } catch (error) {
            console.error('Erro ao criar Produto!', error)
        }
    },

    buscarProdutoID: async(req,res)=>{
        try {

            let produto = Produto.findByPk(req.params.id)

            if(produto){
                produto.then((dado)=>{
                    res.status(200).send({msg:dado})
                },(error)=>{
                    console.log(error)
                })
            }else{
                res.send({msg:"Produto não Encontrado"})
            }
            
        } catch (error) {
            console.error('Erro ao buscar produto!', error)
        }
    },

    mostrarProdutos: async(req,res)=>{
        try {

            let produtos = Produto.findAll()

            if(produtos){
                produtos.then((dados)=>{
                    res.status(200).send({msg:dados})
                })
            }
            
        } catch (error) {
            console.error('Não foi possível mostrar os produtos', error)
        }
    },

    deletarProduto: async(req,res)=>{
        try {

            let produto = Produto.findByPk(req.params.id)

            if(produto){
                produto.then((dado)=>{
                    if(dado.destroy()){
                        res.status(200).send({msg:`Produto ${dado.NomeProduto} excluido com sucesso!`})
                    }
                })
            }
            
        } catch (error) {
            console.error('Não foi possível deletar o produto')
        }
    },

   atualizarProduto: async(req,res)=>{
        try {

            let produto = Produto.findByPk(req.params.id)

            if(produto){
                produto.then((dado)=>{
                    dado.NomeProduto = req.body.NomeProduto,
                    dado.QuantidadeProduto = req.body.QuantidadeProduto,
                    dado.CodEstoque = req.body.CodEstoque

                    if(dado.save() != null){
                        res.status(200).send({msg:`Produto atualizado com sucesso. Produto:${dado}`})
                    }
                },(error)=>{
                    console.error('Erro ao atualizar produto', error)
                })
            }
            
        } catch (error) {
            console.error('Não foi possível alterar o produto', error)
        }
    }
}