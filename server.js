var express = require('express');

var app = express(); //Creates the app


app.use(express.static('public')); //Folder to serve

app.listen(process.env.PORT || 3000);
