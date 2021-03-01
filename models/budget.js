module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        rent: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        utilities: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rent: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    });

    Budget.associate = function(models) {
        Budget.belongsTo(models.Home);
    };

    Budget.associate = function(models) {
        Budget.hasMany(models.Expense);
    };

    Budget.associate = function(models) {
        Budget.hasMany(models.User);
    };

    return Budget;
};
