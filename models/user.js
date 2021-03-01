// var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contact: [{
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3],
                isEmail: true 
            }
          },
          phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isNumeric: true
          }
        }],
        emergency: [{
          name: {
            type: DataTypes.STRING,
          },
          relationship: {
            type: DataTypes.STRING
          },
          phone: {
            type: DataTypes.STRING
          }
        }]
    });
    
    // User.prototype.validPassword = function(password) {
    //     // console.log(password);
    //     // console.log(this.password);
    //     return bcrypt.compareSync(password, this.password);
    // };
    // User.addHook("beforeCreate", function(user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });

    User.associate = function(models) {
        User.hasMany(models.Chore, {
            onDelete: "cascade"
        });
    };

    User.associate = function(models) {
      User.hasMany(models.Expense, {
          onDelete: "cascade"
      });
    };

    User.associate = function(models) {
      User.hasOne(models.Budget, {
          // onDelete: "cascade"
      });
    };

    User.associate = function(models) {
      User.hasMany(models.Event, {
          // onDelete: "cascade"
      });
    };

    return User;
};