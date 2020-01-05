var ReportController = require('../controllers/ReportController');

module.exports = function (app) {


    app.post('/report/getReportSalesByDay', function (req, res) {
        console.log('/report/getReportSalesByDay')
        ReportController.getReportSalesByDay(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/report/getReportSalesByMonth', function (req, res) {
        console.log('/report/getReportSalesByMonth')
        ReportController.getReportSalesByMonth(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    
    app.post('/report/getReportSalesByYear', function (req, res) {
        console.log('/report/getReportSalesByYear')
        ReportController.getReportSalesByYear(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/report/getReportBestSalesByDay', function (req, res) {
        console.log('/report/getReportBestSalesByDay')
        ReportController.getReportBestSalesByDay(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    // app.post('/report/getReportLaundryByEntrepreneur', function (req, res) {
    //     console.log('/report/getReportLaundryByEntrepreneur')
    //     ReportController.getReportLaundryByEntrepreneur(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/report/getReportLaundryDayByEntrepreneur', function (req, res) {
    //     console.log('/report/getReportLaundryDayByEntrepreneur')
    //     ReportController.getReportLaundryDayByEntrepreneur(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/report/getReportLaundryDayByLaundry', function (req, res) {
    //     console.log('/report/getReportLaundryDayByLaundry')
    //     ReportController.getReportLaundryDayByLaundry(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/report/getReportLaundryMonthByLaundry', function (req, res) {
    //     console.log('/report/getReportLaundryMonthByLaundry')
    //     ReportController.getReportLaundryMonthByLaundry(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/report/getReportLaundryYearByLaundry', function (req, res) {
    //     console.log('/report/getReportLaundryYearByLaundry')
    //     ReportController.getReportLaundryYearByLaundry(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
    // app.post('/report/getReportMachineByLaundry', function (req, res) {
    //     console.log('/report/getReportMachineByLaundry')
    //     ReportController.getReportMachineByLaundry(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
    
    // app.post('/report/getReportMachineDayByLaundry', function (req, res) {
    //     console.log('/report/getReportMachineDayByLaundry')
    //     ReportController.getReportMachineDayByLaundry(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
  
    // app.post('/report/getReportCustomerByDay', function (req, res) {
    //     console.log('/report/getReportCustomerByDay')
    //     ReportController.getReportCustomerByDay(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
  
    // app.post('/report/getReportCustomerByMonth', function (req, res) {
    //     console.log('/report/getReportCustomerByMonth')
    //     ReportController.getReportCustomerByMonth(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
  
    // app.post('/report/getReportCustomerByYear', function (req, res) {
    //     console.log('/report/getReportCustomerByYear')
    //     ReportController.getReportCustomerByYear(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })
  
    
}

