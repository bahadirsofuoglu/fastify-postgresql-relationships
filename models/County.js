module.exports = (sequelize, DataTypes) => {
  const County = sequelize.define(
    "County",
    {
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "county",
    }
  );
  County.associate = function (models) {
    County.belongsTo(models.City, {
      foreignKey: "cityId",
      as: "city",
    });
  };
  return County;
};
