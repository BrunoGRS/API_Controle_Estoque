import { Produto } from "../models/modelProduto.js";
import { Saida } from "../models/modelSaida.js";

export const SaidaController = {

    saidaProduto: async(req,res)=>{

        try {
            
            const saida = {
                QuantidadeSaida: req.body.QuantidadeSaida,
                CodProduto: req.body.CodProduto
            }

            if(Saida.sync() != null){
                await Saida.sync()
            }

            if(Saida.create(saida)){
                let produto = Produto.findByPk(req.body.CodProduto)

                produto.then((dado)=>{
                    dado.QuantidadeProduto -= saida.QuantidadeSaida
                    dado.save()
                    res.status(200).send({msg:'Saida efetuada com sucesso!'})
                },(error)=>{
                    console.error('Não foi possível executar a saida', error)
                })
            }

        } catch (error) {
            console.error('Erro ao fazer saída do produto', error)
        }

    }

}