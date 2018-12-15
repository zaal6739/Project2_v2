  module.exports = function(sequelize, DataTypes) {
  var Tracking = sequelize.define("weighttracking", {/*changed to 'Login' from "Todo"*/
    username: DataTypes.STRING,
    dateweighed:DataTypes.STRING,
    weight: DataTypes.STRING
  });
  return Tracking;
  
};
