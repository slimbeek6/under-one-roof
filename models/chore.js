module.exports = function(sequelize, DataTypes) {
    var Chore = sequelize.define("Chore", {

        choreName: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {len: [1]}
        },
        choreDescription: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {len: [1]}
        },
        choreFrequency: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //     min: 1,
            //     max: 365
            //}
        }
    });

    // Chore.associate = function(models) {
    //     Chore.hasMany(models.User, {
    //         onDelete: "cascade"
    //     });
    // };

    return Chore;
};