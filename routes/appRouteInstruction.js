var instructionController = require('../controllers/InstructionController');

module.exports = function (app) {

    app.post('/instruction/getInstructionBy', function (req, res) {
        console.log('/instruction/getInstructionBy', req.body)
        instructionController.getInstructionBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/instruction/getInstructionMaxCode', function (req, res) {
        console.log('/instruction/getInstructionMaxCode', req.body)
        instructionController.getInstructionMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/instruction/insertInstructionBy', function (req, res) {
        console.log('/instruction/insertInstructionBy', req.body)
        instructionController.insertInstructionBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/instruction/getInstructionByCode', function (req, res) {
        console.log('/instruction/getInstructionByCode', req.body)
        instructionController.getInstructionByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/instruction/updateInstructionBy', function (req, res) {
        console.log('/instruction/updateInstructionBy', req.body)
        instructionController.updateInstructionBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/instruction/deleteByCode', function (req, res) {
        console.log('/instruction/deleteByCode', req.body)
        instructionController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

}