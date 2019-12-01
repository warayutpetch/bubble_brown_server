const express = require('express')
const app = express()
bodyParser = require('body-parser');
// port = process.env.PORT || 3002;
port = process.env.PORT || 3005; // AWS


var cors = require('cors');
app.use(cors());

var publicDir = require('path').join(__dirname, './public_images/');
console.log("publicDir", publicDir);

app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    const origin = req.get('origin');
    // TODO Add origin validation
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.sendStatus(204);
    } else {
        next();
    }
});

app.listen(3005, () => {
    console.log('API Start server at port ' + port + ".")
})


var appRouteUpload = require('./routes/appRouteUpload');
appRouteUpload(app); //upload the route