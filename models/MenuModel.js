var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getMenuBy = function getMenuBy(data) {
    return new Promise(function (resolve, reject) {//menu list
        var str = "SELECT  * FROM tb_menu ";

        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};
Task.getMenuByCode = function getMenuByCode(data) {
    return new Promise(function (resolve, reject) {//menu list
        var str = "SELECT  * FROM tb_menu as tb1"
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_code = tb2.menu_type_code "
            + " WHERE tb1.menu_type_code = '" + data.menu_type_code + "' ";

        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.insertMenu = function insertMenu(data) {
    // console.log('str : ', data);
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_menu` ("
            + "`menu_code`,"
            // + "`menu_id`,"
            + "`menu_type_code`,"
            + "`menu_name`,"
            // + "`menu_image`,"
            + "`menu_price`,"
            // + "`adddate`,"
            // + "`lastupdate`"
            // + "`updateby`,"
            // + "`addby`,"

            + ") VALUES ("
            + " '" + data.menu_code + "', "
            // + " '" + data.menu_id + "', "
            + " '" + data.menu_type_code + "', "
            + " '" + data.menu_name + "', "
            // + " '" + data.menu_image + "', "
            + " '" + data.menu_price + "' "
            // + " '" + data.addby + "', "
            // + " '" + timeController.reformatToSave(new Date()) + "', "
            + " ) "


        // console.log('checkLogin : ', data);
        console.log('str : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};


Task.getMenuMaxCode = function getMenuMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(IFNULL( max(menu_code),1),4,5)+1,3,'0') AS menu_code_max FROM `tb_menu` "; //insert menucode

        console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.updateMenuByCode = function updateMenuByCode(data) {
    
    return new Promise(function (resolve, reject) {  
        console.log('update : ', data);
        var str = "UPDATE `tb_menu` SET "
            // + "`menu_code` = '" + data.menu_code + "',"
            // + "`menu_id`= '" + data.menu_id + "',"
            + "`menu_type_code`= '" + data.menu_type_code + "',"
            + "`menu_name`= '" + data.menu_name + "',"
            // + "`menu_image`= '" + data.menu_image + "',"
            + "`menu_price` = '" + data.menu_price + "'"
            + "WHERE menu_code = '" + data.menu_code + "'";
      
        // console.log('str111111111 : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.deleteMenuByCode = function deleteMenuByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "DELETE FROM `tb_menu` WHERE `tb_menu`.`menu_code` ='"+ data.menu_code +"'" ;

        console.log('menu_codedel : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

// Task.deleteByCode = function deleteByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "DELETE FROM tb_menu WHERE menu_code = '" + data.menu_code + "'";//showdata editview

//         console.log('checkLogin : ', str);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: false,
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: true,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getUserByCode = function getUserByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  * FROM tb_menu WHERE menu_code = '" + data.menu_code + "'";//showdata editview

//         console.log('checkLogin : ', str);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res[0],
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getUserLoginBy = function getUserLoginBy(data) {
//     return new Promise(function (resolve, reject) { //menu list
//         var str = "SELECT  * FROM tb_menu WHERE  `menu_menuname`= " + sql.escape(data.menu_menuname) + ""
//             + " AND `menu_password` =" + sql.escape(data.menu_password) + "";

//         console.log('checkLogin : ', str);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };




module.exports = Task;