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
    },
    {
      // We're saying that we want our Customer to have Burgers
      classMethods: {
        associate: function(models) {
          Burger.belongsTo(models.Customer,
            {
//              onDelete: "cascade",
//              foreignKey: {
//                allowNull: false
//              }
            });
        }
      }
    });
    return Burger;
};