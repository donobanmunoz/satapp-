var express = require('express');
//get the libaries that are inside of the package.json dependicies files
var bodyParser = require('body-parser');
var path = require('path');



var app = express();



app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
//this method from express connects the front end to the server
app.use(express.static(path.join(__dirname, '../public')))
//connect to the file that we want to combine
//get request to main page to server
app.get('/', function(req, res) {
    res.send('Hello World');
});
//it is running on port 3000
app.listen(3000, function(){
  console.log('Server Started on port 3000....');
})
