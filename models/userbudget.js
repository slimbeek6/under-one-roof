module.exports = function (sequelize, DataTypes) {
    var UserBudget = sequelize.define("UserBudget", {
    });

    UserBudget.associate = models => {
        models.UserBudget.belongsTo(models.User, {onDelete: "cascade"});
        models.UserBudget.belongsTo(models.Budget, {onDelete: "cascade"});
    }
    
    return UserBudget;
}
