module.exports = (sequelize, DataTypes) => {
  const TowTruckCalculation = sequelize.define(
    "TowTruckCalculation",
    {
      tariff: {
        type: DataTypes.STRING,
      },
      timeType: {
        type: DataTypes.STRING,
      },
      extraPaymentType: {
        type: DataTypes.STRING,
      },
      beginning: {
        type: DataTypes.STRING,
      },
      tariffGroup: {
        type: DataTypes.STRING,
      },
      fixPay: {
        type: DataTypes.STRING,
      },
      fixKm: {
        type: DataTypes.STRING,
      },
      payPerKm: {
        type: DataTypes.STRING,
      },
      extraPay: {
        type: DataTypes.STRING,
      },

      totalKm: {
        type: DataTypes.STRING,
      },
      thePayAlphaWillPay: {
        type: DataTypes.STRING,
      },
      customerPay: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "towTruckCalculation",
    }
  );
  TowTruckCalculation.associate = function (models) {};
  return TowTruckCalculation;
};
