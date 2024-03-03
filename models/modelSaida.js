import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database/database.js";
import { Produto } from "./modelProduto.js";

export const Saida = db.define('Saida',{
    
    CodSaida:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    QuantidadeSaida:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    CodProduto:{
        type: DataTypes.INTEGER,
        references:{
            model: Produto,
            key:'CodProduto'
        }
    }
},
{
    tableName: 'saida'
})