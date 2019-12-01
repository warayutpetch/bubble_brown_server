var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.checkEntrepreneurLogin = function checkEntrepreneurLogin(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_entrepreneur WHERE entrepreneur_username = " + sql.escape(data.entrepreneur_username) + ""
            + " AND entrepreneur_password = " + sql.escape(data.entrepreneur_password) + "";

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

Task.getEntrepreneurBy = function getEntrepreneurBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_entrepreneur";

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

Task.getEntrepreneurrMaxCode = function getEntrepreneurrMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(entrepreneur_code),3, 6)+1,4,'0') AS entrepreneur_code_max FROM `tb_entrepreneur` "; //insert usercode

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

Task.insertEntrepreneurBy = function insertEntrepreneurBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_entrepreneur` ("
            + "`entrepreneur_code`,"
            + "`entrepreneur_name_th`,"
            + "`entrepreneur_name_en`,"
            + "`entrepreneur_username`,"
            + "`entrepreneur_password`,"
            + "`entrepreneur_tel`,"
            + "`entrepreneur_email`,"
            + "`entrepreneur_address`,"
            + "`entrepreneur_img`,"
            + "`district_id`,"
            + "`amphur_id`,"
            + "`province_id`,"
            + "`user_zipcode`,"
            + "`addby`,"
            + "`adddate`,"
            + "`updateby`,"
            + "`lastupdate`"
            + ") VALUES ("
            + " '" + data.entrepreneur_code + "', "
            + " '" + data.entrepreneur_name_th + "', "
            + " '" + data.entrepreneur_name_en + "', "
            + " '" + data.entrepreneur_username + "', "
            + " '" + data.entrepreneur_password + "', "
            + " '" + data.entrepreneur_tel + "', "
            + " '" + data.entrepreneur_email + "', "
            + " '" + data.entrepreneur_address + "', "
            + " '" + data.entrepreneur_img + "', "
            + " '" + data.district_id + "', "
            + " '" + data.amphur_id + "', "
            + " '" + data.province_id + "', "
            + " '" + data.user_zipcode + "', "
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

Task.getEntrepreneurByCode = function getEntrepreneurByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_entrepreneur WHERE entrepreneur_code = '" + data.entrepreneur_code + "'";//showdata editview

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

Task.updateEntrepreneurBy = function updateEntrepreneurBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_code` = '" + data.entrepreneur_code + "',"
            + "`entrepreneur_name_th` = '" + data.entrepreneur_name_th + "',"
            + "`entrepreneur_name_en` = '" + data.entrepreneur_name_en + "',"
            + "`entrepreneur_username` = '" + data.entrepreneur_username + "',"
            + "`entrepreneur_password` = '" + data.entrepreneur_password + "',"
            + "`entrepreneur_tel` = '" + data.entrepreneur_tel + "',"
            + "`entrepreneur_email` = '" + data.entrepreneur_email + "',"
            + "`entrepreneur_address` = '" + data.entrepreneur_address + "',"
            + "`entrepreneur_img` = '" + data.entrepreneur_img + "',"
            + "`district_id` = '" + data.district_id + "',"
            + "`amphur_id`= '" + data.amphur_id + "',"
            + "`province_id` = '" + data.province_id + "',"
            + "`user_zipcode` = '" + data.user_zipcode + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";


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

Task.deleteByCode = function deleteByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_entrepreneur WHERE entrepreneur_code = '" + data.entrepreneur_code + "'";//showdata editview
    
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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_name_th` = '" + data.entrepreneur_name_th + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_email` = '" + data.entrepreneur_email + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_tel` = '" + data.entrepreneur_tel + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_password` = '" + data.entrepreneur_password + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_img` = '" + data.image_names + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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

Task.ForgotPasswordEntrepreneurBy = function ForgotPasswordEntrepreneurBy(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:",data);
        var str = "SELECT  * FROM tb_entrepreneur WHERE md5(entrepreneur_email) = '" + data.email + "'";//showdata editview


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
        console.log("data:",data);
        
        var str = "UPDATE `tb_entrepreneur` SET "
            + "`entrepreneur_password` = '" + data.entrepreneur_password + "'" 
            + "WHERE tb_entrepreneur.entrepreneur_code = '" + data.entrepreneur_code + "'";

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