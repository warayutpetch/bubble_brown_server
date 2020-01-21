var sql = require('./BaseModel');
// const Config = require('../globals/Config');


// const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProvinceBy = function getProvinceBy(result) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_province.* , (  "
            + "SELECT COUNT(tb_amphur.amphur_id)  "
            + "FROM tb_amphur  "
            + "WHERE tb_province.province_id = tb_amphur.province_id "
            + " ) AS Amphur"
            + " FROM tb_province "
            + "ORDER BY tb_province.province_name "

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
}

Task.getAmphurInfoByProviceID = function getAmphurInfoByProviceID(id, result) {
    // console.log( "data = >" , id);
    return new Promise(function (resolve, reject) {
        
        
        var str = "SELECT * , (  "
            + " SELECT COUNT(district_id)  "
            + " FROM tb_district   "
            + " WHERE tb_amphur.amphur_id = tb_district.amphur_id "
            + " ) AS District "
            + " FROM tb_amphur "
            + " WHERE province_id = '" + id.province_id + "'"

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
}

Task.getDistrictInfoByAmphurID = function getDistrictInfoByAmphurID(id, result) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * "
            + "  FROM tb_district  "
            + " WHERE amphur_id = '" + id.amphur_id + "'"
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
}

Task.getZipcodeByDistrictID = function getZipcodeByDistrictID(id, result) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * "
            + "  FROM tb_district  "
            + " WHERE district_id = '" + id.district_id + "'"

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
}




module.exports = Task;