var sql = require('./BaseModel');
const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getUserBy = function getUserBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_user "
        + " WHERE deleted = 0";

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
Task.getUserByCode = function getUserByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT * FROM `tb_user` WHERE user_code='" + data.user_code + "'";

        console.log('user_code : ', data);

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

Task.getUserMaxCode = function getUserMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(IFNULL( max(user_code),1),4,5)+1,3,'0') AS user_code_max FROM `tb_user` "; //insert usercode

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

Task.insertUserBy = function insertUserBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_user` ("
            + "`user_code`,"
            + "`user_position`,"
            + "`user_firstname`,"
            + "`user_lastname`,"
            + "`user_image`,"
            + "`user_tel`,"
            + "`user_email`,"
            + "`user_address`,"
            + "`user_username`,"
            + "`user_password`,"
            + "`adddate`,"
            // + "`lastupdate`"
            // + "`updateby`,"
            + "`addby`"

            + ") VALUES ("
            + " '" + data.user_code + "', "
            + " '" + data.user_position + "', "
            + " '" + data.user_firstname + "', "
            + " '" + data.user_lastname + "', "
            + " '" + data.user_image + "', "
            + " '" + data.user_tel + "', "
            + " '" + data.user_email + "', "
            + " '" + data.user_address + "',"
            + " " + sql.escape(data.user_username) + ", "
            + " " + sql.escape(data.user_password) + ", "
            + " '" + data.adddate + "', "
            // + " '" + data.lastupdate + "', "
            // + " '" + data.updateby + "', "
            + " '" + data.addby + "' "
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

Task.updateUserByCode = function updateUserByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_user` SET "
            + "`user_code` = '" + data.user_code + "',"
            + "`user_position`= '" + data.user_position + "',"
            + "`user_firstname`= '" + data.user_firstname + "',"
            + "`user_lastname`= '" + data.user_lastname + "',"
            + "`user_image`= '" + data.user_image + "',"
            + "`user_tel`= '" + data.user_tel + "',"
            + "`user_email`= '" + data.user_email + "',"
            + "`user_address`= '" + data.user_address + "',"
            + "`user_username`= " + sql.escape(data.user_username) + ","
            + "`user_password` = " + sql.escape(data.user_password) + ","
            + "`updateby`= '" + data.updateby + "'"
            + "WHERE user_code = '" + data.user_code + "'";

        // console.log('checkLogin : ', data);
        console.log('checkLogin : ', str);

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


Task.deleteUserByCode = function deleteUserByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "UPDATE `tb_user` SET"
        + "`deleted`= '1'"
        + "WHERE tb_user.user_code = '" + data.user_code + "'";

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