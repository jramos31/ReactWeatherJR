//Creates localhost to run the application
var express = require('express');

var app = express(); //Creates the app
const PORT = process.env.PORT || 3000; //Creates port for Heroku or to use localhost:3000

app.use(function(req, res, next) {
    if(req.headers ['x-forwarded-proto'] === 'https'){
        res.redirect("http://" + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public')); //Folder to serve

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});
