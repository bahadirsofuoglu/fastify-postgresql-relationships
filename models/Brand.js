module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      name: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "brand",
    }
  );
  Brand.associate = function (models) {};
  return Brand;
};
