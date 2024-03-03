import { DataTypes } from "sequelize";
import { db } from "../database/database.js";
import { Produto } from "./modelProduto.js";

export const Entrada = db.define('Entrada',{
    CodEntrada:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    QuantidadeEntrada:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    CodProduto:{        type: DataTypes.INTEGER,
        references:{
            model: Produto,
            key:'CodProduto'
        }
    }
},{
    tableName: 'entrada'
})