# burger-sequelize
Burger creating and eating app - now made with sequelize ORM


# Week 15 Assignment - Burger 2: The Sequel!

### Overview
In this assignment, you're going to Sequelize the `Burger` app you made last week. We've split this exercise into three different tiers, all with different tasks and expectations. Finish whichever tier will provide you with the most reasonable challenge.

## Instructions 

#### Tier 1: Sequelized! (Basic to Moderate)

* Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

#### Tier 2: Customer Associations (Challenge)

* Add in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with your Burger model.

* customer must input their name to see see the app
* when customer submits name, add a record to customers with name
* saves customer name and ID to local js variable
* whenever they devour or create a burger, put their name in the html box, and put the ID into the createdBy/devouredBy col in the burgers table
* show a "logout" button that resets local js variable sends back to first screen

* If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.