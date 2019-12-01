var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getAboutByCode = function getAboutByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_detail WHERE detail_id = '" + data.detail_id + "'";//showdata editview

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
        var str = "UPDATE `tb_detail` SET "
            + "`detail_id` = '" + data.detail_id + "',"
            + "`detail_header_th` = '" + data.detail_header_th + "',"
            + "`detail_header_en` = '" + data.detail_header_en + "',"
            + "`detail_footer_th` = '" + data.detail_footer_th + "',"
            + "`detail_footer_en` = '" + data.detail_footer_en + "',"
            + "`detail_img` = '" + data.detail_img + "',"
            + "`detail_th` = '" + data.detail_th + "',"
            + "`detail_en` = '" + data.detail_en + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_detail.detail_id = '" + data.detail_id + "'";

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