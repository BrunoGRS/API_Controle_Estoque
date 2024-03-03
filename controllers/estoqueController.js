import { Estoque} from "../models/modelEstoque.js";

export const EstoqueController = {

    criarEstoque: async(req,res)=>{
        try {

            const estoque= {
                NomeEstoque: req.body.NomeEstoque,
            }
            
            if (!Estoque.sync().isPending) {
                await Estoque.sync();
              } 

            if(Estoque.create(estoque)){
                res.status(201).send({msg:'Estoque criado com sucesso!'})
            }

        } catch (error) {
            console.errorg('Erro ao criar estoque!', error)
        }
    },

    buscarEstoqueID: async(req,res)=>{
        try {

            let estoque = Estoque.findByPk(req.params.id)

            if(estoque){
                estoque.then((dados)=>{
                    res.status(200).send({msg: dados})
                },(error)=>{
                    console.error('Erro ao buscar estoque', error)
                })
            }

        } catch(error) {
            console.error('Erro ao buscar estoque', error)
        }
    },

    mostrarEstoque: async(req,res)=>{
        try {
            
            let buscaEstoque = Estoque.findAll()

            if(buscaEstoque){
                buscaEstoque.then((dados)=>{
                    res.status(200).send({msg:dados})
                },(error)=>{
                    console.error('Erro ao buscar estoque', error)
                })
            }

        } catch (error) {
            console.error('Erro ao buscar estoque', error)
        }
    },

    deletarEstoque: async(req,res)=>{
        try {

            let estoque = Estoque.findByPk(req.params.id)

            if(estoque){
                estoque.then((dado)=>{
                    if(dado.destroy()){
                        res.status(200).send({msg:'Estoque excluído com sucesso!'})
                    }
                },(error)=>{
                    console.error('Erro ao excluir', error)
                })
            }

        } catch (error) {
            console.error('Erro ao Excluir', error)
        }
    },

    atualizarEstoque: async(req,res)=>{
        try {
            
            let idEstoque = req.params.id

            let estoque = Estoque.findByPk(idEstoque)

            if(estoque){
                estoque.then((dados)=>{
                    dados.NomeEstoque = req.body.NomeEstoque
                    if(dados.save() != null ){
                        res.status(200).send({msg:'Atualizado com sucesso!'})
                    }
                },(error)=>{
                    console.error('Erro ao atualizar', error)
                })
            }

        } catch (error) {
            console.error('Erro ao atualizar Estoque', error)
        }

    }

}