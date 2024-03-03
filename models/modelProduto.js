import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database/database.js";
import { Estoque } from "./modelEstoque.js";

export const Produto = db.define('Produto',{

    CodProduto:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    NomeProduto:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },

    QuantidadeProduto:{
        type: DataTypes.FLOAT,
        allowNull: false
    },

    CodEstoque:{
        type: DataTypes.INTEGER,
        references:{
            model: Estoque,
            key: 'CodEstoque'
        }
    }

},{
    tableName: 'produto'
})