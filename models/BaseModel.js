var mysql = require('mysql');

//local mysql db connection // // //

// var connection = mysql.createConnection({
//     connectionimit: 100,
//     host: 'database-1.c9gynadydeka.ap-southeast-1.rds.amazonaws.com',
//     user: 'admin',
//     port: 3306,
//     password: 'root123456',
//     database: 'washing_machine',
//     // charset : 'utf8mb4',
//     multipleStatements: true
// }); 

// host: 'database-rvscs.cdaloohdepaj.ap-southeast-1.rds.amazonaws.com',

// var connection = mysql.createConnection({
//     connectionimit: 100,
//     host: '192.168.0.176',
//     user: 'admin',
//     port: 3306,
//     password: 'root123456',
//     database: 'revelsoft_washing_machine',
//     // charset : 'utf8mb4',
//     multipleStatements: true
// });
var connection = mysql.createConnection({
    connectionimit: 100,
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root123456',
    database: 'bubble_brown',
    // charset : 'utf8mb4',
    multipleStatements: true
}); 

// var connection = mysql.createConnection({
//     connectionimit: 100,
//     host: '192.168.1.100',//'192.168.0.199',
//     user: 'root',
//     port: 3306,
//     password: 'root123456',
//     database: 'revelsoft_washing_machine',
//     // charset : 'utf8mb4',
//     multipleStatements: true
// }); 


/*  Note 
multipleStatements: Allow multiple mysql statements per query. 
Be careful with this, 
it could increase the scope of SQL injection attacks. (Default: false)
 */

connection.connect();

module.exports = connection;