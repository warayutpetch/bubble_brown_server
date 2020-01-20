var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.insertOrder = function insertOrder(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_order` ("

            + "`order_code`,"
            + "`order_date`,"
            + "`order_time`,"
            + "`order_service`,"
            + "`order_status`,"
            + "`table_code`,"
            + "`promotion_code`,"
            + "`customer_code`, "
            + "`about_code`, "
            + "`amount`, "
            + "`revised_num`, "
            + "`order_total_price` "
            + ") VALUES ("
            + " '" + data.order_code + "', "
            + " '" + data.order_date + "', "
            + " '" + data.order_time + "', "
            + " '" + data.order_service + "', "
            + " '0', "
            + " '" + data.table_code + "', "
            + " '" + data.promotion_code + "', "
            + " '" + data.customer_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.amount + "', "
            + " '" + data.revised_num + "', "
            + " '" + data.order_total_price + "' "
            + " ) "

        console.log("strrrrrrrr", str);

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

Task.getOrderBy = function getOrderBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_order "
            + " LEFT JOIN tb_table  ON tb_table.table_code = tb_order.table_code "
            + " LEFT JOIN tb_zone ON tb_zone.zone_id = tb_table.zone_id "
            + " WHERE tb_order.order_status != 2 AND order_status !=3 AND revised = 0 AND tb_order.about_code = '" + data.about_code + "'";
        console.log('order_statuscheckLogin : ', str);

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

Task.getOrderMaxCode = function getOrderMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(order_code),3 ,7)+1,6, '0'),'000001') AS order_code_max FROM `tb_order` "


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

Task.getOrderRevisedNum = function getOrderRevisedNum(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  (max(revised_num)+1) AS revised_num_max FROM `tb_order` "
            + "WHERE order_code = '" + data.order_code + "'";


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

Task.updateRevisedByCode = function updateRevisedByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order` SET "
            + "`revised` = '1'"
            + " WHERE order_code = '" + data.order_code + "'"
            + " AND revised = '0'";


        // console.log('checkLogin : ', data);
        console.log('updateRevisedByCode : ', str);

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

Task.getOrderByCode = function getOrderByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM `tb_order` "
            + " LEFT JOIN tb_table  ON tb_table.table_code = tb_order.table_code "
            + " LEFT JOIN tb_zone ON tb_zone.zone_id = tb_table.zone_id "
            + " LEFT JOIN tb_promotion  ON tb_promotion.promotion_code = tb_order.promotion_code "
            + "WHERE order_code = '" + data.order_code + "' AND revised = 0 ";

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

Task.updateOrderByCode = function updateOrderByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order` SET "
            + "`order_code` = '" + data.order_code + "',"
            + "`order_date` = '" + data.order_date + "',"
            // + "`order_service` = '" + data.order_service + "',"
            + "`order_status` = '0',"
            + "`promotion_code` = '" + data.promotion_code + "',"
            + "`customer_code` = '" + data.customer_code + "', "
            + "`about_code` = '" + data.about_code + "', "
            + "`amount` = '" + data.amount + "', "
            + "`order_total_price` = '" + data.order_total_price + "' "
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

Task.getRecipeByMenu = function getRecipeByMenu(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * ,tb_recipe.unit_id AS recipe_unit  FROM `tb_recipe` "
            + " LEFT JOIN tb_product  ON tb_product.product_code = tb_recipe.product_code "
            + "WHERE menu_code = '" + data.menu_code + "'";

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

Task.Payment = function Payment(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order` SET"
            + "`order_status`= '2'"
            + "WHERE tb_order.order_code = '" + data.order_code + "'";
        console.log("order_status:", data);

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
}

Task.updateConfirmOrder = function updateConfirmOrder(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order` SET"
            + "`order_status`= '1'"
            + "WHERE tb_order.order_code = '" + data.order_code + "'";
        console.log("order_status:", data);

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
}

Task.updateCencelOrder = function updateCencelOrder(data) {
    return new Promise(function (resolve, reject) {

        var str = "UPDATE `tb_order` SET "
            + "`order_status`= '3' ,"
            + "`order_cencel_id` = '" + data.order_cencel_id + "' "
            + "WHERE order_code = '" + data.order_code + "'";
        console.log("data55555555555555: ", data);

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
}
module.exports = Task;