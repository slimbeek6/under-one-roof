module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
      eventName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      eventDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // description: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // }
  });

  // Event.associate = models => {
  //     models.Event.belongsTo(models.User, { as: "host" })
  //     models.Event.hasMany(models.UserEvent, { onDelete: "cascade" })
  // };
  
  return Event;
};