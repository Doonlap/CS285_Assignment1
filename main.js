var express = require('express');
//var bodyParser = require('body-parser');
var path  = require('path');
var app = express();

var list = [{"Price":"3000","Airline":"Doonlap way","Take-off":"05.00 am","Landing":"05.00 pm","Stops":"12 Hours"},
{"Price":"2500","Airline":"Lazy Fat cat way","Take-off":"05.00 am","Landing":"05.00 pm","Stops":"12 Hours"},
{"Price":"2000","Airline":"CSTU way","Take-off":"12.00 pm","Landing":"04.00 pm","Stops":"4 Hours"},
{"Price":"1500","Airline":"Do you know da way","Take-off":"06.00 pm","Landing":"01.00 am","Stops":"7 Hours"},
{"Price":"1000","Airline":"Am way","Take-off":"08.00 am","Landing":"03.00 pm","Stops":"7 Hours"},
{"Price":"30000","Airline":"Jedi way","Take-off":"04.00 pm","Landing":"05.00 am","Stops":"13 Hours"}];
//var publicDir = path.join(_dirname, '/public');
//app.use(express.static(publicDir));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
    //use absolute path to html file
    res.sendFile(path.join(__dirname, 'searchFlights.html'));
});
app.get('/test', function(req,res){
    //use absolute path to html file
    res.sendFile(path.join(__dirname, 'displayFlights.html'));
    //res.send(list);
    //console.log(list);
});

app.listen(3000, function(){
    console.log('Sever started at Port 3000');
});