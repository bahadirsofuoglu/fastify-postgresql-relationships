module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      no: {
        type: DataTypes.STRING,
      },
      insuranceUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fileCustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fileVehicleInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fileIncidentInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "file",
    }
  );
  File.associate = function (models) {
    File.belongsTo(
      models.InsuranceUser,
      {
        foreignKey: "insuranceUserId",
        as: "insuranceUser",
      },
      File.belongsTo(models.FileCustomer, {
        foreignKey: "fileCustomerId",
        as: "fileCustomer",
      }),
      File.belongsTo(models.FileVehicleInfo, {
        foreignKey: "fileVehicleInfoId",
        as: "fileVehicleInfo",
      }),
      File.belongsTo(models.FileIncidentInfo, {
        foreignKey: "fileIncidentInfoId",
        as: "fileIncidentInfo",
      }),
      File.hasMany(models.Service, {
        foreignKey: "fileId",
        as: "services",
      }),
      File.hasMany(models.FileSmsMessage, {
        foreignKey: "fileId",
        as: "fileSmsMessages",
      })
    );
  };

  return File;
};
