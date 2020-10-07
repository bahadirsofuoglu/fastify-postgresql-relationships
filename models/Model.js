module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Model",
    {
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "model",
    }
  );
  Model.associate = function (models) {
    Model.belongsTo(models.Brand, {
      foreignKey: "brandId",
      as: "brand",
    });
  };
  return Model;
};
