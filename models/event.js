module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
      
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      }
      
  });

  // Event.associate = function(models) {
  //     Event.hasMany(models.Chore, {
  //         onDelete: "cascade"
  //     });
  // };


  return Event;
};