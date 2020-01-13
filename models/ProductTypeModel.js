var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getProductTypeBy = function getProductTypeBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_product_type WHERE about_code = '" + data.about_code + "'"

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

Task.insertProductType = function insertProductType(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_product_type` ("
            + "`product_type_name` ,"
            + "`about_code` "
            + ") VALUES ("
            + " '" + data.product_type_name + "', "
            + " '" + data.about_code + "' "
            + " ) "


        // console.log('checkLogin : ', data[0].order_date);
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

Task.getProductTypeByCol = function getProductTypeByCol(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_product_type WHERE ";
        for (var key in data) {
            str += key + " = '" + data[key] + "' ";
        }
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

Task.deleteProductTypeByCode = function deleteProductTypeByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_product_type WHERE product_type_id = '" + data.product_type_id + "'";//showdata editview

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

Task.updateProductType = function updateProductType(set, where) {
    return new Promise(function (resolve, reject) {
        var str_sql = " UPDATE tb_product_type ";
        var str_set = " SET ";
        var str_where = " WHERE ";
        var i = 0;
        for (var key in set) {
            if (set[key] == 'time-now-qwer1234!@#$') {
                var now = new Date();
                set[key] = timeController.reformatToSave(now);
            }
            i++;
            str_set += " " + key + " = '" + set[key] + "' ";
            if (i != Object.keys(set).length) {
                str_set += " , ";
            }
        }
        i = 0;
        for (var key in where) {
            i++
            if (i != 1) {
                str_where += " AND ";
            }
            str_where += " " + key + " = '" + where[key] + "' ";
        }
        str_sql = str_sql + " " + str_set + " " + str_where;
        console.log('updateBy : ', str_sql);
        sql.query(str_sql, function (err, res) {
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

module.exports = Task;