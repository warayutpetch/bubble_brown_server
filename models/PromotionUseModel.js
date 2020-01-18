var sql = require('./BaseModel');
const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getPromotionUseBy = function getPromotionUseBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_promotion_use";
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

// Task.getPromotionByCode = function getPromotionByCode(data) {
//     return new Promise(function (resolve, reject) {//user list
//         var str = "SELECT  * FROM tb_promotion as tb1"
//             + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id "
//             + " WHERE tb1.menu_type_id = '" + data.menu_type_id + "' ";

//         console.log('checkLogin : ', data);

//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

Task.insertPromotionUse = function insertPromotionUse(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_promotion_use` ("
            + "`customer_code`,"
            + "`promotion_code`,"
            + "`discount_code`,"
            + "`order_code`,"
            + "`order_total_price`, "
            + "`amount`"
            + ") VALUES ("
            + " '" + data.customer_code + "', "
            + " '" + data.promotion_code + "', "
            + " '" + data.discount_code + "', "
            + " '" + data.order_code + "', "
            + " '" + data.order_total_price + "', "
            + " '" + data.amount + "'"
            + " ) "

        console.log('insertPromotionUseinsertPromotionUseinsertPromotionUse : ', str);

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

Task.updatePromotionUseByCode = function updatePromotionUseByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_promotion_use` SET "
            + "`customer_code` = '" + data.customer_code + "',"
            + "`promotion_code` = '" + data.promotion_code + "',"
            + "`discount_code` = '" + data.discount_code + "',"
            + "`order_total_price` = '" + data.order_total_price + "', "
            + "`amount` = '" + data.amount + "', "
            + "WHERE order_code = '" + data.order_code + "'";


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

module.exports = Task;