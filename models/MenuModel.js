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
    return new Promise(function (resolve, reject) {//user list
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
    return new Promise(function (resolve, reject) {//user list
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

Task.getManuMaxCode = function getManuMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(menu_code),3 ,7)+1,6, '0'),'001') AS menu_code_max FROM `tb_menu` "
            + "WHERE menu_type_code = '" + data.menu_type_code + "'"

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



// Task.updateUserBy = function updateUserBy(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "UPDATE `tb_user` SET "
//             + "`user_code` = '" + data.user_code + "',"
//             + "`user_prefix` = '" + data.user_prefix + "',"
//             + "`user_name` = '" + data.user_name + "',"
//             + "`user_lastname` = '" + data.user_lastname + "',"
//             + "`user_email` = '" + data.user_email + "',"
//             + "`user_mobile` = '" + data.user_mobile + "',"
//             + "`user_password` = " + sql.escape(data.user_password) + ","
//             + "`user_username` = " + sql.escape(data.user_username) + ","
//             + "`user_address` = '" + data.user_address + "',"
//             + "`user_profile_img` = '" + data.user_profile_img + "',"
//             + "`district_id` = '" + data.district_id + "',"
//             + "`amphur_id`= '" + data.amphur_id + "',"
//             + "`province_id` = '" + data.province_id + "',"
//             + "`user_zipcode` = '" + data.user_zipcode + "',"
//             + "`updateby` = '" + data.updateby + "',"
//             + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
//             + "WHERE tb_user.user_code = '" + data.user_code + "'";


//         // console.log('checkLogin : ', data);
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

// Task.deleteByCode = function deleteByCode(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "DELETE FROM tb_user WHERE user_code = '" + data.user_code + "'";//showdata editview

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
//         var str = "SELECT  * FROM tb_user WHERE user_code = '" + data.user_code + "'";//showdata editview

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
//     return new Promise(function (resolve, reject) { //user list
//         var str = "SELECT  * FROM tb_user WHERE  `user_username`= " + sql.escape(data.user_username) + ""
//             + " AND `user_password` =" + sql.escape(data.user_password) + "";

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