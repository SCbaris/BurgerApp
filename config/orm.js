var connection=require("./connection");

var orm = {
    selectAll: function(cb){ // cb means call back. we send all result inside of this function
                             // in this way we dont have to put every result inside of value
                             // cb(res) can give our resoult
        var query = "SELECT * FROM burgers;" 
        connection.query(query,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        })
    },

    insertOne: function(userBurger ,cb){
        var query = "INSERT INTO burgers";
        query += " (burger_name) ";
        query += "VALUES ('"+  userBurger + "');"
        //devoured default is false. 
        //Whenever client enter a burger name it will go no eaten part.

        console.log(query);

        connection.query(query,userBurger,function(err,result){
            if(err){
                throw err;
            }

            cb(result);
        })
    }, 

    updateOne: function(changedBurgerOldCondition, IDnumber ,cb){
        var changedBurgerCondition=false;
        if (changedBurgerOldCondition==true) changedBurgerCondition=false;
        else if(changedBurgerOldCondition==false) changedBurgerCondition=true;
        var query = "UPDATE burgers";
        query += " SET ";
        query += "devoured=";
        query += changedBurgerCondition
        query += " WHERE ";
        query += "id = " + IDnumber + " ;" ;
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
        });      
    }
}

//orm has 3 function


//orm.selectAll(function(res)){console.log(res)} // it gives all database members.

//orm.insertOne("Philly Cheese Steak Burger" , function(res)){console.log(res)} // it help us to put another burger inside of our database

//orm.updateOne("false" , 3 , function(res){console.log(res)}) // i will use this before select all. 
//Because i need ID (which item we want to chance.)
//We need need oldCondition of this item devaour state.

module.exports = orm;

//send to controller