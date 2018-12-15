module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    loggedIn: DataTypes.BOOLEAN,
    userUniqueID: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    heightFeet: DataTypes.DECIMAL,
    heightInches: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL,
  });

  User.associate = function(models) {
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Goal, {
      onDelete: "cascade"
    });
  };

  return User;
};
