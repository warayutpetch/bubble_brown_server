var entrepreneurController = require('../controllers/EntrepreneurController');

module.exports = function (app) {

    app.post('/entrepreneur/checkEntrepreneurLogin', function (req, res) {
        console.log('/entrepreneur/checkEntrepreneurLogin', req.body)
        entrepreneurController.checkEntrepreneurLogin(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/getEntrepreneurBy', function (req, res) {
        console.log('/entrepreneur/getEntrepreneurBy', req.body)
        entrepreneurController.getEntrepreneurBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/getEntrepreneurrMaxCode', function (req, res) {
        console.log('/entrepreneur/getEntrepreneurrMaxCode', req.body)
        entrepreneurController.getEntrepreneurrMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/insertEntrepreneurBy', function (req, res) {
        console.log('/entrepreneur/insertEntrepreneurBy', req.body)
        entrepreneurController.insertEntrepreneurBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/getEntrepreneurByCode', function (req, res) {
        console.log('/entrepreneur/getEntrepreneurByCode', req.body)
        entrepreneurController.getEntrepreneurByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })


    app.post('/entrepreneur/updateEntrepreneurBy', function (req, res) {
        console.log('/entrepreneur/updateEntrepreneurBy', req.body)
        entrepreneurController.updateEntrepreneurBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/deleteByCode', function (req, res) {    
        console.log('/entrepreneur/deleteByCode',req.body)
        entrepreneurController.deleteByCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/updateNameBy', function (req, res) {    
        console.log('/entrepreneur/updateNameBy',req.body)
        entrepreneurController.updateNameBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/updateEmailBy', function (req, res) {    
        console.log('/entrepreneur/updateEmailBy',req.body)
        entrepreneurController.updateEmailBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/updatePhoneBy', function (req, res) {    
        console.log('/entrepreneur/updatePhoneBy',req.body)
        entrepreneurController.updatePhoneBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/entrepreneur/updatePasswordBy', function (req, res) {    
        console.log('/entrepreneur/updatePasswordBy',req.body)
        entrepreneurController.updatePasswordBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/entrepreneur/updateNameImg', function (req, res) {    
        console.log('/entrepreneur/updateNameImg',req.body)
        entrepreneurController.updateNameImg(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/ForgotPasswordEntrepreneurBy', function (req, res) {    
        console.log('/entrepreneur/ForgotPasswordEntrepreneurBy',req.body)
        entrepreneurController.ForgotPasswordEntrepreneurBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/entrepreneur/updateForPasswordBy', function (req, res) {    
        console.log('/entrepreneur/updateForPasswordBy',req.body)
        entrepreneurController.updateForPasswordBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

}

