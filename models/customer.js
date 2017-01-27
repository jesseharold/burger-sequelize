module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
      // We're saying that we want our Customer to have Burgers
      classMethods: {
        associate: function(models) {
          // Associating Author with Burger
          Customer.hasMany(models.Burger);
          Customer.hasMany(models.Burger, {as: "devouredBy"});
        }
      }
    });
    return Customer;
};