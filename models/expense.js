module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        expenseName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        expenseAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                gt: 0
            }
        },
        expenseDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        expenseType: {
            type: DataTypes.ENUM('rent', 'utilities', 'other'),
            allowNull: false
        },
        paid: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        paidBy: {
            type: DataTypes.STRING
        }
    });

    Expense.associate = function(models) {
        Expense.belongsTo(models.User);
    };

    Expense.associate = function(models) {
        Expense.belongsTo(models.Home);
    };

    return Expense;
};