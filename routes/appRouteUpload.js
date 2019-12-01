
// const upload = require('../library/uploadMiddleware');
const Resize = require('../library/Resize');
const Config = require('../globals/Config');
const path = require('path');
const mkdirp = require('mkdirp')
const uuidv4 = require('uuid/v4');

var multer = require('multer')
var fs = require('fs');
var dir = './public_images';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
const _config = new Config();

module.exports = function (app) {

    //#############################################################################################################
    //#############################################################################################################
    //################################################ Upload Route ###############################################
    //#############################################################################################################
    //#############################################################################################################

    app.post('/delete-image', function (req, res) {
        const subPath = '../public_images/' + req.body.folder_name + "/" + req.body.image_name
        const dir = path.join(__dirname, subPath)

        if (fs.existsSync(dir)) {
            fs.unlink(dir, (err) => {
                if (err) {
                    console.error(err)
                    require = {
                        data: { req: false },
                        error: { message: 'Delete photo not complete.' },
                        upload_result: true,
                        server_result: true
                    };
                    res.send(require)
                } else {
                    require = {
                        data: { req: true },
                        error: { message: 'Delete photo complete.' },
                        upload_result: true,
                        server_result: true
                    };
                    res.send(require)
                }
            })
        } else {
            require = {
                data: { req: false },
                error: { message: 'This directory does not exist' + dir },
                upload_result: true,
                server_result: true
            };
            res.send(require)
        }

    });

    app.post('/upload-file', function (req, res) {

        console.log(req);

        const multer = require('multer');
        var filePathSub = '';
        var Storage = multer.diskStorage({
            destination: function (req, file, callback) {
                console.log(">>>>>>", req.params);

                const userPath = _config.getInt2Text(req.body.menuscript_code) + "/" + req.body.upload_url;
                const subPath = '../../public_file/menuscript/' + userPath;
                const filePath = path.join(__dirname, subPath);
                filePathSub = 'public_file/menuscript/' + userPath;
                // if (!fs.existsSync(imagePath)) {
                //     fs.mkdirSync(imagePath);
                // }
                mkdirp.sync(filePath)
                callback(null, filePath);
            },
            filename: function (req, file, callback) {
                console.log("file : ", req.body);
                callback(null, uuidv4() + req.body.file_type);
            }
        });

        var upload = multer({
            storage: Storage
        }).single("files");

        upload(req, res, function (err) {
            // console.log('req',req)
            if (!req.file) {
                const require = {
                    data: { comment_photo_url: '' },
                    error: [{ message: 'Can not find photo upload.' }],
                    upload_result: false,
                    server_result: true
                };
                res.send(require);
            } else {
                const comment_photo_url = _config.getServerUrl() + "/" + filePathSub + "/" + req.file.filename
                const require = {
                    data: [{ comment_photo_url: comment_photo_url }],
                    error: [{ message: 'Upload photo complete.' }],
                    upload_result: true,
                    server_result: true
                };
                console.log('res', require);
                res.send(require);
            }
        });
    });

    app.post('/upload-image', async function (req, res) {
        // const userPath = req.body.upload_url + "/"
        // const subPath = '../public_images/' + userPath;
        // const imagePath = path.join(__dirname, subPath);

        var filePathSub = '';
        var Storage = multer.diskStorage({

            destination: function (req, file, callback) {
                console.log("body = >", req.body);
                console.log(">>>>>>", req.params);
                console.log(">>>>>>", file);
                const userPath = req.body.upload_url + "/"
                const subPath = '../public_images/' + userPath;
                filePathSub = path.join(__dirname, subPath);
                //filePathSub = 'public_file/' + req.body.upload_url + '/' + userPath;

                mkdirp.sync(filePathSub)
                callback(null, filePathSub);
            },
            filename: function (req, file, callback) {
                // console.log("file : ",req.file.filename);
                callback(null, uuidv4() + req.body.file_type);
            }

        });

        var upload = multer({
            storage: Storage
        }).single("files");

        upload(req, res, function (err) {
            console.log("body = >", req.body);
            console.log(">>>>>>", req.body.upload_url);
       
            console.log('req',req.file)
            if (!req.file) {
                const require = {
                    data: {
                        comment_photo_url: '',
                        photo_url: ""
                    },
                    error: [{ message: 'Can not find photo upload.' }],
                    upload_result: false,
                    server_result: true
                };
                res.send(require);
            } else {
                const comment_photo_url = req.body.upload_url + "/" + req.file.filename
                const require = {
                    data: {
                        comment_photo_url: comment_photo_url,
                        photo_url: req.file.filename
                    },
                    error: [{ message: 'Upload photo complete.' }],
                    upload_result: true,
                    server_result: true
                };
                console.log('res', require);
                res.send(require);
            }
        });
    });
}