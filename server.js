var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(process.env.PORT || 5000)

app.get('/', function(req, res){
    
    res.sendFile('index.html', { root: __dirname + "/public" } );

});