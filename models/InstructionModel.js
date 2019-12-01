var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getInstructionBy = function getInstructionBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_instruction ";

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

Task.getInstructionMaxCode = function getInstructionMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(instruction_code),4, 5)+1,4,'0') AS instruction_code_max FROM `tb_instruction` "; //insert usercode

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

Task.insertInstructionBy = function insertInstructionBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_instruction` ("
            + "`instruction_code`,"
            + "`instruction_title_th`,"
            + "`instruction_title_en`,"
            + "`instruction_description_th`,"
            + "`instruction_description_en`,"
            + "`instruction_img`,"
            + "`addby`,"
            + "`adddate`,"
            + "`updateby`,"
            + "`lastupdate`"
            + ") VALUES ("
            + " '" + data.instruction_code + "', "
            + " '" + data.instruction_title_th + "', "
            + " '" + data.instruction_title_en + "', "
            + " '" + data.instruction_description_th + "', "
            + " '" + data.instruction_description_en + "', "
            + " '" + data.instruction_img + "', "
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

Task.getInstructionByCode = function getInstructionByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_instruction WHERE instruction_code = '" + data.instruction_code + "'";//showdata editview

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

Task.updateInstructionBy = function updateInstructionBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_instruction` SET "
            + "`instruction_code` = '" + data.instruction_code + "',"
            + "`instruction_title_th` = '" + data.instruction_title_th + "',"
            + "`instruction_title_en` = '" + data.instruction_title_en + "',"
            + "`instruction_description_th` = '" + data.instruction_description_th + "',"
            + "`instruction_description_en` = '" + data.instruction_description_en + "',"
            + "`instruction_img` = '" + data.instruction_img + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_instruction.instruction_code = '" + data.instruction_code + "'";


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
        var str = "DELETE FROM tb_instruction WHERE instruction_code = '" + data.instruction_code + "'";//showdata editview
    
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