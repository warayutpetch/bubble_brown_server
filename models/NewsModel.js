var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getNewsBy = function getNewsBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news ";

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
Task.getNewsByEnterpreneur = function getNewsByEnterpreneur(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_news WHERE news_provision = 'ผู้ประกอบการ' OR news_provision = 'ทั้งหมด'";
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

Task.getNewsMaxCode = function getNewsMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(news_code),3, 5)+1,3,'0') AS news_code_max FROM `tb_news` "; //insert usercode

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

Task.insertNewsBy = function insertNewsBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_news` ("
            + "`news_code`,"
            + "`news_title`,"
            + "`news_detail`,"
            + "`news_description`,"
            + "`news_img`,"
            + "`news_provision`,"
            + "`news_date`,"
            + "`addby`,"
            + "`adddate`,"
            + "`updateby`,"
            + "`lastupdate`"
            + ") VALUES ("
            + " '" + data.news_code + "', "
            + " '" + data.news_title + "', "
            + " '" + data.news_detail + "', "
            + " '" + data.news_description + "', "
            + " '" + data.news_img + "', "
            + " '" + data.news_provision + "', "
            + " '" + timeController.reformatTo(data.news_date) + "', "
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

Task.getNewsByCode = function getNewsByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_news WHERE news_code = '" + data.news_code + "'";//showdata editview

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

Task.updateNewsBy = function updateNewsBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_news` SET "
            + "`news_code` = '" + data.news_code + "',"
            + "`news_title` = '" + data.news_title + "',"
            + "`news_detail` = '" + data.news_detail + "',"
            + "`news_description` = '" + data.news_description + "',"
            + "`news_img` = '" + data.news_img + "',"
            + "`news_provision` = '" + data.news_provision + "',"
            + "`news_date` = '" + timeController.reformatTo(data.news_date) + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_news.news_code = '" + data.news_code + "'";

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
        var str = "DELETE FROM tb_news WHERE news_code = '" + data.news_code + "'";//showdata editview

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