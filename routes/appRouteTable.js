var TableController = require('../controllers/TableController');

module.exports = function (app) {

    app.post('/table/getTableBy', function (req, res) {
        console.log('/table/getTableBy', req.body)
        TableController.getTableBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/table/insertTable', function (req, res) {
//         console.log('/table/insertTable', req.body)
//         TableController.insertTable(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })
// // 
   
}