module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define(
    "Network",
    {
      countyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      telephoneNumber: {
        type: DataTypes.STRING,
      },
      homePhoneNumber: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      fullName: {
        type: DataTypes.STRING,
      },
      assistanceFullName: {
        type: DataTypes.STRING,
      },
      availabilityMobilApp: {
        type: DataTypes.STRING,
      },
      information: {
        type: DataTypes.STRING,
      },
      mapLink: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "network",
    }
  );
  Network.associate = function (models) {
    Network.belongsTo(models.County, {
      foreignKey: "countyId",
      as: "county",
    });
  };
  return Network;
};
