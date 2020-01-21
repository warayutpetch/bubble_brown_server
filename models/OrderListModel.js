var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.insertOrderList = function insertOrderList(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_order_list` ("
            + "`order_list_code`,"
            + "`order_code`,"
            + "`order_list_name`,"
            + "`menu_code`,"
            + "`menu_type_id`,"
            + "`order_list_qty`, "
            + "`order_list_price_qty`, "
            + "`order_list_price_sum_qty`, "
            + "`order_list_price_sum`, "
            + "`revised_num` "
            + ") VALUES ("
            + " '" + data.order_list_code + "', "
            + " '" + data.order_code + "', "
            + " '" + data.order_list_name + "', "
            + " '" + data.menu_code + "', "
            + " '" + data.menu_type_id + "', "
            + " '" + data.order_list_qty + "', "
            + " '" + data.order_list_price_qty + "', "
            + " '" + data.order_list_price_sum_qty + "', "
            + " '" + data.order_list_price_sum + "', "
            + " '" + data.revised_num + "' "
            + " ) "


        console.log('checkLogin : ', data.order_list_date);
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

Task.updateOrderList = function updateOrderList(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order_list` SET"
            // + "`order_list_code`= '" + data.order_list_code + "',"
            + "`order_list_name`= '" + data.order_list_name + "',"
            + "`menu_code`= '" + data.menu_code + "',"
            + "`order_list_qty`= '" + data.order_list_qty + "',"
            + "`order_list_price_qty`= '" + data.order_list_price_qty + "',"
            + "`order_list_price_sum_qty`= '" + data.order_list_price_sum_qty + "',"
            + "`order_list_price_sum`= '" + data.order_list_price_sum + "'"
            + "WHERE tb_order_list.order_code = '" + data.order_code + "'";


        // console.log('checkLogin : ', data.order_list_date);
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

Task.updateRevisedListByCode = function updateRevisedListByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_order_list` SET"
            + "`revised`= '1'";



        // console.log('checkLogin : ', data.order_list_date);
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

Task.getOrderListBy = function getOrderListBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_order_list "
            + " WHERE order_code = '" + data.order_code + "'"
            + " AND revised = '0'";

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

Task.getOrderListOldBy = function getOrderListOldBy(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_order_list "
            + "WHERE order_code = '" + data.order_code + "'"
            + "AND revised_num = '" + (data.revised_num - 1) + "'"

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

Task.getOrderListByOrderCode = function getOrderListByOrderCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_order_list "
            + "WHERE order_code = '" + data.order_code + "' AND revised = 0 ";

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

Task.getOrderListMaxCode = function getOrderListMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(order_list_code),3 ,7)+1,6, '0'),'000001') AS order_list_code_max FROM `tb_order_list` "


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




Task.deleteOrderListByCode = function deleteOrderListByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_order_list WHERE order_code = '" + data.order_code + "'";//showdata editview

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