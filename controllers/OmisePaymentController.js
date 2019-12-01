
const Global = require('../globals/Config');
var GLOBALS = new Global();


const omise = require("omise")({
    publicKey: GLOBALS.PUBLIC_KEY,
    secretKey: GLOBALS.SECRET_KEY
});

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};



Task.checkoutinternetBanking = async function checkoutinternetBanking(data, result) {

    const { email, name, amount, token } = data;
    console.log("data =>", data);

    try {

        const charge = await omise.charges.create({
            amount: amount,
            currency: "thb",
            source: token,
            // return_uri: GLOBALS.SERVER_URL + 'omise-payment/omise-return-uri',
            return_uri: GLOBALS.CLIENT_URL + '#/response-omise',
            metadata: {
                name: name,
                email: email,
                type: "Test_r"
            }
        });

        console.log("charge = > ", charge);

        result({
            result: charge,
            status: true,
            error: false
        });

    } catch (error) {
        console.log(error);
        result({
            status: true,
            error: error,
        });
    }
}
Task.getOmiseReturnUri = async function getOmiseReturnUri(data, result) {

    console.log("ReturnUri = > ", data);


}
Task.omiseWebHooks = async function omiseWebHooks(data, result) {
    console.log("omiseWebHooks = > ", data);
    const { data, key } = req.body;

    if (key === 'charge.complete') {
        if (data.status === "successful") {
            

        } else if (data.status === "failed") {

        }
    }
}
module.exports = Task;