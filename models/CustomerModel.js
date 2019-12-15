var sql = require('./BaseModel');
const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getCustomerBy = function getCustomerBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM tb_customer ";
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

Task.getCustomerMaxCode = function getCustomerMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(customer_code),4,5)+1,3,'0') AS customer_code_max FROM `tb_customer` "; //insert customer_code

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

// Task.getCustomerByCode = function getCustomerByCode(data) {
//     return new Promise(function (resolve, reject) {//user list
//         var str = "SELECT  * FROM tb_customer as tb1"
//             + " LEFT JOIN tb_menu_type as tb2 ON tb1.menu_type_code = tb2.menu_type_code "
//             + " WHERE tb1.menu_type_code = '" + data.menu_type_code + "' ";

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

Task.insertCustomer = function insertCustomer(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_customer` ("
            + "`customer_code`,"
            + "`customer_id_line`,"
            + "`customer_email`,"
            + "`customer_phone`, "
            // + "`addby` "
            + ") VALUES ("
            + " '" + data.order_code + "', "
            + " '" + data.customer_id_line + "', "
            + " '" + data.customer_email + "', "
            + " '" + data.customer_phone + "', "
            // + " '" + data[0].promotion_image + "', "
            // + " '" + data[0].addby + "' "
            + " ) "

        // console.log(str);

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


// Task.getJournalByCol = function getJournalByCol(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT * FROM tb_journal WHERE deleted = 0 ";
//         for (var key in data) {
//             str += " AND " + key + " = '" + data[key] + "' ";
//         }
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
// }

// Task.insertJournal = function insertJournal(data){
//     return new Promise(function (resolve,reject) {
//         var str_sql = " INSERT INTO tb_journal ";
//         var str_col = " ( ";
//         var str_val = " value ( ";
//         var i = 0;
//         for (var key in data) {
//             i++;
//             str_col += " " + key + " ";
//             str_val += " '" + data[key] + "' ";
//             if (i != Object.keys(data).length) {
//                 str_col += " , ";
//                 str_val += " , ";
//             }
//         }
//         str_col += " ) ";
//         str_val += " ) ";
//         str_sql = str_sql + " " + str_col + " " + str_val;

//         console.log('insert : ', str_sql);
//         sql.query(str_sql, function (err, res) {
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
// }

Task.updateCustomer = function updateCustomer(set, where) {
    return new Promise(function (resolve, reject) {
        var str_sql = " UPDATE tb_customer ";
        var str_set = " SET ";
        var str_where = " WHERE ";
        var i = 0;
        for (var key in set) {
            if (set[key] == 'time-now-qwer1234!@#$') {
                var now = new Date();
                set[key] = timeController.reformatToSave(now);
            }
            i++;
            str_set += " " + key + " = '" + set[key] + "' ";
            if (i != Object.keys(set).length) {
                str_set += " , ";
            }
        }
        i = 0;
        for (var key in where) {
            i++
            if (i != 1) {
                str_where += " AND ";
            }
            str_where += " " + key + " = '" + where[key] + "' ";
        }
        str_sql = str_sql + " " + str_set + " " + str_where;
        console.log('updateBy : ', str_sql);
        sql.query(str_sql, function (err, res) {
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

module.exports = Task;