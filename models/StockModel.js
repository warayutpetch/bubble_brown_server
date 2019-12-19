var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getStockBy = function getStockBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT * FROM `tb_stock`"


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

Task.getStockByCode = function getStockByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT * ,DATE_FORMAT(stock_date, '%d-%m-%Y') as stock_date,  DATE_FORMAT(stock_date, '%H:%i:%s') as stock_time  FROM tb_stock "
            + " LEFT JOIN tb_product  ON tb_product.product_code = tb_stock.product_code"
            + " WHERE stock_id = '" + data.stock_id + "' ";

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

Task.getSumStockBy = function getSumStockBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT *,(SELECT IFNULL(SUM(stock_qty), 0)FROM tb_stock as tb2 "
            + " WHERE tb1.product_code = tb2.product_code) AS sum_stock "
            + " FROM `tb_product`as tb1 WHERE 1"


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

Task.getStockByProduct = function getStockByProduct(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = " SELECT * ,DATE_FORMAT(stock_date, '%d-%m-%Y') as stock_date,  DATE_FORMAT(stock_date, '%H:%i:%s') as stock_time  FROM tb_stock "
            + " LEFT JOIN tb_product  ON tb_product.product_code = tb_stock.product_code"
            + " WHERE tb_stock.product_code = '" + data.product_code + "' ";

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

Task.getStockMaxCode = function getStockMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "IFNULL( LPAD( SUBSTRING(max(stock_code),4 ,8)+1,5, '0'),'00001') AS stock_code_max FROM `tb_stock` "; //insert usercode

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

Task.insertStock = function insertStock(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_stock` ("
            + "`product_code`,"
            + "`stock_qty`,"
            + "`stock_cost`,"
            + "`stock_date`"
            + ") VALUES ("
            + " '" + data.product_code + "', "
            + " '" + data.stock_qty + "', "
            + " '" + data.stock_cost + "', "
            + " '" + timeController.reformatTo() + "' "
            + " ) "


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

Task.deleteStockByCode = function deleteStockByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_stock WHERE product_code = '" + data.product_code + "'";//showdata editview

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

Task.updateStock = function updateStock(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_stock` SET"
            + "`stock_qty`= '" + data.stock_qty + "'"
            + "WHERE stock_id = '" + data.stock_id + "'";


   
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
        var str = "DELETE FROM tb_stock WHERE stock_id = '" + data.stock_id + "'";//showdata editview

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