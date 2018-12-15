module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    userUniqueID: DataTypes.STRING,
    name: DataTypes.STRING,
    goalWeight: DataTypes.INTEGER,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    timeFrameAmount: DataTypes.INTEGER,
    timeFrameType: DataTypes.STRING,
  });

  Goal.associate = function(models) {
    // A Goal can't be created without an Author due to the foreign key constraint
    Goal.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Goal;
};
