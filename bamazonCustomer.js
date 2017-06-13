var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "Bamazon_DB"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

function Start(){
  inquirer.prompt([
  {
    name: "action",
    type: "input",
    message: "Enter the ID of the item you would like to buy",
  },
  {
    name: "quantity",
    type: "input",
    message: "Enter the number of that item you wish to purchase"
  }
  ]).then(function(answer) {
      //response
      console.log("you picked item number : " + answer.action);
      var itemID = answer.action;
      var itemQuantity = answer.quantity;
      query ="select stock_quantity from products where item_id = " + itemID;
      // console.log(query);
      // console.log(itemQuantity);
      var StockQuantity;
      connection.query(query, function(err, res) {
        console.log(res[0].stock_quantity);        
        StockQuantity = res[0].stock_quantity;
        return;
      }), function(err){ 
        if (StockQuantity < itemQuantity){
          console.log("Insufficient Quantity!");
        }
        if (StockQuantity < itemQuantity){
          
        } 
      };
  });
};    

function DisplayDB(){
var query = "SELECT item_id, product_name, department_name, price, stock_quantity from products";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("item_id: " + res[i].item_id + " || product_name: " + res[i].product_name + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
        console.log("");
      }
    }), function(err){
      console.log("");
      Start();
      };
    }

DisplayDB();
