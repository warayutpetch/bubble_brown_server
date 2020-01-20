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
        var str = "SELECT  * FROM tb_menu as tb1"
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id"
        if (data.about_menu_data == 1) {
            str += " WHERE  tb1.about_code = '" + data.about_code + "' OR tb1.about_code = '" + data.about_main_branch + "' "
        } else {
            str += " WHERE tb1.about_code = '" + data.about_code + "' "
        }

        console.log('checkLogin : ', str);
        // console.log('dataaaa : ', data);

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

Task.getMenuByType = function getMenuByType(data) {
    return new Promise(function (resolve, reject) {//menu list
        var str = "SELECT  * FROM tb_menu as tb1"
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id"
            + " WHERE  tb1.menu_type_id = '" + data.menu_type_id + "' "


        console.log('tb_menutb_menutb_menutb_menutb_menu : ', str);


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


Task.getMenuByRecipe = function getMenuByRecipe(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_menu "
        // + " LEFT JOIN tb_recipe  ON tb_menu.menu_code = tb_recipe.menu_code "
        // + " LEFT JOIN tb_product  ON tb_product.product_code = tb_recipe.product_code "
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
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id "
        if (data.about_menu_data == 1) {
            str += " WHERE tb1.menu_type_id = '" + data.menu_type_id + "' AND (tb1.about_code = '" + data.about_code + "' OR tb1.about_code = '" + data.about_main_branch + "') "
        } else {
            str += " WHERE tb1.menu_type_id = '" + data.menu_type_id + "' AND tb1.about_code = '" + data.about_code + "'"
        }
        console.log('checkLogin : ', str);
        console.log('dataaaaa : ', data);

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
Task.getMenuByMenuCode = function getMenuByMenuCode(data) {
    return new Promise(function (resolve, reject) {//menu list
        var str = "SELECT  * FROM tb_menu as tb1 "
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id"
            + " WHERE menu_code = '" + data.menu_code + "' ";

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

Task.insertMenu = function insertMenu(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_menu` ("
            + "`menu_code`,"
            + "`about_code`,"
            + "`menu_type_id`,"
            + "`menu_name`,"
            + "`menu_image`,"
            + "`menu_price`, "
            + "`addby` "
            + ") VALUES ("
            + " '" + data.menu_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.menu_type_id + "', "
            + " '" + data.menu_name + "', "
            + " '" + data.menu_image + "', "
            + " '" + data.menu_price + "', "
            + " '" + data.addby + "' "
            + " ) "

        // console.log(str);

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
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(menu_code),5,7)+1,3, '0'),'001') AS menu_code_max  FROM `tb_menu` "
            + "WHERE menu_type_id = '" + data.menu_type_id + "'"

        console.log('checkLogin565664646 : ', str);

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
            + "`menu_code` = '" + data.menu_code + "',"
            + "`about_code` = '" + data.about_code + "',"
            + "`menu_type_id`= '" + data.menu_type_id + "',"
            + "`menu_name`= '" + data.menu_name + "',"
            + "`menu_image`= '" + data.menu_image + "',"
            + "`menu_price` = '" + data.menu_price + "',"
            + "`updateby` = '" + data.updateby + "'"
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
        var str = "DELETE FROM `tb_menu` WHERE `tb_menu`.`menu_code` ='" + data.menu_code + "'";

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