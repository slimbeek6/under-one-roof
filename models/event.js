module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
      title: {
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

  Event.associate = models => {
      models.Event.belongsTo(models.User, { as: "host" })
      models.Event.hasMany(models.UserEvent, { onDelete: "cascade" })
  };
  
  return Event;
};