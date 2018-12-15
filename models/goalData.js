module.exports = function(sequelize, DataTypes) {
    var GoalData = sequelize.define("GoalData", {
      // Giving the Author model a name of type STRING
      userUniqueID: DataTypes.STRING,
      weight: DataTypes.STRING,
    });
  
    return GoalData;
  };
  