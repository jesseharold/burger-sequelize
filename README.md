# burger-sequelize
Burger creating and eating app - now made with sequelize ORM


# Week 15 Assignment - Burger 2: The Sequel!

### Overview
In this assignment, you're going to Sequelize the `Burger` app you made last week. We've split this exercise into three different tiers, all with different tasks and expectations. Finish whichever tier will provide you with the most reasonable challenge.

### Before you Begin
1. Create a new folder called `sequelizedBurger`
2. Copy the contents of your completed assignment from last week.
	* Remove the older git connection with `rm -R .git`. 
	* Then connect this folder with a new github repo.
3. Run `sequelize init` to create the neccesary sequel files.

## Instructions 

#### Tier 1: Sequelized! (Basic to Moderate)

	* Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

#### Tier 2: Customer Associations (Challenge)

* Add in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with your Burger model.

* What kind of association you would like to use is up to you. Does a Customer have one Burger? Many Burgers?

* For example, you could make a site that logs the name of which Customer ate which Burger, where each Customer only gets one Burger. If you can't think of another type of association, try this one!

	![3-Associated](Images/3-Associated.jpg)

* If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.