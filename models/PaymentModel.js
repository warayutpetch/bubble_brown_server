var sql = require('./BaseModel');
// const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


// const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.insertPayment = function insertPayment(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_payment` ("
            + "`order_code`,"
            + "`promotion_code`,"
            + "`customer_code`,"
            + "`payment_discount`,"
            + "`payment_sum`,"
            + "`payment_money_received`,"
            + "`payment_change`,"
            + "`payment_time`,"
            + "`payment_date`,"
            + "`about_code` "
            + ") VALUES ("
            + " '" + data.order_code + "', "
            + " '" + data.promotion_code + "', "
            + " '" + data.customer_code + "', "
            + " '" + data.payment_discount + "', "
            + " '" + data.payment_sum + "', "
            + " '" + data.payment_money_received + "', "
            + " '" + data.payment_change + "', "
            + " '" + data.payment_time + "', "
            + " '" + data.payment_date + "',"
            + " '" + data.about_code + "' "
            + " ) "

        console.log("strrrrrrrr", str);

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