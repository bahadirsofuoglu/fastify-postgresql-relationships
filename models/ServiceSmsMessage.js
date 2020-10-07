module.exports = (sequelize, DataTypes) => {
  const ServiceSmsMessage = sequelize.define(
    "ServiceSmsMessage",
    {
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      telephoneNumber: {
        type: DataTypes.STRING,
      },
      sendByNumber: {
        type: DataTypes.STRING,
      },

      smsSubject: {
        type: DataTypes.STRING,
      },
      smsText: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "serviceSmsMessage",
    }
  );
  ServiceSmsMessage.associate = function (models) {};
  return ServiceSmsMessage;
};
