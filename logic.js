var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "a",
    database: "greatBay_DB"
  });
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    run();
  });

function run(){
    inquirer.prompt({
        type: "list",
        name: "menu",
        message: "Would you like to [POST] a new auction or [BID] on a current auction",
        choices: ["POST", "BID"]
    }).then(function(answers) {
        switch(answers.menu){
            case 'POST':
                postAuction();
                break;
            case 'BID':
                bidAuction();
                break;
        }
    });
}
// connection.query("whatever our query is", function(err, res){
//     if(err){
//         console.log(err);
//     }

// });


function postAuction(){
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the product you are posting?"
        },
        {
            name: "price",
            message: "What is the starting bid of this product?",
            validate: function(value){
                if(isNaN(value)){
                    // console.log("Please enter a valid number");
                    return 'Please enter a valid number';
                }
                else{
                    return true;
                }
            }
    }]).then(function(answers){
            connection.query("INSERT INTO auctions SET ?",
            {
              name: answers.name,
              price: answers.price
            }, function(err, res){
            if (err){
                console.log(err);
            }
            console.log(res.affectedRows + " product inserted!\n");
            run();
            })
        })
}

function bidAuction(){
    console.log("Bidded");
    run();
}
// run();