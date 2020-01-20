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

Task.getProductBy = function getProductBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT * FROM `tb_product` "
            + " LEFT JOIN tb_unit  ON tb_unit.unit_id = tb_product.unit_id"
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

Task.getSumStockInBy = function getSumStockInBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT IFNULL(SUM(stock_qty), 0) AS stock_in , unit_id AS unit FROM tb_stock as tb1 "
            + " WHERE tb1.product_code =  '" + data.product_code + "'"
            + "GROUP BY unit_id"

        // console.log('checkLogin : ', str);

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

Task.getSumStockOutBy = function getSumStockOutBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT IFNULL(SUM(product_qty*menu_qty), 0) AS stock_out , unit AS unit FROM tb_stock_out as tb1 "
            + " WHERE tb1.product_code =  '" + data.product_code + "'"
            + "GROUP BY unit"




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
            + " LEFT JOIN tb_unit ON tb_unit.unit_id = tb_stock.unit_id"
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
            + "`about_code`,"
            + "`stock_qty`,"
            + "`stock_price`,"
            + "`stock_qty_cal`,"
            + "`unit_id`,"
            // + "`stock_cost`,"
            + "`stock_date`"
            + ") VALUES ("
            + " '" + data.product_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.stock_qty + "', "
            + " '" + data.stock_price + "', "
            + " '" + data.stock_qty_cal + "', "
            + " '" + data.unit_id + "', "
            // + " '" + data.stock_cost + "', "
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

Task.getStockByPriceQty = function getStockByPriceQty(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT ( IFNULL(SUM(`stock_price`),0) - "
            + " (SELECT IFNULL(SUM((product_qty * menu_qty  * product_cost)),0) FROM  `tb_stock_out`  WHERE product_code = '" + data.product_code + "' )) "
            + " / (IFNULL(SUM(`stock_qty_cal`),0) - "
            + " (SELECT IFNULL(SUM((product_qty * menu_qty  )),0) FROM  `tb_stock_out` WHERE product_code = '" + data.product_code + "' )) AS product_cost"
            + " , product_code FROM `tb_stock` WHERE product_code = '" + data.product_code + "'";
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

Task.deleteStockBy = function deleteStockBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "DELETE FROM tb_stock WHERE stock_id = '" + data.stock_id + "'";
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

Task.getProductByKey = function getProductByKey(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "  SELECT * FROM `tb_product` "
            + " LEFT JOIN tb_unit  ON tb_unit.unit_id = tb_product.unit_id"
            + " WHERE (product_code LIKE '%" + data.keyword + "%' OR product_name LIKE '%" + data.keyword + "%')"
            + " ORDER BY product_code asc"

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