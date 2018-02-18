const config = require('./server/config');

const express = require('express');
const cors = require('cors');
const {json} = require('body-parser'); //parse incoming requests with this
//port, probably need to change it if im going to have it hosted elsewhere
const port = config.port; //80 is default for most servers
const massive = require('massive'); //used for db management
const masterRoutes = require('./server/masterRoutes'); //a file which manages all the routes, except the default one.


// |||||||
// start app
// |||||||
const app = express();
//use cors and body-parser
app.use(cors()); //handling incoming requests
app.use(json()); //parsing incoming request


app.use('/', express.static(__dirname + '/dist'));

masterRoutes(app);



app.listen(port, function(){
    console.log('listening on port ' + port)
  });