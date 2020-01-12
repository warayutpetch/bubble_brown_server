var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.checkAboutLogin = function checkAboutLogin(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_about WHERE about_username = " + sql.escape(data.about_username) + ""
            + " AND about_password = " + sql.escape(data.about_password) + "";

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

Task.getAboutBy = function getAboutBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_about WHERE deleted = 0";

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

Task.getAboutrMaxCode = function getAboutrMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(about_code),3, 6)+1,4,'0'),0001) AS about_code_max FROM `tb_about` "; //insert usercode

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

Task.insertAboutBy = function insertAboutBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_about` ("
            + "`about_code`,"
            + "`about_name_th`,"
            // + "`about_name_en`,"
            + "`about_username`,"
            + "`about_password`,"
            + "`about_tel`,"
            + "`about_email`,"
            + "`about_address`,"
            + "`about_img`,"
            + "`district_id`,"
            + "`amphur_id`,"
            + "`province_id`,"
            + "`user_zipcode`,"
            + "`latitude`,"
            + "`longitude`,"
            + "`about_menu_data`,"
            + "`addby`,"
            + "`adddate`,"
            + "`updateby`,"
            + "`lastupdate`"
            + ") VALUES ("
            + " '" + data.about_code + "', "
            + " '" + data.about_name_th + "', "
            // + " '" + data.about_name_en + "', "
            + " '" + data.about_username + "', "
            + " '" + data.about_password + "', "
            + " '" + data.about_tel + "', "
            + " '" + data.about_email + "', "
            + " '" + data.about_address + "', "
            + " '" + data.about_img + "', "
            + " '" + data.district_id + "', "
            + " '" + data.amphur_id + "', "
            + " '" + data.province_id + "', "
            + " '" + data.user_zipcode + "', "
            + " '" + data.latitude + "', "
            + " '" + data.longitude + "', "
            + " '" + data.about_menu_data + "', "
            + " '" + data.addby + "', "
            + " '" + timeController.reformatToSave(new Date()) + "', "
            + " '', "
            + " '' "
            + " ) "


        // console.log('checkLogin : ', data);
        // console.log('checkLogin : ', str);

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

Task.getAboutByCol = function getAboutByCol(data) {
    return new Promise(function (resolve, reject) {

        var str = "SELECT  * "
            + " FROM tb_about  "
            + " LEFT JOIN tb_amphur ON `tb_about`.`amphur_id` = tb_amphur.amphur_id "
            + " LEFT JOIN tb_province ON `tb_about`.`province_id` = tb_province.province_id "
            + " LEFT JOIN tb_district ON `tb_about`.`district_id` = tb_district.district_id "
            + "WHERE tb_about.about_code = '" + data.about_code + "' "
            ;

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

Task.getAboutByCode = function getAboutByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_about WHERE about_code = '" + data.about_code + "'";//showdata editview

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

Task.updateAboutBy = function updateAboutBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_about` SET "
            + "`about_code` = '" + data.about_code + "',"
            + "`about_name_th` = '" + data.about_name_th + "',"
            + "`about_username` = '" + data.about_username + "',"
            + "`about_password` = '" + data.about_password + "',"
            + "`about_tel` = '" + data.about_tel + "',"
            + "`about_email` = '" + data.about_email + "',"
            + "`about_address` = '" + data.about_address + "',"
            + "`about_img` = '" + data.about_img + "',"
            + "`district_id` = '" + data.district_id + "',"
            + "`amphur_id`= '" + data.amphur_id + "',"
            + "`province_id` = '" + data.province_id + "',"
            + "`user_zipcode` = '" + data.user_zipcode + "',"
            + "`latitude` = '" + data.latitude + "',"
            + "`longitude` = '" + data.longitude + "',"
            + "`about_menu_data` = '" + data.about_menu_data + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";


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

Task.updateAboutMainBranceByCode = function updateAboutMainBranceByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_about` SET about_main_brance = '" + data.about_code + "'";

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

Task.deleteAbout = function deleteAbout(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_about` SET"
            // + "`order_list_code`= '" + data.order_list_code + "',"
            + "`deleted`= '1'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";
        console.log("data:", data);

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
}

Task.deleteByCode = function deleteByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_about WHERE about_code = '" + data.about_code + "'";//showdata editview

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

Task.updateNameBy = function updateNameBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_name_th` = '" + data.about_name_th + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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

Task.updateEmailBy = function updateEmailBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_email` = '" + data.about_email + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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

Task.updatePhoneBy = function updatePhoneBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_tel` = '" + data.about_tel + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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

Task.updatePasswordBy = function updatePasswordBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_password` = '" + data.about_password + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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

Task.updateNameImg = function updateNameImg(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_img` = '" + data.image_names + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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

Task.ForgotPasswordAboutBy = function ForgotPasswordAboutBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);
        var str = "SELECT  * FROM tb_about WHERE md5(about_email) = '" + data.email + "'";//showdata editview


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

Task.updateForPasswordBy = function updateForPasswordBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:", data);

        var str = "UPDATE `tb_about` SET "
            + "`about_password` = '" + data.about_password + "'"
            + "WHERE tb_about.about_code = '" + data.about_code + "'";

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