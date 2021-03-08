module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

  return Event;
};