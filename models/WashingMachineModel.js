var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineMaxCode = function getWashingMachineMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL( LPAD( SUBSTRING(max(`washing_machine_code`),3 ,8)+1,6, '0') ,'000001') AS washing_machine_code_max FROM `tb_washing_machine` ";

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


Task.insertWashingMachineByCode = function insertWashingMachineByCode(data) {
    return new Promise(function (resolve, reject) {
        console.log(data);

        var str = " INSERT INTO `tb_washing_machine`( "
            + " `washing_machine_code`, "
            + " `laundry_code`, "
            + " `washing_machine_name`, "
            + " `washing_machine_no`, "
            + " `washing_machine_generation`, "
            + " `washing_machine_brand`, "
            + " `washing_machine_img`, "
            + " `washing_machine_price`, "
            + " `washing_machine_status`, "
            + " `washing_machine_detail`,  "
            + " `washing_machine_type`,  "
            + " `maintenance_date`, "
            + " `addby`,"
            + " `adddate`"
            + " ) VALUES ( "
            + " '" + data.washing_machine_code + "', "
            + " '" + data.laundry_code + "', "
            + " '" + data.washing_machine_name + "', "
            + " '" + data.washing_machine_no + "', "
            + " '" + data.washing_machine_generation + "', "
            + " '" + data.washing_machine_brand + " ', "
            + " '" + data.washing_machine_img + "', "
            + " '', "
            + " 'ออฟไลน์', "
            + " '" + data.washing_machine_detail + "', "
            + " '" + data.washing_machine_type + "', "
            + " '', "
            + " '" + data.addby + "', "
            + " '" + timeController.reformatToSave(new Date()) + "' "
            + " ) ";

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


Task.getWashingMachineBy = function getWashingMachineBy(data) {
    return new Promise(function (resolve, reject) {

        console.log(data);
        var str_entrepreneur = ""
        var str_laundry = ""
        var str_status = ""
        var str_washing_machine = ""

        if (data.entrepreneur_code != undefined && data.entrepreneur_code != "") {
            str_entrepreneur = " AND tb4.entrepreneur_code ='" + data.entrepreneur_code + "' "
        }

        if (data.laundry_code != undefined && data.laundry_code != "") {
            str_laundry = " AND tb2.laundry_code ='" + data.laundry_code + "' "
        }

        if (data.washing_machine_status != undefined && data.washing_machine_status != "") {
            str_status = " AND tb1.washing_machine_status ='" + data.washing_machine_status + "' "
        }
        if (data.washing_machine_code != undefined && data.washing_machine_code != "") {
            str_washing_machine = " AND tb1.washing_machine_code ='" + data.washing_machine_code + "' "
        }

        var str = "SELECT   "
            + " tb1.washing_machine_code ,"
            + " tb1.washing_machine_name ,"
            + " tb1.washing_machine_no , "
            + " tb1.washing_machine_brand ,"
            + " tb1.washing_machine_generation ,"
            + " tb1.washing_machine_img  ,"
            + " tb1.washing_machine_detail ,"
            + " tb1.washing_machine_status  ,"
            + " tb1.washing_machine_type ,"
            + " tb2.laundry_code ,"
            + " tb2.laundry_name_th ,"
            + " tb2.laundry_name_en ,"
            + " tb2.district_id ,"
            + " tb2.amphur_id ,"
            + " tb2.province_id ,"
            + " tb2.user_zipcode ,"
            + " tb4.entrepreneur_code ,"
            + " tb4.entrepreneur_name_th,"
            + " tb4.entrepreneur_name_en ,"
            + " tb4.entrepreneur_username , "
            + " tb5.washing_machine_type_name , "
            + " COUNT(tb3.queue_washing_code) AS queue_washing_machine "
            + " FROM `tb_washing_machine`  AS tb1      "
            + " LEFT JOIN   `tb_laundry`     AS  tb2   ON tb1.`laundry_code` = tb2.`laundry_code` "
            + " LEFT JOIN    tb_queue_washing_machine AS tb3 ON tb1.washing_machine_code = tb3.washing_machine_code "
            + " LEFT JOIN   `tb_entrepreneur`     AS  tb4  ON tb2.`entrepreneur_code` = tb4.`entrepreneur_code` "
            + " LEFT JOIN   `tb_washing_machine_type`     AS  tb5  ON tb1.`washing_machine_type` = tb5.`washing_machine_type_code` "
            + " WHERE 1"
            + str_washing_machine
            + str_entrepreneur
            + str_laundry
            + str_status
            + " GROUP BY tb1.washing_machine_code "
            + " ORDER BY tb4.entrepreneur_code ,tb2.`laundry_code`, tb1.washing_machine_code  ASC ";

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

Task.getWashingMachineByLaundryCode = function getWashingMachineByLaundryCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_washing_machine "
            + " WHERE laundry_code = '" + data.laundry_code + "'"

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
Task.getWashingMachineByCode = function getWashingMachineByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_washing_machine "
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code "
            + " WHERE washing_machine_code = '" + data.washing_machine_code + "'"

        console.log('getWashingMachineByCode : ', str);

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

Task.updateWashingMachineByCode = function updateWashingMachineByCode(data) {
    return new Promise(function (resolve, reject) {
        console.log(data);

        var str = "  UPDATE `tb_washing_machine` SET "
            + "`laundry_code` ='" + data.laundry_code + "',"
            + "`washing_machine_name` = '" + data.washing_machine_name + "',"
            + "`washing_machine_no` = '" + data.washing_machine_no + "',"
            + "`washing_machine_generation` = '" + data.washing_machine_generation + "',"
            + "`washing_machine_brand` = '" + data.washing_machine_brand + "',"
            + "`washing_machine_img` = '" + data.washing_machine_img + "',"
            + "`washing_machine_price` = '" + data.washing_machine_price + "',"
            + "`washing_machine_detail` = '" + data.washing_machine_detail + "',"
            + "`washing_machine_type` = '" + data.washing_machine_type + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + " WHERE `washing_machine_code` = '" + data.washing_machine_code + "'";

        // console.log('checkLogin : ', timeController.reformatTo(data.change_date));

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