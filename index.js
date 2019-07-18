var express   = require('express');
var app       = express();
var bodyParser= require('body-parser');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/microservice1',(req,res)=>{
    res.status(200).send('Hello World from microservice 1');
});

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
