module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "Service",
    {
      fileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      networkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      servicePaymentInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      towTruckCalculationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      tableName: "service",
    }
  );
  Service.associate = function (models) {
    Service.belongsTo(models.File, {
      foreignKey: "fileId",
    });
    Service.belongsTo(models.Network, {
      foreignKey: "networkId",
      as: "network",
    });
    Service.belongsTo(models.ServicePaymentInfo, {
      foreignKey: "servicePaymentInfoId",
      as: "servicePaymentInfo",
    });
    Service.belongsTo(models.TowTruckCalculation, {
      foreignKey: "towTruckCalculationId",
      as: "towTruckCalculation",
    });
    Service.hasMany(models.ServiceSmsMessage, {
      foreignKey: "serviceId",
      as: "serviceSmsMessages",
    });
  };
  return Service;
};
