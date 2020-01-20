var aboutController = require('../controllers/AboutController');

module.exports = function (app) {

    app.post('/about/checkAboutLogin', function (req, res) {
        console.log('/about/checkAboutLogin', req.body)
        aboutController.checkAboutLogin(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/getAboutByKey', function (req, res) {
        console.log('/about/getAboutByKey', req.body)
        aboutController.getAboutByKey(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/getAboutBy', function (req, res) {
        console.log('/about/getAboutBy', req.body)
        aboutController.getAboutBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/getAboutrMaxCode', function (req, res) {
        console.log('/about/getAboutrMaxCode', req.body)
        aboutController.getAboutrMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/insertAboutBy', function (req, res) {
        console.log('/about/insertAboutBy', req.body)
        aboutController.insertAboutBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/getAboutByCol', function (req, res) {
        console.log('/about/getAboutByCol', req.body)
        aboutController.getAboutByCol(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/getAboutByCode', function (req, res) {
        console.log('/about/getAboutByCode', req.body)
        aboutController.getAboutByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })


    app.post('/about/updateAboutBy', function (req, res) {
        console.log('/about/updateAboutBy', req.body)
        aboutController.updateAboutBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updateAboutMainBranchByCode', function (req, res) {
        console.log('/about/updateAboutMainBranchByCode', req.body)
        aboutController.updateAboutMainBranchByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/deleteAbout', function (req, res) {
        console.log('/about/deleteAbout', req.body)
        aboutController.deleteAbout(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/about/deleteByCode', function (req, res) {    
        console.log('/about/deleteByCode',req.body)
        aboutController.deleteByCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updateNameBy', function (req, res) {    
        console.log('/about/updateNameBy',req.body)
        aboutController.updateNameBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updateEmailBy', function (req, res) {    
        console.log('/about/updateEmailBy',req.body)
        aboutController.updateEmailBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updatePhoneBy', function (req, res) {    
        console.log('/about/updatePhoneBy',req.body)
        aboutController.updatePhoneBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/about/updatePasswordBy', function (req, res) {    
        console.log('/about/updatePasswordBy',req.body)
        aboutController.updatePasswordBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/about/updateNameImg', function (req, res) {    
        console.log('/about/updateNameImg',req.body)
        aboutController.updateNameImg(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/ForgotPasswordAboutBy', function (req, res) {    
        console.log('/about/ForgotPasswordAboutBy',req.body)
        aboutController.ForgotPasswordAboutBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updateForPasswordBy', function (req, res) {    
        console.log('/about/updateForPasswordBy',req.body)
        aboutController.updateForPasswordBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

}

