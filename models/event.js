const { DATE } = require("sequelize")

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Event.associate = function(models) {
        Event.hasMany(models.User);
    };  

    Event.associate = function(models) {
        Event.belongsTo(models.Home);
    };

    return Event;
};