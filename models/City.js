module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      name: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "city",
    }
  );
  City.associate = function (models) {};
  return City;
};
