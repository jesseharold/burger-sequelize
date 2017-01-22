module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false, 
            defaultValue: 0
        }, 
        createdBy: DataTypes.INTEGER,
        devouredBy: DataTypes.INTEGER
    });
    return Burger;
};