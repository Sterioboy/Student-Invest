'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ads extends Model {
 
    static associate(models) {
      this.belongsTo(models.University, { foreignKey: 'university_id' })
    }
  };
  Ads.init({
    university_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    post: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
  }, {
    sequelize,
    modelName: 'Ads',
  });
  return Ads;
};
