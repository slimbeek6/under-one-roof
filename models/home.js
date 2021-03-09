// var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var Home = sequelize.define("Home", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unqiue: true,
            validate: {
                len: [3],
                isEmail: true 
            }
        }
    });
    
    // Home.prototype.validPassword = function(password) {
        // console.log(password);
        // console.log(this.password);
    //     return bcrypt.compareSync(password, this.password);
    // };
    // Home.addHook("beforeCreate", function(Home) {
    //     Home.password = bcrypt.hashSync(Home.password, bcrypt.genSaltSync(10), null);
    // });

    // Home.associate = function(models) {
    //     Home.hasMany(models.User, {
    //         onDelete: "cascade"
    //     });
    // };

    Home.associate = function(models) {
        Home.hasMany(models.Chore, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Event, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Expense, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.User, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    return Home;
};