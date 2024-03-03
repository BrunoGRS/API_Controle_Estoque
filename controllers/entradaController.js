import { db } from "../database/database.js";
import { Entrada} from "../models/modelEntrada.js";
import { Produto } from "../models/modelProduto.js";

export const EntradaController = {

    entradaProduto: async(req,res)=>{

        try {

            const entrada = {
                QuantidadeEntrada: req.body.QuantidadeEntrada,
                CodProduto: req.body.CodProduto
            }

            if(Entrada.sync() != null){
                await Produto.sync()
            }

            if(Entrada.create(entrada)){
                let produto = Produto.findByPk(entrada.CodProduto)

                produto.then((dado)=>{
                    dado.QuantidadeProduto += entrada.QuantidadeEntrada
                    dado.save()
                    res.status(200).send({msg:'Entrada Efeutada'})
                },(error)=>{
                    console.error('Erro ao dar entrada')
                })
            }
            
        } catch (error) {
            console.error('Não foi possível realizar a entrada', error)
        }

    }
}