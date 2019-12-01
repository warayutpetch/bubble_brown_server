var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getRepairBy = function getRepairBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_repair "
            + " LEFT JOIN tb_washing_machine ON tb_repair.washing_machine_code = tb_washing_machine.washing_machine_code "
            + " LEFT JOIN tb_user ON tb_repair.user_code = tb_user.user_code "
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code "
            + " LEFT JOIN tb_repair_status ON tb_repair.repair_status_code = tb_repair_status.repair_status_code "
            + "ORDER BY tb_repair.repair_code ASC ";
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


Task.getRepairByCode = function getRepairByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * ,CONCAT(user_name,' ',user_lastname) As name_user FROM tb_repair "
            + " LEFT JOIN tb_washing_machine ON tb_repair.washing_machine_code = tb_washing_machine.washing_machine_code "
            + " LEFT JOIN tb_user ON tb_repair.user_code = tb_user.user_code "
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code "
            + " LEFT JOIN tb_repair_status ON tb_repair.repair_status_code = tb_repair_status.repair_status_code "
            + "WHERE repair_code = '" + data.repair_code + "'";

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

Task.getRepairByWashMachineCode = function getRepairByWashMachineCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_repair "
        + " LEFT JOIN tb_repair_status ON tb_repair.repair_status_code = tb_repair_status.repair_status_code "
            + "WHERE washing_machine_code = '" + data.washing_machine_code + "'";

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

Task.updateRepairBy = function updateRepairBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_repair` SET "
            + "`repair_code` = '" + data.repair_code + "',"
            + "`repair_detail` = '" + data.repair_detail + "',"
            + "`repair_date` = '" + timeController.reformatTo(data.repair_date) + "',"
            + "`repair_status_code` = '" + data.repair_status_code + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_repair.repair_code = '" + data.repair_code + "'";


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
        var str = "DELETE FROM tb_repair WHERE repair_code = '" + data.repair_code + "'";//showdata editview

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

Task.getRepairStatusBy = function getRepairStatusBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_repair_status "
            + "ORDER BY tb_repair_status.repair_status_code ASC ";
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

Task.updateRepairStatusBy = function updateRepairStatusBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_repair` SET "
            + "`repair_status_code` = '" + data.repair_status_code + "'"
            + "WHERE tb_repair.repair_code = '" + data.repair_code + "'";


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

Task.getRepairStatusByRepair = function getRepairStatusByRepair(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_repair.repair_code,tb_repair.repair_status_code,tb_repair_status.repair_status  FROM tb_repair "
            + " LEFT JOIN tb_repair_status ON tb_repair.repair_status_code = tb_repair_status.repair_status_code "
            + "ORDER BY tb_repair.repair_code ASC ";
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

module.exports = Task;