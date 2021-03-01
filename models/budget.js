module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        expenseName: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        expenseAmount: {
            type: DataTypes.Decimal,
            allowNull: false,
            validate: {
                gt: 0
            }
        },
        expenseDate: {
            type: DataTypes.Date,
            allowNull: false
        },
        expenseType: {
            type: DataTypes.ENUM('rent', 'utilities', 'other'),
            allowNull: false
        },
        paid: {
            type: DataTypes.Boolean,
            default: false
        },
        paidBy: {
            type: DataTypes.String
        }
    });

    Budget.associate = function(models) {
        Budget.hasMany(models.User);
    };

    return Budget;
};
