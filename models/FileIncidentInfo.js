module.exports = (sequelize, DataTypes) => {
  const FileIncidentInfo = sequelize.define(
    "FileIncidentInfo",
    {
      countyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateTime: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      addressDetail: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "fileIncidentInfo",
    }
  );
  FileIncidentInfo.associate = function (models) {
    FileIncidentInfo.belongsTo(models.County, {
      foreignKey: "countyId",
      as: "county",
    });
  };
  return FileIncidentInfo;
};
