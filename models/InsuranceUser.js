module.exports = (sequelize, DataTypes) => {
  const InsuranceUser = sequelize.define(
    "InsuranceUser",
    {
      countyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      identificationNumber: {
        type: DataTypes.STRING,
      },
      taxNumber: {
        type: DataTypes.STRING,
      },
      mobilePhoneNumber: {
        type: DataTypes.STRING,
      },
      workPhoneNumber: {
        type: DataTypes.STRING,
      },
      homePhoneNumber: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "insuranceUser",
    }
  );
  InsuranceUser.associate = function (models) {
    InsuranceUser.hasMany(models.Policy, {
      foreignKey: "insuranceUserId",
      as: "policies",
    });
    InsuranceUser.belongsTo(models.County, {
      foreignKey: "countyId",
      as: "county",
    });
  };
  return InsuranceUser;
};
