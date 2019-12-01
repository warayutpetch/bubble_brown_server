var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.checkAdminModelLogin = function checkAdminModelLogin(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_admin WHERE admin_username = " + sql.escape(data.member_email) + ""
            + " AND admin_password = " + sql.escape(data.member_password) + "";

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


Task.getAdminby = function getAdminby() {
    return new Promise(function (resolve, reject) {

        var str = "SELECT  `admin_code` , "
            + " `admin_name` , "
            + " `admin_lastname` , "
            + " `admin_email` , "
            + " `admin_mobile` , "
            + " `admin_username` , "
            + " `district_id` , "
            + " `amphur_id` ,  "
            + " `province_id` ,"
            + " `admin_zipcode` "
            + " FROM tb_admin ";

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

Task.getAdminMaxCode = function getAdminMaxCode() {

    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(admin_code),2, 5)+1,4,'0')   AS admin_code_max  FROM `tb_admin`";
        console.log('checkAdmin : ', str);
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

Task.insertAdminBy = function insertAdminBy(data) {

    return new Promise(function (resolve, reject) {

        var str = "INSERT INTO `tb_admin`( "
            + "  `admin_code`,"
            + "  `admin_name`, "
            + "  `admin_lastname`,"
            + "  `admin_email`, "
            + "  `admin_mobile`, "
            + "  `admin_username`, "
            + "  `admin_password`, "
            + "  `admin_img`, "
            + "  `district_id`, "
            + "  `amphur_id`,"
            + "  `province_id`, "
            + "  `admin_zipcode`, "
            + "  `addby`, "
            + "  `adddate`, "
            + "  `updateby`, "
            + "  `lastupdate`"
            + " ) VALUES ( "
            + " '" + data.admin_code + "', "
            + " '" + data.admin_name + "', "
            + " '" + data.admin_lastname + "', "
            + " '" + data.admin_email + "', "
            + " '" + data.admin_mobile + "', "
            + " " + sql.escape(data.admin_username) + ", "
            + " " + sql.escape(data.admin_password) + ", "
            + " '" + data.admin_img + "', "
            + " '" + data.district_id + "', "
            + " '" + data.amphur_id + "', "
            + " '" + data.province_id + "', "
            + " '" + data.admin_zipcode + "', "
            + " '" + data.addby + "', "
            + " '" + timeController.reformatToSave(new Date()) + "', "
            + " '' , "
            + " '' "
            + " ) "


        // console.log('checkAdmin : ', data);
        console.log('checkAdmin : ', str);
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

Task.getAdminbyCode = function getAdminbyCode(data) {
    return new Promise(function (resolve, reject) {

        var str = "SELECT  `admin_code` , "
            + " `admin_prefix` , "
            + " `admin_name` , "
            + " `admin_lastname` , "
            + " `admin_email` , "
            + " `admin_mobile` , "
            + " `admin_username` , "
            + " `admin_password` , "
            + " `district_id` , "
            + " `amphur_id` ,  "
            + " `province_id` ,"
            + " `admin_img` ,"
            + " `admin_zipcode` "
            + " FROM tb_admin "
            + " WHERE tb_admin.admin_code = '" + data.admin_code + "'";

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

Task.updateAdminBy = function updateAdminBy(data) {

    return new Promise(function (resolve, reject) {

        var str = " UPDATE `tb_admin` SET "
            + "`admin_prefix` = '" + data.admin_prefix + "' ,"
            + "`admin_name` = '" + data.admin_name + "' ,"
            + "`admin_lastname` = '" + data.admin_lastname + "' ,"
            + "`admin_email` = '" + data.admin_email + "' ,"
            + "`admin_mobile` = '" + data.admin_mobile + "' ,"
            + "`admin_username` = " + sql.escape(data.admin_username) + " ,"
            + "`admin_password` = " + sql.escape(data.admin_password) + " ,"
            + "`admin_img` = '" + data.admin_img + "' ,"
            + "`district_id` = '" + data.district_id + "' ,"
            + "`amphur_id` = '" + data.amphur_id + "' ,"
            + "`province_id` = '" + data.province_id + "' ,"
            + "`admin_zipcode` = '" + data.admin_zipcode + "' ,"
            + "`updateby` = '" + data.updateby + "' ,"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "' "
            + " WHERE tb_admin.admin_code = '" + data.admin_code + "'";

        console.log('checkAdmin : ', str);
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



Task.deleteAdminBy = function deleteAdminBy(data) {

    return new Promise(function (resolve, reject) {

        var str = " DELETE  FROM `tb_admin` WHERE  admin_code = '" + data.admin_code + "'";

        console.log('checkAdmin : ', str);

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


module.exports = Task;