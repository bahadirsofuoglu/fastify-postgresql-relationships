module.exports = (sequelize, DataTypes) => {
  const FileCustomer = sequelize.define(
    "FileCustomer",
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      fullname: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.firstname} ${this.lastname}`;
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "fileCustomer",
    }
  );
  FileCustomer.associate = function (models) {
    // associations can be defined here
  };
  return FileCustomer;
};
