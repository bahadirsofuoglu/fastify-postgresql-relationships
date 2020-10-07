module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define(
    "Policy",
    {
      insuranceUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      no: {
        type: DataTypes.STRING,
      },
      assistants: {
        type: DataTypes.BOOLEAN,
      },
      startDate: {
        type: DataTypes.STRING,
      },
      expiriyDate: {
        type: DataTypes.STRING,
      },
    },

    {
      tableName: "policy",
    }
  );
  Policy.associate = function (models) {
    Policy.belongsTo(models.InsuranceUser, {
      foreignKey: "insuranceUserId",
    });
  };
  return Policy;
};
