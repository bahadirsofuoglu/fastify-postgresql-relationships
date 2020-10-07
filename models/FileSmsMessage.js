module.exports = (sequelize, DataTypes) => {
  const FileSmsMessage = sequelize.define(
    "FileSmsMessage",
    {
      fileId: {
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
      tableName: "fileSmsMessage",
    }
  );
  FileSmsMessage.associate = function (models) {};
  return FileSmsMessage;
};
