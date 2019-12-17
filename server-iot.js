const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
// port = process.env.PORT || 3001;
port = process.env.PORT || 3004; // AWS
var exphbs = require('express-handlebars');




var cors = require('cors');
app.use(cors());


/// set engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', require('path').join(__dirname + '/library/ExpressMailer/views'))


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


app.listen(3004, () => {
  console.log('API Start server at port 3004.')
})

var appRouteAdmin = require('./routes/appRouteAdmin');
appRouteAdmin(app); //Admin the route

var appRouteAddress = require('./routes/appRouteAddress');
appRouteAddress(app); //Address the route

var appRouteUser = require('./routes/appRouteUser');
appRouteUser(app); //User the route

var appRouteEntrepreneur = require('./routes/appRouteEntrepreneur');
appRouteEntrepreneur(app); //Entrepreneur the route

var appRouteLaundry = require('./routes/appRouteLaundry');
appRouteLaundry(app); //Laundry the route

var appRouteRepair = require('./routes/appRouteRepair');
appRouteRepair(app); //Repair the route

var appRouteNews = require('./routes/appRouteNews');
appRouteNews(app); //News the route

var appRouteContact = require('./routes/appRouteContact');
appRouteContact(app); //Contact the route

var appRouteAbout = require('./routes/appRouteAbout');
appRouteAbout(app); //About the route

var appRouteInstruction = require('./routes/appRouteInstruction');
appRouteInstruction(app); //Instruction the route


var appRouteWashingMachine = require('./routes/appRouteWashingMachine');
appRouteWashingMachine(app);

var appRouteSetting = require('./routes/appRouteSetting');
appRouteSetting(app);

var appRouteWashingProgram = require('./routes/appRouteWashingProgram');
appRouteWashingProgram(app);

var appRouteWashingMachineBrand = require('./routes/appRouteWashingMachineBrand');
appRouteWashingMachineBrand(app);

var appRouteWashingMachineGeneration = require('./routes/appRouteWashingMachineGeneration');
appRouteWashingMachineGeneration(app);

var appRouteWashingMachineType = require('./routes/appRouteWashingMachineType');
appRouteWashingMachineType(app);

var appRouteWashingMachineProgram = require('./routes/appRouteWashingMachineProgram');
appRouteWashingMachineProgram(app);

var appRouterMailer = require('./routes/appRouterMailer');
appRouterMailer(app);

var appRouteReport = require('./routes/appRouteReport');
appRouteReport(app);

var appRouteMenuType = require('./routes/appRouteMenuType');
appRouteMenuType(app);

var appRouteMenu = require('./routes/appRouteMenu');
appRouteMenu(app);

var appRouteOrder = require('./routes/appRouteOrder');
appRouteOrder(app);

var appRouteOrderList = require('./routes/appRouteOrderList');
appRouteOrderList(app);

var appRouteBooking = require('./routes/appRouteBooking');
appRouteBooking(app);

var appRoutePromotion = require('./routes/appRoutePromotion');
appRoutePromotion(app);

var appRouteTable = require('./routes/appRouteTable');
appRouteTable(app);

var appRouteZone = require('./routes/appRouteZone');
appRouteZone(app);

var appRouteCustomer = require('./routes/appRouteCustomer');
appRouteCustomer(app);

var appRouteGPSCalculate = require('./routes/appRouteGPSCalculate');
appRouteGPSCalculate(app);

var appRouteRecipe = require('./routes/appRouteRecipe');
appRouteRecipe(app);

var appRouteProduct = require('./routes/appRouteProduct');
appRouteProduct(app);

var appRouteStock = require('./routes/appRouteStock');
appRouteStock(app);


// var appRouterOmisePayment = require('./routes/appRouterOmisePayment')
// appRouterOmisePayment(app)