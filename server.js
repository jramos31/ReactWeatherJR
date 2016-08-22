//Creates localhost to run the application
var express = require('express');

var app = express(); //Creates the app

app.use(express.static('public')); //Folder to serve

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});
