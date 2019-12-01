var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');

const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getLaundryBy = function getLaundryBy(data) {
    return new Promise(function (resolve, reject) {
       
        var str = "SELECT  * "
        + " FROM tb_laundry  "
        + " LEFT JOIN tb_entrepreneur ON tb_laundry.entrepreneur_code = tb_entrepreneur.entrepreneur_code"
        + " LEFT JOIN tb_amphur ON `tb_laundry`.`amphur_id` = tb_amphur.amphur_id "
        + " LEFT JOIN tb_province ON `tb_laundry`.`province_id` = tb_province.province_id "
        + " LEFT JOIN tb_district ON `tb_laundry`.`district_id` = tb_district.district_id "

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

Task.getLaundryMaxCode = function getLaundryMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(laundry_code),3, 6)+1,4,'0') AS laundry_code_max FROM `tb_laundry` "; //insert usercode

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

Task.insertLaundryBy = function insertLaundryBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_laundry` ("
            + "`laundry_code`,"
            + "`entrepreneur_code`,"
            + "`laundry_name_th`,"
            + "`laundry_name_en`,"
            + "`laundry_tel`,"
            + "`laundry_img`,"
            + "`district_id`,"
            + "`amphur_id`,"
            + "`province_id`,"
            + "`user_zipcode`,"
            + "`addby`,"
            + "`adddate`,"
            + "`updateby`,"
            + "`lastupdate`"
            + ") VALUES ("
            + " '" + data.laundry_code + "', "
            + " '" + data.entrepreneur_code + "', "
            + " '" + data.laundry_name_th + "', "
            + " '" + data.laundry_name_en + "', "
            + " '" + data.laundry_tel + "', "
            + " '" + data.laundry_img + "', "
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

Task.getLaundryByCode = function getLaundryByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_laundry "
            + " LEFT JOIN tb_entrepreneur ON `tb_laundry`.`entrepreneur_code` = tb_entrepreneur.entrepreneur_code "
            + " LEFT JOIN tb_amphur ON `tb_laundry`.`amphur_id` = tb_amphur.amphur_id "
            + " LEFT JOIN tb_province ON `tb_laundry`.`province_id` = tb_province.province_id "
            + " LEFT JOIN tb_district ON `tb_laundry`.`district_id` = tb_district.district_id "
            + " WHERE laundry_code = '" + data.laundry_code + "'"

            ;//showdata editview

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


Task.updateLaundryBy = function updateLaundryBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_laundry` SET "
            + "`laundry_code` = '" + data.laundry_code + "',"
            + "`entrepreneur_code` = '" + data.entrepreneur_code + "',"
            + "`laundry_name_th` = '" + data.laundry_name_th + "',"
            + "`laundry_name_en` = '" + data.laundry_name_en + "',"
            + "`laundry_tel` = '" + data.laundry_tel + "',"
            + "`laundry_img` = '" + data.laundry_img + "',"
            + "`district_id` = '" + data.district_id + "',"
            + "`amphur_id`= '" + data.amphur_id + "',"
            + "`province_id` = '" + data.province_id + "',"
            + "`user_zipcode` = '" + data.user_zipcode + "',"
            + "`updateby` = '" + data.updateby + "',"
            + "`lastupdate` = '" + timeController.reformatToSave(new Date()) + "'"
            + "WHERE tb_laundry.laundry_code = '" + data.laundry_code + "'";


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
Task.updateLaundryAppBy = function updateLaundryAppBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_laundry` SET "
            + "`laundry_name_th` = '" + data.laundry_name_th + "',"
            + "`laundry_tel` = '" + data.laundry_tel + "',"
            // + "`laundry_img` = '" + data.laundry_img + "',"
            + "`laundry_open` = '" + data.laundry_open + "'"
            + "WHERE tb_laundry.laundry_code = '" + data.laundry_code + "'";


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
        var str = "DELETE FROM tb_laundry WHERE laundry_code = '" + data.laundry_code + "'";//showdata editview

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

Task.getLaundryByEntrepreneurCode = function getLaundryByEntrepreneurCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_laundry "
            + " LEFT JOIN tb_amphur ON `tb_laundry`.`amphur_id` = tb_amphur.amphur_id "
            + " LEFT JOIN tb_province ON `tb_laundry`.`province_id` = tb_province.province_code "
            + " WHERE entrepreneur_code = '" + data.entrepreneur_code + "'"
            + " ORDER BY tb_laundry.laundry_code ASC ";
            console.log("str::", str);
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

Task.updateNameImg = function updateNameImg(data) {
    return new Promise(function (resolve, reject) {
        console.log("data:",data);
        
        var str = "UPDATE `tb_laundry` SET "
            + "`laundry_img` = '" + data.image_names + "'" 
            + "WHERE tb_laundry.laundry_code = '" + data.laundry_code + "'";

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