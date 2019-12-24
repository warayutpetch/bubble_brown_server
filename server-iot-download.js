const express = require('express')
const app = express()
// port = process.env.PORT || 3003;

// port = 3003
port = 3006 // AWS

var publicDir = require('path').join(__dirname, "./public_images/");
console.log("publicDir", publicDir);
app.use(express.static(publicDir));

app.listen(port, () => {
    console.log('API Start server at port 3006.')
})