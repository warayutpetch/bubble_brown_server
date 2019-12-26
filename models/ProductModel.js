var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProductMaxCode = function getProductMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL(LPAD( SUBSTRING(max(product_code),4,6)+1,3, '0'),'001') AS product_code_max  FROM `tb_product` "
            + "WHERE product_type_code = '" + data.product_type_code + "'"

        console.log('checkLogin565664646 : ', str);

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

Task.getProductBy = function getProductBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_product "
            + " LEFT JOIN tb_product_type  ON tb_product.product_type_code = tb_product_type.product_type_code"

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
Task.getProductByCode = function getProductByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_product "
            + "WHERE product_code = '" + data.product_code + "'"

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

Task.updateProductCost = function updateProductCost(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_product` SET "
            + "`product_cost` = '" + data.product_cost + "'"
            + "WHERE product_code = '" + data.product_code + "'"


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

Task.updateProduct = function updateProduct(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_product` SET "
            + "`product_code` = '" + data.product_code + "',"
            + "`product_name` = '" + data.product_name + "',"
            + "`unit_id` = '" + data.unit_id + "',"
            + "`product_type_code` = '" + data.product_type_code + "'"
            + "WHERE product_code = '" + data.product_code + "'"


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

Task.insertProduct = function insertProduct(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_product` ("
            + "`product_code`,"
            + "`product_name`,"
            + "`unit_id`, "
            + "`product_type_code`, "
            + "`product_description` "

            + ") VALUES ("
            // + " '" + data[0].order_code + "', "
            + " '" + data.product_code + "', "
            + " '" + data.product_name + "', "
            + " '" + data.unit_id + "', "
            + " '" + data.product_type_code + "' "

            + " ) "

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
        var str = "DELETE FROM tb_product WHERE product_code = '" + data.product_code + "'";//showdata editview

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