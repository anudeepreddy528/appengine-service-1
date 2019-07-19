var express   = require('express');
var app       = express();
var bodyParser= require('body-parser');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
  res.status(200).send('Hello world from service-1');
});

app.get('/service1',(req,res)=>{
    res.status(200).send('responding from updated service 1 of type service');
});

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
