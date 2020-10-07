module.exports = (sequelize, DataTypes) => {
  const ServicePaymentInfo = sequelize.define(
    "ServicePaymentInfo",
    {
      paymentType: {
        type: DataTypes.STRING,
      },
      appliedProcess: {
        type: DataTypes.STRING,
      },
      cancel: {
        type: DataTypes.STRING,
      },
      overLimit: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "servicePaymentInfo",
    }
  );
  ServicePaymentInfo.associate = function (models) {};
  return ServicePaymentInfo;
};
