var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getRecipeByCode = function getRecipeByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = " SELECT  * FROM tb_recipe "
            + " LEFT JOIN tb_product  ON tb_product.product_code = tb_recipe.product_code "
            + " LEFT JOIN tb_unit  ON tb_recipe.unit_id = tb_unit.unit_id "
            + " WHERE menu_code = '" + data.menu_code + "' ";

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

Task.getRecipeMaxCode = function getRecipeMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL( LPAD( SUBSTRING(max(recipe_code),2 ,4)+1,3, '0')'001') AS recipe_code_max FROM `tb_recipe` "; //insert usercode

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

Task.insertRecipe = function insertRecipe(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_recipe` ("
            + "`product_code`,"
            + "`about_code`,"
            + "`menu_code`,"
            + "`product_qty`,"
            + "`qty_cal`, "
            + "`unit_id` "
            + ") VALUES ("
            + " '" + data.product_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.menu_code + "', "
            + " '" + data.product_qty + "', "
            + " '" + data.qty_cal + "', "
            + " '" + data.unit_id + "' "
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

Task.deleteRecipeByCode = function deleteRecipeByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_recipe WHERE menu_code = '" + data.menu_code + "'";//showdata editview

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