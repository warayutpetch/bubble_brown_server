const mailer = require('../library/ExpressMailer/index');
const config = require('../library/ExpressMailer/config');
const Global = require('../globals/Config');
var GOBALS = new Global();
currentMailerOptions = config.mailer;
module.exports = function (app) {

    mailer.extend(app, currentMailerOptions);
    app.post('/send-mail', function (req, res) {
        if (!req.body || !req.body.email) {
            res.redirect('back');
            return;
        };
        res.mailer.send('email', {
            to: req.body.email,
            subject: req.body.subject,
            bodys: req.body.bodys,
        },
            function (err) {
                if (err) {
                    console.log(err);
                    console.log('Sending Mail Failed!');

                    const require = {
                        data: "send email fail.",
                        error: err,
                        sending_result: false,
                        server_result: true
                    };
                    res.send(require);
                } else {
                    console.log('Sending Mail Success!');
                    console.log(req.body.bodys);
                    const require = {
                        data: "send email complete.",
                        error: [],
                        sending_result: false,
                        server_result: true
                    };
                    res.send(require);
                }
            });
    });


    app.post('/email-verified', function (req, res) {

        var md5 = require('md5');
        if (!req.body.member_email) {
            console.log("req.body.member_email", req.body.member_email);

            const require = {
                data: "please input email.",
                error: [],
                sending_result: false,
                server_result: true
            };
            res.send(require);
        };

        var subject = "[ Wash App ] | Verify your email | Important Account Notification";
        var bodys = '<h2> Wash App </h2>' + ' <br/>' +
            'Thank you for your register in IOT Washing Machine Application. We are updateing your password for complete usability. <br/>' +
            "<font color='red'>***PLEASE NOTE: </font>You are receiving this email because we need you to confirm that this is your real email. If this is your real email," +
            " please click <a href='" + GOBALS.CLIENT_URL + "/#/verify/" + md5 (req.body.member_email)+ "'><button type='button'>Click here!</button></a> <br/><br/>" +
            "If you can't click the button, Please copy the URL and open it in your browser. " + GOBALS.CLIENT_URL + "/#/verify/" + md5 (req.body.member_email)+" <br/><br/>" +
            "Thank you, <br/>" +
            "IOT Washing Machine <br/><br/><br/>" +
            "Contact us if you have any questionas or comments<br/>" +
            "IOT Washing Machine<br/>" +
            "mail: WashingMachine@gmail.com<br/>" + "Tel: 044-256341<br/>" + "Fax: 044-362548";
        res.mailer.send('email', {
            to: req.body.member_email,
            subject: subject,
            bodys: bodys,
        },
            function (err) {
                if (err) {
                    console.log(err);
                    console.log('Sending Mailer Failed!');

                    const require = {
                        data: "send email fail.",
                        error: err,
                        sending_result: false,
                        server_result: true
                    };
                    res.send(require);
                } else {
                    console.log('Sending Mail Success!');
                    console.log(req.body.body);
                    const require = {
                        data: "send email complete.",
                        error: [],
                        sending_result: true,
                        server_result: true
                    };
                    res.send(require);
                }
            });
    });
    app.post('/contact-reviewer', function (req, res) {
        if (!req.body.member_email) {
            const require = {
                data: "please input email.",
                error: [],
                sending_result: false,
                server_result: true
            };
            res.send(require);
        };

        var subject = "[SUT JOURNAL] | Confirm your response | Important Notification";
        var bodys = '<b>Dear ' + req.body.member_name_en + '</b>' + ', <br/><br/>' +
            'The manuscript entitied' + req.body.manuscript_title + 'has been submitted to the Suranaree Journal of Science and Technology (SJST). <br/>' +
            "<font color='red'>***PLEASE NOTE: </font>You are receiving this email because we need you to confirm that this is your real email. If this is your real email," +
            " please click <a href='" + GLOBALS.CLIENT_URL + "/#/verify/" + req.body.member_code + "'><button type='button'>Click here!</button></a> <br/><br/>" +
            "If you can't click the button, Please copy the URL and open it in your browser. " + GLOBALS.CLIENT_URL + "/#/verify/" + req.body.member_code + " <br/><br/>" +
            "Thank you, <br/>" +
            "Suranaree Journal of Science and Technology <br/><br/><br/>" +
            "Contact us if you have any questionas or comments<br/>" +
            "Suranaree Journal of Science and Technology<br/>" +
            "<a href='https://www.google.co.th'>https://www.google.co.th</a><br/>" +
            "mail: journal_sut@gmail.com<br/>" + "Tel: 044-256341<br/>" + "Fax: 044-362548";
        res.mailer.send('email', {
            to: req.body.member_email,
            subject: subject,
            bodys: bodys,
        },
            function (err) {
                if (err) {
                    console.log(err);
                    console.log('Sending Mailer Failed!');

                    const require = {
                        data: "send email fail.",
                        error: err,
                        sending_result: false,
                        server_result: true
                    };
                    res.send(require);
                } else {
                    console.log('Sending Mail Success!');
                    console.log(req.body.bodys);
                    const require = {
                        data: "send email complete.",
                        error: [],
                        sending_result: true,
                        server_result: true
                    };
                    res.send(require);
                }
            });
    });

}