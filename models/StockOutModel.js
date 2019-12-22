var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.insertStockOutByOrder = function insertStockOutByOrder(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_stock_out` ("
            + "`product_code`,"
            + "`menu_code`,"
            + "`product_qty`,"
            + "`menu_qty`,"
            + "`sell_price`, "
            + "`order_code`, "
            + "`unit`, "
            + "`stock_out_date` "
            + ") VALUES ("
            + " '" + data.product_code + "', "
            + " '" + data.menu_code + "', "
            + " '" + data.product_qty + "', "
            + " '" + data.menu_qty + "', "
            + " '" + data.sell_price + "', "
            + " '" + data.order_code + "', "
            + " '" + data.unit + "', "
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

Task.deleteStockOutByOrderCode = function deleteStockOutByOrderCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_stock_out WHERE order_code = '" + data.order_code + "'";//showdata editview

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