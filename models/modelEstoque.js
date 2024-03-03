import { Sequelize, DataTypes } from "sequelize"
import { db } from "../database/database.js"

export const Estoque = db.define('Estoque',{

    CodEstoque: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NomeEstoque:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    tableName: 'estoque'
})

console.log( Estoque == db.models.Estoque ) //retorna true se a model foi feita com sucesso
 