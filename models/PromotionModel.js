var sql = require('./BaseModel');
// const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


// const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProductByFont = function getProductByFont(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_promotion "


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

Task.getPromotionBy = function getPromotionBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_promotion as tb1"
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id "
            + " WHERE deleted = 0 AND tb1.about_code = '" + data.about_code + "'"
        console.log(str);

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

Task.getPromotionByDiscountCode = function getPromotionByDiscountCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_promotion "
            + " WHERE discount_code = '" + data.discount_code + "' ";

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

Task.getPromotionByCode = function getPromotionByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_promotion "
            + " WHERE menu_type_id = '" + data.menu_type_id + "' ";

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

Task.getPromotionByPromotionCode = function getPromotionByPromotionCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_promotion "
            + " WHERE promotion_code = '" + data.promotion_code + "' ";

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

Task.insertPromotion = function insertPromotion(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_promotion` ("
            // + "`promotion_code`,"
            + "`promotion_header`,"
            + "`promotion_detail`,"
            + "`menu_type_id`, "
            + "`discount_code`, "
            + "`promotion_type`, "
            + "`discount_percent`, "
            + "`discount_price`, "
            + "`discount_giveaway_buy`, "
            + "`discount_giveaway`, "
            + "`startdate`, "
            + "`enddate`, "
            + "`promotion_image`, "
            + "`about_code`, "
            + "`addby` "
            + ") VALUES ("
            // + " '" + data[0].order_code + "', "
            + " '" + data.promotion_header + "', "
            + " '" + data.promotion_detail + "', "
            + " '" + data.menu_type_id + "', "
            + " '" + data.discount_code + "', "
            + " '" + data.promotion_type + "', "
            + " '" + data.discount_percent + "', "
            + " '" + data.discount_price + "', "
            + " '" + data.discount_giveaway_buy + "', "
            + " '" + data.discount_giveaway + "', "
            + " '" + timeController.reformatTo(data.startdate) + "', "
            + " '" + timeController.reformatTo(data.enddate) + "', "
            + " '" + data.promotion_image + "', "
            + " '" + data.about_code + "', "
            + " '" + data.addby + "' "
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

Task.getPromotionByCol = function getPromotionByCol(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_promotion as tb1 "
            + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_id = tb2.menu_type_id"
            + " WHERE deleted = 0 AND tb1.promotion_code = '" + data.promotion_code + "'"
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
}

Task.updatePromotion = function updatePromotion(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_promotion` SET"
            // + "`order_list_code`= '" + data.order_list_code + "',"
            + "`promotion_header`= '" + data.promotion_header + "',"
            + "`promotion_detail`= '" + data.promotion_detail + "',"
            + "`promotion_image`= '" + data.promotion_image + "',"
            + "`menu_type_id`= '" + data.menu_type_id + "',"
            + "`discount_code`= '" + data.discount_code + "',"
            + "`promotion_type`= '" + data.promotion_type + "',"
            + "`discount_percent`= '" + data.discount_percent + "',"
            + "`discount_price`= '" + data.discount_price + "',"
            + "`discount_giveaway_buy`= '" + data.discount_giveaway_buy + "',"
            + "`discount_giveaway`= '" + data.discount_giveaway + "',"
            + "`startdate`= '" + data.startdate + "',"
            + "`enddate`= '" + data.enddate + "',"
            + "`updateby`= '" + data.updateby + "'"
            + "WHERE tb_promotion.promotion_code = '" + data.promotion_code + "'";

        console.log("dataupdate :", str);

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

Task.deletePromotion = function deletePromotion(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_promotion` SET"
            // + "`order_list_code`= '" + data.order_list_code + "',"
            + "`deleted`= '1'"
            + "WHERE tb_promotion.promotion_code = '" + data.promotion_code + "'";
        console.log("data:", data);

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