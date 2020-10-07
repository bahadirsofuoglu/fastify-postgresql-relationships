module.exports = (sequelize, DataTypes) => {
  const FileVehicleInfo = sequelize.define(
    "FileVehicleInfo",
    {
      modelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      plateNumber: {
        type: DataTypes.STRING,
      },
      modelYear: {
        type: DataTypes.STRING,
      },
      chasisNo: {
        type: DataTypes.STRING,
      },
      motorNo: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "fileVehicleInfo",
    }
  );
  FileVehicleInfo.associate = function (models) {
    FileVehicleInfo.belongsTo(models.Model, {
      foreignKey: "modelId",
      as: "model",
    });
  };
  return FileVehicleInfo;
};
