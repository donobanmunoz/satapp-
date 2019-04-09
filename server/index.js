var express = require('express');
//get the libaries that are inside of the package.json dependicies files
var bodyParser = require('body-parser');
var path = require('path');
//when using the require keyword the libary turn
var databaseInfo = require('../mysql');



var app = express();



app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}));
//this method from express connects the front end to the server
//this line will always look for the html file no matter what
//always make to have the correct path to the html file
app.use(express.static(path.join(__dirname, '../public/src')))
//connect to the file that we want to combine
//get request to main page to server
app.get('/', function(req, res) {
    res.send('only server');
});
//get request 1st parameter is where are you going to save it and second
//we are creating an url with this get request in our server file
app.get('infoFromDatabase', function(req, res) {
  //call the container with msql file and use method inside of that file to be
  //able to get all the info from database
  databaseInfo.getInfoFromDatabase(function(err, results) {
    if(err) {
      res.sendStatus(500)
    } else {
      //send all the info from database on a json format to be able to parse it later on
      res.json(results)
    }
  });
});
app.post('forum', function(err, results) {
  //need to store the elements that you want to send to your database
  var description = req.body.description;
  var description2 = req.body.description2;

  if(!description) {
    res.sendStatus(400);
  } else {
    databaseInfo.insertOne(description, description2,(err, results) => {
      if(err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results)
      }
    });
  }
});
//it is running on port 3000
app.listen(3000, function(){
  console.log('Server Started on port 3000....');
})
