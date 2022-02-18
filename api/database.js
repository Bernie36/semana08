const mysql = require ('mysql') 
//Create a connecttion 
const mysqlConnection = mysql.createConnection ({
    host:'localhost' ,
    user:'root',
    password:'',
    database:'db_matricula'
}) ; 

mysqlConnection.connect(function(err){
    if(err){
        console.error(err) ; 
        return;
    }
    else {
        console.log('database is conected ')
    }
}) ; 


module.exports = mysqlConnection ; 