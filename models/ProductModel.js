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
            + "WHERE product_type_id = '" + data.product_type_id + "'"

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
            + " LEFT JOIN tb_product_type  ON tb_product.product_type_id = tb_product_type.product_type_id"
        if (data.about_menu_data == 1) {
            str += " WHERE  tb_product.about_code = '" + data.about_code + "' OR tb_product.about_code = '" + data.about_main_branch + "' "
        } else {
            str += " WHERE tb_product.about_code = '" + data.about_code + "' "
        }

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
        var str = "SELECT  * FROM tb_product as tb1 "
            + " LEFT JOIN tb_product_type as tb2 ON tb1.product_type_id = tb2.product_type_id "
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

Task.getProductByType = function getProductByType(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_product "
            + " LEFT JOIN tb_product_type  ON tb_product.product_type_id = tb_product_type.product_type_id "
            + " WHERE tb_product.product_type_id = '" + data.product_type_id + "'"

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
            + "`about_code` = '" + data.about_code + "',"
            + "`product_name` = '" + data.product_name + "',"
            + "`unit_id` = '" + data.unit_id + "',"
            + "`product_minimum` = '" + data.product_minimum + "',"
            + "`product_type_id` = '" + data.product_type_id + "'"
            + "WHERE tb_product.product_code = '" + data.product_code + "'"


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
            + "`about_code`,"
            + "`product_name`,"
            + "`unit_id`, "
            + "`product_type_id`, "
            + "`product_minimum` "

            + ") VALUES ("
            // + " '" + data[0].order_code + "', "
            + " '" + data.product_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.product_name + "', "
            + " '" + data.unit_id + "', "
            + " '" + data.product_type_id + "', "
            + " '" + data.product_minimum + "' "

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