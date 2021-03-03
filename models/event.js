module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
      
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
  });

  // Event.associate = function(models) {
  //     Event.hasOne(models.User, {
  //         // onDelete: "cascade"
  //     });
  // };


  return Event;
};