var express = require('express');
var app = express();


app.get('/fundInfo/:id',function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',["../engine/fundcrawler.py", req.params.id]);
    var dataString = '';
    pythonProcess.stdout.on('data', (data) => {
          dataString += data.toString();
    });
    pythonProcess.stdout.on('end', function(){
        dataString = dataString.replace(/[\n\r]/g, '');
        dataString = dataString.replace(/'/g,'"');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.parse(dataString));
    });
});

app.get('/customer/:customerId/trasaction',function(req, res){
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',["../engine/getCustomerTransaction.py", req.params.customerId]);
    var dataString = '';
    pythonProcess.stdout.on('data', (data) => {
          dataString += data.toString();
    });
    pythonProcess.stdout.on('end', function(){
        dataString = dataString.replace(/[\n\r]/g, '');
        dataString = dataString.replace(/'/g,'"');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.parse(dataString));
    });
});



var server = app.listen(3000, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});
