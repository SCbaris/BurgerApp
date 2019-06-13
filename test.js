var changedBurgerCondition=false;
var changedBurgerOldCondition = false;
var IDnumber = 2;

if (changedBurgerOldCondition==true){ 
    changedBurgerCondition=false
}
else if (changedBurgerOldCondition==false){ 
    changedBurgerCondition=true
};
var query = "UPDATE burgers";
query += " SET ";
query += "devoured=";
query += changedBurgerCondition
query += " WHERE ";
query += "id=" + IDnumber;

console.log(query);