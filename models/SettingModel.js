var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getSettingByCode = function getSettingByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_setting WHERE setting_id = '" + data.setting_id + "'";//showdata editview

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


Task.updateSettingBy = function updateSettingBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_setting` SET "
            + "`setting_id` = '" + data.setting_id + "',"
            + "`setting_name` = '" + data.setting_name + "',"
            + "`setting_logo` = '" + data.setting_logo + "',"
            + "`setting_phone` = '" + data.setting_phone + "',"
            + "`setting_email` = '" + data.setting_email + "',"
            + "`setting_fax` = '" + data.setting_fax + "',"
            + "`setting_open` = '" + data.setting_open + "',"
            + "`setting_page_id` = '" + data.setting_page_id + "',"
            + "`setting_facebook` = '" + data.setting_facebook + "',"
            + "`setting_google_plus` = '" + data.setting_youtube + "',"
            + "`setting_youtube` = '" + data.setting_google_plus + "',"
            + "`setting_url` = '" + data.setting_url + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_setting.setting_id = '" + data.setting_id + "'";

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



module.exports = Task;