const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        review: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {min: 1, max: 5}
        },
        user_id: {
            type: Datatypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableNme: true,
        underscored: true ,
        modelName: 'review',
    }
);

module.exports = Comment